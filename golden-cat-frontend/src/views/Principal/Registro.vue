<template>
<<<<<<< HEAD
  <v-flex xs12 sm8 md4>
    <v-card class="elevation-12">
      <v-toolbar dark color="indigo darken-4">
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
        <v-btn block class="indigo darken-4" to="/">Registrarse</v-btn>
        <div>
          <v-btn block class="indigo darken-4" to= "/">Iniciar Sesion</v-btn>
        </div>
      </v-card-actions>
    </v-card>
=======
>>>>>>> 2f3947ae087e547f783aa9f161d106e29cc0c4b8

 <v-layout row>
        <v-flex xs6>
          <v-card dark tile flat color="transparent">
            <v-img height="350px" width="300px" :src="logo" ></v-img>

          </v-card>
        </v-flex>

            <v-flex xs6>
          <v-card dark tile flat color="transparent">
        <v-layout align-center justify-center >
          <v-flex xs12 sm md10>
            <v-card class="elevation-12">
              <v-toolbar dark color="indigo darken-4">
                <v-toolbar-title>CREAR CUENTA</v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Correo" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                   <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="indigo darken-4" to="/inicio">Iniciar sesion</v-btn>
                 <v-btn color="indigo darken-4" to="/inicio">crear cuenta</v-btn>
                 <v-spacer></v-spacer>
              </v-card-actions>
               <v-card-text class="text-xs-center">
                   <v-btn flat to="/restaurar_contraseña">olvide mi contraseña</v-btn>
                 </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
          </v-card>
        </v-flex>

</v-layout>

</template>

<script>
import Logo from '@/assets/logo2.png'
export default {
  data () {
    return {
      logo: Logo
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}

</script>
