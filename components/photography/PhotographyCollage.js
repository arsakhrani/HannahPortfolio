import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./PhotographyCollage.module.css";

export default function PhotographyCollage({ section }) {
  const [imageOneRatio, setImageOneRatio] = useState(16 / 9);
  const [imageTwoRatio, setImageTwoRatio] = useState(16 / 9);
  const [imageThreeRatio, setImageThreeRatio] = useState(16 / 9);
  const [imageFourRatio, setImageFourRatio] = useState(16 / 9);
  const [imageOneWidth, setImageOneWidth] = useState(0);
  const [imageTwoWidth, setImageTwoWidth] = useState(0);
  const [imageThreeWidth, setImageThreeWidth] = useState(0);
  const [imageFourWidth, setImageFourWidth] = useState(0);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const surfStyle = {
      imageOne: {
        left: "3rem",
        top: "-5rem",
      },
      imageTwo: {
        top: "8.7rem",
        right: "5rem",
      },
      imageThree: {
        top: "38.5rem",
        left: "13.5rem",
      },
      imageFour: {
        top: "38.5rem",
        right: "5rem",
      },
    };

    const foodStyle = {
      imageOne: {
        left: "7rem",
        top: "-5rem",
      },
      imageTwo: {
        top: "19.3rem",
        right: "7rem",
      },
      imageThree: {
        top: "45.5rem",
        left: "7rem",
      },
      imageFour: {
        top: "45.5rem",
        right: "7rem",
      },
    };

    section === "surf" && setImageOneWidth(window.innerWidth * 0.67);
    section === "food" && setImageOneWidth(window.innerWidth * 0.55);

    section === "surf" && setImageTwoWidth(window.innerWidth * 0.21);
    section === "food" && setImageTwoWidth(window.innerWidth * 0.28);

    section === "surf" && setImageThreeWidth(window.innerWidth * 0.21);
    section === "food" && setImageThreeWidth(window.innerWidth * 0.28);

    section === "surf" && setImageFourWidth(window.innerWidth * 0.56);
    section === "food" && setImageFourWidth(window.innerWidth * 0.55);

    section === "surf" && setStyle(surfStyle);
    section === "food" && setStyle(foodStyle);
  }, [imageOneWidth, imageFourWidth, section]);

  return (
    <div
      style={{ backgroundColor: section === "surf" && "#f3f1ed" }}
      className={styles.container}
    >
      <div>
        <div style={style.imageOne} className={styles.image}>
          <Image
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
              setImageOneRatio(naturalWidth / naturalHeight)
            }
            width={imageOneWidth}
            height={imageOneWidth / imageOneRatio}
            alt={"Collage Image 1"}
            src={
              section === "surf"
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1649423616/Photography/DSC_8064_COMPRESSED_lbpnwu.jpg"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1645524026/Photography/DSC_5037_zv2dsm.jpg"
            }
          />
        </div>
        <div style={style.imageTwo} className={styles.image}>
          <Image
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
              setImageTwoRatio(naturalWidth / naturalHeight)
            }
            width={imageTwoWidth}
            height={imageTwoWidth / imageTwoRatio}
            alt={"Collage Image 2"}
            src={
              section === "surf"
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1649423615/Photography/DSC_7746_COMPRESSED_arn8nq.jpg"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1649423710/Photography/02_SA702479_copy_hz6u3q.jpg"
            }
          />
        </div>
        <div style={style.imageThree} className={styles.image}>
          <Image
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
              setImageThreeRatio(naturalWidth / naturalHeight)
            }
            width={imageThreeWidth}
            height={imageThreeWidth / imageThreeRatio}
            alt={"Collage Image 3"}
            src={
              section === "surf"
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1649423617/Photography/DSC_7656_COMPRESSED_vbofxe.jpg"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1649423619/Photography/DSC_2455_COMPRESSED_osjyt2.jpg"
            }
          />
        </div>
        <div style={style.imageFour} className={styles.image}>
          <Image
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
              setImageFourRatio(naturalWidth / naturalHeight)
            }
            width={imageFourWidth}
            height={imageFourWidth / imageFourRatio}
            alt={"Collage Image 4"}
            src={
              section === "surf"
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1649423613/Photography/DSC_7916_COMPRESSED_rbjoik.jpg"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1645524047/Photography/DSC_6308-2_qkma8u.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}