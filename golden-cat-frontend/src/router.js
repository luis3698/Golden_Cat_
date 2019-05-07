import Vue from 'vue'
import Router from 'vue-router'
import Registro from './views/Principal/Registro.vue'
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
import Temporadas from './views/Administrador/Temporadas.vue'
import ReservasCliente from './views/Principal/Reservas_Cliente.vue'
import Contabilidad from './views/Administrador/Contabilidad.vue'
import DatosCompra from './views/Principal/Datos_compra.vue'
import PreguntasFrecuentes from './views/Principal/PreguntasFrecuentes.vue'
import TerminosCondiciones from './views/Principal/TerminosCondiciones.vue'
import Eventos from './views/Principal/Eventos.vue'
import ConsultaPeticiones from './views/Principal/ConsultasPeticiones.vue'

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
      path: '/registro',
      name: 'registro',
      component: Registro
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
      path: '/Que_es_golden_cat',
      name: 'Que_es_golden_cat',
      component: QueEsGoldenCat
    },
    {
      path: '/administrador/reservas',
      name: 'reservas',
      component: Reservas
    },
    {
      path: '/contactanos',
      name: 'contactanos',
      component: contactanos
    },
    {
      path: '/configuracion',
      name: 'configuracion',
      component: Configuracion
    },
    {
      path: '/administrador/usuarios',
      name: 'adiministrarusuarios',
      component: AdministrarUsuarios
    },
    {
      path: '/administrador/realizarreserva',
      name: 'realizarreserva',
      component: Realizarreserva
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/administrador/configuracion',
      name: 'configuracionadmi',
      component: Configuracionadmi
    },
    {
      path: '/administrador/temporadas',
      name: 'temporadas',
      component: Temporadas
    },
    {
      path: '/Reservas_Cliente',
      name: 'Reservas_Cliente',
      component: ReservasCliente
    },
    {
      path: '/administrador/contabilidad',
      name: 'contabilidad',
      component: Contabilidad
    },
    {
      path: '/Datos_Compra',
      name: 'Datos_Compra',
      component: DatosCompra
    },
    {
      path: '/PreguntasFrecuentes',
      name: 'PreguntasFrecuentes',
      componet: PreguntasFrecuentes
    },
    {
      path: '/TerminosCondiciones',
      name: 'TerminosCondiciones',
      componet: TerminosCondiciones
    },
    {
      path: '/Eventos',
      name: 'Eventos',
      componet: Eventos
    },
    {
      path: '/ConsultaPeticiones',
      name: 'ConsultaPeticiones',
      componet: ConsultaPeticiones
    }
  ]
})
