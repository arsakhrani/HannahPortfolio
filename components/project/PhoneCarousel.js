import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./PhoneCarousel.module.css";

export default function PhoneCarousel() {
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
      <div
        style={{ transform: `translate(-${scrollBarPosition * 3.3}px, 0px)` }}
        className={styles.scrollableArea}
      >
        <div
          style={{ right: viewWidth * 0.21 }}
          className={styles.imageContainer}
        >
          <Image
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643978902/5-year-old-selfie/MockUp_IphoneOutline_08_cidqsy.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 0.6 }}
          className={styles.imageContainer}
        >
          <Image
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643978892/5-year-old-selfie/MockUp_IphoneOutline_10_qlwha3.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 0.98 }}
          className={styles.imageContainer}
        >
          <Image
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643978902/5-year-old-selfie/MockUp_IphoneOutline_09_hwixwq.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 1.37 }}
          className={styles.imageContainer}
        >
          <Image
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643978903/5-year-old-selfie/MockUp_IphoneOutline_12_yhr6eh.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 1.76 }}
          className={styles.imageContainer}
        >
          <Image
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643978899/5-year-old-selfie/MockUp_IphoneOutline_11_pj5u4x.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 2.15 }}
          className={styles.imageContainer}
        >
          <Image
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643978893/5-year-old-selfie/MockUp_IphoneOutline_05_zxxnr4.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 2.54 }}
          className={styles.imageContainer}
        >
          <Image
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643978891/5-year-old-selfie/MockUp_IphoneOutline_03_eunngj.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 2.93 }}
          className={styles.imageContainer}
        >
          <Image
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643978891/5-year-old-selfie/MockUp_IphoneOutline_06_r9ib1y.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 3.32 }}
          className={styles.imageContainer}
        >
          <Image
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643978885/5-year-old-selfie/MockUp_IphoneOutline_02_snqmnt.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 3.71 }}
          className={styles.imageContainer}
        >
          <Image
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643978883/5-year-old-selfie/MockUp_IphoneOutline_04_l552mh.png"
            }
          />
        </div>
      </div>
      <div className={styles.scrollerContainer}>
        <div className={styles.scrollBarHolder}>
          <div
            onMouseDown={() => setIsScrollActive(true)}
            className={styles.scrollBar}
            style={{ transform: `translate(${scrollBarPosition}px, 0px)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
