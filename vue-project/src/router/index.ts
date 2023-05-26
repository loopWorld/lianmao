import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '@/views/homePage/index.vue';
import product from '@/views/product/index.vue';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
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
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/search/index.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('@/views/address/index.vue')
    },
    {
      path: '/incrementAddress',
      name: 'incrementAddress',
      component: () => import('@/views/incrementAddress/index.vue')
    }
  ]
})

export default router
