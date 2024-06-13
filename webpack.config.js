module.exports = {
  type: "module",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",

    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        url: require.resolve("url/"),
        buffer: require.resolve("buffer/"),
        util: require.resolve("util/"),
        stream: require.resolve("stream-browserify"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        crypto: require.resolve("crypto-browserify"),

        fs: false,
        zlib: require.resolve("browserify-zlib"),
        querystring: require.resolve("querystring-es3"),
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
  },
};
