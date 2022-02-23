import { useState } from "react";
import ColdWaterCarousel from "./ColdWaterCarousel";
import ColorfulLifeCarousel from "./ColorfulLifeCarousel";
import FiveYearOldSelfieCarousel from "./FiveYearOldSelfieCarousel";
import IssWieDuBistCarousel from "./IssWieDuBistCarousel";
import OwnGoodFoodCarousel from "./OwnGoodFoodCarousel";
import GoodMorningsCarousel from "./GoodMorningsCarousel";
import styles from "./Press.module.css";

export default function Press({ about, projectName }) {
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  const [isScrollActive, setIsScrollActive] = useState(false);

  const moveScroll = (e) => {
    if (isScrollActive) {
      const position = (e.clientX - window.innerWidth * 0.1) * 0.9;
      const upperLimit = window.innerWidth * 0.72;
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
        style={{ transform: `translate(-${scrollBarPosition * 1.33}px, 0px)` }}
        className={styles.scrollableArea}
      >
        <div className={styles.headingContainer}>
          <h2>{about ? "EXPERIENCE" : "PRESS"}</h2>
          <div className={styles.clickToViewContainer}>
            <p style={{ textAlign: "center" }}>click to view</p>
          </div>
        </div>
        <div className={styles.carouselContainer}>
          {projectName === "cold water" && <ColdWaterCarousel />}
          {projectName === "colorful life" && <ColorfulLifeCarousel />}
          {projectName === "selfie" && <FiveYearOldSelfieCarousel />}
          {projectName === "iss wie du bist" && <IssWieDuBistCarousel />}
          {projectName === "own good food" && <OwnGoodFoodCarousel />}
          {projectName === "good mornings" && <GoodMorningsCarousel />}
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
