import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/photography">
        <a>CV</a>
      </Link>
    </footer>
  );
}
