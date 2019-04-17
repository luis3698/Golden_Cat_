<template>
  <div class=" darken-2 text-xs-center" id="app">
    <v-container>
       <p class="text-md-center display-2  font-weight-bold">Encuenta tu Habitacion</p>
    </v-container>
    <v-toolbar color="indigo" >
      <v-layout color="light-green accent-4"  class="justify-space-around row wrap align-center">
        <v-flex xs12 sm6 md2>
          <v-text-field  label="Fecha de Entrada" outline></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md2>
            <v-text-field  label="Fecha de Salida" outline ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md2>
          <v-text-field  label="Numero de Adultos" outline></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md2>
          <v-text-field   label="Numero de niños" outline></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md2>
        <v-btn round color="white" ><v-icon color="black">search</v-icon></v-btn>
         </v-flex>
        
         <v-radio-group v-model="row" row>
        <v-radio color="light-green accent-4" label="individual" value="radio-1"></v-radio>
        <v-radio color="light-green accent-4" label="doble" value="radio-2"></v-radio>
        <v-radio color="light-green accent-4" label="suite" value="radio-3"></v-radio>
        <v-radio color="light-green accent-4" label="matrimonial" value="radio-4"></v-radio>
      </v-radio-group>
      
      </v-layout>
      </v-toolbar>
     
  

    <v-layout wrap justify-space-around row>
      <template v-for="n in 12">
        <v-flex xs12 sm3 :key="n" mb-1 pa-2>
          <v-card>
            <v-img :src="habitacion2" height="200px"></v-img>
            <v-card-title primary-title>
              <div >
               <p class="text-md-center headline  font-weight-bold">Habitacion doble</p>
               
                <span >$ 320.500</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat to="/Datos_Compra">Reservar</v-btn>
              
              <v-spacer></v-spacer>
              <v-btn icon @click="show1 = !show1">
                <v-icon>{{ show1 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-slide-y-transition>
              <v-card-text v-show="show1">
                *Aire acondicionado <br>
                *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                *Caja de seguridad electrónica<br>
                * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                *Minibar con agua, refrescos, cervezas y más ($)<br>
                *Teléfono directo en dormitorio y baño<br>
                *1 cama extra o una cuna (a solicitud)<br>
                *2 Baños
              </v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
  </div>
</template>
<script>
import HABITACION2 from '@/assets/habitacion2.png'
export default {
  name: 'inicio',
  created () {
    
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  data: () => ({
   
      habitacion2: HABITACION2,
    show1: false
  })
}
</script>
<style>
.ancho{
  height: 204px;
}

</style>
