<template>
  <v-app  id="inspire" dark>
    <v-toolbar color="indigo darken-4" app fixed clipped-left>
      <v-layout row wrap>
        <v-flex xs3>
          <v-img height="65px" :src="logo" ></v-img>
        </v-flex>
      </v-layout>

      <!-- <v-toolbar-title  left>Hotel Golden Cat </v-toolbar-title > -->

        <v-spacer></v-spacer>
         <v-btn  flat>Inicio
          <v-icon>business</v-icon>
        </v-btn>
        <v-btn flat>Servicios extra
          <v-icon>bookmarks</v-icon>
        </v-btn>
        <v-btn flat>Contactanos
          <v-icon>email</v-icon>
        </v-btn>
        <v-btn flat>¿Que es golden cat
          <v-icon >help</v-icon>
        </v-btn>
        <v-btn flat>Cuenta
          <v-icon >account_circle</v-icon>
        </v-btn>
    </v-toolbar>
     <v-toolbar-title  left>Hotel Golden Cat </v-toolbar-title >
  </v-app>

</template>

<script>
import Logo from '@/assets/golden_cat.png'
export default {
  data() {
    return {
      logo: Logo
    }
  }
}

</script>

<style>

</style>
