import Image from "next/image";
import { useState } from "react";
import styles from "./Details.module.css";
import DetailsText from "./DetailsText";

export default function Details({ project }) {
  const [textToShow, setTextToShow] = useState("brief");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{project.title}</h1>
      <div className={styles.gridContainer}>
        <p className={styles.companyText}>{project.company}</p>
        <div className={styles.linkContainer}>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("brief")}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span
                style={{ color: textToShow === "brief" && "#FD5D50" }}
                className={styles.linkText}
              >
                BRIEF
              </span>
            </span>
          </div>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("idea")}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span
                style={{ color: textToShow === "idea" && "#FD5D50" }}
                className={styles.linkText}
              >
                IDEA
              </span>
            </span>
          </div>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("success")}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span
                style={{ color: textToShow === "success" && "#FD5D50" }}
                className={styles.linkText}
              >
                SUCCESS
              </span>
            </span>
          </div>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("role")}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span
                style={{ color: textToShow === "role" && "#FD5D50" }}
                className={styles.linkText}
              >
                ROLE
              </span>
            </span>
          </div>
        </div>
        <DetailsText project={project} textType={textToShow} />
      </div>
    </div>
  );
}
