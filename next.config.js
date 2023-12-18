/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["@emurgo/cardano-serialization-lib-nodejs", "@blockfrost/blockfrost-js", "@jpg-store/lucid-cardano", "mongoose"]
    },
    webpack: function (config, { isServer, dev }) {

        config.experiments = {
            asyncWebAssembly: true,
            layers: true,

        };

        config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm'
        return config;
    },
};

module.exports = nextConfig;
