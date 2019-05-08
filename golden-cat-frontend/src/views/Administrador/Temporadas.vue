<template>
  <v-layout row wrap>
    <v-flex xs12 sm6>
     <!-- <flat-pickr v-model="date" placeholder="Select date" :config="configFlat"></flat-pickr> -->
     <!-- <input type="text" @click="fecha" id="myinput" placeholder="fecha"> -->
     <v-text-field background-color="white" color="white" dark="false" solo class="fecha" label="seleccionar fechas" ref="myinput" v-model="range"></v-text-field>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex>
      <p>{{ radios || 'null' }}</p>
      <v-radio-group light="true" color="white" v-model="radios" :mandatory="false">
        <v-radio class="t1" label="Temporada alta" value="Temporada alta"></v-radio>
        <v-radio class="t1" label="Temporada baja" value="Temporada baja"></v-radio>
      </v-radio-group>
    </v-flex>

       <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="white--text"
      @click="loader = 'loading3'"
    >
      Guardar
      <v-icon right dark>cloud_upload</v-icon>
    </v-btn>

    <v-flex xs12 sm12>
      {{date}}
    </v-flex>
  </v-layout>
</template>

<script>
import { Spanish } from 'flatpickr/dist/l10n/es.js'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/material_blue.css'

export default {
  name: 'temporadas',
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  mounted () {
    const myInput = this.$refs.myinput.$el.querySelector('input')
    const flat = flatpickr(myInput, this.configFlat)
  },
  data: () => ({
    date: '',
    menu: false,
    configFlat: { mode: 'range', dateFormat: 'Y-m-d H:i', locale: Spanish },
    range: '',
    radios: 'Temporada alta'
  })
}

</script>

<style scoped>

</style>
