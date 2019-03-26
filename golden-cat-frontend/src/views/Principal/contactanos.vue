<template>
<v-app>
    <v-card-actions class="grey darken-3 justify-center">
    <strong>  <h2>Contactanos</h2></strong>
      </v-card-actions>
 <v-toolbar dense floating >
      <v-text-field hide-details prepend-icon="search" single-line></v-text-field>
      <a href="https://www.google.com/maps/place/Colombia/@3.6599588
      ,-74.772893,8z/data=!4m13!1m7!3m6!1s0x8e15a43aae1594a3:0x9a0d9
      a04eff2a340!2sColombia!3b1!8m2!3d4.570868!4d-74.297333!
      3m4!1s0x8e15a43aae1594a3:0x9a0d9a04eff2a340!8m2!3d4.570868!4d-74.297333">Buscar en colombia </a>
      <v-btn icon>
        <v-icon>my_location</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    <h2>Ubicacion</h2>
    </v-toolbar>
  <v-card
    class="pa-3"
    flat
    height="200px"
    width="auto"
    img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
  >
  </v-card>

      <v-card-actions class="grey darken-3 justify-center">
    <strong><h2>formulario de contacto</h2></strong>
      </v-card-actions> <v-footer class="pa-3">
    <v-spacer></v-spacer>

  <v-container fluid>
    <v-layout row>
      <v-flex xs6 order-lg2>
        <v-card dark tile flat color="error">
          <h3>correos</h3>
          <v-card-text>
<h5>hotelgoldencat@gmail.com</h5>
<h5> hotelgoldencat@hotmail.com</h5>
  <v-form v-model="valid">
 LINEAS DE ATENCIÓN AL CLIENTE
  <h5>7234560</h5>
   <h5>7234560</h5>

    <v-container>
     ESCRIBE A NUESTAS OFICINAS
      <v-layout>

        <v-flex
          xs12
          md4
        >
  <v-footer
    dark
    height="140px"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">jjjjjjjjjjjjjj
iconos redes sociales

        </strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>

        </v-flex>
      </v-layout>
    </v-container>
  </v-form>

          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card dark tile flat color="red darken-4">
          <v-card-text>si decea mas informacion sobre el servicio del hotel campestre Golden cat . diligencie el formulario a continuacion , pronto un acesor se contactara con usted :

  <v-form v-model="valid">
                comentarios o preguntas son bienvenidos
    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Nombres"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="E-mail"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Tema"
            required
          ></v-text-field>

        </v-flex>

        <v-flex
          xs12
          md4
        >
        </v-flex>

      </v-layout>
         <v-text-field
            v-model="lastname"
            :rules="nameRules"
            label="mensaje"
            required
          ></v-text-field>
    </v-container>
  </v-form>
<template>
  <div class="text-xs-center">
    <v-btn round color="primary" dark>Enviar</v-btn>
  </div>
</template>

          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </v-footer>
</v-app>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>

<style>
div{
  display: block;
  font-size: 2em;
  -webkit-margin-before: 0.83em;
  margin-block-start: -24.17em;
  -webkit-margin-after: 0.83em;
  margin-block-end: 0.83em;
  -webkit-margin-start: 0px;
  margin-inline-start: 0px;
  -webkit-margin-end: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  color :red;
}
