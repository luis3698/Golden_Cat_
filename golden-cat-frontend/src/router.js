import Vue from 'vue'
import Router from 'vue-router'
import Registro from './views/Principal/Registro.vue'
// import Contactos from './views/Principal/Contactos.vue'
import Servicios from './views/Principal/Servicios.vue'
import Configuracion from './views/Principal/Configuracion.vue'
import RestaurarContrasena from './views/Principal/restaurar_contraseña.vue'
import Inicio from './views/Principal/Inicio.vue'
import Reservas from './views/Administrador/Reservas.vue'
import QueEsGoldenCat from './views/Principal/Que_es_golden_cat.vue'
 
import contactanos from './views/Principal/contactanos.vue'

import AdministrarUsuarios from './views/Administrador/AdministrarUsuarios.vue'
import Realizarreserva from './views/Administrador/Realizarreserva.vue'
import Login from './views/Principal/Login.vue'
import Configuracionadmi from './views/Administrador/Configuracionadmi.vue'
import CustomerSupport from './views/Administrador/CustomerSupport.vue'


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
      path: '/Que_es_golden_cat',
      name: 'Que_es_golden_cat',
      component: QueEsGoldenCat
    },
    {
      path: '/reservas',
      name: 'reservas',
      component: Reservas
    },
    {
<<<<<<< HEAD
      path: '/contactanos',
      name: 'contactanos',
      component: contactanos
=======
      path: '/configuracion',
      name: 'configuracion',
      component: Configuracion
    },
    {
      path: '/administrarusuarios',
      name: 'adiministrarusuarios',
      component: AdministrarUsuarios
    },
    {
      path: '/realizarreserva',
      name: 'realizarreserva',
      component: Realizarreserva
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/configuracionadmi',
      name: 'configuracionadmi',
      component: Configuracionadmi
    },
    {
      path: '/customersupport',
      name: 'customersupport',
      component: CustomerSupport
>>>>>>> 55ed5a94463444570b1cef7528c5ad8091cf5a72
    }
  ]
})
