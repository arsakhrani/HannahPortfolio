import { useState } from "react";
import Image from "next/image";
import styles from "./FullSizeCarousel.module.css";
import { useSwipeable } from "react-swipeable";

export default function FullSizeCarousel({ photos, title }) {
  const [position, setPosition] = useState(0);
  const [selectedDot, setSelectedDot] = useState(1);

  const changeSelection = (selector) => {
    setSelectedDot(selector);
    setPosition(selector - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      position < photos.length - 1 && setPosition(position + 1);
    },
    onSwipedRight: () => {
      position > 0 && setPosition(position - 1);
    },
  });

  return (
    <div {...handlers} className={styles.outerContainer}>
      <div
        style={{ transform: `translate(-${position * 100}vw, 0px)` }}
        className={styles.container}
      >
        {photos.map((photo) => {
          return (
            <div key={photo} className={styles.imageContainer}>
              <Image
                priority
                quality={100}
                draggable={false}
                objectFit={"cover"}
                layout={"fill"}
                src={photo}
                alt={"Feature Image"}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.dotContainer}>
        {photos.map((photo, index) => {
          return (
            <div
              key={photo}
              style={{ opacity: selectedDot === index + 1 && 1 }}
              className={styles.dot}
              onClick={() => {
                changeSelection(index + 1);
              }}
            ></div>
          );
        })}
      </div>
      {title && <h2 className={styles.titleText}>{title}</h2>}
    </div>
  );
}
