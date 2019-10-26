import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    // 动态路由 含义是 前面的路径是 detail 后面可以跟一个参数 会把参数放在 id 里面
    path: '/datail/:id',
    name: 'Detail',
    component: Detail
  }],
  /* 每次做路由切换的时候 让 x 轴初始位置为 0 y 轴初始位置为 0 */
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
