<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md5 lg4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary" flat>
            <v-avatar tile size="36" class="mr-2"><img :src="logo" alt="Golden Cat"></v-avatar>
            <v-toolbar-title>Restaurar contraseña</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p class="grey--text text--darken-1">
              Ingresa tu correo y te enviaremos las instrucciones para restablecer tu contraseña.
            </p>
            <v-form>
              <v-text-field
                prepend-icon="email"
                name="login"
                label="Correo electrónico"
                type="email"
                v-model="email"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="px-3 pb-3">
            <v-btn flat small color="primary" to="/login">Volver a iniciar sesión</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="accent" class="black--text" @click="enviar">Enviar correo</v-btn>
          </v-card-actions>
          <v-divider></v-divider>
          <v-card-text class="text-xs-center">
            ¿No tienes cuenta?
            <v-btn flat small color="accent" to="/registro">Crear cuenta</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Logo from '@/assets/logo2.png'
import Swal from 'sweetalert2'
export default {
  data () {
    return {
      logo: Logo,
      email: ''
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  methods: {
    enviar () {
      if (!this.email) {
        Swal.fire('Atención', 'Ingresa tu correo electrónico', 'warning')
        return
      }
      Swal.fire('Correo enviado', 'Si el correo está registrado, recibirás las instrucciones en breve.', 'success')
      this.$router.push('/login')
    }
  }
}
</script>
