// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//  解决某些机型的默认浏览器点击300毫秒延迟问题
import fastClick from 'fastclick'
//  统一不同手机的默认浏览器的样式
import './assets/styles/css/reset.css'
//  解决1像素边框问题
import './assets/styles/css/border.css'

Vue.config.productionTip = false
//  解决某些机型的默认浏览器点击300毫秒延迟问题
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
