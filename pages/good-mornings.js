import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import Press from "../components/project/press/Press";
import PhotoCarousel from "../components/project/PhotoCarousel";
import GalleryAndText from "../components/project/GalleryAndText";
import FullSizeCarousel from "../components/project/FullSizeCarousel";
import Head from "next/head";
import MobileDetails from "../components/project/MobileDetails";
import MobilePageBreak from "../components/project/MobilePageBreak";

export default function goodMornings() {
  return (
    <div>
      <Head>
        <title>Good Mornings</title>
      </Head>
      <Details wholey={true} project={projects[7]} />
      <MobileDetails project={projects[7]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <PhotoCarousel photos={projects[7].photoCarousel} />
        <MobilePageBreak />
        <GalleryAndText />
        <FullSizeCarousel goodMorning={true} />
        <Press logoCount={3} projectName={"good mornings"} />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
