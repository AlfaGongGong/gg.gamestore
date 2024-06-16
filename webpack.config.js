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
