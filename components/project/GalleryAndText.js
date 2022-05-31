import { useState } from "react";
import styles from "./GalleryAndText.module.css";

export default function GalleryAndText() {
  const [videoSource, setVideoSource] = useState(
    "https://res.cloudinary.com/daolun2ab/video/upload/v1645461956/wholey/TIK%20TOK/Me_VS_Bf_2_fmjxew.mp4"
  );
  const [selectedDot, setSelectedDot] = useState(1);

  const changeSelection = (selector) => {
    setSelectedDot(selector);
    selector === 1 &&
      setVideoSource(
        "https://res.cloudinary.com/daolun2ab/video/upload/v1645461956/wholey/TIK%20TOK/Me_VS_Bf_2_fmjxew.mp4"
      );
    selector === 2 &&
      setVideoSource(
        "https://res.cloudinary.com/daolun2ab/video/upload/v1645461943/wholey/TIK%20TOK/Food_Tik_Tok_aikimk.mp4"
      );
    selector === 3 &&
      setVideoSource(
        "https://res.cloudinary.com/daolun2ab/video/upload/v1645461940/wholey/TIK%20TOK/Me_VS_Bf_fgtc3c.mp4"
      );
    selector === 4 &&
      setVideoSource(
        "https://res.cloudinary.com/daolun2ab/video/upload/v1645461926/wholey/TIK%20TOK/Wiggle_GIF_fowrmq.mp4"
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.galleryContainer}>
        <video
          preload="auto"
          src={videoSource}
          alt={"Tik Tok on phone mock up"}
          controls={false}
          autoPlay={true}
          muted={true}
          loop={true}
          style={{ height: "100vh", width: "50vw" }}
        />
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
      <div className={styles.textContainer}>
        <h1 className={styles.header}>TIK TOK</h1>
        <p className={styles.text}>
          Starting in Summer 2020, the Wholey Tik Tok channel grew from 0 to
          hero.
        </p>
        <p className={styles.text}>
          I left them with 5 million likes, 150k followers, and numerous viral
          videos in just 7 months.
        </p>
        <p className={styles.text}>
          It was colorful, playful and damn right tasty!
        </p>
      </div>
    </div>
  );
}
