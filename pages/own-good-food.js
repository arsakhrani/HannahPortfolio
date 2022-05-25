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
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <VideoPlayer url={projects[6].videoUrl} />
        <PictureAndPicture
          ownGoodFood={true}
          bigPicture={projects[6].bigPicture}
          smallPicture={projects[6].smallPicture}
        />
        <Collage project={"own good food"} images={projects[6].collageImages} />
        <Press logoCount={5} projectName={"own good food"} />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
