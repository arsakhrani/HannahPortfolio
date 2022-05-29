import Footer from "../components/footer/Footer";
import GettyFooter from "../components/photography/GettyFooter";
import PhotographyCollage from "../components/photography/PhotographyCollage";
import PhotographyDetails from "../components/photography/PhotographyDetails";

export default function photography() {
  return (
    <div>
      <PhotographyDetails />
      <Footer detailsArea={true} projectPage={true} />
      <div style={{ height: "6rem" }}></div>
      <PhotographyCollage section={"surf"} />
      <PhotographyCollage section={"food"} />
      <GettyFooter />
    </div>
  );
}
