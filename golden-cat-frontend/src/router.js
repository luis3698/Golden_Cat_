import Vue from 'vue'
import Router from 'vue-router'
import Registro from './views/Principal/Registro.vue'
// import Contactos from './views/Principal/Contactos.vue'
import Servicios from './views/Principal/Servicios.vue'

import RestaurarContrasena from './views/Principal/restaurar_contraseña.vue'
import Inicio from './views/Principal/Inicio.vue'
import Reservas from './views/Administrador/Reservas.vue'
import QueEsGoldenCat from './views/Principal/Que_es_golden_cat.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'principal',
      component: Inicio
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro
    },
    // {
    //   path: '/contactos',
    //   name: 'contactos',
    //   component: Contactos
    // },
    {
      path: '/servicios',
      name: 'servicios',
      component: Servicios
    },
    {
      path: '/restaurar_contraseña',
      name: 'restaurar_contraseña',
      component: RestaurarContrasena
    },
    {
      path: '/Que_es_golden_cat.vue',
      name: 'restaurar_contraseña',
      component: QueEsGoldenCat
    },
    {
      path: '/reservas',
      name: 'reservas',
      component: Reservas
    }
  ]
})
