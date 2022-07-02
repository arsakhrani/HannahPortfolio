import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoPlayer from "../components/project/VideoPlayer";
import PictureAndPicture from "../components/project/PictureAndPicture";
import Collage from "../components/project/Collage";
import Press from "../components/project/press/Press";
import MobileCarousel from "../components/project/MobileCarousel";
import Head from "next/head";
import MobileDetails from "../components/project/MobileDetails";
import MobilePageBreak from "../components/project/MobilePageBreak";

export default function ownGoodFood() {
  return (
    <div>
      <Head>
        <title>Own Good Food</title>
      </Head>
      <Details project={projects[4]} />
      <MobileDetails videoUrl={projects[4].videoUrl} project={projects[4]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <VideoPlayer url={projects[4].videoUrl} />
        <PictureAndPicture
          ownGoodFood={true}
          bigPicture={projects[4].bigPicture}
          smallPicture={projects[4].smallPicture}
        />
        <Collage project={"own good food"} images={projects[4].collageImages} />
        <MobileCarousel images={projects[4].mobileCarousel} />
        <MobilePageBreak />
        <Press logoCount={5} projectName={"own good food"} />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
