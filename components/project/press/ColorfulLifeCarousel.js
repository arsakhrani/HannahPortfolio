import Image from "next/image";
import styles from "./ColorfulLifeCarousel.module.css";

export default function ColorfulLifeCarousel() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={
            "https://www.dandad.org/awards/professional/2019/impact/232292/a-colourful-life/"
          }
          className={styles.dAndADContainer}
        >
          <Image
            layout={"fill"}
            alt={"D And AD Logo"}
            src={"/assets/logos/colorful-life/d-and-ad.png"}
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={"https://designcollector.xyz/public/a-colourful-life"}
          className={styles.designCollectorContainer}
        >
          <Image
            layout={"fill"}
            alt={"Design Collector Logo"}
            src={"/assets/logos/colorful-life/design-collector.png"}
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={
            "https://adobomagazine.com/events/dad-future-impact-the-projects-that-can-potentially-change-the-world-through-the-future-impact-programme-recycled-pineapple-leaves-mobile-atms-and-more/"
          }
          className={styles.abodoMagazineContainer}
        >
          <Image
            layout={"fill"}
            alt={"Abodo Magazine Logo"}
            src={"/assets/logos/colorful-life/abodo-magazine.png"}
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={
            "https://www.adstasher.com/2018/05/book-for-dementia-sufferers-developed.html?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed:+GreatAds+(AdStasher,+Featuring+the+best+Creative+Advertising+from+around+the+World)&m=1"
          }
          className={styles.adStasherContainer}
        >
          <Image
            layout={"fill"}
            alt={"Ad Stasher Logo"}
            src={"/assets/logos/colorful-life/ad-stasher.png"}
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={
            "https://www.digitalartsonline.co.uk/features/printing/colouring-books-brightening-dementia-patients-lives/"
          }
          className={styles.digitalArtsContainer}
        >
          <Image
            layout={"fill"}
            alt={"Digital Arts Logo"}
            src={"/assets/logos/colorful-life/digital-arts.png"}
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={
            "https://www.shots.net/news/view/95740-creatives-create-colouring-book-that-fights-dementia"
          }
          className={styles.shotsContainer}
        >
          <Image
            layout={"fill"}
            alt={"Shots Logo"}
            src={"/assets/logos/colorful-life/shots.png"}
          />
        </a>
      </div>
    </div>
  );
}
