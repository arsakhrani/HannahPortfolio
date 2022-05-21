import Image from "next/image";
import { useState } from "react";
import styles from "./VideoAndQuote.module.css";

export default function VideoAndQuote({ quote, url }) {
  const [showControls, setShowControls] = useState(false);

  return (
    <div className={styles.container}>
      <video
        style={{
          objectFit: "cover",
          cursor: "pointer",
          height: "100%",
          width: "100%",
        }}
        onMouseOver={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        controls={showControls}
        src={url}
        className={styles.videoPlayer}
      />
      <div className={styles.quoteContainer}>
        <Image
          objectFit={"contain"}
          layout={"fill"}
          src={quote}
          alt={"Every Valentine's day gif"}
        />
      </div>
    </div>
  );
}
