import { useState } from "react";
import SideMenu from "./MobileSideMenu";
import styles from "./MobileHeader.module.css";

export default function MobileHeader({}) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [expanded, setExpanded] = useState(false);

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
  };

  return (
    <header className={styles.container}>
      <span
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onClick={openMenu}
        className={styles.menuContainer}
      >
        <span
          className={(styles.topLine, styles.menuLine)}
          style={{
            width: "100%",
            transform: toggleMenu && "rotate(45deg)",
            position: toggleMenu ? "absolute" : "relative",
            top: toggleMenu ? 14.2 : 0,
          }}
        />
        <span
          className={(styles.midLine, styles.menuLine)}
          style={{
            width: expanded ? "100%" : "80%",
            opacity: toggleMenu ? 0 : 1,
          }}
        />
        <span
          className={(styles.bottomLine, styles.menuLine)}
          style={{
            width: toggleMenu ? "100%" : expanded ? "100%" : "60%",
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
