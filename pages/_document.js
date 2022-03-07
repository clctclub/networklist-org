/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
              `
            }}
          />
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@100;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Syne:wght@100;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"></link>
          {/* <link rel="stylesheet" href="/fonts/Inter/Inter.css" />
          <link rel="stylesheet" href="/fonts/Druk/Druk.css" /> */}
          {/* <!-- HTML Meta Tags --> */}
          <meta name="description" content="One click to connect to all evm networks"/>

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content="https://chainlist.COOL"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Chainlist.COOL"/>
          <meta property="og:description" content="One click to connect to all evm networks"/>
          <meta property="og:image" content="/chainlist_og.png"/>

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:domain" content="chainlist.org"/>
          <meta property="twitter:url" content="https://chainlist.COOL"/>
          <meta name="twitter:title" content="Chainlist.COOL"/>
          <meta name="twitter:description" content="One click to connect to all evm networks"/>
          <meta name="twitter:image" content="/chainlist_og.png"/>

          {/* <!— Meta Tags Generated via https://www.opengraph.xyz —></meta> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
