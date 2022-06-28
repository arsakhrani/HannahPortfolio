import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./SketchCarousel.module.css";

export default function SketchCarousel() {
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  const [isScrollActive, setIsScrollActive] = useState(false);
  const [hasBeenScrolled, setHasBeenScrolled] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [viewWidth, setViewWidth] = useState(0);

  useEffect(() => {
    setViewWidth(window.innerWidth);
  }, []);

  const moveScroll = (e) => {
    if (viewWidth > 1180) {
      if (isScrollActive) {
        clearInterval(intervalId);
        setHasBeenScrolled(true);
        const position = (e.clientX - viewWidth * 0.1) * 0.9;
        const upperLimit = viewWidth * 0.69;
        if (position >= 0 && position < upperLimit)
          setScrollBarPosition(position);
      }
    }
  };

  const promptScroll = () => {
    if (!isScrollActive && !hasBeenScrolled) {
      const id = setInterval(() => {
        setScrollBarPosition(80);
        setTimeout(() => {
          setScrollBarPosition(0);
        }, 1000);
      }, 4000);
      setIntervalId(id);
    }
  };

  const endPromptScroll = () => {
    clearInterval(intervalId);
    setIsScrollActive(false);
  };

  return (
    <div
      onMouseEnter={promptScroll}
      onMouseUp={() => {
        setIsScrollActive(false);
      }}
      onMouseLeave={endPromptScroll}
      onMouseMove={(e) => moveScroll(e)}
      className={styles.container}
      style={{
        cursor: isScrollActive && "grabbing",
        overflowX: viewWidth > 1180 ? "hidden" : "auto",
      }}
    >
      <div
        style={{ transform: `translate(-${scrollBarPosition * 0.8}px, 0px)` }}
        className={styles.scrollableArea}
      >
        <div
          style={{ right: viewWidth * 0.24 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            objectFit={"contain"}
            draggable={false}
            layout={"fill"}
            alt={"completed sketch"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1645462025/Midi%20Corona%20Persona/03_PNG/MitmacherInnen_fkxaxp.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 0.78 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            objectFit={"contain"}
            draggable={false}
            layout={"fill"}
            alt={"completed sketch"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1645462025/Midi%20Corona%20Persona/03_PNG/Erscho%CC%88pft_sflp0s.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 1.32 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            objectFit={"contain"}
            draggable={false}
            layout={"fill"}
            alt={"completed sketch"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1645462025/Midi%20Corona%20Persona/03_PNG/DenkerInnen_nduhhc.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 1.86 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            objectFit={"contain"}
            draggable={false}
            layout={"fill"}
            alt={"completed sketch"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1645462024/Midi%20Corona%20Persona/03_PNG/Achtsame_l1bhe1.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 2.38 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            objectFit={"contain"}
            draggable={false}
            layout={"fill"}
            alt={"completed sketch"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1645462024/Midi%20Corona%20Persona/03_PNG/Ausgebrannte_phween.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 2.92 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            objectFit={"contain"}
            draggable={false}
            layout={"fill"}
            alt={"completed sketch"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1645462024/Midi%20Corona%20Persona/03_PNG/Genu%CC%88gsame_mrxixu.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 3.45 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            objectFit={"contain"}
            draggable={false}
            layout={"fill"}
            alt={"completed sketch"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1645462023/Midi%20Corona%20Persona/03_PNG/Zuversichtliche_ruvrvl.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 3.99 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            objectFit={"contain"}
            draggable={false}
            layout={"fill"}
            alt={"completed sketch"}
            src={
              "https://res.cloudinary.com/daolun2ab/image/upload/v1645462023/Midi%20Corona%20Persona/03_PNG/Empo%CC%88rte_ptaq4m.png"
            }
          />
        </div>
      </div>
      {viewWidth > 1180 && (
        <div className={styles.scrollerContainer}>
          <div className={styles.scrollBarHolder}>
            <div
              onMouseDown={() => setIsScrollActive(true)}
              className={styles.scrollBar}
              style={{
                transform: `translate(${scrollBarPosition}px, 0px)`,
                transition: isScrollActive && "none",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
