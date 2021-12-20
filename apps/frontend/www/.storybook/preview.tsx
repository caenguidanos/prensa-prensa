import * as NextImage from "next/image";

import { worker } from "../.msw/msw-browser";
import { createDb } from "../.msw/msw-data";

import "../src/lib/domain/shared/styles/globals.scss";

export const decorators = [];

// Next Image
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
   configurable: true,
   value: (props: any) => <OriginalNextImage {...props} unoptimized />
});

// Mock Service Worker
if (typeof window !== "undefined") {
   createDb();

   worker.start();

   decorators.push((story: any) => {
      worker.resetHandlers();
      return <>{story()}</>;
   });
}
