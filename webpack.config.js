// 文件路径工具
const path = require('path')
// html 插件，该插件会自动在 index.html 文件中引入生成的文件
const HtmlPlugin = require('html-webpack-plugin')
// 删除打包文件的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 创建 html 插件实例
const htmlPlugin = new HtmlPlugin({
  template: './src/index.html', // 指定原文件的存放路径
  filename: './index.html', // 指定生成文件的存放路径
})

// 创建删除打包文件的插件的实例
const cleanWebpackPlugin = new CleanWebpackPlugin()

// 导出 webpack 对象
module.exports = {
  // mode  模式：development/production
  // development  开发模式：速度快、体积大
  // production  生产模式：数度慢、体积小
  mode: 'development',
  // entry  要处理的文件
  // __dirname  当前目录
  entry: path.join(__dirname, './src/index.js'),
  // output  文件输出位置
  output: {
    // 存放目录
    path: path.join(__dirname, 'dist'),
    // 生成的文件存放路径
    filename: 'js/bundle.js'
  },
  // 使用插件
  plugins: [htmlPlugin, cleanWebpackPlugin],
  // 开发服务配置
  devServer: {
    // 自动打开浏览器
    open: true,
    // 端口号
    port: 80,
    // 主机地址
    host: '127.0.0.1', // 默认：localhost
  },
  // 第三方模块配置
  module: {
    // 文件处理规则
    // 倒序执行 use 数组里的加载器
    rules: [
      // css
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // less
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      // 图片
      // limit  图片大小限制  单位：byte(字节)  <= limit 时会将图片转换为 base64 格式，否者为原来格式
      // outputPath  指定图片文件输出路径
      { test: /\.jpg|png|gif$/, use: 'url-loader?limit=50000&outputPath=images' },
      // 使用 babel 处理 js 高级语法
      // 第三方包即（node_modules）不需要处理
      { test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/' },
    ]
  },
  // SourceMap  源代码和生成代码的对应关系
  // 开启后可以定位到发生错误的源代码具体行数
  // nosources-source-map  显示行号但不显示源代码
  // eval-source-map  显示行号并且显示源代码
  devtool: 'eval-source-map',
  resolve: {
    // 别名，项目中使用 @ 将被替换为根目录的 src
    alias: {
      '@': path.join(__dirname, './src/')
    }
  }
}