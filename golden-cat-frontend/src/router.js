import Vue from 'vue'
import Router from 'vue-router'
import Registro from './views/Registro.vue'
import Contactos from './views/Contactos.vue'
import Servicios from './views/Servicios.vue'

import RestaurarContrasena from './views/restaurar_contraseña.vue'
import Inicio from './views/Inicio.vue'
import Reservas from './views/Reservas.vue'
import QueEsGoldenCat from './views/Que_es_golden_cat.vue'

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
    {
      path: '/contactos',
      name: 'contactos',
      component: Contactos
    },
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
