// 导入jquery
import $ from 'jquery'
// 定义jquery的入口函数
$(function () {
  // 实现奇数偶数行的不同颜色
  $('li:odd').css('background-color', 'teal')
  $('li:even').css('background-color', 'pink')
})

// 导入样式
import '@/css/index.css'
import '@/css/index.less'

// 导入图片
import logo from './images/logo.jpg'
// 给图片赋值
$('.logo').attr('src', logo)

// 定义装饰器函数
function info(target) {
  target.info = 'Person info'
}

// 创建 Person 类
@info
class Person { }

cosole.log(Person.info)
