<template>
  <v-app id="inspire"  dark>
    <v-toolbar    app color="indigo darken-4">

        <v-layout row wrap>
            <v-flex xs2>
          <v-img height="55px" :src="logo" ></v-img>
        </v-flex>
        </v-layout>
        <v-spacer></v-spacer>

        <v-btn small flat left to="/" >inicio
          <v-icon small>business</v-icon>
        </v-btn>
        <v-btn small flat left to= "/servicios">Servicios extra
          <v-icon small>bookmarks</v-icon>
        </v-btn>
        <v-btn small flat left to="/contactanos">Contactanos
          <v-icon small>email</v-icon>
        </v-btn>
        <v-btn small flat left to="Que_es_golden_cat">¿que es golden cat?
          <v-icon small>help</v-icon>
        </v-btn>
          <v-btn small flat left to="/login">iniciar sesion
          <v-icon small>help</v-icon>
        </v-btn>
        <div color="indigo darken-4" class="text-xs-center">
    <v-menu posicion-x >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" small flat left> cuenta
          <v-icon small>account_circle</v-icon>
        </v-btn>
       </template >
      <v-card   class="clase">
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-list-tile-avatar>
            <v-list-tile-content >
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list >
           <v-list-tile>
            <v-btn small flat to="/Reservas_Cliente" >reservas
          <v-icon small>assignment</v-icon>
        </v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn small flat to="/configuracion">configuracion
          <v-icon small>settings</v-icon>
        </v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn small flat to="/login">cerrar sesion
          <v-icon small>close</v-icon>
        </v-btn>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
    </div>
      </v-toolbar>
    <v-content >
      <v-container>
        <v-layout row wrap>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
<<<<<<< HEAD
   <v-footer   height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="indigo darken-4">
        <strong class="subheading " text-alingent-center >Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn  v-for="icon in icons"  :key="icon" class="mx-3"  icon  >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions class="indigo darken- justify-center">
        &copy;2018 — <strong>golden cat</strong>

      </v-card-actions>
    </v-card>
  </v-footer>
=======








      <v-footer color="indigo darken-3"
      height="auto">
            <v-container >
      <v-layout row>
        <v-flex xs3>
          <v-card dark tile flat color="transparent">
            <p class="text-md-center subheading" >PAGO SEGURO CON <br> NUESTRAS TARJETAS DE CREDITO</p>
          </v-card>
        </v-flex>
        <v-flex xs1>
          <v-card dark tile flat  color="transparent">
           
          </v-card>
        </v-flex>
         <v-flex xs2>
          <v-card dark tile flat color="transparent">
             <v-img  :src="imgtarjeta" ></v-img>
             <v-divider></v-divider>
             <p class="text-md-center caption" > TARJETAS DE CREDITO</p>
          </v-card>
        </v-flex>
        <v-flex xs1>
          <v-card dark tile flat  color="transparent">
           
          </v-card>
        </v-flex>
         <v-flex xs2>
          <v-card dark tile flat color="transparent">
             <v-img height="53px"   :src="efectybaloto" ></v-img>
             <v-divider ></v-divider>
             <p class="text-md-center caption" > TEARGETA DEBITO</p>
             
          </v-card>
        </v-flex>
      </v-layout>
       <v-divider ></v-divider>
      <v-layout row>
        <v-flex xs2 >
          <v-card dark  flat color="transparent">
            <v-card-text >INFORMACION</v-card-text>
            
             <v-btn color="transparent" to="/contactanos" depressed small>Contactanos</v-btn>
             <v-divider ></v-divider>
              <v-btn color="transparent" to="/servicios" depressed small>servicios extra</v-btn>
              <v-divider ></v-divider>
               <v-btn color="transparent" to="/Que_es_golden_cat" depressed small>que es golden cat</v-btn>
               <v-divider ></v-divider>
                <v-btn color="transparent" to="/CambiosCancelaciones" depressed small>documento</v-btn>
                <v-divider ></v-divider>
          </v-card>
        </v-flex>
        <v-flex xs2  >
          <v-card class="bordel" dark tile flat color="transparent">
            <v-card-text></v-card-text>
             <v-btn color="transparent" to="/TerminosCondiciones" depressed small>terminos y condiciones</v-btn>
             <v-divider ></v-divider>
              <v-btn color="transparent" to="/PreguntasFrecuentes" depressed small>preguntas frecuentes</v-btn>
              <v-divider ></v-divider>
               <v-btn color="transparent" to="/ConsultaPeticiones" depressed small>consulta politicas</v-btn>
               <v-divider ></v-divider>
                <v-btn color="transparent" to="/Eventos" depressed small>eventos</v-btn>
                <v-divider ></v-divider>
          </v-card>
        </v-flex>
  
        <v-flex xs4 >
          <v-card dark tile flat color="transparent">
            
          </v-card>
        </v-flex>
      </v-layout>
       <v-divider ></v-divider>
      <v-layout row wrap>
        <v-flex xs2  >
          <v-card dark tile flat color="transparent">
            <v-card-text></v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs3  >
          <v-card dark tile flat color="transparent">
             <v-img height="53px"   :src="escudomincomercio" ></v-img>
          </v-card>
        </v-flex>
        <v-flex xs3   >
          <v-card dark tile flat color="transparent">
            <v-img height="53px"   :src="camaracolombiana" ></v-img>
          </v-card>
        </v-flex>
        <v-flex xs4  >
          <v-card dark tile flat color="transparent">
            <v-card-text class="text-md-center">
              <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon >
                <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
       <v-divider ></v-divider>
      <v-layout row wrap>
        <v-flex xs12  >
          <v-card dark tile flat color="transparent">
            <v-card-text class="text-md-center">Copyright 2019 golden cat | Todos los derechos reservados.</v-card-text>
          </v-card>
        </v-flex>
       
        
      </v-layout>
    </v-container>
    </v-footer>







  
>>>>>>> 5c15319de09f0893ca1fbe6c99898de84634cb79
  </v-app>
</template>
<script>
  import CAMARADECOMERCIO from '@/assets/camaracolombiana.png'
  import  INDUSTRIAYCOMERCIO from '@/assets/escudomincomercio.png'
import EFECTYBALOTO from '@/assets/efectybaloto.png'
import IMGTARJETA from '@/assets/tarjetas.png'
import Logo from '@/assets/golden_cat.png'
export default {
  name: 'principal-layout',
  data: () => ({
    drawer: null,
        icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ],
    camaracolombiana: CAMARADECOMERCIO,
    escudomincomercio: INDUSTRIAYCOMERCIO,
    imgtarjeta: IMGTARJETA,
    logo: Logo,
    efectybaloto: EFECTYBALOTO,

  }),
 
}
</script>
<style scoped>
.clase{
  margin-top: 46px !important
}
.bordel{
  padding: 21px
}
</style>
