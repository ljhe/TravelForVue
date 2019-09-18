import Vue from 'vue'
import Router from 'vue-router'
//  @ 表示的是 src 目录
import Home from '@/pages/home/Home'

Vue.use(Router)

//  路由就是根据网址的不同,返回不同的内容给用户
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
