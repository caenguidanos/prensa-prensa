import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type AppPropsWithLayout = AppProps & {
   Component: PageWithLayout;
};

export type PageWithLayout<K = unknown> = NextPage<K> & {
   layout?: React.FunctionComponent;
};
