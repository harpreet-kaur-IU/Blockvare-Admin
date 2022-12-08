import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
    return (
      <Html lang="en">
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=block" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&display=block" rel="stylesheet" />
          </Head>
          <body>
              <Main />
              <NextScript />
          </body>
      </Html>
    )
  }