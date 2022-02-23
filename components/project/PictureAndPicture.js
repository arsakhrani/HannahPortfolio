import Image from "next/image";
import styles from "./PictureAndPicture.module.css";

export default function PictureAndPicture({ bigPicture, smallPicture }) {
  return (
    <div className={styles.container}>
      <div className={styles.bigPictureContainer}>
        <Image
          layout={"fill"}
          src={bigPicture}
          alt={"Iss Wie Du Bist ad featured at Kotbusser Tor, Berlin"}
        />
      </div>
      <div className={styles.smallPictureContainer}>
        <Image
          layout={"fill"}
          src={smallPicture}
          alt={"Iss Wie Du Bist snapshot from ad"}
        />
      </div>
    </div>
  );
}
