import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/view/Home/Home'
Vue.use(VueRouter)
  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home ',
    component: Home
  },
  {
    path: '/Writing',
    name: 'Archives',
    component: () => import('@/view/Writing/Writing')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('@/view/About/About')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
