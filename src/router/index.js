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
    /*
     * 原来的 import Home from '@/pages/home/Home'
     * 下面 component: Home
     * 打包之后 会把所有的 js 压缩到 dist/static/js/app.js 文件里面
     * 引入这个 js 的时候 所有的页面组件一次全部加载完成
     * 修改为 component: () => import('@/pages/home/Home') 这样的形式可以改为异步加载组件 按需加载
     * 只有 app.js 文件比较大的时候(至少超过1MB) 才有必要使用这种方法
     */
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
