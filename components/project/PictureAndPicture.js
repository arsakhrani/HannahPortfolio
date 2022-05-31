import Image from "next/image";
import { useState } from "react";
import styles from "./PictureAndPicture.module.css";

export default function PictureAndPicture({
  bigPicture,
  smallPicture,
  ownGoodFood,
}) {
  const [imageSource, setImageSource] = useState(
    "https://res.cloudinary.com/daolun2ab/image/upload/v1644137445/own%20good%20food/_Slider%20in%20middle%20of%20page/01_2021_08_beets_roots_29_Veg.Chicken_Bowl_Closeup_025_qjxawy.jpg"
  );
  const [selectedDot, setSelectedDot] = useState(1);

  const changeSelection = (selector) => {
    setSelectedDot(selector);
    selector === 1 &&
      setImageSource(
        "https://res.cloudinary.com/daolun2ab/image/upload/v1644137445/own%20good%20food/_Slider%20in%20middle%20of%20page/01_2021_08_beets_roots_29_Veg.Chicken_Bowl_Closeup_025_qjxawy.jpg"
      );
    selector === 2 &&
      setImageSource(
        "https://res.cloudinary.com/daolun2ab/image/upload/v1644137446/own%20good%20food/_Slider%20in%20middle%20of%20page/02_2021_08_beets_roots_27_Klim_Action_024_uzgryt.jpg"
      );
    selector === 3 &&
      setImageSource(
        "https://res.cloudinary.com/daolun2ab/image/upload/v1644137446/own%20good%20food/_Slider%20in%20middle%20of%20page/03_2021_08_beets_roots_11_NewOriental_2057_ltqhy1.jpg"
      );
    selector === 4 &&
      setImageSource(
        "https://res.cloudinary.com/daolun2ab/image/upload/v1644138827/own%20good%20food/_Slider%20in%20middle%20of%20page/2021_08_beets_roots_11_NewOriental_1973_yupkfa.jpg"
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.bigPictureContainer}>
        <Image
          quality={100}
          draggable={false}
          objectFit={"cover"}
          layout={"fill"}
          src={bigPicture}
          alt={
            ownGoodFood
              ? "Series of images from Own Good Food Campaign"
              : "Iss Wie Du Bist ad featured at Kotbusser Tor, Berlin"
          }
        />
      </div>
      <div className={styles.smallPictureContainer}>
        <Image
          draggable={false}
          objectFit={"cover"}
          layout={"fill"}
          src={ownGoodFood ? imageSource : smallPicture}
          alt={
            ownGoodFood
              ? "Series of images from Own Good Food Campaign"
              : "Iss Wie Du Bist snapshot from ad"
          }
        />
      </div>
      {ownGoodFood && (
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
      )}
    </div>
  );
}
