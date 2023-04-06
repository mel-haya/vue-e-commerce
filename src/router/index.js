import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/LandingView.vue'
import ProductView from '../views/ProductView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import CartView from '../views/CartView'
import StoreView from '../views/StoreView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  },
  {
    path: '/store/:category?',
    name: 'store',
    component: StoreView,
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFoundView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
