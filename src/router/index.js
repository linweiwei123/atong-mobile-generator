import Vue from 'vue'
import Router from 'vue-router'
import home from '@/modules/home'
import shop from '@/modules/shop'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, // 普通路由
    {
      path: '/order',
      name: 'order',
      component: resolve => require(['@/modules/order'],resolve)
    },  //代码分割，进行懒加载
    {
      path: '/shop',
      name: 'shop',
      component: shop
    }
  ]
})
