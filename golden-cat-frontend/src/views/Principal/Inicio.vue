<template>
  <div>
    <h1>Encuentra tu Habitacion</h1>
    <v-layout wrap row>
      <v-flex xs12 sm6 md3>
        <v-text-field label="Fecha de Entrada" outline ></v-text-field>
      </v-flex>
       <v-flex xs12 sm6 md3>
        <v-text-field label="Fecha de Salida" outline></v-text-field>
      </v-flex>
       <v-flex xs12 sm6 md3>
        <v-text-field label="Numero de Adultos" outline></v-text-field>
      </v-flex>
       <v-flex xs12 sm6 md3>
        <v-text-field label="Numero de Niños" outline></v-text-field>
      </v-flex>
    </v-layout>
  </div>  
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
<style>
.v-text-field--outline > .v-input__control > .v-input__slot
{
  background-color: white !important
}
</style>

