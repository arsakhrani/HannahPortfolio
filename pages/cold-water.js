import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoPlayer from "../components/project/VideoPlayer";
import FullViewPicture from "../components/project/FullViewPicture";
import Collage from "../components/project/Collage";
import Press from "../components/project/press/Press";
import MobileCarousel from "../components/project/MobileCarousel";
import Head from "next/head";

export default function coldWater() {
  return (
    <div>
      <Head>
        <title>Cold Water</title>
      </Head>
      <Details project={projects[2]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <VideoPlayer url={projects[2].videoUrl} />
        <FullViewPicture url={projects[2].fullViewPicture} />
        <Collage project={"cold water"} images={projects[2].collageImages} />
        <MobileCarousel images={projects[2].mobileCarousel} />
        <Press logoCount={5} projectName={"cold water"} />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
