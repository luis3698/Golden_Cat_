<template>
<div id="app">
  <v-app id="inspire" >

     <v-layout row wrap>
        <v-flex d-flex xs12 sm md>
          <v-card flatcolor="transparent" >
            <div class="transparent text-xs-center">
      <h1>ubicacion</h1>
    </div>
    <v-card class="pa-1"  flat height="400px"  width="1150" img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg">
      <v-toolbar dense floating >
        <v-text-field hide-details prepend-icon="search" single-line></v-text-field>
        <v-btn icon>
          <v-icon>my_location</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
          </v-card >
        </v-flex >
          <v-flex  justify-center align-center xs12 align-end flexbox>

          </v-flex>
         <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
           <div class="indigo darken-4 darken-2 text-xs-center">
      <span class="white--text">Formulario de contacto</span>
    </div>
          <v-card-title>
            <div>
              <span>Si desea más información sobre los servicios del Hotel
                Campestre las Camelias, por favor diligiencie el formulario
                a continuación, pronto un asesor se contactará con usted:
                Comentarios o Preguntas son bienvenidos.</span>
            </div>

          </v-card-title>
            </v-card-text>
            <v-container>

            <div class=" text-xs-center">
              <v-text-field label="Nombre completo" type="text"></v-text-field>
            </div>
            <div class=" text-xs-center">
              <v-text-field label="correo electronico" type="text"></v-text-field>
            </div>
            <div class=" text-xs-center">
              <v-text-field label="tema" type="text"></v-text-field>
            </div>
            </v-container>
          </v-card>

        </v-flex >

         <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
              <div class="indigo darken-4 darken-2 text-xs-center">
                  <span class="white--text">correo electronico</span>
              </div>
              <v-card-text>
              <span class="white--text">HOTELGOLDENCAT@GMAIL.COM     <v-icon small>email</v-icon>
              </span> <br>
              <span class="white--text">HOTELGOLDENCAT@HOTMAIL.COM     <v-icon small>email</v-icon>
              </span>
              </v-card-text>
            </v-card-text>

            <v-card-text>
              <div class="indigo darken-4 darken-2 text-xs-center">
                  <span class="white--text">lineas telefonicas</span>
              </div>
              <v-card-text>
              <span class="white--text">32346545
                <v-icon small>call</v-icon>
                </span> <br>
              <span class="white--text">72435565
                <v-icon small>call</v-icon>
              </span>
              </v-card-text>
              <div class="indigo darken-4 darken-2 text-xs-center">
                  <span class="white--text">redes sociales</span>
              </div>

              <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

            </v-card-text>
          </v-card>
        </v-flex >
      </v-layout>

  </v-app>
</div>

</template>
<script>

export default {
  data () {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    }
  }
}
</script>
