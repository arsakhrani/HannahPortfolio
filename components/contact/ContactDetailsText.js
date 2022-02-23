import styles from "./ContactDetailsText.module.css";

export default function ContactDetailsText({ textType }) {
  if (textType === "email") {
    return (
      <div className={styles.textContainer}>
        <p className={styles.briefText}>hannahcunny25@gmail.com</p>
      </div>
    );
  }

  if (textType === "mobile") {
    return (
      <div className={styles.textContainer}>
        <p className={styles.briefText}>+44 7954 709178</p>
      </div>
    );
  }

  if (textType === "instagram") {
    return (
      <div className={styles.textContainer}>
        <p className={styles.briefText}>@hannahcunny25</p>
      </div>
    );
  }

  if (textType === "linkedin") {
    return (
      <div className={styles.textContainer}>
        <p className={styles.briefText}>Hannah Cunningham</p>
      </div>
    );
  }
}
