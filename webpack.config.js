var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')

var common = {
  entry: {
    app: "./src/main.js",
    responsiveImage: "./src/ResponsiveImage.vue"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },
  // externals: {
  //   srcset: "srcset",
  //   joiner: "url-join",
  //   vue: "vue"
  // },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map"
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

module.exports = [
  merge(common, {
    entry: path.resolve(__dirname + "/src/plugin.js"),
    output: {
      filename: "vue-responsive-img.min.js",
      libraryTarget: "window",
      library: "VueResponsiveImg"
    }
  }),
  merge(common, {
    entry: path.resolve(__dirname + "/src/ResponsiveImage.vue"),
    output: {
      filename: "vue-responsive-img.js",
      libraryTarget: "umd",
      library: "vueResponsiveImg",
      umdNamedDefine: true
    }
  })
];