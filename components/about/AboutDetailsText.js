import styles from "./AboutDetailsText.module.css";

export default function AboutDetailsText({}) {
  return (
    <div className={styles.textContainer}>
      <p className={styles.briefText}>
        I’m an award winning creative and art director who makes fully
        integrated campaigns that get attention. I’ve spent 6 years as a full
        time Art Director across London and Berlin, in which the last two years
        were spent in Team Lead positions with a focus on advertising, design,
        branding and photography.{" "}
      </p>
      <p className={styles.briefText}>
        I’m confident across various disciplines within the creative process;
        campaign concepting, presenting, deck making, creative production,
        photography, script writing, artworking and making tea.{" "}
      </p>
      <p className={styles.briefText}>
        I am now freelancing across Europe and open to work.
      </p>
    </div>
  );
}
