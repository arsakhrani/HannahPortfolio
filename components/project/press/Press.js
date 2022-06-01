import { useState, useEffect } from "react";
import styles from "./Press.module.css";
import LogoCarousel from "./LogoCarousel";
import {
  aboutData,
  coldWaterData,
  colorfulLifeData,
  coronaPersonaData,
  goodMorningsData,
  issWieDuBistData,
  ownGoodFoodData,
  selfieData,
  valentinesData,
} from "../../../data/press";

export default function Press({ about, projectName, logoCount }) {
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  const [isScrollActive, setIsScrollActive] = useState(false);
  const [vw, setVw] = useState(0);

  useEffect(() => {
    setVw(window.innerWidth);
  }, []);

  const moveScroll = (e) => {
    if (isScrollActive) {
      const position =
        ((e.clientX || e.touches[0].clientX) - window.innerWidth * 0.1) * 0.9;
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
      onMouseMove={moveScroll}
      onTouchMove={moveScroll}
      onTouchStart={() => setIsScrollActive(true)}
      onTouchEnd={() => setIsScrollActive(false)}
      className={styles.container}
      style={{ cursor: isScrollActive && "grabbing" }}
    >
      <div
        style={{
          transform:
            logoCount === 6
              ? `translate(-${
                  scrollBarPosition * (vw > 500 ? 1.33 : 2.56)
                }px, 0px)`
              : logoCount === 7
              ? `translate(-${
                  scrollBarPosition * (vw > 500 ? 1.68 : 3.24)
                }px, 0px)`
              : logoCount === 5
              ? `translate(-${
                  scrollBarPosition * (vw > 500 ? 1 : 1.93)
                }px, 0px)`
              : logoCount === 4
              ? `translate(-${
                  scrollBarPosition * (vw > 500 ? 0.67 : 1.29)
                }px, 0px)`
              : logoCount === 3
              ? `translate(-${
                  scrollBarPosition * (vw > 500 ? 0.33 : 0.64)
                }px, 0px)`
              : null,
        }}
        className={styles.scrollableArea}
      >
        <div className={styles.headingContainer}>
          <h2 style={{ fontSize: about && "3rem" }}>
            {about ? "EXPERIENCE" : "PRESS"}
          </h2>
          <div className={styles.clickToViewContainer}>
            <p style={{ textAlign: "center" }}>click to view</p>
          </div>
        </div>
        <div className={styles.carouselContainer}>
          {projectName === "cold water" && (
            <LogoCarousel sources={coldWaterData} />
          )}
          {projectName === "colorful life" && (
            <LogoCarousel sources={colorfulLifeData} />
          )}
          {projectName === "selfie" && <LogoCarousel sources={selfieData} />}
          {projectName === "valentines" && (
            <LogoCarousel sources={valentinesData} />
          )}
          {projectName === "corona persona" && (
            <LogoCarousel sources={coronaPersonaData} />
          )}
          {projectName === "iss wie du bist" && (
            <LogoCarousel sources={issWieDuBistData} />
          )}
          {projectName === "own good food" && (
            <LogoCarousel sources={ownGoodFoodData} />
          )}
          {projectName === "good mornings" && (
            <LogoCarousel sources={goodMorningsData} />
          )}
          {projectName === "about" && <LogoCarousel sources={aboutData} />}
        </div>
      </div>
      {logoCount > 2 && (
        <div className={styles.scrollerContainer}>
          <div className={styles.scrollBarHolder}>
            <div
              onMouseDown={() => setIsScrollActive(true)}
              className={styles.scrollBar}
              style={{ transform: `translate(${scrollBarPosition}px, 0px)` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
