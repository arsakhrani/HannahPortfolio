import Image from "next/image";
import styles from "./PictureAndQuote.module.css";

export default function PictureAndQuote() {
  return (
    <div className={styles.container}>
      <div className={styles.pictureContainer}>
        <Image
          layout={"fill"}
          src={
            "https://res.cloudinary.com/daolun2ab/image/upload/v1643907874/5-year-old-selfie/Image_01_hb97u2.jpg"
          }
          alt={"5 year old selfie feature image"}
        />
      </div>
      <div className={styles.quoteContainer}>
        <h1
          className={styles.quote}
        >{`Honest, poignant and thought provoking"`}</h1>
        <h4 className={styles.subText}>Daniel Howell</h4>
        <h4 className={styles.subText}>Youtuber</h4>
      </div>
    </div>
  );
}
