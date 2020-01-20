import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/login.vue'
import merchantHome from '../views/merchantHome.vue'

import { auth , dummy} from "../firebaseConfig";

Vue.use(VueRouter)

function requireAuth (to, from, next) {
  if (!dummy) {
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
    { path: '/about', component: About },
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
