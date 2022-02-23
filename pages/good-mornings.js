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
      <Details wholey={true} project={projects[5]} />
      <Footer />
      <PhotoCarousel />
      <GalleryAndText />
      <FullSizeCarousel />
      <Press projectName={"good mornings"} />
    </div>
  );
}
