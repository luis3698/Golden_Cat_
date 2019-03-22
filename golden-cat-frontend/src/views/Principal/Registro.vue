<template>
  <v-flex xs12 sm8 md4>
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Regístrate</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
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
        <v-btn block class="purple darken-4">Registrarse</v-btn>
        <div>
          <v-btn flat small color="primary">Primary</v-btn>
        </div>
      </v-card-actions>
    </v-card>

  </v-flex>

</template>
<style scoped>
.v-toolbar__content {
    background-color: #efe8ec;
    height: 0px;
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



</style>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  props: {
    source: String
  }
}
</script>
