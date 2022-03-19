import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ViewProduct from '../views/ViewProduct.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:slug',
    name: 'Product',
    component: ViewProduct
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
