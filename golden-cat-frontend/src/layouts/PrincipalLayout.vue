
<template>
  <v-app id="inspire">
    <v-toolbar color="indigo darken-4" dark  app>

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

  </v-app>
</template>

<script>
import Logo from '@/assets/golden_cat.png'
export default {
  data: () => ({
    drawer: null,
    logo: Logo
  }),
  props: {
    source: String
  }
}

</script>

<style scoped >

.v-toolbar__content {
    background-color: rgb(45, 5, 83);
}
</style>
