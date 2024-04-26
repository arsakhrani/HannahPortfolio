import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import Head from "next/head";
import MobileDetails from "../components/project/MobileDetails";
import MobilePageBreak from "../components/project/MobilePageBreak";
import PictureAndPicture from "../components/project/PictureAndPicture";
import FullSizeCarousel from "../components/project/FullSizeCarousel";
import PhotoCarousel from "../components/project/PhotoCarousel";

export default function callMeNuts() {
  return (
    <div>
      <Head>
        <title>Call Me Nuts</title>
      </Head>
      <Details project={projects[9]} />
      <MobileDetails project={projects[9]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <FullSizeCarousel
          title={"DESIGN"}
          photos={projects[9].fullSizeCarousel}
        />
        <PictureAndPicture
          bigPicture={projects[9].bigPicture}
          smallPicture={projects[9].smallPicture}
        />
        <PhotoCarousel photos={projects[9].photoCarousel} />
        <MobilePageBreak />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
