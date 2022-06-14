import Image from "next/image";
import styles from "./SketchAndSketch.module.css";

export default function SketchAndSketch() {
  return (
    <div className={styles.container}>
      <div
        style={{ borderRight: "#E6E6E6 0.5px solid" }}
        className={styles.pictureContainer}
      >
        <Image
          draggable={false}
          objectFit={"contain"}
          layout={"fill"}
          src={
            "https://res.cloudinary.com/daolun2ab/image/upload/v1645462049/Midi%20Corona%20Persona/Sketches/Achtsame_Skizzen_utk5zk.jpg"
          }
          alt={"Sketch for Corona Persona"}
        />
      </div>
      <div
        style={{ borderLeft: "#E6E6E6 0.5px solid" }}
        className={styles.pictureContainer}
      >
        <Image
          draggable={false}
          objectFit={"contain"}
          layout={"fill"}
          src={
            "https://res.cloudinary.com/daolun2ab/image/upload/v1645462049/Midi%20Corona%20Persona/Sketches/Empo%CC%88rte_skizzen_a0snwm.jpg"
          }
          alt={"Sketch for Corona Persona"}
        />
      </div>
    </div>
  );
}
