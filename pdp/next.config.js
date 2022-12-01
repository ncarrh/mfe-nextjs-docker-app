/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  webpack: (config, options) => {
    const mfConfig = {
      name: "pdp",
      filename: "static/chunks/remoteEntry.js",
      exposes: {
        // "./pdp": "./pages/index.tsx",
        "./image": "./components/image.js",
      },
      extraOptions: {
        automaticAsyncBoundary: true,
      },
    };

    config.plugins.push(new NextFederationPlugin(mfConfig));
    // config.watchOptions = {
    //   poll: 1000,
    //   aggregateTimeout: 300,
    // };

    // if (!options.isServer) {
    //   config.output.publicPath = "http://localhost:3000/_next/";
    // }
    // config.devServer = {
    //   static: {
    //     directory: path.resolve(__dirname, `_next/static/chunks`),
    //   },
    // };

    // config.infrastructureLogging = {
    //   level: "verbose",
    // };
    return config;
  },
};

module.exports = nextConfig;
