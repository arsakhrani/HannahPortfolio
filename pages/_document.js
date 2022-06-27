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
          <meta charset="utf-8" />
          <link rel="icon" href="/favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Hannah's Art Director Portfolio" />
          <meta property="og:title" content="Hannah" />
          <meta property="og:type" content="Website" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/di85rflof/image/upload/v1616966795/Screenshot_2021-03-28_at_23.26.29_ak92y5.png"
          />
          <meta
            property="og:description"
            content="Hannah's Art Director Portfolio"
          />
          <meta property="og:url" content="www.hannahbannana.com" />
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
