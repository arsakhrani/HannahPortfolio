import styles from "./PhotographyDetailsText.module.css";

export default function PhotographyDetailsText({ textType }) {
  return (
    <div className={styles.textContainer}>
      <p className={styles.briefText}>
        I am an Art Director & Freelance photographer with a passion for surf,
        lifestyle and food photography. I work with poppy colours, aiming to
        transport my audience to the moment in my photos - whether it be
        sunshine, surfing or food. I can confidently manage the shoot, then
        capture and edit the assets myself if needed. I am flexible with
        locations, meaning I can take shoots all over Europe if needed - hover
        my primary bases are Berlin, Faro, London & Manchester.
      </p>
    </div>
  );
}
