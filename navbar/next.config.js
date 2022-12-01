/** @type {import('next').NextConfig} */
const { FederatedTypesPlugin } = require("@module-federation/typescript");
// const NextFederationPlugin = require("@module-federation/nextjs-mf");

const federationConfig = {
  name: "navbar",
  filename: "static/chunks/remoteEntry.js",
  // shared: ["react", "react-dom"],
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer, webpack }) => {
    // config.watchOptions = {
    //   poll: 1000,
    //   aggregateTimeout: 300,
    // };
    const mfConf = {
      name: "navbar",
      remotes: {
        home: `home@http://localhost:5001/_next/static/chunks/remoteEntry.js`,
      },
    };
    config.plugins.push(
      new webpack.container.ModuleFederationPlugin(mfConf),
      new FederatedTypesPlugin({ federationConfig: mfConf })
    );
    // config.plugins.push(
    //   new webpack.container.ModuleFederationPlugin({
    //     ...federationConfig,
    //     remotes: {
    //       home: `home@http://localhost:5001/_next/static/${
    //         isServer ? "ssr" : "chunks"
    //       }/remoteEntry.js`,
    //     },
    //   }),
    //   new FederatedTypesPlugin({
    //     ...federationConfig,
    //     remotes: {
    //       home: `home@http://localhost:5001/_next/static/${
    //         isServer ? "ssr" : "chunks"
    //       }/remoteEntry.js`,
    //     },
    //   })
    // );
    if (!isServer) {
      config.output.publicPath = "http://localhost:5000/_next/";
    }

    config.infrastructureLogging = {
      level: "verbose",
    };

    return config;
  },
};

module.exports = nextConfig;
