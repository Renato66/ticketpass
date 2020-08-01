import { createRouter, createWebHistory } from 'vue-router'
const Dashboard= () => import('./views/Dashboard.vue')
const Login = () => import('./views/Login.vue')
const Signup = () => import('./views/Signup.vue')
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
      path: '/signup',
      component: Signup,
      name: 'Signup'
    },
    { 
      path: '/:data(.*)',
      component: NotFound,
      name: 'NotFound'
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.name === from.name) {
//     next()
//   } else {
//     if (to.matched.some(record => record.meta.requiresAuth) && to.meta.requiresAuth === undefined) {
//       store.getters['auth/user'].id === null
//         ? next({ name: 'Login' })
//         : next()
//     } else {
//       next()
//     }
//   }
// })