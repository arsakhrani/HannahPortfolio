import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Hannah's Art Director Portfolio" />
          <meta property="og:title" content="Hannah" />
          <meta property="og:type" content="Website" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/daolun2ab/image/upload/v1683897514/Screenshot_2023-05-12_at_14.17.22_mw3ohn.png"
          />
          <meta
            property="og:description"
            content="Hannah's Art Director Portfolio"
          />
          <meta property="og:url" content="www.thingsbyhannah.com" />
          <meta name="author" content="Ashneil Sakhrani" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Krona+One&family=Outfit:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
