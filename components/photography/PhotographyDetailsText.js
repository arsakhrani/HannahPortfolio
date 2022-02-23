import styles from "./PhotographyDetailsText.module.css";

export default function PhotographyDetailsText({ textType }) {
  if (textType === "personal") {
    return (
      <div className={styles.textContainer}>
        <p className={styles.briefText}>To DO</p>
        <p className={styles.briefText}>To DO</p>
        <p className={styles.briefText}>To DO</p>
        <p className={styles.briefText}>To DO</p>
      </div>
    );
  }

  if (textType === "experience") {
    return (
      <div className={styles.textContainer}>
        <p className={styles.briefText}>To DO</p>
        <p className={styles.briefText}>To DO</p>
        <p className={styles.briefText}>To DO</p>
        <p className={styles.briefText}>To DO</p>
      </div>
    );
  }

  if (textType === "location") {
    return (
      <div className={styles.textContainer}>
        <p className={styles.briefText}>To DO</p>
        <p className={styles.briefText}>To DO</p>
        <p className={styles.briefText}>To DO</p>
        <p className={styles.briefText}>To DO</p>
      </div>
    );
  }
}
