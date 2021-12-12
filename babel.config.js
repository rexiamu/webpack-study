module.exports = {
  // 声明 babel 可用的插件
  // webpack 调用 babel-loader 时先加载 plugins 中的插件
  plugins: [
    // 装饰器语法插件
    // 第二个参数为插件配置项
    ['@babel/plugin-proposal-decorators', { legacy: true }]
  ]
}