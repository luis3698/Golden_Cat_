<template>
  <div class=" darken-2 text-xs-center" id="app">
    <v-container>
       <p class="text-md-center display-2  font-weight-bold">Encuenta tu Habitacion</p>
    </v-container>
    <v-container class="indigo" pa-2>
      <v-layout color="light-green accent-4"  class=" justify-space-between row wrap align-center">
        <v-flex xs12 sm6 md2 pb-0>
          <v-text-field  label="Fecha de Entrada" outline hide-details></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md2>
            <v-text-field  label="Fecha de Salida" outline hide-details ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md2>
          <v-text-field  label="Numero de Adultos" outline hide-details></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md2>
          <v-text-field   label="Numero de niños" outline hide-details></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md2>
          <v-btn round color="white" ><v-icon color="black">search</v-icon></v-btn>
         </v-flex>
      </v-layout>
      <v-layout color="light-green accent-4"  class="align-center justify-start row align-center">
          <v-flex xs12 sm6 md6>
          <v-radio-group v-model="acomodacion" row>
            <v-radio color="light-green accent-4" label="individual" value="radio-1"></v-radio>
            <v-radio color="light-green accent-4" label="doble" value="radio-2"></v-radio>
            <v-radio color="light-green accent-4" label="suite" value="radio-3"></v-radio>
            <v-radio color="light-green accent-4" label="matrimonial" value="radio-4"></v-radio>
          </v-radio-group>
         </v-flex>
      </v-layout>
      </v-container>
    <v-layout wrap justify-space-around row>
      <template v-for="n in 12">
        <v-flex xs12 sm3 :key="n" mb-1 pa-2>
             <v-hover>
      <v-card class="mx-auto" slot-scope="{ hover }" color="grey darken-3" max-width="600" >
        <v-img :aspect-ratio="16/9" :src="habitacion2">
          <v-expand-transition>
            <div  v-if="hover"  class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"  style="height: 100%;" >
              35.000$
            </div>
          </v-expand-transition>
        </v-img>
        <v-card-text  class="pt-4"  style="position: relative;">
          <v-btn  absolute color="blue" class="white--text" fab  right top to="/Datos_Compra" >
            <v-icon>local_grocery_store</v-icon>
          </v-btn>
             <v-card-actions>
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

        </v-card-text>
      </v-card>
    </v-hover>
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
    acomodacion: '',
    habitacion2: HABITACION2,
    show1: false
  })
}
</script>
<style scoped>
nav.buscar>.v-toolbar__content{
  background-color: aqua !important;

}
.v-card--reveal {
align-items: center;
bottom: 0;
justify-content: center;
opacity: .5;
position: absolute;
width: 100%;
}
</style>
