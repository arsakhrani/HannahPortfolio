import { useState } from "react";
import Image from "next/image";
import styles from "./FullSizeCarousel.module.css";

export default function FullSizeCarousel({ goodMorning }) {
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
            priority
            quality={100}
            draggable={false}
            objectFit={"cover"}
            layout={"fill"}
            src={
              goodMorning
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1643979756/wholey/Design/Acai_1_mov9vn.jpg"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1645462091/Midi%20Corona%20Persona/Mockup_Study_FrontCover_V02_hc_ydpfcf.jpg"
            }
            alt={"Feature Image"}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            priority
            quality={100}
            draggable={false}
            objectFit={"cover"}
            layout={"fill"}
            src={
              goodMorning
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1649420775/wholey/Design/Screenshot_2022-04-08_at_14.17_tpa3qs.jpg"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1645462091/Midi%20Corona%20Persona/Midi_MockUp_CloseUp_V02_hc_enjkpl.jpg"
            }
            alt={"Feature Image"}
          />
        </div>
        {goodMorning && (
          <div className={styles.imageContainer}>
            <Image
              priority
              quality={100}
              draggable={false}
              objectFit={"cover"}
              layout={"fill"}
              src={
                "https://res.cloudinary.com/daolun2ab/image/upload/v1645461876/wholey/Design/Book_Mockup_V04_hc_nws7ix.jpg"
              }
              alt={"Feature Image"}
            />
          </div>
        )}
        {goodMorning && (
          <div className={styles.imageContainer}>
            <Image
              priority
              quality={100}
              draggable={false}
              objectFit={"cover"}
              layout={"fill"}
              src={
                "https://res.cloudinary.com/daolun2ab/image/upload/v1645461876/wholey/Design/Wholey_Hot_Shot_Group_2_pcb3wu.jpg"
              }
              alt={"Feature Image"}
            />
          </div>
        )}
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
        {goodMorning && (
          <div
            style={{ opacity: selectedDot === 3 && 1 }}
            className={styles.dot}
            onClick={() => {
              changeSelection(3);
            }}
          ></div>
        )}
        {goodMorning && (
          <div
            style={{ opacity: selectedDot === 4 && 1 }}
            className={styles.dot}
            onClick={() => {
              changeSelection(4);
            }}
          ></div>
        )}
      </div>
      {goodMorning && <h2 className={styles.titleText}>DESIGN</h2>}
    </div>
  );
}
