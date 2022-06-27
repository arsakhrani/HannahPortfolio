import Footer from "../components/footer/Footer";
import ContactDetails from "../components/contact/ContactDetails";
import Head from "next/head";

export default function contact() {
  return (
    <div>
      <Head>
        <title>Contact Me</title>
      </Head>
      <ContactDetails />
      <Footer detailsArea={true} />
    </div>
  );
}
