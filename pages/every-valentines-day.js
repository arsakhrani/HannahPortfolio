import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoAndQuote from "../components/project/VideoAndQuote";
import FullViewPicture from "../components/project/FullViewPicture";
import Press from "../components/project/press/Press";
import PhoneCarousel from "../components/project/PhoneCarousel";

export default function everyValentinesDay() {
  return (
    <div>
      <Details project={projects[3]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <VideoAndQuote
          quote={projects[3].quoteGif}
          url={projects[3].videoUrl}
        />
        <FullViewPicture url={projects[3].fullViewPicture} />
        <PhoneCarousel />
        <Press logoCount={3} projectName={"valentines"} />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
