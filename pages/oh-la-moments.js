import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import FullViewPicture from "../components/project/FullViewPicture";
import Collage from "../components/project/Collage";
import MobileCarousel from "../components/project/MobileCarousel";
import Head from "next/head";
import MobileDetails from "../components/project/MobileDetails";
import MobilePageBreak from "../components/project/MobilePageBreak";
import PictureAndPicture from "../components/project/PictureAndPicture";

export default function ohLaMoments() {
  return (
    <div>
      <Head>
        <title>Oh La Laqua</title>
      </Head>
      <Details project={projects[8]} />
      <MobileDetails project={projects[8]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <FullViewPicture url={projects[8].fullViewPicture} />
        <PictureAndPicture
          bigPicture={projects[8].bigPicture}
          smallPicture={projects[8].smallPicture}
        />
        <Collage project={"oh la moments"} images={projects[8].collageImages} />
        <MobileCarousel images={projects[8].mobileCarousel} />
        <MobilePageBreak />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
