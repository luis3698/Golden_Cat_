<template>

  <v-app id="inspire">
    <v-content >
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Registrate</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <!--<v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon large>code</v-icon>
                    </v-btn>-->
                  </template>
                  <span>Source</span>
                 </v-tooltip>
                <!-- <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn icon large href="https://codepen.io/johnjleider/pen/wyYVVj" target="_blank" v-on="on">
                      <v-icon large>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip> -->
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="Correo Electronico" label="Correo Electronico" type="text"></v-text-field>
                  <v-text-field id="Contraseña" prepend-icon="lock" name="Contraseña" label="Contraseña" type="Contraseña"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Registrarse</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<style scoped>
.v-toolbar__content {
    background-color: #efe8ec;
    height: 0px;
}
.v-toolbar__title {
    font-size: 20px;
    text-emphasis-color:red;
    font-weight: 500;
    letter-spacing: 0.02em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
title{
    background-color: black;
}
.theme--dark.v-toolbar {
    background-color: #212121;
    color: #080808;
}
:root {
    --v-primary-base:#efe8ec;
 }

:root {
    --v-primary-base: #180aec;

}
.v-content{
  background-image: url('../assets/fondo golden.jpg');
  background-size: cover;

}

</style>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>
