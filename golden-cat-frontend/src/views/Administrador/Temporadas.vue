<template>
  <v-layout row wrap>
    <v-flex xs12 sm6>
     <!-- <flat-pickr v-model="date" placeholder="Select date" :config="configFlat"></flat-pickr> -->
     <!-- <input type="text" @click="fecha" id="myinput" placeholder="fecha"> -->
     <v-text-field label="seleccionar fechas" ref="myinput" v-model="range"></v-text-field>
    </v-flex>
    <v-flex xs12 sm6>
      {{date}}
    </v-flex>
  </v-layout>
</template>

<script>
import { Spanish } from "flatpickr/dist/l10n/es.js"
import "flatpickr/dist/flatpickr.css"
import 'flatpickr/dist/themes/material_blue.css'

export default {
  name: 'temporadas',
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  mounted() {
    const myInput = this.$refs.myinput.$el.querySelector('input')
    const flat = flatpickr(myInput, this.configFlat)   
  },
  data: () => ({
    date: '',
    menu: false,
    configFlat :{ mode: 'range', dateFormat: "Y-m-d H:i", locale: Spanish },
    range: ''
  })
}

</script>

<style>
  v-menu{
    padding: 20px,20px,auto,auto;
  }
</style>
