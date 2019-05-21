<template>
  <div class=" darken-2 text-xs-center" id="app">
    <v-div class="hotelportada">
      <v-container >
        <p class="color text-md-center display-2  " black >Encuenta tu Habitacion</p>
      </v-container>
      <v-container class="contenedor  text-xs-center" pa-2>
        <v-layout color="blue"  class=" justify-space-between row wrap align-center">
          <v-flex xs12 sm6 md2 pb-0>
            <v-text-field id="date" color="blue" type="date" outline hide-details label="fecha inicial"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md2>
            <v-text-field id="date" color="blue" type="date" outline hide-details label="fecha final"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md2>
            <v-text-field color="blue"  label="Numero de adultos" outline hide-details></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md2>
            <v-text-field  color="blue" label="Numero de niños" outline hide-details></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md2>
            <v-btn round color="blue" ><v-icon color="black">search</v-icon></v-btn>
          </v-flex>
        </v-layout>
        <v-layout color="light-green accent-4"  class="align-center justify-start row align-center">
          <v-flex xs12 sm6 md6>
            <v-radio-group v-model="acomodacion" row>
              <v-radio color="blue" label="individual" value="radio-1"></v-radio>
              <v-radio color="blue" label="doble" value="radio-2"></v-radio>
              <v-radio color="blue" label="suite" value="radio-3"></v-radio>
              <v-radio color="blue" label="matrimonial" value="radio-4"></v-radio>
            </v-radio-group>
          </v-flex>
        </v-layout>
      </v-container>
    </v-div>
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
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text  class="margen text-sm-left">tipo de habitacion</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text  class="margen " >sencilla
                    </v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left">2</v-card-text>
                  </v-flex>
                  <v-flex  xs6>
                    <v-card-text class="margen" v-model="email">adultos:</v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left" >2</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text class="margen" >niños:</v-card-text>
                  </v-flex>
                </v-layout>
               
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </template>
    </v-layout>
  </div>
</template>
<script>
import api from '@/plugins/api'
import HABITACION2 from '@/assets/habitacion2.png'

export default {
  name: 'inicio',
  async created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
    const data = await api.get('/user', {
      
    })

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
.margen {
    padding: 3px;
}
.contenedor {
  background: rgba(25, 125, 240, 0.527);;
  padding: 20px;
  border-radius: 20px 20px 20px 20px;

}
.colorfondo{
  background-color: black;
}
</style>
