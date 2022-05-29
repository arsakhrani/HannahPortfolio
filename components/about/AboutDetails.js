import Image from "next/image";
import styles from "./AboutDetails.module.css";
import AboutDetailsText from "./AboutDetailsText";

export default function AboutDetails() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ABOUT</h1>
      <div className={styles.gridContainer}>
        <p className={styles.companyText}>Art Director & Photographer</p>
        <div className={styles.linkContainer}>
          <div className={styles.link}>
            <span>
              <Image
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span style={{ color: "#FD5D50" }} className={styles.linkText}>
                PERSONAL BIO
              </span>
            </span>
          </div>
        </div>
        <AboutDetailsText />
      </div>
    </div>
  );
}
