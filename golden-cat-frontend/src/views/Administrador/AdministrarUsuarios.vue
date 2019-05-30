<template>
  <!-- <v-card class="este" flat>
    <v-snackbar v-model="snackbar" absolute top right color="success">
      <span>Registration successful!</span>
      <v-icon dark>check_circle</v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <v-container grid-list-xl fluid>
        <v-layout wrap>
          <v-flex xs12 sm6>
            <v-text-field v-model="form.first" :rules="rules.name" color="purple darken-2" label="Nombre" required></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field v-model="form.last" :rules="rules.name" color="blue darken-2" label="Apellido" required></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field v-model="email" color="blue darken-4" label="Correo electrónico" :error-messages="emailError" @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field v-model="form.phone" :rules="rules.name" color="blue darken-2" label="Telefono" type="number" required></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field v-model="form.id" :rules="rules.name" color="blue darken-2" label="Identificacion" type="number" required></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select v-model="form.favoriteAnimal" :items="animals" :rules="rules.animal" color="pink" label="Tipo usuario" required></v-select>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field v-model="password" color="blue darken-4" label="Contraseña" :error-messages="passErrors" @input="$v.password.$touch()" @blur="$v.password.$touch()" :type="show1 ? 'text' : 'password'" :apend-icon="show1 ? 'visibility' : 'visibility_off'" @click:append="show1 = !show1" required></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field v-model="repeatPassword" :error-messages="matchPass" @input="$v.repeatPassword.$touch()" @blur="$v.repeatPassword.$touch()" color="blue darken-4" label="Confirmar contraseña" :type="show2 ? 'text' : 'password'" :append-icon="show2 ? 'visibility' : 'visibility_off'" @click:append="show2 = !show2" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-checkbox v-model="form.terms" color="green">
              <template v-slot:label>
                <div @click.stop="">Aceptas los
                  <a href="javascript:;" @click.stop="terms = true">terminos</a>y
                  <a href="javascript:;" @click.stop="conditions = true">condiciones</a>?
                </div>
              </template>
            </v-checkbox>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn flat @click="resetForm">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="!formIsValid" flat color="primary" type="submit">Register</v-btn>
      </v-card-actions>
    </v-form>
    <v-dialog v-model="terms" width="70%">
      <v-card>
        <v-card-title class="title">Terms</v-card-title>
        <v-card-text v-for="n in 5" :key="n">
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="purple" @click="terms = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="conditions" width="70%">
      <v-card>
        <v-card-title class="title">Conditions</v-card-title>
        <v-card-text v-for="n in 5" :key="n">
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="purple" @click="conditions = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-flex xs12>
    <div>
      <v-tabs v-model="active" color="blue darken-1" dark slider-color="greed" >
        <v-tab ripple>ADMINISTRADORES</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <template v-for="n in 2">
              <v-flex xs12 :key="n" mb-3>
                <v-card color="bl" class="blue darken-1">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="title mb-4">Nombres:</div>
                          <div  class="title mb-4">Coreo Electronico:</div>
                          <div  class="title mb-4">Indentificacion:</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="title mb-4">Apellidos:</div>
                          <div  class="title mb-4 ">Telefono:</div>
                        </div>
                      </v-card-title>
                    </v-flex>

                    <v-layout row justify-center>
                      <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on }">
                          <v-btn color="primary" dark v-on="on">Editar</v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">User Profile</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container grid-list-md>
                              <v-layout wrap>
                                <v-flex xs12 sm6 md4>
                                  <v-text-field label="Legal first name*" required></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                  <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                  <v-text-field
                                    label="Legal last name*"
                                    hint="example of persistent helper text"
                                    persistent-hint
                                    required
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                  <v-text-field label="Email*" required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                  <v-text-field label="Password*" type="password" required></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6>
                                  <v-select
                                    :items="['0-17', '18-29', '30-54', '54+']"
                                    label="Age*"
                                    required
                                  ></v-select>
                                </v-flex>
                                <v-flex xs12 sm6>
                                  <v-autocomplete
                                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                    label="Interests"
                                    multiple
                                  ></v-autocomplete>
                                </v-flex>
                              </v-layout>
                            </v-container>
                            <small>*indicates required field</small>
                          </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-layout>
                  </v-layout>
                </v-card>
              </v-flex>
              </template>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab ripple>CLIENTES</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text> <template v-for="n in 2">
              <v-flex xs12 :key="n" mb-3>
                <v-card color="blue darken-1">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="title mb-4">Nombres:</div>
                          <div  class="title mb-4">Coreo Electronico:</div>
                          <div  class="title mb-4">Indentificacion:</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="title mb-4">Apellidos:</div>
                          <div  class="title mb-4 ">Telefono:</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              </template >
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-flex>
  </v-card> -->
  <h1>administrar usuario</h1>
</template>
<script>
// import { validationMixin } from 'vuelidate'
// import { required, sameAs, minLength, email} from 'vuelidate/lib/validators'
// import swal from 'sweetalert2'
// import api from '@/plugins/api'
// export default {
//   name: 'adminUsuario',
//   created () {
//     this.$store.commit('SET_LAYOUT', 'administrador-layout')
//   },
//   data () {
//     const defaultForm = Object.freeze({
//       first: '',
//       last: '',
//       bio: '',
//       favoriteAnimal: '',
//       age: null,
//       terms: false
//     })
//     return {
//       dialog: false,
//       form: {
//         first: '',
//         last: '',
//         bio: '',
//         favoriteAnimal: '',
//         age: null,
//         terms: false
//       },
//       conditions: false,
//       password: '',
//       repeatPassword: '',
//       email: '',
//       show1: false,
//       show2: false,
//       rules: {
//         age: [
//           val => val < 10 || `I don't believe you!`
//         ],
//         animal: [val => (val || '').length > 0 || 'This field is required'],
//         name: [val => (val || '').length > 0 || 'This field is required']
//       },
//       animals: ['Cliente', 'Administrador'],
//       content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
//       snackbar: false,
//       terms: false,

//       defaultForm
//     }
//   },
//   mixins: [validationMixin],
//   validations: {
//     password: {
//       required,
//       minLength: minLength(8)
//     },
//     repeatPassword: {
//       sameAsPassword: sameAs('password')
//     },
//     email: {
//       required,
//       email
//     },
//     terminos: {
//       checked (val) {
//         return val
//       }
//     }
//   },
//   computed: {
//     checkboxErrors () {
//       const errors = []
//       if (!this.$v.terminos.$dirty) return errors
//       !this.$v.terminos.checked && errors.push('debes aceptar terminos y condiciones')
//       return errors

//     },
//     formIsValid() {
//         return (
//           this.form.first &&
//           this.form.last &&
//           this.form.favoriteAnimal &&
//           this.form.terms
//         )
//       },
//     passErrors () {
//       const errors = []
//       if (!this.$v.password.$dirty) return errors
//       if (!this.$v.password.minLength) {
//         errors.push('Contraseña debe tener mínimo 8 caracteres')
//         return errors
//       }
//       if (!this.$v.password.required) {
//         errors.push('Contraseña requerida')
//         return errors
//       }
//       return errors
//     },
//     matchPass () {
//       const errors = []
//       if (!this.$v.repeatPassword.$dirty) return errors
//       !this.$v.repeatPassword.sameAsPassword && errors.push('Contraseñas no coinciden')
//       return errors
//     },
//     emailError () {
//       const errors = []
//       if (!this.$v.email.$dirty) return errors
//       !this.$v.email.email && errors.push('E-mail invalido')
//       !this.$v.email.required && errors.push('E-mail es requerido')
//       return errors
//     },
//     formIsValid () {
//       return (
//         this.form.first &&
//           this.form.last &&
//           this.form.phone &&
//           this.form.id &&
//           this.form.favoriteAnimal &&
//           this.form.terms
//       )
//     }
//   },

//   methods: {
//     next () {
//       const active = parseInt(this.active)
//       this.active = (active < 2 ? active + 1 : 0)
//     },
//     resetForm () {
//       this.form = Object.assign({}, this.defaultForm)
//       this.$refs.form.reset()
//     },
//     async submit () {
//       try {
//         const res = await api.post('/user',
//           {
//             userNew: {
//               email: this.email,
//               password: this.password,
//               name: this.Name,
//               lastName: this.LastName,
//               phone: this.Phone,
//               identification: this.Identification
//             }
//           })
//         Swal.fire(
//           'Good job!',
//           'You clicked the button!',
//           'success'
//         )
//         this.resetForm()
//       } catch (error) {
//         console.error(error)
//       }
//     }
//   }
// }
</script>
<style>
.este{
background-color: white !important
}
</style>
