<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md5 lg4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary" flat>
            <v-avatar tile size="36" class="mr-2"><img :src="logo" alt="Golden Cat"></v-avatar>
            <v-toolbar-title>Iniciar sesión</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field prepend-icon="person" name="email" label="Correo electrónico" type="email" v-model="email" @keyup.enter="login"></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Contraseña"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                @click:append="showPassword = !showPassword"
                @keyup.enter="login"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="px-3 pb-3">
            <v-btn flat small color="primary" to="/restaurar_contraseña">¿Olvidaste tu contraseña?</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" :loading="loading" @click="login">Entrar</v-btn>
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
import api from '@/plugins/api'
import Logo from '@/assets/logo2.png'
import Swal from 'sweetalert2'
export default {
  data () {
    return {
      logo: Logo,
      email: '',
      password: '',
      showPassword: false,
      loading: false
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  methods: {
    async login () {
      if (!this.email || !this.password) {
        Swal.fire('Atención', 'Ingresa tu correo y contraseña', 'warning')
        return
      }
      this.loading = true
      try {
        const { data: result } = await api.post('/user/login', {
          email: this.email,
          password: this.password
        })
        if (!result.login) {
          Swal.fire('Error', result.message, 'error')
          return
        }
        this.$store.commit('SET_USER', result.user)
        if (result.user.typeUser === 'administrador') {
          this.$store.commit('SET_LAYOUT', 'administrador-layout')
          this.$router.push('/administrador/usuarios')
        } else {
          this.$store.commit('SET_LAYOUT', 'principal-layout')
          this.$router.push('/')
        }
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo conectar con el servidor', 'error')
      } finally {
        this.loading = false
      }
    }
  }
}

</script>
