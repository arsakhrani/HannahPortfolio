import { useState } from "react";
import styles from "./VideoPlayer.module.css";

export default function VideoPlayer({ url }) {
  const [showControls, setShowControls] = useState(false);

  return (
    <div className={styles.container}>
      <video
        style={{ objectFit: "cover" }}
        onMouseOver={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        controls={showControls}
        src={url}
        className={styles.videoPlayer}
      />
    </div>
  );
}
