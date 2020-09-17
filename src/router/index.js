import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Profile = () => import('views/profile/Profile')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
