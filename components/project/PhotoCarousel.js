import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./PhotoCarousel.module.css";

export default function PhotoCarousel({ about, photos }) {
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  const [isScrollActive, setIsScrollActive] = useState(false);
  const [viewWidth, setViewWidth] = useState(0);

  useEffect(() => {
    setViewWidth(window.innerWidth);
  }, []);

  const moveScroll = (e) => {
    if (viewWidth > 1180) {
      if (isScrollActive) {
        const position = (e.clientX - viewWidth * 0.1) * 0.9;
        const upperLimit = viewWidth * 0.72;
        if (position >= 0 && position < upperLimit)
          setScrollBarPosition(position);
      }
    }
  };

  return (
    <div
      onMouseUp={() => {
        setIsScrollActive(false);
      }}
      onMouseLeave={() => setIsScrollActive(false)}
      onMouseMove={moveScroll}
      className={styles.container}
      style={{
        cursor: isScrollActive && "grabbing",
        overflowX: viewWidth > 1180 ? "hidden" : "auto",
      }}
    >
      <div className={styles.headerContainer}>
        <h2>{about ? "IN PICTURES" : "FOOD PHOTOGRAPHY"}</h2>
      </div>
      <div
        style={{
          transform: `translate(-${
            scrollBarPosition * (about ? 0.5 : 4.2)
          }px, 0px)`,
        }}
        className={styles.galleryContainer}
      >
        {photos.map((photo) => (
          <div key={photo} className={styles.imageContainer}>
            <Image
              loading={"eager"}
              draggable={false}
              objectFit={"cover"}
              alt={about ? "about me" : "food photography"}
              layout={"fill"}
              src={photo}
            />
          </div>
        ))}
      </div>
      {viewWidth > 1180 && (
        <div className={styles.scrollBarContainer}>
          <div className={styles.scrollBarHolder}>
            <div
              onMouseDown={() => setIsScrollActive(true)}
              className={styles.scrollBar}
              style={{ transform: `translate(${scrollBarPosition}px, 0px)` }}
            ></div>
          </div>
        </div>
      )}
      {about && (
        <a
          href="https://www.instagram.com/hannahcunny25/?hl=en"
          target="_blank"
          rel="noreferrer"
          className={styles.followMeContainer}
        >
          <h1>FOLLOW</h1>
        </a>
      )}
    </div>
  );
}
