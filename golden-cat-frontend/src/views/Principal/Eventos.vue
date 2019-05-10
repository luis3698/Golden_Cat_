<template>
<v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-card dark tile flat >
            <v-img class="imgcopas" :src="copas"></v-img>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 >
          <v-card dark tile flat color="transparent" >
            <h3 class="fueteEVENTOSYCELEBRACIONESENDEGOLDENCAT">EVENTOS Y CELEBRACIONES EN<br>GOLDENCAT</h3>
            <p>El hotel Golden cat ofrece sus planes bajo diferentes modalidades para eventos y convenciones corporativas.</p>
            <p>Nuestros Hoteles cuentan con habitaciones cómodamente dotadas y ofrecemos servicios adicionales de spa, restaurantes, bar abierto, piscina y mas.</p>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs4  >
          <v-container>
          <v-card>
          <v-img :src="familia"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="letraEVENTOS" >GRUPOS FAMILIARES</h3>
            </div>
          </v-card-title>

           <v-dialog v-model="dialogGRUPOSFAMILIARES" width="500" >
        <template v-slot:activator="{ on }">
          <v-btn color="indigo darken-4" dark v-on="on" >
            Mas detalles
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline " primary-title >
            GRUPOS FAMILIARES
          </v-card-title>
          <v-card-text>Tenemos a tu disposición todos nuestros recursos para hacer que tu evento
          sea algo único e inolvidable, al mejor estilo Golden cat con TODO INCLUIDO.
          <br> contactanos a : <b>GoldenCat@gmail.com </b>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="indigo darken-1" flat @click="dialogGRUPOSFAMILIARES = false" >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

        </v-card>
        </v-container>
        </v-flex>
        <v-flex xs4  >
          <v-container>
             <v-card>
           <v-img  :src="pareja"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="letraEVENTOS">BODAS</h3>
            </div>
          </v-card-title>
          <v-card-actions>
        b
          </v-card-actions>
        </v-card>
        </v-container>
        </v-flex>
        <v-flex xs4 >
          <v-container>
             <v-card>
          <v-img  :src="conferencia"></v-img>
          <v-card-title primary-title>
            <div >
              <h3 class="letraEVENTOS ">CONVENCIONES</h3>
            </div>
          </v-card-title>
          <v-card-actions>
        b
          </v-card-actions>
        </v-card>
        </v-container>
        </v-flex>
      </v-layout>
    </v-container>
    </template>
<script>
import COPAS from '@/assets/copas.jpg'
import PAREJA from '@/assets/pareja.jpg'
import CONFERENCIA from '@/assets/conferencia.jpg'
import FAMILIA from '@/assets/familia.jpg'
export default {
  data () {
    return {
      copas: COPAS,
      pareja: PAREJA,
      conferencia: CONFERENCIA,
      familia: FAMILIA,
      dialogGRUPOSFAMILIARES: false
    }
  }

}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway');
@import url('https://fonts.googleapis.com/css?family=Barlow');
.imgcopas{
height:160px;
}
.fueteEVENTOSYCELEBRACIONESENDEGOLDENCAT{
   font-family: 'Barlow', sans-serif;
    font-size: 30px;
}
.letraEVENTOS{
 font-family: 'Raleway', sans-serif;
  font-size: 25px;

}
</style>
