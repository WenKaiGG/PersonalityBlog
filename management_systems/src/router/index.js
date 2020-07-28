import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
  
  {
    path: '/Login',
      name: 'Login',
      component:()=> import('@/views/Login.vue')
    },{
      path: "/home",
      component: () => import("@/views/Home.vue"),
      children:[
      {
        path: '/',
        redirect: "/Welcome"
      },{
        path: '/Welcome',
        name:"Welcome",
        component: () => import("@/components/Welcome.vue"),
      },
      {
        path: '/home/User',
        name:"User",
        component: () => import("@/components/User.vue"),
      },
      {
        path: '/home/Writing',
        name:"Writing",
        component: () => import("@/components/Writing.vue"),
      },
      {
        path: '/home/Ana',
        name:"Writing",
        component: () => import("@/components/Ana.vue"),
      }
      
      ]
    }
  
 
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
// 路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path == '/login') return next()
    if (!window.sessionStorage.getItem("token")) {
      return next("/login")
    }
  next()
})


export default router
