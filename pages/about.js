import Footer from "../components/footer/Footer";
import Press from "../components/project/press/Press";
import AboutDetails from "../components/about/AboutDetails";
import PhotoCarousel from "../components/project/PhotoCarousel";

export default function about() {
  return (
    <div>
      <AboutDetails />
      <Footer />
      <Press about={true} projectName={"iss wie du bist"} />
      <PhotoCarousel about={true} />
    </div>
  );
}
