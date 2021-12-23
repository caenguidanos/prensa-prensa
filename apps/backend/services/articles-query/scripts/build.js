/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require("esbuild");

async function build() {
   const makeAllPackagesExternalPlugin = {
      name: "make-all-packages-external",
      setup(build) {
         build.onResolve({ filter: /^[^./]|^\.[^./]|^\.\.[^/]/ }, (args) => {
            return {
               path: args.path,
               external: true
            };
         });
      }
   };

   const isProduction = process.env.NODE_ENV === "production";

   const { metafile } = await esbuild.build({
      entryPoints: ["src/main.ts"],
      outfile: "dist/main.js",
      format: "cjs",
      platform: "node",
      target: "es2015",
      metafile: true,
      treeShaking: true,
      bundle: true,
      plugins: [makeAllPackagesExternalPlugin],
      minify: isProduction,
      sourcemap: true
   });

   const out = await esbuild.analyzeMetafile(metafile, { color: true, verbose: true });

   console.info(out);
}

build();
