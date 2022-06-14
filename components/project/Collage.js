import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Collage.module.css";

export default function Collage({ images, project }) {
  const [imageOneRatio, setImageOneRatio] = useState(16 / 9);
  const [imageTwoRatio, setImageTwoRatio] = useState(16 / 9);
  const [imageThreeRatio, setImageThreeRatio] = useState(16 / 9);
  const [imageFourRatio, setImageFourRatio] = useState(16 / 9);
  const [imageOneWidth, setImageOneWidth] = useState(0);
  const [imageTwoWidth, setImageTwoWidth] = useState(0);
  const [imageThreeWidth, setImageThreeWidth] = useState(0);
  const [imageFourWidth, setImageFourWidth] = useState(0);
  const [style, setStyle] = useState({});
  const [vw, setVw] = useState(0);

  useEffect(() => {
    setVw(window.innerWidth);
    const coldWaterStyle = {
      imageOne: {
        left: "2rem",
        top: "4rem",
      },
      imageTwo: {
        bottom: "-3.5rem",
        left: imageOneWidth / 1.6,
      },
      imageThree: {
        right: imageFourWidth * 1.35,
        top: "8rem",
      },
    };

    const colorfulLifeStyle = {
      imageOne: {
        left: "5rem",
        top: "9rem",
      },
      imageTwo: {
        bottom: "-2rem",
        left: imageOneWidth * 1.12,
      },
      imageThree: {
        right: imageFourWidth * 1.55,
        top: "7rem",
      },
    };

    const issWieDuBistStyle = {
      imageOne: {
        left: "5rem",
        top: "7rem",
      },
      imageTwo: {
        bottom: "-5.5rem",
        left: imageOneWidth,
      },
      imageThree: {
        right: imageFourWidth * 1.9,
        top: "5rem",
      },
    };

    project === "cold water" && setImageOneWidth(window.innerWidth * 0.3);
    project === "colorful life" && setImageOneWidth(window.innerWidth * 0.22);
    (project === "iss wie du bist" || project === "own good food") &&
      setImageOneWidth(window.innerWidth * 0.2);

    project === "cold water" && setImageTwoWidth(window.innerWidth * 0.22);
    project === "colorful life" && setImageTwoWidth(window.innerWidth * 0.15);
    (project === "iss wie du bist" || project === "own good food") &&
      setImageTwoWidth(window.innerWidth * 0.15);

    project === "cold water" && setImageThreeWidth(window.innerWidth * 0.25);
    project === "colorful life" && setImageThreeWidth(window.innerWidth * 0.28);
    (project === "iss wie du bist" || project === "own good food") &&
      setImageThreeWidth(window.innerWidth * 0.28);

    project === "cold water" && setImageFourWidth(window.innerWidth * 0.22);
    project === "colorful life" && setImageFourWidth(window.innerWidth * 0.23);
    (project === "iss wie du bist" || project === "own good food") &&
      setImageFourWidth(window.innerWidth * 0.21);

    project === "cold water" && setStyle(coldWaterStyle);
    project === "colorful life" && setStyle(colorfulLifeStyle);
    (project === "iss wie du bist" || project === "own good food") &&
      setStyle(issWieDuBistStyle);
  }, [imageOneWidth, imageFourWidth, project]);

  return vw > 1099 ? (
    <div className={styles.container}>
      <div>
        <div style={style.imageOne} className={styles.imageOne}>
          <Image
            draggable={false}
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
              setImageOneRatio(naturalWidth / naturalHeight)
            }
            width={imageOneWidth}
            height={imageOneWidth / imageOneRatio}
            alt={"Collage Image 1"}
            src={images.urlOne}
          />
        </div>
        <div style={style.imageTwo} className={styles.imageTwo}>
          <Image
            draggable={false}
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
              setImageTwoRatio(naturalWidth / naturalHeight)
            }
            width={imageTwoWidth}
            height={imageTwoWidth / imageTwoRatio}
            alt={"Collage Image 2"}
            src={images.urlTwo}
          />
        </div>
        <div style={style.imageThree} className={styles.imageThree}>
          <Image
            draggable={false}
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
              setImageThreeRatio(naturalWidth / naturalHeight)
            }
            width={imageThreeWidth}
            height={imageThreeWidth / imageThreeRatio}
            alt={"Collage Image 3"}
            src={images.urlThree}
          />
        </div>
        <div className={styles.imageFour}>
          <Image
            draggable={false}
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
              setImageFourRatio(naturalWidth / naturalHeight)
            }
            width={imageFourWidth}
            height={imageFourWidth / imageFourRatio}
            alt={"Collage Image 4"}
            src={images.urlFour}
          />
        </div>
      </div>
    </div>
  ) : null;
}
