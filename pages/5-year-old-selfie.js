import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoPlayer from "../components/project/VideoPlayer";
import Press from "../components/project/press/Press";
import PhoneCarousel from "../components/project/PhoneCarousel";
import PictureAndQuote from "../components/project/PictureAndQuote";

export default function fiveYearOldSelfie() {
  return (
    <div>
      <Details project={projects[1]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <VideoPlayer url={projects[1].videoUrl} />
        <PhoneCarousel selfie={true} />
        <PictureAndQuote />
        <Press projectName={"selfie"} />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
