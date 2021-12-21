import esbuild from "esbuild";
import glob from "tiny-glob";

const entryPoints = await glob("src/**/*.ts");
const entryPointsSpec = await glob("src/**/*.spec.ts");

const { metafile } = await esbuild.build({
   entryPoints: entryPoints.filter((k) => !entryPointsSpec.includes(k)),
   outdir: "dist",
   format: "esm",
   platform: "node",
   target: "node16.13.0",
   metafile: true,
   minify: true,
   treeShaking: true,
   outbase: "src"
});

const out = await esbuild.analyzeMetafile(metafile);

console.log(out);
