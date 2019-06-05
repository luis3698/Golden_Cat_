<template>
  <section>
    <v-container class="barrabuscar">
         <v-div class="hotelportada">
        <p class="color text-md-center display-2  " black >Encuenta tu Habitacion</p>
      <v-container class="contenedor  text-xs-center" pa-2>
        <v-layout   class=" justify-space-between row wrap  align-center">
          <v-flex xs12 sm6 md4 pb-0>
         <VueHotelDatepicker class=" indigo--text"  placeholder="fecha inicio / fecha final" />
          </v-flex>
          <v-flex xs12 sm6 md2>
            <v-select :items="itemsnumeroadultos" color="blue" label="Numero de adultos"></v-select>
          </v-flex>
          <v-flex xs12 sm6 md2>
              <v-select :items="itemsnumeroniños" color="blue" label="Numero de niños"></v-select>
          </v-flex>
          <v-flex xs12 sm6 md2>
            <v-btn round color="blue" @click="e1 = 0, dialogConfirmar = false , reservaConfirm = true"  ><v-icon color="black">search</v-icon></v-btn>
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
    </v-container >

    <v-stepper   v-show="!reservaConfirm">














       <v-layout row wrap>
        <v-flex xs12 sm6 md3  >
          <v-card dark tile flat color="red">
            <v-card-text  class="MainImage11">
            
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 >
          <v-card dark tile flat color="black">
            <v-card-text class="MainImage11">
             
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 >
          <v-card dark tile flat color="blue">
            <v-card-text class="MainImage11">
           
            </v-card-text>
          </v-card>
        </v-flex>
         <v-flex xs12 sm6 md3 >
          <v-card dark tile flat color="pink">
            <v-card-text class="MainImage11">
           
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>




      





      <v-layout row >
        <v-flex xs12 >
          <v-card dark tile flat color="transparent" >
            <v-card-text>
              <h3 class="letra2 text-md-center indigo--text  "  >La mejor opcion para ti y <br>tu familia</h3>
               <h3 class=" text-md-center" >Hotel GOLDEN CAT tu mejor opcion</h3>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 >
          <v-card dark tile flat color="transparent">
            <v-card-text>
               <v-img class="imagen1"  :src="portadahotel" ></v-img>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4  >
          <v-card dark tile flat color="transparent">
            <v-card-text class="MainImage1">
              <div class = "Container" >
                  <div class = "MainImage" >
                    <img :src="familia" alt = "Efecto CSS" >
                    <div class = "MainText" >
                        <div class = "SecText" >
                          <h2>  <span id="GreenText" class="letra22">GRUPOS FAMILIARES </span> </h2>
                        
                        </div>
                    </div>
                  </div>
               </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 >
          <v-card dark tile flat color="transparent">
            <v-card-text class="MainImage1">
              <div class = "Container" >
                  <div class = "MainImage" > <img :src = "pareja" alt = "Efecto CSS" >
                    <div class = "MainText" >
                        <div class = "SecText" >
                          <h2>  <span id="GreenText" class="letra22"> BODAS </span> </h2>
                           
                        </div>
                    </div>
                  </div>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 >
          <v-card dark tile flat color="transparent">
            <v-card-text class="MainImage1">
              <div class = "Container" >
                  <div class = "MainImage" > <img :src = "conferencia" alt = "Efecto CSS" >
                    <div class = "MainText" >
                        <div class = "SecText" >
                          <h2>  <span id="GreenText" class="letra22"> CONVENCIONES </span> </h2>
                        
                        </div>
                    </div>
                  </div>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
 
  
        
      
    </v-stepper>
    <v-container  v-show="reservaConfirm">
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
    </v-container>
  </section>
</template>
<script>
import VueHotelDatepicker from '@northwalker/vue-hotel-datepicker'
import PORTADAHOTEL from '@/assets/portadahotel.jpg'
import PAREJA from '@/assets/pareja.jpg'
import CONFERENCIA from '@/assets/conferencia.jpg'
import FAMILIA from '@/assets/familia.jpg'
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
    itemsnumeroadultos: ['1', '2', '3', '4', '5'],
    itemsnumeroniños: ['1', '2', '3', '4', '5'],
    reservaConfirm: false,
    acomodacion: '',
    habitacion2: HABITACION2,
    pareja: PAREJA,
    portadahotel: PORTADAHOTEL,
    conferencia: CONFERENCIA,
    familia: FAMILIA,
    show1: false
    
  }),
    components: {
    VueHotelDatepicker
  }
  //
  // ... skip
  //
}

</script>
 <style scoped>
 @import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');

.MainImage11 {
 width: 300px;
 height: 200px;
 overflow: hidden;

}
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
  background: rgb(34, 27, 70);;
  padding: 20px;
  border-radius: 20px 20px 20px 20px;

}
.colorfondo{
  background-color: black;
}
.color{
  background-color: transparent
}
.barrabuscar{
  width: 1300px;
}
.Container {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
}

.MainImage {
 width: 300px;
 height: 600px;
 overflow: hidden;

}

.MainImage img {
 width: 100%;
 transition: .7s;
}

.Container:hover .MainImage img {
 transform: rotate(-10deg) scale(1.3);
 filter: blur(2px);
 filter: contrast(150%);
 filter: brightness(.5);
 opacity: .7;
}

.MainText {
 position: absolute;
 top: 30px;
 left: 30px;
 right: 30px;
 bottom: 30px;
}

.SecText {
  color: #fff;
  text-transform: uppercase;
  padding: 0 20px;
  opacity: 0;
  /*Opacity: 0 --- para que el texto solo sea visible cuando
  pase el puntero del ratón por encima de la imagen (efecto hover)*/
}

.SecText h2 {
  color: black;
  font-size: 25px;
}

.SecText h2 #GreenText {
  color: rgb(0, 17, 253);
  padding-bottom: 3px;
  border-bottom: 2px solid #fff;
}

.SecText p {
 position: absolute;
 top: 180px;
 width: 250px;
 border-left: 4px solid rgb(0, 17, 253) ;
 padding: 0 10px;
}

/*Toque final*/


.MainText::after {
 content: '';
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 transition: .7s;
 
}

.MainText::before {
 border-top: 4px solid #000;
 border-bottom: 1px solid #fff;
 transform: scale(0,1);
 /*transform: scale(1,0);*/
}

.MainText::after {
 border-left: 1px solid #fff;
 border-right: 1px solid #fff;
 transform: scale(1,0);
 /*transform: scale(0,1);*/
}

.Container:hover .MainText::before,
.Container:hover .MainText::after {
 transform: scale(1,1);
}

.Container:hover .SecText {
 opacity: 1;
}
.MainImage1 {
 width: 250px;
 height: 700px;
 }

 .letra2{
   font-family: 'Dancing Script', cursive;
    font-size: 60px;
 }
 .letra22{
 font-family: 'Permanent Marker', cursive;
 
 }
.imagen1{
  width: 100%;
 height: 250px;
 
}

</style>
