import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

import { getCssText } from "$stitches";

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);

      return initialProps;
   }

   render() {
      return (
         <Html lang="es">
            <Head>
               <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/base.css" />

               <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

               <link
                  href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                  rel="stylesheet"
               />

               <link
                  href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
                  rel="stylesheet"
               />

               <link
                  href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
                  rel="stylesheet"
               />

               <link
                  href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
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
