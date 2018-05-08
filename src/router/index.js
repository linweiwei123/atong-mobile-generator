import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/modules/HelloWorld'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, // 普通路由
    {
      path: '/order',
      name: 'Order',
      component: resolve => require(['@/modules/Order'],resolve)
    }  //代码分割，进行懒加载
  ]
})
