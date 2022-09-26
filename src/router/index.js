import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import CustomersList from '../views/CustomersList';
import ShoppingCart from '../views/ShoppingCart';
import PageNotFound from '../views/NoMatchPage';
import ProductById from '../views/ProductById';
import NewCustomer from '../views/InsertCustomer';
import UpdateCustomer from '../views/UpdateCustomer';

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/customers_list',
    name: 'CustomersList',
    component: CustomersList
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/product/:id',
    name: 'ProductById',
    component: ProductById
  },
  {
    path: '/new_customer',
    name: 'InsertCustomer',
    component: NewCustomer
  },
  {
    path: '/updated_customer/:id',
    name: 'UpdateCustomer',
    component: UpdateCustomer
  },
  {
    path: '*',
    name: 'NoMatchPage',
    component: PageNotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
