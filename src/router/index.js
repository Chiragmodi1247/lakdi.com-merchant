import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
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
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/home', component: Home, beforeEnter: requireAuth  },
    { path: '/merchantHome', component: merchantHome, beforeEnter: requireAuth  },
    { path: '/profile', component: MerchantProfile, beforeEnter: requireAuth  },
    { path: '/soldproducts', component: SoldProducts, beforeEnter: requireAuth  },
    { path: '/about', component: About },
    { path: '/addProduct', component: newProduct, beforeEnter: requireAuth  },
    { path: '/login', component: Login },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
})

export default router
