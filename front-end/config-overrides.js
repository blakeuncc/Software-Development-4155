const webpack = require('webpack');

module.exports = function override(config, env) {
    // Add fallbacks for node modules
    config.resolve.fallback = {
        ...config.resolve.fallback,
        "zlib": require.resolve("browserify-zlib"),
        "querystring": require.resolve("querystring-es3"),
        "path": require.resolve("path-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "http": require.resolve("stream-http"),
        "url": require.resolve("url/"),
        "util": require.resolve("util/"),
        "assert": require.resolve("assert/"),
        "buffer": require.resolve("buffer/"),
        "process": require.resolve("process/browser"),
        "fs": false,
        "net": false
    };

    // Add plugins
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            process: require.resolve("process/browser"),
            Buffer: ['buffer', 'Buffer']
        })
    ];

    // Ensure proper resolution of process/browser
    config.resolve.alias = {
        ...config.resolve.alias,
        "process/browser": require.resolve("process/browser")
    };

    return config;
};