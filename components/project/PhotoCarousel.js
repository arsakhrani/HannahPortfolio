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
      const position =
        ((e.clientX || e.touches[0].clientX) - viewWidth * 0.1) * 0.9;
      const upperLimit = viewWidth * 0.72;
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
      onMouseMove={moveScroll}
      onTouchMove={moveScroll}
      onTouchStart={() => setIsScrollActive(true)}
      onTouchEnd={() => setIsScrollActive(false)}
      className={styles.container}
      style={{ cursor: isScrollActive && "grabbing" }}
    >
      <div className={styles.headerContainer}>
        <h2>{about ? "IN PICTURES" : "FOOD PHOTOGRAPHY"}</h2>
      </div>
      <div
        style={{ transform: `translate(-${scrollBarPosition * 4.2}px, 0px)` }}
        className={styles.galleryContainer}
      >
        <div className={styles.imageContainer}>
          <Image
            loading={"eager"}
            draggable={false}
            objectFit={"cover"}
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643912552/wholey/01_DSC_5037_dlbdea.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            loading={"eager"}
            draggable={false}
            objectFit={"cover"}
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979706/wholey/02_SA702479_copy_mxguox.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            loading={"eager"}
            draggable={false}
            objectFit={"cover"}
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979714/wholey/09_DSC_3727_rsvbgx.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            loading={"eager"}
            draggable={false}
            objectFit={"cover"}
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979723/wholey/11_kruut3_cs3rto.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            loading={"eager"}
            draggable={false}
            objectFit={"cover"}
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979722/wholey/05_DSC_5722_km4keh.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            loading={"eager"}
            draggable={false}
            objectFit={"cover"}
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979711/wholey/03_DSC_6049_tynigv.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            loading={"eager"}
            draggable={false}
            objectFit={"cover"}
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979711/wholey/06_DSC_5097_zewaab.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            loading={"eager"}
            draggable={false}
            objectFit={"cover"}
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979710/wholey/10_SA702471_copy_whulpk.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            loading={"eager"}
            draggable={false}
            objectFit={"cover"}
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979708/wholey/12_DSC_4337_uz84xc.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            loading={"eager"}
            draggable={false}
            objectFit={"cover"}
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979707/wholey/04_DSC_5830-2_ahbpxh.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            loading={"eager"}
            draggable={false}
            objectFit={"cover"}
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979483/wholey/07_DSC_6308-2_sfvow1.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            loading={"eager"}
            draggable={false}
            objectFit={"cover"}
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979476/wholey/08_DSC_5652-2_nrmjqa.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            loading={"eager"}
            draggable={false}
            objectFit={"cover"}
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979468/wholey/14_DSC_6355-Edit_pzohef.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            loading={"eager"}
            draggable={false}
            objectFit={"cover"}
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979465/wholey/15_DSC_4927_s3rpy3.jpg"
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            loading={"eager"}
            draggable={false}
            objectFit={"cover"}
            alt={"food photography"}
            layout={"fill"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1643979465/wholey/13_DSC_6266-Edit-3_rrwtkw.jpg"
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
