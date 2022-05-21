import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoPlayer from "../components/project/VideoPlayer";
import FullViewPicture from "../components/project/FullViewPicture";
import Collage from "../components/project/Collage";
import Press from "../components/project/press/Press";

export default function aColorfulLife() {
  return (
    <div>
      <Details project={projects[2]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <VideoPlayer url={projects[2].videoUrl} />
        <FullViewPicture url={projects[2].fullViewPicture} />
        <FullViewPicture url={projects[2].fullViewPictureTwo} />
        <Collage project="colorful life" images={projects[2].collageImages} />
        <Press projectName={"colorful life"} />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
