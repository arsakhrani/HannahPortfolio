import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoPlayer from "../components/project/VideoPlayer";
import Press from "../components/project/press/Press";
import PhoneCarousel from "../components/project/PhoneCarousel";
import PictureAndQuote from "../components/project/PictureAndQuote";
import Head from "next/head";
import MobileDetails from "../components/project/MobileDetails";
import MobilePageBreak from "../components/project/MobilePageBreak";

export default function fiveYearOldSelfie() {
  return (
    <div>
      <Head>
        <title>5 Year Old Selfie</title>
      </Head>
      <Details project={projects[1]} />
      <MobileDetails videoUrl={projects[1].videoUrl} project={projects[1]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <VideoPlayer url={projects[1].videoUrl} />
        <PhoneCarousel selfie={true} />
        <MobilePageBreak />
        <PictureAndQuote />
        <Press logoCount={6} projectName={"selfie"} />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
