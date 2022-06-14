import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoPlayer from "../components/project/VideoPlayer";
import FullViewPicture from "../components/project/FullViewPicture";
import Collage from "../components/project/Collage";
import MobileCarousel from "../components/project/MobileCarousel";
import Press from "../components/project/press/Press";

export default function aColorfulLife() {
  return (
    <div>
      <Details project={projects[6]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <VideoPlayer url={projects[6].videoUrl} />
        <FullViewPicture url={projects[6].fullViewPicture} />
        <FullViewPicture contain={true} url={projects[6].fullViewPictureTwo} />
        <Collage project="colorful life" images={projects[6].collageImages} />
        <MobileCarousel images={projects[6].mobileCarousel} />
        <Press logoCount={7} projectName={"colorful life"} />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
