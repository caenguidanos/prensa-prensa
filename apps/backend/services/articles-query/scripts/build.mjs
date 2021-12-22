import esbuild from "esbuild";

const makeAllPackagesExternalPlugin = {
   name: "make-all-packages-external",
   setup(build) {
      build.onResolve({ filter: /^[^./]|^\.[^./]|^\.\.[^/]/ }, (args) => ({
         path: args.path,
         external: true
      }));
   }
};

const { metafile } = await esbuild.build({
   entryPoints: ["src/main.ts"],
   outfile: "dist/main.js",
   format: "esm",
   platform: "node",
   target: "node16.13.0",
   metafile: true,
   treeShaking: true,
   bundle: true,
   plugins: [makeAllPackagesExternalPlugin],
   minify: false,
   sourcemap: true
});

const out = await esbuild.analyzeMetafile(metafile);

console.info(out);
