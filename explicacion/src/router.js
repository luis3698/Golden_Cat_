import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Productos from './views/Productos.vue'
import Servicios from './views/Servicios.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/productos',
    //   name: 'productos',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    {
      path: '/productos',
      name: 'productos',
      component: Productos
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: Servicios
    }
  ]
})
