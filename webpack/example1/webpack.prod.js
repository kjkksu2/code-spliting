const { merge } = require("webpack-merge");
const common = require("../webpack.common");

module.exports = merge(common, {
  optimization: {
    splitChunks: {
      cacheGroups: {
        bootstrap: {
          test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
          chunks: "initial",
          name: "bootstrap",
        },
        lodash: {
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          chunks: "initial",
          name: "lodash",
        },
        jquery: {
          test: /[\\/]node_modules[\\/]jquery[\\/]/,
          chunks: "initial",
          name: "jquery",
        },
      },
    },
  },
});
