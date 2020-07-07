import { createRouter, createWebHistory } from 'vue-router';

interface RoutesType {
  path: string;
  name: string;
  component: () => {};
  meta?: {
    index?: number;
    keepAlive?: boolean;
  };
  children?: RoutesType[];
}

const routes: RoutesType[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
  
  }
]

const router = createRouter({
  // createWebHistory 第一个参数为以前路由的base
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
