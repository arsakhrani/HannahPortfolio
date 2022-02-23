import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoPlayer from "../components/project/VideoPlayer";
import PictureAndPicture from "../components/project/PictureAndPicture";
import Collage from "../components/project/Collage";
import Press from "../components/project/press/Press";

export default function issWieDuBist() {
  return (
    <div>
      <Details project={projects[4]} />
      <Footer />
      <VideoPlayer url={projects[4].videoUrl} />
      <PictureAndPicture
        bigPicture={projects[4].bigPicture}
        smallPicture={projects[4].smallPicture}
      />
      <Collage images={projects[4].collageImages} />
      <Press projectName={"iss wie du bist"} />
    </div>
  );
}
