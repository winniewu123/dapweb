import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dapwebLogin from '@/components/manager/dapwebLogin.vue'
import dapwebIndex from '@/components/home/dapwebIndex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: '/login'
    },
    {
      path: '/index',
      name: 'dapwebIndex',
      component: dapwebIndex
    },
    {
      path: '/manage',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'dapwebLogin',
      component: dapwebLogin
    }
  ]
})
