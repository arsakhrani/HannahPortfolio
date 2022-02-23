import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoPlayer from "../components/project/VideoPlayer";
import Press from "../components/project/press/Press";

export default function coronaPersona() {
  return (
    <div>
      <Details project={projects[7]} />
      <Footer />
      <VideoPlayer url={projects[7].videoUrl} />
      <Press projectName={"iss wie du bist"} />
    </div>
  );
}
