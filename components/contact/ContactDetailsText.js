import styles from "./ContactDetailsText.module.css";

export default function ContactDetailsText({ textType }) {
  if (textType === "email") {
    return (
      <div className={styles.textContainer}>
        <a
          rel="noreferrer"
          href="mailto:hannahcunny25@gmail.com?Subject=Hello,%20beautiful"
          target="_blank"
          className={styles.briefText}
        >
          hannahcunny25@gmail.com
        </a>
      </div>
    );
  }

  if (textType === "mobile") {
    return (
      <div className={styles.textContainer}>
        <a href="tel:+4917642991200" className={styles.briefText}>
          +49 17642 991200
        </a>
      </div>
    );
  }

  if (textType === "instagram") {
    return (
      <div className={styles.textContainer}>
        <a
          rel="noreferrer"
          href="https://www.instagram.com/hannahcunny25/?hl=en"
          target="_blank"
          className={styles.briefText}
        >
          @hannahcunny25
        </a>
      </div>
    );
  }

  if (textType === "linkedin") {
    return (
      <div className={styles.textContainer}>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/hannah-cunningham-044674119/"
          target="_blank"
          className={styles.briefText}
        >
          Hannah Cunningham
        </a>
      </div>
    );
  }
}
