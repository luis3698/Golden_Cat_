
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      app
    >
      <v-list dense>
        <v-list-tile  @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>inciar sesion</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>crear cuenta</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="cyan" dark fixed app>
      <v-spacer></v-spacer>
        <v-layout row wrap>
        <v-flex xs2>
           <v-img src="@/assets/logo.png" ></v-img>
        </v-flex>
      </v-layout>

        <v-spacer ></v-spacer>
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
      <v-btn  flat @click.stop="drawer = !drawer">cuenta
      <v-icon>account_circle</v-icon>
      </v-btn>
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
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}


</script>