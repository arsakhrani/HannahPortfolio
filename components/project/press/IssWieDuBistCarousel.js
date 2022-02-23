import Image from "next/image";
import styles from "./IssWieDuBistCarousel.module.css";

export default function IssWieDuBistCarousel() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={
            "https://www.buzzfeed.com/briangalindo/people-are-sharing-what-they-would-tell-their-5-year-old"
          }
          className={styles.buzzfeedContainer}
        >
          <Image
            layout={"fill"}
            alt={"Buzzfeed Logo"}
            src={"/assets/logos/five-year-old-selfie/buzzfeed.png"}
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={
            "https://www.stylist.co.uk/life/viral-twitter-thread-women-share-advice-to-five-year-old-selves/285241"
          }
          className={styles.stylistContainer}
        >
          <Image
            layout={"fill"}
            alt={"Stylist Logo"}
            src={"/assets/logos/five-year-old-selfie/stylist.png"}
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={
            "https://www.charitycomms.org.uk/a-message-to-your-5yearoldselfie"
          }
          className={styles.charityCommsContainer}
        >
          <Image
            layout={"fill"}
            alt={"Charity Comms Logo"}
            src={"/assets/logos/five-year-old-selfie/charity-comms.png"}
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={
            "https://www.civilsociety.co.uk/news/youngminds-launches-5-year-old-self-social-media-campaign.html"
          }
          className={styles.civilSocietyContainer}
        >
          <Image
            layout={"fill"}
            alt={"Civil Society Logo"}
            src={"/assets/logos/five-year-old-selfie/civil-society.png"}
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={
            "https://www.globalcitizen.org/fr/content/fiveyearoldselfie-mental-health-young-minds-social/"
          }
          className={styles.globalCitizenContainer}
        >
          <Image
            layout={"fill"}
            alt={"Global Citizen Logo"}
            src={"/assets/logos/five-year-old-selfie/global-citizen.png"}
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a
          rel="noreferrer"
          target={"_blank"}
          href={"https://www.scarymommy.com/5-year-old-selfie-twitter/"}
          className={styles.scaryMommyContainer}
        >
          <Image
            layout={"fill"}
            alt={"Scary Mommy Logo"}
            src={"/assets/logos/five-year-old-selfie/scary-mommy.png"}
          />
        </a>
      </div>
    </div>
  );
}
