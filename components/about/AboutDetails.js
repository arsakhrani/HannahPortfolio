import styles from "./AboutDetails.module.css";
import AboutDetailsText from "./AboutDetailsText";

export default function AboutDetails() {
  return (
    <div className={styles.container}>
      <p className={styles.companyText}>Senior Art Director & Photographer</p>
      <AboutDetailsText />
    </div>
  );
}
