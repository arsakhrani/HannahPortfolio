import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoPlayer from "../components/project/VideoPlayer";
import Head from "next/head";
import MobileDetails from "../components/project/MobileDetails";

export default function flowUninterrupted() {
  return (
    <div>
      <Head>
        <title>Flow Uninterrupted</title>
      </Head>
      <Details project={projects[11]} />
      <MobileDetails videoUrl={projects[11].videoUrl} project={projects[11]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <VideoPlayer url={projects[11].videoUrl} />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
