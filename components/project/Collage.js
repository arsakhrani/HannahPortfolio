import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Collage.module.css";

export default function Collage({ images }) {
  const [imageOneDimensions, setImageOneDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [imageTwoDimensions, setImageTwoDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [imageThreeDimensions, setImageThreeDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [imageFourDimensions, setImageFourDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const imageOneWidth = window.innerWidth * 0.35;
    const imageOneHeight = window.innerHeight * 0.56;
    const imageTwoWidth = window.innerWidth * 0.25;
    const imageTwoHeight = window.innerHeight * 0.36;
    const imageThreeWidth = window.innerWidth * 0.25;
    const imageThreeHeight = window.innerHeight * 0.49;
    const imageFourWidth = window.innerWidth * 0.23;
    const imageFourHeight = window.innerHeight * 0.48;
    setImageOneDimensions({ width: imageOneWidth, height: imageOneHeight });
    setImageTwoDimensions({ width: imageTwoWidth, height: imageTwoHeight });
    setImageThreeDimensions({
      width: imageThreeWidth,
      height: imageThreeHeight,
    });
    setImageFourDimensions({ width: imageFourWidth, height: imageFourHeight });
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.imageOne}>
          <Image
            width={imageOneDimensions.width}
            height={imageOneDimensions.height}
            alt={"Collage Image 1"}
            src={images.urlOne}
          />
        </div>
        <div
          style={{ left: imageOneDimensions.width / 2 }}
          className={styles.imageTwo}
        >
          <Image
            width={imageTwoDimensions.width}
            height={imageTwoDimensions.height}
            alt={"Collage Image 2"}
            src={images.urlTwo}
          />
        </div>
        <div
          style={{
            right: imageFourDimensions.width + 80,
            top: imageFourDimensions.height / 2,
          }}
          className={styles.imageThree}
        >
          <Image
            width={imageThreeDimensions.width}
            height={imageThreeDimensions.height}
            alt={"Collage Image 3"}
            src={images.urlThree}
          />
        </div>
        <div className={styles.imageFour}>
          <Image
            width={imageFourDimensions.width}
            height={imageFourDimensions.height}
            alt={"Collage Image 4"}
            src={images.urlFour}
          />
        </div>
      </div>
    </div>
  );
}
