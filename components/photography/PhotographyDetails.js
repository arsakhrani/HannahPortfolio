import Image from "next/image";
import { useState } from "react";
import styles from "./PhotographyDetails.module.css";
import PhotographyDetailsText from "./PhotographyDetailsText";

export default function PhotographyDetails() {
  const [textToShow, setTextToShow] = useState("overview");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PHOTOGRAPHY</h1>
      <div className={styles.gridContainer}>
        <p className={styles.companyText}>
          Currently Getty Contributor and Freelance Photographer
        </p>
        <div className={styles.linkContainer}>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("overview")}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span
                style={{ color: textToShow === "overview" && "#FD5D50" }}
                className={styles.linkText}
              >
                OVERVIEW
              </span>
            </span>
          </div>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("getty")}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span
                style={{ color: textToShow === "getty" && "#FD5D50" }}
                className={styles.linkText}
              >
                GETTY
              </span>
            </span>
          </div>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("book")}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span
                style={{ color: textToShow === "book" && "#FD5D50" }}
                className={styles.linkText}
              >
                BOOK ME
              </span>
            </span>
          </div>
        </div>
        <PhotographyDetailsText textType={textToShow} />
      </div>
    </div>
  );
}
