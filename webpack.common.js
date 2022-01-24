const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    /* alias를 사용할 경우 주석을 해제하고 사용한다. */
    // alias: {
    //   "@components": path.resolve(__dirname, "src/components"),
    // },
  },
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: path.resolve(__dirname, "./index.html"),
      favicon: "./static/logo.png",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "static" }],
    }),
    isProduction &&
      new MiniCSSExtractPlugin({
        filename: "[name].css",
      }),
  ].filter(Boolean),
  module: {
    rules: [
      // TSX
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: [
          // JS to older JS with polyfills
          {
            loader: "babel-loader",
          },
          // TS to JS
          {
            loader: "ts-loader",
          },
        ],
      },
      // SCSS
      {
        test: /\.s?css$/i,
        use: [
          isProduction ? MiniCSSExtractPlugin.loader : "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      // ASSETS
      {
        test: /\.(png|jpe?g|gif|mp3)$/i,
        type: "asset/resource",
      },
    ],
  },
};
