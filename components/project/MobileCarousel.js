import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./MobileCarousel.module.css";

export default function MobileCarousel({ images }) {
  const [viewWidth, setViewWidth] = useState(0);

  useEffect(() => {
    setViewWidth(window.innerWidth);
  }, []);

  return viewWidth < 900 ? (
    <div className={styles.container}>
      <div className={styles.galleryContainer}>
        {images.map((image) => (
          <div key={image} className={styles.imageContainer}>
            <Image
              loading={"eager"}
              draggable={false}
              objectFit={"cover"}
              alt={"example images"}
              layout={"fill"}
              src={image}
            />
          </div>
        ))}
      </div>
    </div>
  ) : null;
}
