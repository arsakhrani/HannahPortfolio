import Image from "next/image";
import styles from "./GettyFooter.module.css";

export default function GettyFooter({}) {
  return (
    <footer className={styles.container}>
      <a
        className={styles.changeColor}
        target="_blank"
        rel="noreferrer"
        href="https://www.gettyimages.de/search/photographer?photographer=Hannah%20Cunningham"
      >
        <Image
          src={"/assets/icons/bullet.svg"}
          alt={"bullet-point"}
          height={15}
          width={15}
        />
        <span className={styles.linkText}> VISIT GETTY SITE HERE </span>
        <Image
          src={"/assets/icons/bullet.svg"}
          alt={"bullet-point"}
          height={15}
          width={15}
        />
      </a>
    </footer>
  );
}
