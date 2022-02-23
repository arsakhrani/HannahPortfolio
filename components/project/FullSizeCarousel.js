import { useState } from "react";
import Image from "next/image";
import styles from "./FullSizeCarousel.module.css";

export default function FullSizeCarousel() {
  const [position, setPosition] = useState(0);
  const [selectedDot, setSelectedDot] = useState(1);

  const changeSelection = (selector) => {
    setSelectedDot(selector);
    setPosition(selector - 1);
  };

  return (
    <div className={styles.outerContainer}>
      <div
        style={{ transform: `translate(-${position * 100}vw, 0px)` }}
        className={styles.container}
      >
        <div className={styles.imageContainer}>
          <Image
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979756/wholey/Acai_1_mov9vn.jpg"
            }
            alt={"Feature Image"}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979711/wholey/03_DSC_6049_tynigv.jpg"
            }
            alt={"Feature Image"}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979711/wholey/06_DSC_5097_zewaab.jpg"
            }
            alt={"Feature Image"}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979710/wholey/10_SA702471_copy_whulpk.jpg"
            }
            alt={"Feature Image"}
          />
        </div>
      </div>
      <div className={styles.dotContainer}>
        <div
          style={{ opacity: selectedDot === 1 && 1 }}
          className={styles.dot}
          onClick={() => {
            changeSelection(1);
          }}
        ></div>
        <div
          style={{ opacity: selectedDot === 2 && 1 }}
          className={styles.dot}
          onClick={() => {
            changeSelection(2);
          }}
        ></div>
        <div
          style={{ opacity: selectedDot === 3 && 1 }}
          className={styles.dot}
          onClick={() => {
            changeSelection(3);
          }}
        ></div>
        <div
          style={{ opacity: selectedDot === 4 && 1 }}
          className={styles.dot}
          onClick={() => {
            changeSelection(4);
          }}
        ></div>
      </div>
    </div>
  );
}
