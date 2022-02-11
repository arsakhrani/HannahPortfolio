import Image from "next/image";
import styles from "./ColdWaterCarousel.module.css";

export default function ColdWaterCarousel() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={
            "https://www.davidreviews.com/Clip.asp?UserID=0&ClipID=71559&ClipNo=10&ListID=&SearchID=&SRSPTitle=AXA"
          }
          className={styles.davidReviewsContainer}
        >
          <Image
            layout={"fill"}
            alt={"David Reviews Logo"}
            src={"/assets/logos/cold-water/david-reviews.jpg"}
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={"https://www.lbbonline.com/work/61182"}
          className={styles.littleBlackBookContainer}
        >
          <Image
            layout={"fill"}
            alt={"Little Black Book Logo"}
            src={"/assets/logos/cold-water/little-black-book.png"}
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={"https://www.adsoftheworld.com/media/film/axa_cold_water"}
          className={styles.adsOfTheWorldContainer}
        >
          <Image
            layout={"fill"}
            alt={"Ads Of The World Logo"}
            src={"/assets/logos/cold-water/ads-of-the-world.png"}
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={"https://www.axa.co.uk/about/inside-axa/meet-the-bluetits/"}
          className={styles.davidReviewsContainer}
        >
          <Image
            layout={"fill"}
            alt={"AXA Logo"}
            src={"/assets/logos/cold-water/axa.png"}
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={
            "https://www.davidreviews.com/Clip.asp?UserID=0&ClipID=71559&ClipNo=10&ListID=&SearchID=&SRSPTitle=AXA"
          }
          className={styles.davidReviewsContainer}
        >
          <Image
            layout={"fill"}
            alt={"David Reviews Pick Of The Day Logo"}
            src={"/assets/logos/cold-water/david-reviews-pick-of-the-day.png"}
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={
            "https://marcommnews.com/fallon-london-launches-cold-water-campaign-with-axa/"
          }
          className={styles.marcommNewsContainer}
        >
          <Image
            layout={"fill"}
            alt={"Marcomm News Logo"}
            src={"/assets/logos/cold-water/marcomm-news.png"}
          />
        </a>
      </div>
    </div>
  );
}
