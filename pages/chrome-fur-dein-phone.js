import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoPlayer from "../components/project/VideoPlayer";
import Head from "next/head";
import MobileDetails from "../components/project/MobileDetails";

export default function noPlaceLikeChrome() {
  return (
    <div>
      <Head>
        <title>Chrome Für Dein Phone</title>
      </Head>
      <Details project={projects[10]} />
      <MobileDetails videoUrl={projects[10].videoUrl} project={projects[10]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        {projects[10].videoUrls.map((url) => {
          return <VideoPlayer showInMobile key={url} url={url} />;
        })}
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
