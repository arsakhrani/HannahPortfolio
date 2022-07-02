import Image from "next/image";
import Link from "next/link";
import styles from "./PhotographyDetails.module.css";
import PhotographyDetailsText from "./PhotographyDetailsText";

export default function PhotographyDetails() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PHOTOGRAPHY</h1>
      <div className={styles.gridContainer}>
        <p className={styles.companyText}>
          Currently Getty Contributor and Freelance Photographer
        </p>
        <div className={styles.linkContainer}>
          <div className={styles.link}>
            <span style={{ cursor: "pointer" }}>
              <Image
                draggable={false}
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span style={{ color: "#FD5D50" }} className={styles.linkText}>
                OVERVIEW
              </span>
            </span>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.gettyimages.de/search/photographer?photographer=Hannah%20Cunningham"
            className={styles.link}
          >
            <span style={{ cursor: "pointer" }}>
              <Image
                draggable={false}
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span className={styles.linkText}>GETTY</span>
            </span>
          </a>
          <Link passHref={true} href={"/contact"} className={styles.link}>
            <span style={{ cursor: "pointer" }}>
              <Image
                draggable={false}
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span className={styles.linkText}>BOOK ME</span>
            </span>
          </Link>
        </div>
        <PhotographyDetailsText />
      </div>
    </div>
  );
}
