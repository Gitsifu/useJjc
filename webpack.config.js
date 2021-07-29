var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "index.min.js",
    library: {
      name: "useJjc",
      type: "umd"
    }
  },
  module: {
  },
  plugins: [
  ]
};
