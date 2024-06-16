<<<<<<< HEAD
import path from "path";
import webpack from "webpack";

export default {
  mode: "development", // "production" for production builds
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
      timers: require.resolve("timers-browserify"),
      stream: require.resolve("stream-browserify"),
      zlib: require.resolve("browserify-zlib"),
      // Add other fallbacks as needed
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Add other rules as needed
    ],
  },
  target: "web",
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Add other plugins as needed
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
  stats: {
    colors: true,
  },
  performance: {
    hints: false,
  },
  optimization: {
    minimize: false, // Set to true for production builds
  },
  externals: {
    express: "commonjs express", // Only if you're using express in the backend
  },
};
=======
<<<<<<< HEAD
import path from "path";
import webpack from "webpack";

export default {
  mode: "development", // "production" for production builds
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
      timers: require.resolve("timers-browserify"),
      stream: require.resolve("stream-browserify"),
      zlib: require.resolve("browserify-zlib"),
      // Add other fallbacks as needed
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Add other rules as needed
    ],
  },
  target: "web",
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Add other plugins as needed
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
  stats: {
    colors: true,
  },
  performance: {
    hints: false,
  },
  optimization: {
    minimize: false, // Set to true for production builds
  },
  externals: {
    express: "commonjs express", // Only if you're using express in the backend
  },
=======
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
>>>>>>> 1a0e8a70e20dd0caaab108cd97413b29958a5d82
};
>>>>>>> 9f2e7b3f1117e87d2fd3ec5d332d554c588c1767
