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

export default function issWieDuBist() {
  return (
    <div>
      <Head>
        <title>Iss Wie Du Bist</title>
      </Head>
      <Details project={projects[0]} />
      <MobileDetails videoUrl={projects[0].videoUrl} project={projects[0]} />
      <Footer projectPage={true} detailsArea={true} />
      <Footer />
      <VideoPlayer url={projects[0].videoUrl} />
      <PictureAndPicture
        bigPicture={projects[0].bigPicture}
        smallPicture={projects[0].smallPicture}
      />
      <Collage project="iss wie du bist" images={projects[0].collageImages} />
      <MobileCarousel images={projects[0].mobileCarousel} />
      <MobilePageBreak />
      <Press logoCount={2} projectName={"iss wie du bist"} />
    </div>
  );
}
