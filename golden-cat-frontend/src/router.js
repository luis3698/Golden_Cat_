import Vue from 'vue'
import Router from 'vue-router'
import PrincipalLayout from './layouts/PrincipalLayout.vue'
import AdministradorlLayout from './layouts/AdministradorLayout.vue'
import Registro from './views/Registro.vue'
<<<<<<< HEAD
import restaurar_contraseña from './views/restaurar_contraseña.vue'
=======
import contactos from './views/Contactanos.vue'

>>>>>>> 18061281f252307238486e20ccd4ae7569404b62
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
    },
    {
      path: '/restaurar_contraseña',
      name: 'restaurar',
       component: restaurar_contraseñ
      },
      {
        path: '/contactos',
  
        name: 'contactos',
        component: contactos
      }

  ]
})
