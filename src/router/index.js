import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import merchantHome from '../views/MerchantHome.vue'
import newProduct from '../components/NewProduct.vue'
import SoldProducts from '../components/SoldProducts.vue'
import MerchantProfile from '../components/MerchantProfile.vue'

import { auth ,dummy} from "../firebaseConfig";
// import store from '../store'

Vue.use(VueRouter)

function requireAuth (to, from, next) {
  // if (!store.state.isLogged) 
  if (!dummy) 
  {
    next({
      path: '/login',
      // query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

function notRequireAuth (to, from, next) {
  // if (!store.state.isLogged) 
  if (dummy) 
  {
    next({
      path: '/',
      // query: { redirect: to.fullPath }
    })
  } else {
    next({
      // query: { redirect: to.fullPath }
    })
  }
}


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/home', component: Home, beforeEnter: requireAuth  },
    { path: '/', component: merchantHome, beforeEnter: requireAuth  },
    { path: '/profile', component: MerchantProfile, beforeEnter: requireAuth  },
    { path: '/soldproducts', component: SoldProducts, beforeEnter: requireAuth  },
    { path: '/addProduct', component: newProduct, beforeEnter: requireAuth  },
    { path: '/login', component: Login, beforeEnter: notRequireAuth },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/login')
      }
    }
  ]
})

export default router
