import { useState } from "react";
import SideMenu from "./MobileSideMenu";
import styles from "./MobileHeader.module.css";

export default function MobileHeader({}) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const openMenu = () => {
    setToggleMenu(!toggleMenu);
    const body = document.getElementsByTagName("body");
    if (!toggleMenu) {
      body[0].classList.add("menu-open");
    } else {
      body[0].classList.remove("menu-open");
    }
  };

  const closeSideMenu = () => {
    setToggleMenu(false);
    const body = document.getElementsByTagName("body");
    body[0].classList.remove("menu-open");
  };

  return (
    <header className={styles.container}>
      <span onClick={openMenu} className={styles.menuContainer}>
        <span
          className={styles.menuLine}
          style={{
            transform: toggleMenu && "rotate(45deg)",
            position: toggleMenu ? "absolute" : "relative",
            top: toggleMenu ? 14.2 : 0,
          }}
        />
        <span
          className={styles.menuLine}
          style={{
            opacity: toggleMenu ? 0 : 1,
          }}
        />
        <span
          className={styles.menuLine}
          style={{
            transform: toggleMenu && "rotate(-45deg)",
            position: toggleMenu ? "absolute" : "relative",
            bottom: toggleMenu ? 14.2 : 0,
          }}
        />
      </span>
      <SideMenu closeSideMenu={closeSideMenu} visible={toggleMenu} />
    </header>
  );
}
