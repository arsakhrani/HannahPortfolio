import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./MobileDetails.module.css";
import DetailsText from "./DetailsText";
import VideoPlayer from "./VideoPlayer";

export default function MobileDetails({ project, wholey, videoUrl }) {
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
      <p
        style={{ paddingBottom: !videoUrl && "3rem" }}
        className={styles.companyText}
      >
        {project.company}
      </p>
      {videoUrl && (
        <div className={styles.videoContainer}>
          <VideoPlayer details url={videoUrl} />
        </div>
      )}
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
      <div
        className={styles.accordionContainer}
        style={{
          maxHeight: textToShow === "brief" ? "650px" : "1px",
          overflow: textToShow === "brief" ? "auto" : "hidden",
        }}
      >
        <DetailsText project={project} textType={"brief"} />
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
      <div
        style={{
          maxHeight: textToShow === "idea" ? "650px" : "1px",
          overflow: textToShow === "idea" ? "auto" : "hidden",
        }}
        className={styles.accordionContainer}
      >
        <DetailsText project={project} textType={"idea"} />
      </div>
      {project.title !== "COLD WATER" &&
        project.title !== "EVERY VALENTINE'S DAY" &&
        project.title !== "OH LA MOMENTS" &&
        project.title !== "CHROME FÜR DEIN PHONE" &&
        project.title !== "FLOW UNINTERRUPTED" &&
        project.title !== "DESIGNS OF THE YEAR" &&
        project.title !== "CALL ME NUTS" &&
        project.title !== "ISS WIE DU BIST" && (
          <div>
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
            <div
              style={{
                maxHeight: textToShow === "success" ? "650px" : "1px",
                overflow: textToShow === "success" ? "auto" : "hidden",
              }}
              className={styles.accordionContainer}
            >
              <DetailsText project={project} textType={"success"} />
            </div>
          </div>
        )}
      {project.title !== "GOOD MORNINGS" && (
        <div>
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
          <div
            style={{
              maxHeight: textToShow === "role" ? "650px" : "1px",
              overflow: textToShow === "role" ? "auto" : "hidden",
            }}
            className={styles.accordionContainer}
          >
            <DetailsText project={project} textType={"role"} />
          </div>
        </div>
      )}
    </div>
  );
}
