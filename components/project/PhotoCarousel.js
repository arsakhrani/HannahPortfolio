import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./PhotoCarousel.module.css";

export default function PhotoCarousel({ about }) {
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  const [isScrollActive, setIsScrollActive] = useState(false);
  const [viewWidth, setViewWidth] = useState(0);

  useEffect(() => {
    setViewWidth(window.innerWidth);
  }, []);

  const moveScroll = (e) => {
    if (isScrollActive) {
      const position = (e.clientX - viewWidth * 0.1) * 0.9;
      const upperLimit = viewWidth * 0.69;
      if (position >= 0 && position < upperLimit)
        setScrollBarPosition(position);
    }
  };

  return (
    <div
      onMouseUp={() => {
        setIsScrollActive(false);
      }}
      onMouseLeave={() => setIsScrollActive(false)}
      onMouseMove={(e) => moveScroll(e)}
      className={styles.container}
      style={{ cursor: isScrollActive && "grabbing" }}
    >
      <div className={styles.headerContainer}>
        <h2>{about ? "IN PICTURES" : "FOOD PHOTOGRAPHY"}</h2>
      </div>
      <div
        style={{ transform: `translate(-${scrollBarPosition * 1.33}px, 0px)` }}
        className={styles.galleryContainer}
      >
        <div className={styles.imageContainer}>
          <Image
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643912552/wholey/01_DSC_5037_dlbdea.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643912552/wholey/01_DSC_5037_dlbdea.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643912552/wholey/01_DSC_5037_dlbdea.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643912552/wholey/01_DSC_5037_dlbdea.jpg"
            }
          />
        </div>
      </div>
      <div className={styles.scrollBarContainer}>
        <div className={styles.scrollBarHolder}>
          <div
            onMouseDown={() => setIsScrollActive(true)}
            className={styles.scrollBar}
            style={{ transform: `translate(${scrollBarPosition}px, 0px)` }}
          ></div>
        </div>
      </div>
      {about && (
        <div className={styles.followMeContainer}>
          <h1>FOLLOW</h1>
        </div>
      )}
    </div>
  );
}
