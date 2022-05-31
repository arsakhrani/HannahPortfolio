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
          height: "100vh",
          width: "100%",
          zIndex: 3,
        }}
        onMouseOver={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        controls={showControls}
        src={url}
        className={styles.videoPlayer}
      />
      <div className={styles.quoteContainer}>
        <Image
          loading={"eager"}
          draggable={false}
          objectFit={"contain"}
          layout={"fill"}
          src={quote}
          alt={"Every Valentine's day gif"}
        />
      </div>
    </div>
  );
}
