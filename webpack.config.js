const path = require('path');
const webpack=require('webpack');
const autoprefixer=require('autoprefixer');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const OpenBrowserPlugin=require('open-browser-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname,'app/index.js'),
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function(){
                return [autoprefixer];
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function(){
                return [autoprefixer];
              },
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      { 
        test:/\.(png|gif|jpg|jpeg|bmp)$/i, 
        use:'url-loader?limit=5000' 
      },
      { 
        test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, 
        use:'url-loader?limit=5000'
      } 
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: 'eval-source-map',

  plugins: [
    //html模板插件
    new HtmlWebpackPlugin({
      template: __dirname+'/app/index.html'
    }),

    //热加载插件
    new webpack.HotModuleReplacementPlugin(),

    //打开浏览器插件
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),

    //定义为开发环境
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ],

  devServer: {
    //使用webpack代理，转发请求到mock服务器上
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    },
    historyApiFallback: true, 
    inline: true, 
    hot: true
  }
        
};