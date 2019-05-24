

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
            <div>
  
     <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="blue darken-4"
    >
      <span>Registro exitoso!</span>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
     
        <v-layout wrap>
           <v-flex d-flex xs12 sm12 md3>
           </v-flex>
          <v-flex d-flex xs12 sm12 md3>
           </v-flex>
           <v-flex d-flex xs12 sm12 md3>
           </v-flex>
          <v-flex d-flex xs12 sm12 md6>
            <v-card class="elevation-12">
               <v-toolbar color="indigo darken-4" height="150">
                   
                <v-toolbar-title class="font-weight-medium white--text display-1">Registro</v-toolbar-title>
                </v-toolbar>
                  <v-card-text class="contenedor">
                <v-form class="black--text">
          <v-text-field
           v-model="Name"
           color="blue darken-4"
           label="Nombre"
        ></v-text-field>
        <v-text-field
           v-model="LastName"
           color="blue darken-4"
           label="Apellido"
        ></v-text-field>
         <v-text-field
           v-model="email"
           color="blue darken-4"
           label="Correo electrónico"
           :error-messages="emailError"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
           v-model="Phone"
           color="blue darken-4"
           label="Telefono"
        ></v-text-field>
        <v-text-field
           v-model="Identification"
           color="blue darken-4"
           label="Identificacion"
        ></v-text-field>
        <v-text-field
              v-model="password"
              color="blue darken-4"
              label="Contraseña"
              :error-messages="passErrors"
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
             :type="show1 ? 'text' : 'password'"
             :append-icon="show1 ? 'visibility' :'visibility_off'"
             @click:append="show1 = !show1"
              required
            ></v-text-field>
              <v-text-field
                v-model="repeatPassword"
                :error-messages="matchPass"
                @input="$v.repeatPassword.$touch()"
                @blur="$v.repeatPassword.$touch()"
                color="blue darken-4"
                label="Confirmar contraseña"
                :type="show2 ? 'text' : 'password'"
                :append-icon="show2 ? 'visibility' : 'visibility_off'"
                @click:append="show2 = !show2"
                required
              ></v-text-field>
            </v-form>
              </v-card-text>
              <v-checkbox
                  v-model="terminos"
                  :error-messages="checkboxErrors"
                  color="blue darken-3"
                  class="caja"
                  @change="$v.terminos.$touch()"
                  @blur="$v.terminos.$touch()"
              >
                <template v-slot:label>
                  Acepto los&nbsp;
                  <a href="#" @click.stop.prevent="dialog = true">Términos</a>
                  &nbsp;y&nbsp;
                  <a href="#" @click.stop.prevent="dialog = true">Condiciones</a>*
                </template>
              </v-checkbox>
      <v-card-actions class="botones">
        <v-btn class="font-weight-black title font-italic" flat @click="resetForm">Cancelar</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-on="on"
          flat
          color="blue darken-4"
          type="submit"
          class="font-weight-black title font-italic"
          :disabled="$v.$invalid"
       >Registrarse </v-btn>
      </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
    
    </v-form>
    <v-dialog
      v-model="dialog"
      absolute
      max-width="800"
      persistent>
       <v-card>
        <v-card-title class="headline grey lighten-3">TÉRMINOS Y POLITICAS DE PRIVACIDAD</v-card-title>
        <v-card-text>
          <span class="text-xs black--text subheading justify">Políticas de cancelación de reservas:Para cualquier solicitud de anulación o cancelación de una reserva efectuada por el “beneficiario”, se entenderá que la reserva está anulada una vez que el departamento de reservas envíe la confirmación oficial de anulación vía correo electrónico con el código correspondiente para tal efecto. Cancelaciones sin código y email de respaldo no serán válidas. </span>
        <p></p>
        <span class="text-xs black--text subheading justify">Confirmación: Para confirmar una reserva, una tarjeta de crédito válida es necesaria. Si no puede entregar o no dispone una de una TC, es posible realizar un depósito o transferencia por el total de la reserva.  </span>
        <p></p>
        <span class="text-xs black--text subheading justify">Políticas de anulación Individuales: Temporada (Enero a Diciembre): Anulación de reserva sin multa hasta 31 días antes de la fecha de Check In, por anular fuera de plazo se cobrará el 100% del total de la reserva.  </span>
        <p></p>
        <span class="text-xs black--text subheading justify">Anulaciones por condiciones climáticas o desastres naturales: En caso de cancelaciones de reserva por condiciones climáticas o desastres naturales, se les dará solo la opción de cambiar la fecha sin cobro adicional dentro de los tres meses siguientes a la fecha de entrada. </span>
        <p></p>
        <span class="text-xs black--text subheading justify">Uso de la información personal recopilada acerca de usted: Utilizamos su información personal para proveer los servicios que le solicite al Hotel como para facilitar: reservas. Además, puede usarse para: mejorar los servicios del Hotel Boutique  y brindarle el nivel de hospitalidad esperado y asegurarnos de que el sitio sea de su interés. También usamos los datos para enviarle boletines informativos sobre el estado de sus reservas.  </span>
        <p></p>
        <span class="text-xs black--text subheading justify">Protección de la información personal: El Hotel Golden Cat tomará los recaudos necesarios para: (i) proteger la información personal recopilada por medio de un acceso no autorizado, revelación, alteración o destrucción; y  mantener la información personal confiable y actualizada de acuerdo a la ley vigente. Para las transacciones en línea, usamos tecnología de seguridad para proteger la información personal que nos transmita a través de nuestro sitio. Desafortunadamente, sin embargo, ningún sistema de seguridad o de transmisión de datos a través de Internet puede garantizar que sea totalmente seguro. </span>
        <p></p>
        <span class="text-xs black--text subheading justify">Retención de información personal: Retenemos su información personal durante el período necesario para llevar a cabo los objetivos delineados en esta Política, a menos que se requiera una retención más prolongada o sea permitida por ley.
                                                            Si nos ha dado su información de contacto (dirección de correo, número de fax, dirección de correo electrónico o número telefónico), quizás nosotros queramos informarle nuestros servicios y el estado de sus reservaciones.  </span>
        <p></p>
        <span class="text-xs black--text subheading justify">Preguntas: Si tiene alguna pregunta sobre esta Política o sobre cómo el hotel Golden Cat   procesa su información personal, por favor contáctenos por correo electrónico a info@goldencat.com o llámenos al 724 2372 </span>
        <p></p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            flat
            @click="agreement = false, dialog = false"
          >
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="white--text"
            color="blue darken-3"
            @click="agreement = true, dialog = false"
          >
            Acepto
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-card>
    <br><br> 
</div>
          </v-flex>
        </v-layout>
          </v-card>
        </v-flex>

</v-layout>
  
</template>
<script>
import Logo from '@/assets/logo2.png'
import { validationMixin } from 'vuelidate'
import { required, sameAs, minLength, email, requiredIf } from 'vuelidate/lib/validators'
import Swal from 'sweetalert2'

import api from '@/plugins/api'
export default {
  data () {
    return {
      Name: '',
      LastName:'',
      email: '',
      Phone:'',
      Identification:'',
      password: '',
      repeatPassword: '',
      isLoading: false,
      allowSpaces: false,
      dialog: false,
      dialogEmail: false,
      show1: false,
      show2: false,
      gender: ['M', 'F'],
      conditions: false,
      content: 'Bienvenido a Hotel Golde Cat',
      snackbar: false,
      terminos: false,
      logo: Logo
    }
    
  },
  mixins: [validationMixin],
  validations: {
    password: {
      required,
      minLength: minLength(8)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    },
    email: {
      required,
      email
    },
    terminos: {
      checked (val) {
        return val
      }
    }
  },
  created () {
    this.getUsers()
  },
  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.terminos.$dirty) return errors
      !this.$v.terminos.checked && errors.push('debes aceptar terminos y condiciones')
      return errors
    },
    passErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      if (!this.$v.password.minLength) {
        errors.push('Contraseña debe tener mínimo 8 caracteres')
        return errors
      }
      if (!this.$v.password.required) {
        errors.push('Contraseña requerida')
        return errors
      }
      return errors
    },
    matchPass () {
      const errors = []
      if (!this.$v.repeatPassword.$dirty) return errors
      !this.$v.repeatPassword.sameAsPassword && errors.push('Contraseñas no coinciden')
      return errors
    },
    emailError () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('E-mail invalido')
      !this.$v.email.required && errors.push('E-mail es requerido')
      return errors
    }
  },
  methods: {
    async getUsers () {
      const res = await api.get('/user')
    },
    
    resetForm () {
      this.$refs.form.reset()
    },
    async submit () {
      try {
        const res = await api.post('/user',
          {
            userNew: {
              email: this.email,
              password: this.password,
              name: this.Name,
              lastName: this.LastName,
              phone: this.Phone,
              identification: this.Identification
            }
          })
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
        this.resetForm()
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.contenedor{
  padding 30px 50px 0px 50px
}
.caja{
  margin-left 240px
}
.botones{
  padding 0px 30px 30px 30px
}
.contenido{
  padding 30px
}
.ancho{
  width 120px!important
}
.imagen{
  width 130px !important
  height 150px !important
  margin -20px 0px 0px -40px
}
.margen{
  margin 80px 0px
}
</style>