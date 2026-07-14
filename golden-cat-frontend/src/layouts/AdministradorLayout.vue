<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
      fixed
      :clipped="$vuetify.breakpoint.mdAndUp"
      v-model="drawer"
      width="260"
      dark
      color="primary"
    >
      <v-list dense>
        <v-subheader class="accent--text text-uppercase">Panel de administración</v-subheader>
        <v-list-tile
          v-for="item in items"
          :key="item.link"
          @click="go(item.link)"
          :class="{ 'active-tile': $route.path.toLowerCase() === item.link.toLowerCase() }"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      fixed
      dark
      color="primary"
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      flat
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-avatar tile size="38" class="mr-2"><img :src="logo" alt="Golden Cat"></v-avatar>
      <v-toolbar-title class="hidden-sm-and-down">Golden Cat · Admin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y :close-on-content-click="false" v-model="menu">
        <template v-slot:activator="{ on }">
          <v-btn flat dark v-on="on">
            <v-icon left>perm_identity</v-icon>
            <span class="hidden-sm-and-down">{{ adminName }}</span>
          </v-btn>
        </template>
        <v-card width="240">
          <v-list>
            <v-list-tile avatar>
              <v-list-tile-avatar color="accent">
                <span class="white--text">{{ adminInitials }}</span>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ adminName }}</v-list-tile-title>
                <v-list-tile-sub-title>Administrador</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile to="/administrador/configuracion">
              <v-list-tile-action><v-icon>settings</v-icon></v-list-tile-action>
              <v-list-tile-title>Configuración</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="logout">
              <v-list-tile-action><v-icon>power_settings_new</v-icon></v-list-tile-action>
              <v-list-tile-title>Cerrar sesión</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>
    </v-toolbar>

    <v-content class="admin-content">
      <v-container fluid grid-list-lg>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '@/assets/golden_cat.png'

export default {
  name: 'administrador-layout',
  computed: {
    ...mapState(['user']),
    adminName () {
      return this.user && this.user.name ? `${this.user.name} ${this.user.lastName || ''}`.trim() : 'Administrador'
    },
    adminInitials () {
      if (!this.user || !this.user.name) return 'A'
      return ((this.user.name || '').charAt(0) + (this.user.lastName || '').charAt(0)).toUpperCase()
    }
  },
  data: () => ({
    menu: false,
    drawer: null,
    logo: Logo,
    items: [
      { icon: 'supervisor_account', text: 'Usuarios', link: '/administrador/usuarios' },
      { icon: 'event_available', text: 'Realizar reserva', link: '/administrador/realizarreserva' },
      { icon: 'trending_up', text: 'Contabilidad', link: '/administrador/contabilidad' },
      { icon: 'meeting_room', text: 'Habitaciones', link: '/administrador/habitaciones' },
      { icon: 'burst_mode', text: 'Galería de imágenes', link: '/administrador/CargarImagenes' }
    ]
  }),
  methods: {
    go (link) {
      if (this.$route.path !== link) this.$router.push(link)
    },
    logout () {
      this.$store.commit('SET_USER', {})
      this.$store.commit('SET_LAYOUT', 'principal-layout')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.admin-content {
  background-color: #eef1f6;
}
.active-tile {
  background-color: rgba(255, 255, 255, 0.12);
  border-left: 3px solid var(--v-accent-base, #C9A227);
}
</style>
