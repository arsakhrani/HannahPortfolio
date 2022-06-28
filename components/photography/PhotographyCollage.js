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

  useEffect(() => {
    section === "surf" && setImageOneWidth(67);
    section === "food" && setImageOneWidth(55);

    section === "surf" && setImageTwoWidth(21);
    section === "food" && setImageTwoWidth(28);

    section === "surf" && setImageThreeWidth(21);
    section === "food" && setImageThreeWidth(28);

    section === "surf" && setImageFourWidth(56);
    section === "food" && setImageFourWidth(55);
  }, [section]);

  return (
    <div
      style={{
        backgroundColor: section === "surf" && "#f3f1ed",
        height: section === "food" && "150vh",
      }}
      className={styles.container}
    >
      <div className={styles.dividerOne}>
        <div
          style={{
            width: `${imageOneWidth}vw`,
            height: `${imageOneWidth / imageOneRatio}vw`,
            left: `${(100 - imageOneWidth - imageTwoWidth) / 2 - 1}vw`,
          }}
          className={styles.imageOne}
        >
          <Image
            preload="auto"
            quality={100}
            layout={"fill"}
            draggable={false}
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
              setImageOneRatio(naturalWidth / naturalHeight)
            }
            alt={"Collage Image 1"}
            src={
              section === "surf"
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1649423616/Photography/DSC_8064_COMPRESSED_lbpnwu.jpg"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1645524026/Photography/DSC_5037_zv2dsm.jpg"
            }
          />
        </div>
        <div
          style={{
            width: `${imageTwoWidth}vw`,
            height: `${imageTwoWidth / imageTwoRatio}vw`,
            right: `${(100 - imageOneWidth - imageTwoWidth) / 2 - 1}vw`,
          }}
          className={styles.imageTwo}
        >
          <Image
            preload="auto"
            quality={100}
            layout={"fill"}
            draggable={false}
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
              setImageTwoRatio(naturalWidth / naturalHeight)
            }
            alt={"Collage Image 2"}
            src={
              section === "surf"
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1649423615/Photography/DSC_7746_COMPRESSED_arn8nq.jpg"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1649423710/Photography/02_SA702479_copy_hz6u3q.jpg"
            }
          />
        </div>
      </div>
      <div className={styles.dividerTwo}>
        <div
          style={{
            width: `${imageThreeWidth}vw`,
            height: `${imageThreeWidth / imageThreeRatio}vw`,
            left: `${(100 - imageThreeWidth - imageFourWidth) / 2 - 1}vw`,
          }}
          className={styles.imageThree}
        >
          <Image
            preload="auto"
            quality={100}
            draggable={false}
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
              setImageThreeRatio(naturalWidth / naturalHeight)
            }
            layout={"fill"}
            alt={"Collage Image 3"}
            src={
              section === "surf"
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1649423617/Photography/DSC_7656_COMPRESSED_vbofxe.jpg"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1649423619/Photography/DSC_2455_COMPRESSED_osjyt2.jpg"
            }
          />
        </div>
        <div
          style={{
            width: `${imageFourWidth}vw`,
            height: `${imageFourWidth / imageFourRatio}vw`,
            right: `${(100 - imageThreeWidth - imageFourWidth) / 2 - 1}vw`,
          }}
          className={styles.imageFour}
        >
          <Image
            preload="auto"
            quality={100}
            draggable={false}
            layout={"fill"}
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
              setImageFourRatio(naturalWidth / naturalHeight)
            }
            alt={"Collage Image 4"}
            src={
              section === "surf"
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1653830285/Photography/DSC_7916_CROP_fnl2qc.png"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1653830290/Photography/DSC_6308-2_CROP_qb88sm.png"
            }
          />
        </div>
      </div>
    </div>
  );
}
