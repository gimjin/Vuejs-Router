var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var config = {
  entry: ['babel-polyfill', './src/main.js'], // 项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
  output: {
    path: path.resolve(__dirname, './dist'), // 项目的打包文件路径
    publicPath: '/dist/', // 通过devServer访问路径上的虚拟目录
    filename: '[name].js' // 打包后的文件名
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
            loader: 'vue-style-loader'
          },
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
        ],
      },
      {
        // vue-loader必须和VueLoaderPlugin()一起使用
        test: /\.vue$/,
        use: [{
            loader: 'vue-loader',
            options: {
              loaders: {
                'scss': [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ]
              }
            }
          },
          {
            loader: 'iview-loader',
            options: {
              prefix: false
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: '8192', //文件大小大于limit 8Kb，url-loader会调用file-loader进行处理
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery",
      "window.jQuery": "jquery"
    })
  ],
  devServer: {
    historyApiFallback: true,
    overlay: true,
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }
  if (argv.mode === 'production') {
    //
  }
  return config;
}
