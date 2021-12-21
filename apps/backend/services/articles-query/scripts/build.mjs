import esbuild from "esbuild";
import glob from "tiny-glob";

const entryPoints = await glob("src/**/*.ts");

const { metafile } = await esbuild.build({
   entryPoints,
   outdir: "dist",
   format: "esm",
   platform: "node",
   target: "node16.13.0",
   metafile: true,
   treeShaking: true,
   outbase: "src"
});

const out = await esbuild.analyzeMetafile(metafile);

console.info(out);
