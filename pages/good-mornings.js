import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import Press from "../components/project/press/Press";
import PhotoCarousel from "../components/project/PhotoCarousel";
import GalleryAndText from "../components/project/GalleryAndText";
import FullSizeCarousel from "../components/project/FullSizeCarousel";

export default function goodMornings() {
  return (
    <div>
      <Details wholey={true} project={projects[7]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <PhotoCarousel />
        <GalleryAndText />
        <FullSizeCarousel goodMorning={true} />
        <Press logoCount={3} projectName={"good mornings"} />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
