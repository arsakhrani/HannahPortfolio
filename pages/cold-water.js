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
      <Footer />
      <VideoPlayer url={projects[0].videoUrl} />
      <FullViewPicture url={projects[0].fullViewPicture} />
      <Collage images={projects[0].collageImages} />
      <Press projectName={"cold water"} />
    </div>
  );
}
