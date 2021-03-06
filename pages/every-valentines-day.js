import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import VideoAndQuote from "../components/project/VideoAndQuote";
import FullViewPicture from "../components/project/FullViewPicture";
import Press from "../components/project/press/Press";
import PhoneCarousel from "../components/project/PhoneCarousel";
import Head from "next/head";
import MobileDetails from "../components/project/MobileDetails";
import MobilePageBreak from "../components/project/MobilePageBreak";

export default function everyValentinesDay() {
  return (
    <div>
      <Head>
        <title>Every Valentine{"'"}s Day</title>
      </Head>
      <Details project={projects[5]} />
      <MobileDetails project={projects[5]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <VideoAndQuote
          quote={projects[5].quoteGif}
          url={projects[5].videoUrl}
        />
        <FullViewPicture url={projects[5].fullViewPicture} />
        <PhoneCarousel />
        <MobilePageBreak />
        <Press logoCount={3} projectName={"valentines"} />
        <Footer projectPage={true} />
      </div>
    </div>
  );
}
