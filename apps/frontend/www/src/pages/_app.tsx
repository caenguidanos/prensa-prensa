import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

import "$msw/inject";
import "$styles/globals";

import { getPageLayout } from "$lib/domain/shared/layout";

import type { AppPropsWithLayout } from "$lib/domain/shared/layout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   const DynamicLayout = getPageLayout(Component);

   return (
      <DynamicLayout>
         <Script src="https://unpkg.com/spacingjs" strategy="lazyOnload" />

         <RecoilRoot>
            <Component {...pageProps} />
         </RecoilRoot>

         <Toaster position="bottom-right" />
      </DynamicLayout>
   );
}

export default MyApp;
