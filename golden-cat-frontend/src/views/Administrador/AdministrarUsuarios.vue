<template>
<v-flex md12>
    <v-container class="contenedor" fill-height fluid grid-list-xl label="Usuario">
      <v-layout  justify-center  wrap>
          <v-flex xs12 md12>
              <material-card color="green" title="Edit Profile" text="Complete your profile">
                  <v-form>
                      <v-container >
                          <v-layout wrap>
                              <v-flex xs12 md6>
                              <v-text-field class="purple-input" label="Usuario" solo/>
                              </v-flex>
                              <v-flex
                              xs12
                              md6>
                              <v-text-field
                                  class="purple-input"
                                  label="Telefono"
                                  type="number"
                                  solo/>
                              </v-flex>
                              <v-flex xs12 md12>
                              <v-text-field label="Correo electronico" class="purple-input" solo/>
                              </v-flex>
                              <v-flex xs12 md12 >
                              <v-text-field label="Nombres y apellidos" class="purple-input" solo/>
                              </v-flex>
                              <v-flex md6>
                              <v-text-field
                                  :append-icon="show3 ? 'visibility' : 'visibility_off'"
                                  :rules="[rules.required, rules.min]"
                                  :type="show3 ? 'text' : 'password'"
                                  name="input-10-2"
                                  label="Contraseña"
                                  hint="Al menos 8 caracteres"
                                  value=""
                                  class="input-group--focused"
                                  @click:append="show3 = !show3"
                                  solo
                              ></v-text-field>
                              </v-flex>
                              <v-flex xs12 md6 >
                              <v-text-field label="Identificación" class="purple-input" solo/>
                              </v-flex>
                              <v-flex
                              xs12 md1
                              text-xs-right
                              >
                              <v-btn
                                  color="success"
                              >
                                  Guardar usuario
                              </v-btn>
                              </v-flex>
                          </v-layout>
                      </v-container>
                  </v-form>
              </material-card>
              
          </v-flex>
          
      </v-layout>
      
    </v-container>
  
</v-flex>

</template>

<script>
export default {
  data () {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Requirido',
        min: v => v.length >= 8 || 'Minimo 8 caracteres'
      }
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>

<style>
  h1{
    padding-left: 40px;
    color: white;
  }
  .contenedor{
    background-color: blue
  }
</style>
