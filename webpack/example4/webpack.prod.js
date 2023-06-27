const { merge } = require("webpack-merge");
const common = require("../webpack.common");

module.exports = merge(common, {
  optimization: {
    splitChunks: {
      cacheGroups: {
        bootstrap: {
          test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
          chunks: "initial",
          priority: 1,
          name: "bootstrap",
        },
        node_modules: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          priority: 0,
          name: "node_modules",
        },
      },
    },
  },
});
