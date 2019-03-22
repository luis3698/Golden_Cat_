
<template>
  <v-app id="inspire">
    <v-toolbar  dark  app color="indigo darken-4">

        <v-layout row wrap>
            <v-flex xs2>
          <v-img height="60px" :src="logo" ></v-img>
        </v-flex>
        </v-layout>
        <v-spacer></v-spacer>

        <v-btn small flat left>inicio
          <v-icon small>business</v-icon>
        </v-btn>
        <v-btn small flat left>Servicios extra
          <v-icon small>bookmarks</v-icon>
        </v-btn>
        <v-btn small flat left>Contactanos
          <v-icon small>email</v-icon>
        </v-btn>
        <v-btn small flat left>¿que es golden cat?
          <v-icon small>help</v-icon>
        </v-btn>
        <div class="text-xs-center">
    <v-menu >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" small flat left> cuenta
          <v-icon small>account_circle</v-icon>
        </v-btn>
      </template>

      <v-card >
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-list-tile-avatar>

            <v-list-tile-content >
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list >
           <v-list-tile>
            <v-btn small flat>reservas
          <v-icon small>assignment</v-icon>
        </v-btn>
          </v-list-tile>

          <v-list-tile>
            <v-btn small flat>configuracion
          <v-icon small>settings</v-icon>
        </v-btn>
          </v-list-tile>

          <v-list-tile>
            <v-btn small flat>cerrar sesion
          <v-icon small>close</v-icon>
        </v-btn>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
  </div>
    </v-toolbar>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <router-view></router-view>
      </v-layout>
    </v-container>
  </v-content>
   <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-xs-center" color="indigo darken-4"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum
          sit amet. Mauris cursus commodo interdum. Praesent ut risus
          eget metus luctus accumsan id ultrices nunc. Sed at orci sed
          massa consectetur dignissim a sit amet dui. Duis commodo vitae
          velit et faucibus. Morbi vehicula lacinia malesuada. Nulla
          placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
          Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;2018 — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
  </v-app>
</template>

<script>
import Logo from '@/assets/golden_cat.png'
export default {
  data: () => ({

    drawer: null,
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ],
    logo: Logo

  }),
  props: {
    source: String
  }
}

</script>

<style scoped >

</style>
