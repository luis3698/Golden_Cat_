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
                <v-toolbar-title>Regístrate</v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Correo" type="text" v-model="email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                   <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                 <v-btn color="indigo darken-4" @click="registro">Registrar</v-btn>
                 <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
          </v-card>
        </v-flex>

</v-layout>

</template>

<script>
import Swal from 'sweetalert2'
import api from '@/plugins/api'
import Logo from '@/assets/logo2.png'
export default {
  data () {
    return {
      users: [],
      email: '',
      password: '',
      logo: Logo
    }
  },
  async created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
    const { data: users } = await api.get('/user')
    this.users = users
  },
  methods: {
    async registro() {
      try {
        const { data: user } = await api.post('/user', {
          userNew: {
            name: 'juan',
            lastName: 'arias',
            identification: '000000',
            email: this.email,
            password: this.password,
            phone: '31235139',
            typeUser: 'administrador'
          }
        })
        Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      } catch (error) {
        console.error(error)
      }
    }
  },
}

</script>
