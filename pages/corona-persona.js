import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoPlayer from "../components/project/VideoPlayer";
import Press from "../components/project/press/Press";
import SketchAndSketch from "../components/project/SketchAndSketch";
import SketchCarousel from "../components/project/SketchCarousel";
import FullSizeCarousel from "../components/project/FullSizeCarousel";
import Head from "next/head";
import MobileDetails from "../components/project/MobileDetails";

export default function coronaPersona() {
  return (
    <div>
      <Head>
        <title>Corona Persona</title>
      </Head>
      <Details project={projects[3]} />
      <MobileDetails videoUrl={projects[3].videoUrl} project={projects[3]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <VideoPlayer url={projects[3].videoUrl} />
        <SketchAndSketch />
        <SketchCarousel />
        <FullSizeCarousel photos={projects[3].fullSizeCarousel} />
        <Press logoCount={4} projectName={"corona persona"} />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
