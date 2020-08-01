import { createRouter, createWebHistory } from 'vue-router'
import { getUser } from './service/auth.js'
const Dashboard= () => import('./views/Dashboard.vue')
const Login = () => import('./views/Login.vue')
const SignUp = () => import('./views/SignUp.vue')
const NotFound = () => import('./views/NotFound.vue')

export const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      component: Login,
      name: 'Login'
    },
    {
      path: '/dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      name: 'Dashboard'
    },
    {
      path: '/sign-up',
      component: SignUp,
      name: 'SignUp'
    },
    { 
      path: '/:data(.*)',
      component: NotFound,
      name: 'NotFound'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === from.name) {
    next()
  } else {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      const user = getUser()
      user === null
        ? next({ name: 'Login' })
        : next()
    } else {
      next()
    }
  }
})