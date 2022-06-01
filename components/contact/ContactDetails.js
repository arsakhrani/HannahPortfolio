import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./ContactDetails.module.css";
import ContactDetailsText from "./ContactDetailsText";

export default function ContactDetails() {
  const [textToShow, setTextToShow] = useState("email");
  const [vw, setVw] = useState(0);

  useEffect(() => {
    setVw(window.innerWidth);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CONTACT</h1>
      <div className={styles.gridContainer}>
        <p className={styles.companyText}>
          Drop me something catchy with an emoji via...
        </p>
        <div className={styles.linkContainer}>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("email")}
              style={{ cursor: "pointer" }}
            >
              <Image
                draggable={false}
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={vw > 450 ? 15 : 12}
                width={vw > 450 ? 15 : 12}
              />
              <span
                style={{ color: textToShow === "email" && "#FD5D50" }}
                className={styles.linkText}
              >
                EMAIL
              </span>
            </span>
          </div>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("mobile")}
              style={{ cursor: "pointer" }}
            >
              <Image
                draggable={false}
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={vw > 450 ? 15 : 12}
                width={vw > 450 ? 15 : 12}
              />
              <span
                style={{ color: textToShow === "mobile" && "#FD5D50" }}
                className={styles.linkText}
              >
                MOBILE
              </span>
            </span>
          </div>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("instagram")}
              style={{ cursor: "pointer" }}
            >
              <Image
                draggable={false}
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={vw > 450 ? 15 : 12}
                width={vw > 450 ? 15 : 12}
              />
              <span
                style={{ color: textToShow === "instagram" && "#FD5D50" }}
                className={styles.linkText}
              >
                INSTAGRAM
              </span>
            </span>
          </div>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("linkedin")}
              style={{ cursor: "pointer" }}
            >
              <Image
                draggable={false}
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={vw > 450 ? 15 : 12}
                width={vw > 450 ? 15 : 12}
              />
              <span
                style={{ color: textToShow === "linkedin" && "#FD5D50" }}
                className={styles.linkText}
              >
                LINKEDIN
              </span>
            </span>
          </div>
        </div>
        <ContactDetailsText textType={textToShow} />
      </div>
    </div>
  );
}
