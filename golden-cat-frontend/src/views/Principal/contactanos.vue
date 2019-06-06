<template>
  <div>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe id="gmap_canvas"  width="100%" height="100%" src="https://maps.google.com/maps?q=google&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"  marginheight="0"  marginwidth="0" />
      </div>
    </div>
    <v-card flatcolor="transparent" >
      <v-card-text  class=" text-xs-center">
        <div class="  text-xs-center">
          <span class="letra4">CORREOS ELECTRONICOS</span>
        </div>
        <span >HOTELGOLDENCAT@GMAIL.COM     <v-icon small>email</v-icon>
        </span> <br>
        <span >HOTELGOLDENCAT@HOTMAIL.COM     <v-icon small>email</v-icon>
        </span>
      </v-card-text>
      <v-card-text class="text-xs-center">
        <div class=" text-xs-center">
          <span class="letra4">LINEAS TELEFONICAS</span>
        </div>
        <v-card-text>
          <span >32346545
            <v-icon small>call</v-icon>
          </span> <br>
          <span  >72435565
            <v-icon small>call</v-icon>
          </span>
        </v-card-text>
        <div class="  text-xs-center">
          <span class="letra4">TRABAJA CON NOSOTROS</span>
        </div>
        <v-layout row>
          <v-flex xs4 >
            <v-container>
              <v-card>
                <v-card>
                  <v-img class="tamañoimg" :src="limpiesa"></v-img>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">LIMPIESA</h3>
                      <p class="tamañop text-sm-left">  se requiere hombre o mujeres para trabajar como operarios de limpieza
                      con experiencia en limpieza, para realizar funciones propias del cargo, desinfección de baños,
                      pisos, manejo de maquinaria de pisos, paredes, vidrios, techos, consultorios</p>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <p>correo de contacto: <b>GoldenCat@gmail.com</b></p>
                  </v-card-actions>
                </v-card>
              </v-card>
            </v-container>
          </v-flex>
          <v-flex xs4>
            <v-container>
              <v-card>
                <v-card>
                  <v-img class="tamañoimg" :src="recepcionista"></v-img>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">RECEPCIONISTA</h3>
                      <p class="tamañop text-sm-left" >Empresa requiere profesional en administración o carreras afines para que desempeñe
                      funciones, como administrador, manejo de proveedores y manejo de personal. Ademas es
                      Indispensable tener experiencia en Catering, servicio y atención a eventos. Liderazgo,
                      manejo de personal masivo y manejo de Excel, un año de experiencia laboral.</p>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <p>correo de contacto: <b>GoldenCat@gmail.com</b></p>
                  </v-card-actions>
                </v-card>
              </v-card>
            </v-container>
          </v-flex>
          <v-flex xs4>
            <v-container>
              <v-card >
                <v-card>
                  <v-img class="tamañoimg" :src="mesero"></v-img>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">MESA Y BAR</h3>
                      <p class="tamañop text-sm-left" >Empresa requiere profesional en administración o carreras afines para que desempeñe
                      funciones, como administrador, manejo de proveedores y manejo de personal. Ademas es
                      Indispensable tener experiencia en Catering, servicio y atención a eventos. Liderazgo,
                      manejo de personal masivo y manejo de Excel, un año de experiencia laboral.</p>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <p>correo de contacto: <b>GoldenCat@gmail.com</b></p>
                  </v-card-actions>
                </v-card>
              </v-card>
            </v-container>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import LIMPIEZA from '@/assets/limpieza.jpg'
import RECEPCIONISTA from '@/assets/Recepcionista.jpg'
import MESERO from '@/assets/mesero.jpg'
export default ({
  data () {
    return {
      limpiesa: LIMPIEZA,
      recepcionista: RECEPCIONISTA,
      mesero: MESERO
    }
  }
})
</script>

<style scope>
@import url('https://fonts.googleapis.com/css?family=Raleway');
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');
.mapouter {
  text-align:right;
  height:400px;
  width:1200px;
}
.gmap_canvas {
  overflow:hidden;
  background:none!important;
  height:100%;
  width:100%;
}
.letra4{
    font-family: 'Amatic SC', cursive;
  font-size: 50px;
}
.tamañoimg{
   height:138px;

}
.tamañop{
   height:138px;
}
</style>
