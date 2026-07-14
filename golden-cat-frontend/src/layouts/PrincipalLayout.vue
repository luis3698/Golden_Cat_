<template>
  <v-app id="inspire">
    <!-- Menú lateral (móvil) -->
    <v-navigation-drawer v-model="drawer" app temporary dark color="primary">
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar><img :src="logo" alt="Golden Cat"></v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="title">Golden Cat</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile v-for="item in nav" :key="item.to" :to="item.to">
          <v-list-tile-action><v-icon>{{ item.icon }}</v-icon></v-list-tile-action>
          <v-list-tile-title>{{ item.label }}</v-list-tile-title>
        </v-list-tile>
        <v-divider></v-divider>
        <template v-if="isLogged">
          <v-list-tile to="/Reservas_Cliente">
            <v-list-tile-action><v-icon>assignment</v-icon></v-list-tile-action>
            <v-list-tile-title>Mis reservas</v-list-tile-title>
          </v-list-tile>
          <v-list-tile to="/configuracion">
            <v-list-tile-action><v-icon>settings</v-icon></v-list-tile-action>
            <v-list-tile-title>Configuración</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-action><v-icon>logout</v-icon></v-list-tile-action>
            <v-list-tile-title>Cerrar sesión</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-tile v-else to="/login">
          <v-list-tile-action><v-icon>account_circle</v-icon></v-list-tile-action>
          <v-list-tile-title>Iniciar sesión</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Barra superior -->
    <v-toolbar app color="primary" dark flat>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <router-link to="/" class="brand">
        <v-avatar tile size="40" class="mr-2"><img :src="logo" alt="Golden Cat"></v-avatar>
        <span class="brand-name hidden-sm-and-down">Golden Cat</span>
      </router-link>
      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn v-for="item in nav" :key="item.to" flat small :to="item.to">
          <v-icon small left>{{ item.icon }}</v-icon>{{ item.label }}
        </v-btn>

        <v-btn v-if="!isLogged" flat small to="/login">
          <v-icon small left>account_circle</v-icon>Iniciar sesión
        </v-btn>

        <v-menu v-else offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" flat small>
              <v-avatar size="28" color="accent" class="mr-2">
                <span class="white--text caption">{{ initials }}</span>
              </v-avatar>
              {{ user.name }}
            </v-btn>
          </template>
          <v-card width="230">
            <v-list>
              <v-list-tile avatar>
                <v-list-tile-avatar color="primary">
                  <span class="white--text">{{ initials }}</span>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ user.name }} {{ user.lastName }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ user.email }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-tile to="/Reservas_Cliente">
                <v-list-tile-action><v-icon>assignment</v-icon></v-list-tile-action>
                <v-list-tile-title>Mis reservas</v-list-tile-title>
              </v-list-tile>
              <v-list-tile to="/configuracion">
                <v-list-tile-action><v-icon>settings</v-icon></v-list-tile-action>
                <v-list-tile-title>Configuración</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="logout">
                <v-list-tile-action><v-icon>logout</v-icon></v-list-tile-action>
                <v-list-tile-title>Cerrar sesión</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu>
      </template>
    </v-toolbar>

    <!-- Contenido -->
    <v-content>
      <router-view></router-view>
    </v-content>

    <!-- Pie de página -->
    <v-footer color="secondary" dark height="auto">
      <v-container grid-list-lg py-4>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <div class="title mb-2">Golden Cat</div>
            <p class="caption">Hotel boutique. Experiencias de viaje únicas a través de la sorpresa y la diversión.</p>
            <v-btn v-for="icon in icons" :key="icon" icon small dark class="ml-0 mr-2">
              <v-icon size="20">{{ icon }}</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs6 sm4>
            <div class="subheading mb-2">Información</div>
            <div><v-btn flat small class="footer-link" to="/contactanos">Contáctanos</v-btn></div>
            <div><v-btn flat small class="footer-link" to="/servicios">Servicios extra</v-btn></div>
            <div><v-btn flat small class="footer-link" to="/Que_es_golden_cat">¿Qué es Golden Cat?</v-btn></div>
            <div><v-btn flat small class="footer-link" to="/Eventos">Eventos</v-btn></div>
          </v-flex>
          <v-flex xs6 sm4>
            <div class="subheading mb-2">Legal</div>
            <div><v-btn flat small class="footer-link" to="/TerminosCondiciones">Términos y condiciones</v-btn></div>
            <div><v-btn flat small class="footer-link" to="/PreguntasFrecuentes">Preguntas frecuentes</v-btn></div>
            <div class="mt-3">
              <v-img :src="imgtarjeta" max-width="150" contain></v-img>
            </div>
          </v-flex>
        </v-layout>
        <v-divider class="my-3"></v-divider>
        <div class="text-xs-center caption">© {{ year }} Golden Cat · Todos los derechos reservados.</div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import IMGTARJETA from '@/assets/tarjetas.png'
import Logo from '@/assets/golden_cat.png'

export default {
  name: 'principal-layout',
  computed: {
    ...mapState(['user']),
    isLogged () {
      return !!(this.user && this.user.uuid)
    },
    initials () {
      if (!this.user || !this.user.name) return '?'
      const a = (this.user.name || '').charAt(0)
      const b = (this.user.lastName || '').charAt(0)
      return (a + b).toUpperCase()
    }
  },
  data: () => ({
    drawer: false,
    year: new Date().getFullYear(),
    nav: [
      { label: 'Inicio', to: '/', icon: 'home' },
      { label: 'Servicios', to: '/servicios', icon: 'room_service' },
      { label: 'Contáctanos', to: '/contactanos', icon: 'email' },
      { label: 'Nosotros', to: '/Que_es_golden_cat', icon: 'info' },
      { label: 'Eventos', to: '/Eventos', icon: 'event' }
    ],
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-instagram',
      'fab fa-youtube'
    ],
    imgtarjeta: IMGTARJETA,
    logo: Logo
  }),
  methods: {
    logout () {
      this.$store.commit('SET_USER', {})
      if (this.$route.path !== '/login') this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}
.brand-name {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: .5px;
  color: #fff;
}
.footer-link {
  text-transform: none;
  margin: 0;
  padding: 0 6px;
}
</style>
