const nodeExternals = require("webpack-node-externals");
const path = require("path");

const rules = [
  {
    test: /\.(js?|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
      },
    },
  },
];

const client = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/client.js"),
  output: {
    path: path.resolve(__dirname, "./dist/public"),
    filename: "bundle.js",
  },
  module: {
    rules,
  },
};

const server = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/server.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "server.js",
  },
  module: {
    rules,
  },
  target: "node",
  externals: [nodeExternals()],
};

module.exports = [client, server];
