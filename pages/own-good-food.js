import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoPlayer from "../components/project/VideoPlayer";
import PictureAndPicture from "../components/project/PictureAndPicture";
import Collage from "../components/project/Collage";
import Press from "../components/project/press/Press";

export default function ownGoodFood() {
  return (
    <div>
      <Details project={projects[6]} />
      <Footer />
      <VideoPlayer url={projects[6].videoUrl} />
      <PictureAndPicture
        bigPicture={projects[6].bigPicture}
        smallPicture={projects[6].smallPicture}
      />
      <Collage images={projects[6].collageImages} />
      <Press projectName={"own good food"} />
    </div>
  );
}
