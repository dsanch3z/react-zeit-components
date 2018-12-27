const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
    library: "react-zeit-components",
    libraryTarget: "umd",
    publicPath: "/dist/",
    umdNamedDefine: true
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },

  plugins: [new CleanWebpackPlugin(["dist"])],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};
