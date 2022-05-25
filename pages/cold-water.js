import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoPlayer from "../components/project/VideoPlayer";
import FullViewPicture from "../components/project/FullViewPicture";
import Collage from "../components/project/Collage";
import Press from "../components/project/press/Press";

export default function coldWater() {
  return (
    <div>
      <Details project={projects[0]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <VideoPlayer url={projects[0].videoUrl} />
        <FullViewPicture url={projects[0].fullViewPicture} />
        <Collage project={"cold water"} images={projects[0].collageImages} />
        <Press logoCount={6} projectName={"cold water"} />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
