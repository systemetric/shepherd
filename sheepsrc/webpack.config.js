const path = require("path");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const dev = process.env.NODE_ENV !== "production";

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./app/index.ts",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "..", "shepherd", "static", "editor"),
    filename: "bundle.js"
  },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: ["\\.vue$"]
        },
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          dev ? "vue-style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.svg$/,
        loader: "svg-url-loader"
      }
    ]
  },
  resolve: {
    alias: {
      vscode: require.resolve("monaco-languageclient/lib/vscode-compatibility"),
      "@": path.join(__dirname, "app"),
      vue$: "vue/dist/vue.runtime.esm.js"
    },
    extensions: [".js", ".jsx", ".vue", ".json", ".ts", ".tsx"]
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: []
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new HtmlWebpackPlugin({
      template: "./app/template.html"
    }),
    new VueLoaderPlugin()
  ],
  node: {
    fs: "empty",
    child_process: "empty",
    net: "empty",
    crypto: "empty"
  }
};
