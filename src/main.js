// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//  解决某些机型的默认浏览器点击300毫秒延迟问题
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//  统一不同手机的默认浏览器的样式
import 'styles/css/reset.css'
//  解决1像素边框问题
import 'styles/css/border.css'
//  引入 iconfont
import 'styles/css/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
//  解决某些机型的默认浏览器点击300毫秒延迟问题
fastClick.attach(document.body)
//  引入 vue-awesome-swiper 轮播图插件
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
