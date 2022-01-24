const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(common, {
  mode: "production",
  devServer: {
    static: "./dist",
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 9000,
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: "bundleStats.json",
    }),
  ],
});
