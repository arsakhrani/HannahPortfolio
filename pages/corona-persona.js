import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoPlayer from "../components/project/VideoPlayer";
import Press from "../components/project/press/Press";
import SketchAndSketch from "../components/project/SketchAndSketch";
import SketchCarousel from "../components/project/SketchCarousel";
import FullSizeCarousel from "../components/project/FullSizeCarousel";
import Head from "next/head";

export default function coronaPersona() {
  return (
    <div>
      <Head>
        <title>Corona Persona</title>
      </Head>
      <Details project={projects[3]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <VideoPlayer url={projects[3].videoUrl} />
        <SketchAndSketch />
        <SketchCarousel />
        <FullSizeCarousel />
        <Press logoCount={4} projectName={"corona persona"} />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
