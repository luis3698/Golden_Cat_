import Vue from 'vue'
import Router from 'vue-router'
import PrincipalLayout from './layouts/PrincipalLayout.vue'
import AdministradorlLayout from './layouts/AdministradorLayout.vue'
import Registro from './views/Registro.vue'

import Inicio from './views/Inicio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'principal',
      component: PrincipalLayout
    },
    {
      path: '/administrador',
      name: 'administrador',
      component: AdministradorlLayout
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
    }

  ]
})
