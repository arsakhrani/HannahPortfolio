import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Details.module.css";
import DetailsText from "./DetailsText";

export default function Details({ project, wholey }) {
  const [textToShow, setTextToShow] = useState("brief");

  useEffect(() => {
    if (project.title === "GOOD MORNINGS" && textToShow === "success") {
      const parent = document.getElementById("good-morning-success");
      const link = document.createElement("a");
      link.setAttribute(
        "href",
        "https://www.gettyimages.co.uk/search/photographer?photographer=Hannah%20Cunningham"
      );
      link.setAttribute("target", "_blank");
      link.innerText = "here.";
      parent.appendChild(link);
    }
  }, [project, textToShow]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{project.title}</h1>
      <div className={styles.gridContainer}>
        <p className={styles.companyText}>{project.company}</p>
        <div className={styles.linkContainer}>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("brief")}
              style={{ cursor: "pointer" }}
            >
              <Image
                draggable={false}
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span
                style={{ color: textToShow === "brief" && "#FD5D50" }}
                className={styles.linkText}
              >
                {!wholey ? "BRIEF" : "WHOLEY WHO?"}
              </span>
            </span>
          </div>
          <div className={styles.link}>
            <span
              onClick={() => setTextToShow("idea")}
              style={{ cursor: "pointer" }}
            >
              <Image
                draggable={false}
                src={"/assets/icons/bullet.svg"}
                alt={"bullet-point"}
                height={15}
                width={15}
              />
              <span
                style={{ color: textToShow === "idea" && "#FD5D50" }}
                className={styles.linkText}
              >
                {!wholey ? "IDEA" : "ROLE"}
              </span>
            </span>
          </div>
          {project.title !== "COLD WATER" &&
            project.title !== "EVERY VALENTINE'S DAY" &&
            project.title !== "OH LA MOMENTS" &&
            project.title !== "CALL ME NUTS" &&
            project.title !== "CHROME FÜR DEIN PHONE" &&
            project.title !== "FLOW UNINTERRUPTED" &&
            project.title !== "DESIGNS OF THE YEAR" &&
            project.title !== "ISS WIE DU BIST" && (
              <div className={styles.link}>
                <span
                  onClick={() => setTextToShow("success")}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    draggable={false}
                    src={"/assets/icons/bullet.svg"}
                    alt={"bullet-point"}
                    height={15}
                    width={15}
                  />
                  <span
                    style={{ color: textToShow === "success" && "#FD5D50" }}
                    className={styles.linkText}
                  >
                    {!wholey ? "SUCCESS" : "PHOTOGRAPHY"}
                  </span>
                </span>
              </div>
            )}
          {project.title !== "GOOD MORNINGS" && (
            <div className={styles.link}>
              <span
                onClick={() => setTextToShow("role")}
                style={{ cursor: "pointer" }}
              >
                <Image
                  draggable={false}
                  src={"/assets/icons/bullet.svg"}
                  alt={"bullet-point"}
                  height={15}
                  width={15}
                />
                <span
                  style={{ color: textToShow === "role" && "#FD5D50" }}
                  className={styles.linkText}
                >
                  ROLE
                </span>
              </span>
            </div>
          )}
        </div>
        <DetailsText project={project} textType={textToShow} />
      </div>
    </div>
  );
}
