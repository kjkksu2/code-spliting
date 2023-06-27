const { merge } = require("webpack-merge");
const common = require("../webpack.common");

module.exports = merge(common, {
  optimization: {
    splitChunks: {
      cacheGroups: {
        node_modules: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          name(module, chunks, cacheGroupKey) {
            const filePathAsArray = module.identifier().split(/[\\/]/);
            const node_module_idx = filePathAsArray.findIndex(
              (v) => v === "node_modules"
            );
            return filePathAsArray[node_module_idx + 1];
          },
        },
      },
    },
  },
});
