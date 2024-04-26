import styles from "./AboutDetailsText.module.css";

export default function AboutDetailsText({}) {
  return (
    <div className={styles.textContainer}>
      <p className={styles.briefText}>
        I&apos;m an award winning conceptual art director who makes fully
        integrated campaigns that get attention.
      </p>
      <p className={styles.briefText}>
        I&apos;ve worked over 8 years in the ad industry across different
        agences, brands, and projects - from pro-bono social campaigns for
        charities, to big budgets with big suits and even bigger chairs.
      </p>
      <p className={styles.briefText}>
        I concept & execute in every medium; digital, print activation,
        social... you name it, and I will do it. I love finding truths &
        bringing these to life through impactful visual stories. I make big
        ideas with heart, soul, and honesty.
      </p>
      <p className={styles.briefText}>
        I am now based in Portugal, and freelancing across the UK & Europe.
      </p>
    </div>
  );
}
