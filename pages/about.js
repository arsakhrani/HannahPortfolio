import Footer from "../components/footer/Footer";
import Press from "../components/project/press/Press";
import AboutDetails from "../components/about/AboutDetails";
import PhotoCarousel from "../components/project/PhotoCarousel";

export default function about() {
  return (
    <div>
      <AboutDetails />
      <Footer projectPage={true} detailsArea={true} />
      <div>
        <Press about={true} projectName={"about"} logoCount={7} />
        <PhotoCarousel about={true} />
      </div>
    </div>
  );
}
