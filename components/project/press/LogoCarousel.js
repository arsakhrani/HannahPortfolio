import Image from "next/image";
import styles from "./LogoCarousel.module.css";

export default function LogoCarousel({ sources }) {
  return (
    <div className={styles.container}>
      {sources.map((source) => (
        <a
          key={source.link}
          rel="noreferrer"
          target={"_blank"}
          href={source.link}
          className={styles.logoContainer}
          style={{
            padding: source.padding,
          }}
        >
          <div className={styles.logo}>
            <Image
              loading={"eager"}
              draggable={false}
              objectFit={"contain"}
              layout={"fill"}
              alt={source.alt}
              src={source.logo}
            />
          </div>
        </a>
      ))}
    </div>
  );
}
