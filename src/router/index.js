import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children:[
      {
        path : '/',
        name : 'home',
        component : Home,
      },
      {
        path: 'products',
        name: '產品列表',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: 'product/:id',
        name: '產品頁面',
        component: () => import('../views/ProductView.vue'),
      },
      {
        path: 'cart',
        name: '購物車',
        component: () => import('../views/CartView.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children:[
      {
        path: 'products',
        component: () => import('../views/AdminProducts.vue'),
      },
      {
        path: 'coupon',
        component: () => import('../views/AdminCoupon.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass:'active',
})

export default router
