import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <Link href="/contact">
        <a className={styles.changeColor}>Contact</a>
      </Link>
      <Link href="/">HannaH</Link>
      <a
        href="https://www.wearefloatingheads.com"
        target="_blank"
        rel="noreferrer"
        className={styles.changeColor}
      >
        Photography
      </a>
    </header>
  );
}
