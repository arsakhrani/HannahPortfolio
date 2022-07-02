import Link from "next/link";
import styles from "./MobileSideMenu.module.css";

export default function MobileSideMenu({ visible, closeSideMenu }) {
  return (
    <div
      style={{
        transform: visible
          ? "translate3d(0vw, 0, 0)"
          : "translate3d(100vw, 0, 0)",
      }}
      className={styles.container}
    >
      <nav className={styles.navContainer}>
        <ul className={styles.linkContainer}>
          <li onClick={() => closeSideMenu()} className={styles.link}>
            <Link href={"/"}>portfolio</Link>
          </li>
          <li onClick={() => closeSideMenu()} className={styles.link}>
            <Link href={"/about"}>about</Link>
          </li>
          <li onClick={() => closeSideMenu()} className={styles.link}>
            <Link href={"/contact"}>contact</Link>
          </li>
          <li className={styles.link}>
            <a
              className={styles.changeColor}
              target="_blank"
              rel="noreferrer"
              href="https://res.cloudinary.com/daolun2ab/image/upload/fl_attachment:Hannah_Cunningham_cv/v1649421102/220208_Hannah_CV_V02_bkgsex.pdf"
              download
            >
              cv
            </a>
          </li>
          <li onClick={() => closeSideMenu()} className={styles.link}>
            <Link href={"/photography"}>photography</Link>
          </li>
        </ul>
      </nav>
      <div onClick={() => closeSideMenu()} className={styles.logoContainer}>
        <Link href={"/"}>HannaH</Link>
      </div>
    </div>
  );
}
