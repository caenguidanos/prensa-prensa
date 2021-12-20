/** @type {import('next').NextConfig} */
module.exports = {
   reactStrictMode: true,
   webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
         const preactAlias = {
            react: "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat"
         };

         config.resolve.alias = {
            ...config.resolve.alias,
            ...preactAlias
         };
      }

      config.experiments.topLevelAwait = true;

      return config;
   }
};
