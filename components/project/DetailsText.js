import styles from "./DetailsText.module.css";

export default function DetailsText({ textType, project }) {
  if (textType === "brief") {
    return (
      <div className={styles.textContainer}>
        <p className={styles.briefText}>{project.brief.textOne}</p>
        <p className={styles.briefText}>{project.brief.textTwo}</p>
        <p className={styles.briefText}>{project.brief.textThree}</p>
        <p className={styles.briefText}>{project.brief.textFour}</p>
        <p className={styles.briefText}>{project.brief.textFive}</p>
      </div>
    );
  }

  if (textType === "idea") {
    return (
      <div className={styles.textContainer}>
        <p className={styles.briefText}>{project.idea.textOne}</p>
        <p className={styles.briefText}>{project.idea.textTwo}</p>
        <p className={styles.briefText}>{project.idea.textThree}</p>
        <p className={styles.briefText}>{project.idea.textFour}</p>
        <p className={styles.briefText}>{project.idea.textFive}</p>
      </div>
    );
  }

  if (textType === "success") {
    return (
      <div className={styles.textContainer}>
        <p className={styles.briefText}>{project.success.textOne}</p>
        <p className={styles.briefText}>{project.success.textTwo}</p>
        <p className={styles.briefText}>{project.success.textThree}</p>
        <p className={styles.briefText}>{project.success.textFour}</p>
        <p className={styles.briefText}>{project.success.textFive}</p>
      </div>
    );
  }

  if (textType === "role") {
    return (
      <div className={styles.textContainer}>
        <p className={styles.briefText}>{project.role.textOne}</p>
        <p className={styles.briefText}>{project.role.textTwo}</p>
        <p className={styles.briefText}>{project.role.textThree}</p>
        <p className={styles.briefText}>{project.role.textFour}</p>
        <p className={styles.briefText}>{project.role.textFive}</p>
      </div>
    );
  }
}
