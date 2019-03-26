<template>
    <div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex >
            <v-card class="">
              <v-toolbar dark color="">
                <v-toolbar-title >RESTAURA CONTRASEÑA </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>

                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="correo electronico" type="text"></v-text-field>

                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn depressed large color="black">Enviar Codigo de Restauracion </v-btn>

              </v-card-actions>
               <div>
          <v-btn depressed large color="black">iniciar sesion</v-btn>
            </div>
            </v-card>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<style>
.v-btn{
    justify-content:center
}
</style>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
