import Image from "next/image";
import { useState } from "react";
import styles from "./AboutDetails.module.css";
import AboutDetailsText from "./AboutDetailsText";

export default function AboutDetails() {
  const [textToShow, setTextToShow] = useState("personal");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ABOUT</h1>
      <div className={styles.gridContainer}>
        <p className={styles.companyText}>
          Creative Lead & Art Director based between Berlin & London
        </p>
        <div className={styles.linkContainer}>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("personal")}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span
                style={{ color: textToShow === "personal" && "#FD5D50" }}
                className={styles.linkText}
              >
                PERSONAL BIO
              </span>
            </span>
          </div>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("experience")}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span
                style={{ color: textToShow === "experience" && "#FD5D50" }}
                className={styles.linkText}
              >
                EXPERIENCE
              </span>
            </span>
          </div>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("location")}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span
                style={{ color: textToShow === "location" && "#FD5D50" }}
                className={styles.linkText}
              >
                LOCATION
              </span>
            </span>
          </div>
        </div>
        <AboutDetailsText textType={textToShow} />
      </div>
    </div>
  );
}
