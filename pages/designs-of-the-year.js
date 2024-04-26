import Details from "../components/project/Details";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import FullViewPicture from "../components/project/FullViewPicture";
import Head from "next/head";
import MobileDetails from "../components/project/MobileDetails";

export default function designsOfTheYear() {
  return (
    <div>
      <Head>
        <title>Designs Of The Year</title>
      </Head>
      <Details project={projects[12]} />
      <MobileDetails project={projects[12]} />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        {projects[12].featureImages.map((url, i) => {
          return (
            <FullViewPicture contain={i === 0 || i === 1} key={url} url={url} />
          );
        })}

        <Footer projectPage={true} />
      </div>
    </div>
  );
}
