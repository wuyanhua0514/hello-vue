import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Arr from '../views/arr/NormalMethod.vue'
import Arr2 from '../views/arr/index-2.vue'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    component: HomeView
  },
  {
    path: '/arr',
    name: '数组',
    children: [
      {
        path: '/arr1',
        name: '常用用法',
        component: Arr
      },
      {
        path: '/arr2',
        name: '高级用法',
        component: Arr2
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
