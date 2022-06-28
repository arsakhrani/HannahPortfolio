import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./PhoneCarousel.module.css";

export default function PhoneCarousel({ selfie }) {
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  const [isScrollActive, setIsScrollActive] = useState(false);
  const [hasBeenScrolled, setHasBeenScrolled] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [viewWidth, setViewWidth] = useState(0);

  useEffect(() => {
    setViewWidth(window.innerWidth);
  }, []);

  const moveScroll = (e) => {
    if (viewWidth > 1180) {
      if (isScrollActive) {
        clearInterval(intervalId);
        setHasBeenScrolled(true);
        const position = (e.clientX - viewWidth * 0.1) * 0.9;
        const upperLimit = viewWidth * 0.69;
        if (position >= 0 && position < upperLimit)
          setScrollBarPosition(position);
      }
    }
  };

  const promptScroll = () => {
    if (!isScrollActive && !hasBeenScrolled) {
      const id = setInterval(() => {
        setScrollBarPosition(40);
        setTimeout(() => {
          setScrollBarPosition(0);
        }, 1000);
      }, 4000);
      setIntervalId(id);
    }
  };

  const endPromptScroll = () => {
    clearInterval(intervalId);
    setIsScrollActive(false);
  };

  return (
    <div
      onMouseEnter={promptScroll}
      onMouseUp={() => {
        setIsScrollActive(false);
      }}
      onMouseLeave={endPromptScroll}
      onMouseMove={moveScroll}
      className={styles.container}
      style={{
        cursor: isScrollActive && "grabbing",
        overflowX: viewWidth > 1180 ? "hidden" : "auto",
      }}
    >
      <div
        style={{
          transform: `translate(-${
            scrollBarPosition * (selfie ? 3.4 : 3)
          }px, 0px)`,
        }}
        className={styles.scrollableArea}
      >
        <div
          style={{ right: viewWidth * 0.21 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            draggable={false}
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              selfie
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1643978902/5-year-old-selfie/MockUp_IphoneOutline_08_cidqsy.png"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1652789882/every-val-day/_Reduced/09_MockUp_JonathonGibbs_01_fmllxw.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 0.6 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            draggable={false}
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              selfie
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1643978892/5-year-old-selfie/MockUp_IphoneOutline_10_qlwha3.png"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1652789882/every-val-day/_Reduced/07MockUp_Phillip_Harris_01_hfll3y.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 0.98 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            draggable={false}
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              selfie
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1643978902/5-year-old-selfie/MockUp_IphoneOutline_09_hwixwq.png"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1652789877/every-val-day/_Reduced/08_MockUp_GeorgeMorton_01_u99kva.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 1.37 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            draggable={false}
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              selfie
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1643978903/5-year-old-selfie/MockUp_IphoneOutline_12_yhr6eh.png"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1652789876/every-val-day/_Reduced/05_MockUp_ASOSGirl_01_ailyrq.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 1.76 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            draggable={false}
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              selfie
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1643978899/5-year-old-selfie/MockUp_IphoneOutline_11_pj5u4x.png"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1652789871/every-val-day/_Reduced/03_MockUp_ThomasHEdger_01_lgopmn.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 2.15 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            draggable={false}
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              selfie
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1643978893/5-year-old-selfie/MockUp_IphoneOutline_05_zxxnr4.png"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1652789871/every-val-day/_Reduced/01_MockUp_GrahamRobertson_01_gbxfq2.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 2.54 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            draggable={false}
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              selfie
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1643978891/5-year-old-selfie/MockUp_IphoneOutline_03_eunngj.png"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1652789868/every-val-day/_Reduced/02_MockUp_MariaSkarlatou_01_oztves.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 2.93 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            draggable={false}
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              selfie
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1643978891/5-year-old-selfie/MockUp_IphoneOutline_06_r9ib1y.png"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1652789867/every-val-day/_Reduced/04_MockUp_CatherinePearson_01_xytib1.png"
            }
          />
        </div>
        <div
          style={{ right: viewWidth * 3.32 }}
          className={styles.imageContainer}
        >
          <Image
            loading={"eager"}
            draggable={false}
            layout={"fill"}
            alt={"mock-up picture on phone"}
            src={
              selfie
                ? "https://res.cloudinary.com/daolun2ab/image/upload/v1643978885/5-year-old-selfie/MockUp_IphoneOutline_02_snqmnt.png"
                : "https://res.cloudinary.com/daolun2ab/image/upload/v1652789866/every-val-day/_Reduced/06_MockUp_KieraBerry_01_aumvct.png"
            }
          />
        </div>
        {selfie && (
          <div
            style={{ right: viewWidth * 3.71 }}
            className={styles.imageContainer}
          >
            <Image
              loading={"eager"}
              draggable={false}
              layout={"fill"}
              alt={"mock-up picture on phone"}
              src={
                "https://res.cloudinary.com/daolun2ab/image/upload/v1643978883/5-year-old-selfie/MockUp_IphoneOutline_04_l552mh.png"
              }
            />
          </div>
        )}
      </div>
      {viewWidth > 1180 && (
        <div className={styles.scrollerContainer}>
          <div className={styles.scrollBarHolder}>
            <div
              onMouseDown={() => setIsScrollActive(true)}
              className={styles.scrollBar}
              style={{
                transform: `translate(${scrollBarPosition}px, 0px)`,
                transition: isScrollActive && "none",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
