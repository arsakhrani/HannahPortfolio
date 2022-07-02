import Footer from "../components/footer/Footer";
import Press from "../components/project/press/Press";
import AboutDetails from "../components/about/AboutDetails";
import PhotoCarousel from "../components/project/PhotoCarousel";
import { aboutMeData } from "../data/aboutMe";
import Head from "next/head";
import MobilePageBreak from "../components/project/MobilePageBreak";

export default function about() {
  return (
    <div>
      <Head>
        <title>About Me</title>
      </Head>
      <AboutDetails />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <Press about={true} projectName={"about"} logoCount={7} />
        <PhotoCarousel photos={aboutMeData.photoCarousel} about={true} />
        <MobilePageBreak />
      </div>
    </div>
  );
}
