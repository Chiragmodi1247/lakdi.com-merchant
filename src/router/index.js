import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import merchantHome from '../views/MerchantHome.vue'
import newProduct from '../components/NewProduct.vue'
import SoldProducts from '../components/SoldProducts.vue'
import MerchantProfile from '../components/MerchantProfile.vue'

<<<<<<< HEAD
import { auth, dummy } from "../firebaseConfig";
// import store from '../store'
=======
import { auth } from "../firebaseConfig";
>>>>>>> 3655715b3561e54956b65451696ec8574f5de97e

Vue.use(VueRouter)

function requireAuth (to, from, next) {
<<<<<<< HEAD
  // if (!store.state.isLogged) 
  if (!dummy) 
=======
  if (localStorage.getItem("myToken") == null) 
  // if (!dummy) 
>>>>>>> 3655715b3561e54956b65451696ec8574f5de97e
  {
    next({
      path: '/login',
      // query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

// function notRequireAuth (to, from, next) {
<<<<<<< HEAD
//   // if (!store.state.isLogged) 
//   if (dummy) 
=======
//   if (localStorage.getItem("myToken")) 
//   // if (dummy) 
>>>>>>> 3655715b3561e54956b65451696ec8574f5de97e
//   {
//     next({
//       path: '/',
//       // query: { redirect: to.fullPath }
//     })
//   } else {
//     next({
<<<<<<< HEAD
//       path: '/login',
=======
>>>>>>> 3655715b3561e54956b65451696ec8574f5de97e
//       // query: { redirect: to.fullPath }
//     })
//   }
// }


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/home', component: Home, beforeEnter: requireAuth  },
<<<<<<< HEAD
    { path: '/', component: merchantHome, beforeEnter: requireAuth  },
    { path: '/profile', component: MerchantProfile, beforeEnter: requireAuth  },
    { path: '/soldproducts', component: SoldProducts, beforeEnter: requireAuth  },
    { path: '/addProduct', component: newProduct, beforeEnter: requireAuth  },
    { path: '/login', component: Login },
=======
    { path: '/', component: merchantHome , beforeEnter: requireAuth },
    { path: '/profile', component: MerchantProfile , beforeEnter: requireAuth },
    { path: '/soldproducts', component: SoldProducts , beforeEnter: requireAuth },
    { path: '/addProduct', component: newProduct , beforeEnter: requireAuth },
    { path: '/login', component: Login},
>>>>>>> 3655715b3561e54956b65451696ec8574f5de97e
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/login')
      }
    }
  ]
})

export default router
