import { createRouter, createWebHistory } from 'vue-router'
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
