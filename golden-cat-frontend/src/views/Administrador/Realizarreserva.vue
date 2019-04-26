<template>
   <v-flex xs12 sm12 md12>
        <v-toolbar
        color="indigo"
        dark
        tabs
        >
        <h1>Formulario de reservas</h1>
        </v-toolbar>

          <v-flex md12>
            <v-card ref="form">
              <v-card-text>
                <v-text-field
                  ref="nombre"
                  v-model="nombre"
                  :rules="[() => !!nombre || 'Este campo es requerido',
                  () => !!nombre && nombre.length <= 25 || 'Haz superado el maximo de caracteres']"
                  counter="25"
                  :error-messages="errorMessages"
                  label="Nombre completo"

                  required
                ></v-text-field>
                <v-text-field
                  ref="identificacion"
                  v-model="identificacion"
                  :rules="[
                    () => !!identificacion || 'Este campo es requerido',
                    () => !!identificacion && identificacion.length <= 25 || 'Haz superado el maximo de caracteres']"
                  label="Identificación"
                  type="number"
                  counter="25"
                  required
                ></v-text-field>
                <v-text-field
                  ref="correoelectronico"
                  v-model="correoelectronico"
                  :rules="[() => !!correoelectronico || 'Este campo es requerido',
                  () => !!correoelectronico && correoelectronico.length <= 25 || 'Haz superado el maximo de caracteres']"
                  label="Correo electronico"
                  counter="25"
                  required
                ></v-text-field>
                <v-text-field
                  ref="fechaentrada"
                  v-model="fechaentrada"
                  :rules="[() => !!fechaentrada || 'Este campo es requerido']"
                  label="Fecha entrada"
                  type="number"
                  required
                  placeholder="dd/mm/aa"
                ></v-text-field>
                <v-text-field
                  ref="fechasalida"
                  v-model="fechasalida"
                  :rules="[() => !!fechasalida || 'Este campo es requerido']"
                  label="Fecha salida"
                  type="number"
                  required
                placeholder="dd/mm/aa"
                ></v-text-field>
                <v-autocomplete
                  ref="personas"
                  v-model="personas"
                  :rules="[() => !!personas || 'Este campo es requerido',
                  ]"
                  :items="personass"
                  label="No. personas"
                  tupe="number"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
                <v-autocomplete
                  ref="adultos"
                  v-model="adultos"
                  :rules="[() => !!adultos || 'Este campo es requerido',
                  ]"
                  :items="adultoss"
                  label="No. adultos"
                  type="number"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
                <v-autocomplete
                  ref="niños"
                  v-model="niños"
                  :rules="[() => !!niños || 'Este campo es requerido']"
                  :items="niñoss"
                  label="No. niños"
                  type="number"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-card-text>
                <v-divider class="mt-5"></v-divider>
              <v-card-actions>
                <v-btn flat>Cancelar</v-btn>
                  <v-spacer></v-spacer>
                  <v-slide-x-reverse-transition>
                    <v-tooltip
                      v-if="formHasErrors"
                      left
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          icon
                          class="my-0"
                          @click="resetForm"
                          v-on="on"
                        >
                          <v-icon>refresh</v-icon>
                        </v-btn>
                      </template>
                      <span>Refresh form</span>
                    </v-tooltip>
                  </v-slide-x-reverse-transition>
                <v-btn color="primary" flat @click="submit">Aceptar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

   </v-flex>
</template>

<script>
export default {
  data: () => ({
    adultoss: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
    niñoss: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
    personass: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
    errorMessages: '',
    nombre: null,
    identificacion: null,
    correoelectronico: null,
    fechaentrada: null,
    fechasalida: null,
    personas: null,
    adultos: null,
    niños: null,
    formHasErrors: false
  }),

  computed: {
    form () {
      return {
        nombre: this.nombre,
        identificacion: this.identificacion,
        correoelectronico: this.correoelectronico,
        fechaentrada: this.fechaentrada,
        fechasalida: this.fechasalida,
        personas: this.personas,
        adultos: this.adultos,
        niños: this.niños
      }
    }
  },

  watch: {
    name () {
      this.errorMessages = ''
    }
  },

  methods: {
    addressCheck () {
      this.errorMessages = this.address && !this.name
        ? 'Hey! I\'m required'
        : ''

      return true
    },
    resetForm () {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset()
      })
    },
    submit () {
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)
      })
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>
