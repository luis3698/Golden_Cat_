<template>
    <div>
        <v-container fill-height fluid grid-list-xl>
            <v-layout  justify-center  wrap>
                <v-flex xs12 md8>
                    <material-card color="green" title="Edit Profile" text="Complete your profile">
                        <v-form>
                            <v-container >
                                <v-layout wrap>
                                    <v-flex xs12 md6>
                                    <v-text-field class="purple-input" label="Usuario" solo/>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                    <v-text-field label="Correo electronico" class="purple-input" solo/>
                                    </v-flex>
                                    <v-flex xs12 md6 >
                                    <v-text-field label="Nombres" class="purple-input" solo/>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                    <v-text-field label="Apellidos" class="purple-input" solo/>
                                    </v-flex>
                                    <v-flex md12>
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
                                    <v-flex xs12 md4>
                                    <v-text-field label="Ciudad" class="purple-input" solo/>
                                    </v-flex>
                                    <v-flex xs12 md4>
                                    <v-text-field label="Pais"  class="purple-input" solo/>
                                    </v-flex>
                                    <v-flex
                                    xs12
                                    md4>
                                    <v-text-field
                                        class="purple-input"
                                        label="Telefono"
                                        type="number"
                                        solo/>
                                    </v-flex>
                                    <v-flex xs12>

                                    </v-flex>
                                    <v-flex
                                    xs12
                                    text-xs-right
                                    >
                                    <v-btn
                                        class="mx-0 font-weight-light"
                                        color="success"
                                    >
                                        Actualizar perfil
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        class="mx-0 font-weight-light"
                                        color="success"
                                    >
                                        Configurar temporada
                                    </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-form>
                    </material-card>
                </v-flex>
                <v-flex
                    xs12
                    md4
                >
                    <material-card class="v-card-profile">
                        <v-avatar
                            slot="offset"
                            class="mx-auto d-block"
                            size="130"
                        >
                            <img
                            src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
                            >
                        </v-avatar>
                        <v-card-text class="text-xs-center">
                            <h6 style="color: white" class="category text-gray font-weight-thin mb-3">CEO / CO-FOUNDER</h6>
                            <h4 style="color: white" class="card-title font-weight-light">Alec Thompson</h4>
                        </v-card-text>
                    </material-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
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
