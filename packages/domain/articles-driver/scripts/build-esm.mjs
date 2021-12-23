/* eslint-disable no-undef */
import esbuild from "esbuild";

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

const { metafile } = await esbuild.build({
   entryPoints: ["src/main.ts"],
   outfile: "dist/esm/main.js",
   format: "esm",
   platform: "node",
   target: "esnext",
   metafile: true,
   treeShaking: true,
   bundle: true,
   plugins: [makeAllPackagesExternalPlugin],
   minify: true,
   sourcemap: true
});

const out = await esbuild.analyzeMetafile(metafile, { color: true, verbose: true });

console.info(out);
