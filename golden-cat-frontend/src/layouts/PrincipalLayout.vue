
<template>
  <v-app id="inspire">
    <v-toolbar color="cyan" dark fixed app>
      <v-spacer></v-spacer>
        <v-layout row wrap>
           <v-img  height="60px" :src="logo" ></v-img>
      </v-layout>
        <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
         <v-btn small flat >inicio
          <v-icon>business</v-icon>
        </v-btn>
        <v-btn small flat>Servicios extra
          <v-icon>bookmarks</v-icon>
        </v-btn>
        <v-btn small flat>Contactanos
          <v-icon>email</v-icon>
        </v-btn>
        <v-btn small flat>¿que es golden cat?
          <v-icon>help</v-icon>
        </v-btn>
        <div class="text-xs-center">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-height="2" :nudge-width="1" offset-x>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" small flat> cuenta
          <v-icon>account_circle</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
              <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                <v-icon>favorite</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list >
          <v-list-tile>
            <v-btn small flat>configuracion
          <v-icon>settings</v-icon>
        </v-btn>
          </v-list-tile>

          <v-list-tile>
            <v-btn small flat>cerrar sesion
          <v-icon>close</v-icon>
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
        </v-layout>
      </v-container>
    </v-content>
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
