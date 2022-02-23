import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoPlayer from "../components/project/VideoPlayer";
import FullViewPicture from "../components/project/FullViewPicture";
import Press from "../components/project/press/Press";
import PhoneCarousel from "../components/project/PhoneCarousel";

export default function everyValentinesDay() {
  return (
    <div>
      <Details project={projects[3]} />
      <Footer />
      <VideoPlayer url={projects[3].videoUrl} />
      <FullViewPicture url={projects[3].fullViewPicture} />
      <PhoneCarousel />
      <Press projectName={"selfie"} />
    </div>
  );
}
