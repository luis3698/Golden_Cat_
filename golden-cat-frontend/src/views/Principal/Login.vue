<template>
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
                <v-toolbar-title>INICIAR SESION</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="email" label="email" type="text" v-model="email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="indigo darken-4" @click="login">Iniciar sesion</v-btn>
                <v-btn color="indigo darken-4" to="/registro">crear cuenta</v-btn>
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
import api from '@/plugins/api'
import Logo from '@/assets/logo2.png'
import Swal from 'sweetalert2'
export default {
  data () {
    return {
      logo: Logo,
      email: '',
      password: ''
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  methods: {
    async login() {
      try {
        const {data: user} = await api.post('/user/login', {
          email: this.email,
          password: this.password
        })
        if(!user.login) {
          Swal.fire('Error!', user.message, 'error')
          return
        }
        this.$router.push('/')

      } catch (error) {
        console.error(error)
      }
    }
  },
}

</script>
