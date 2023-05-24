import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/views/homePage/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: homePage
    },
    {
      path: '/classification',
      name: 'classification',
      component: () => import('@/views/classification/index.vue')
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: () => import('@/views/shopCar/index.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/profile/index.vue')
    }
  ]
})

export default router
