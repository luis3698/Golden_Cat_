<template>
  <v-card class="este" flat>
    <v-snackbar v-model="snackbar" absolute top right color="success">
      <span>Registration successful!</span>
      <v-icon dark>check_circle</v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <v-container grid-list-xl fluid>
        <v-layout wrap>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="form.nombre"
              :rules="rules.name"
              color="purple darken-2"
              label="Nombres"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="form.apellidos"
              :rules="rules.name"
              color="blue darken-2"
              label="Apellidos"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="form.correo"
              :rules="rules.name"
              color="blue darken-2"
              label="Correo Electronico"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="form.telefono"
              :rules="rules.name"
              color="blue darken-2"
              label="Telefono"
              required
              type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="form.id"
              :rules="rules.name"
              color="blue darken-2"
              label="Indentificacion"
              required
              type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              v-model="form.usuario"
              :items= "usuario"
              :rules="rules.name"
              color="blue darken-2"
              label="Tipo Usuario"
              required
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="form.contraseña"
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :type="show1 ? 'text' : 'password'"
              :rules="rules.name"
              color="blue darken-2"
              label="Contraseña"
              required
              @click:append="show1 = !show1"
              class="input-group--focused"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="form.Ccontraseña"
              :append-icon="show2 ? 'visibility' : 'visibility_off'"
              :type="show2 ? 'text' : 'password'"
              :rules="rules.name"
              color="blue darken-2"
              label="Confirmar Contraseña"
              required
              @click:append="show2 = !show2"
              class="input-group--focused"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-checkbox
              v-model="form.terms"
              color="green"
            >
              <template v-slot:label>
                <div @click.stop="">
                  Aceptas los
                  <a href="javascript:;" @click.stop="terms = true">terminos</a>
                  y
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
        <v-btn
          :disabled="!formIsValid"
          flat
          color="primary"
          type="submit"
        >Register</v-btn>
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
          <v-btn
            flat
            color="purple"
            @click="terms = false"
          >Ok</v-btn>
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
          <v-btn
            flat
            color="purple"
            @click="conditions = false"
          >Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-flex xs12>
      <div>
        <v-tabs v-model="active" color="blue darken-1">
          <v-tab>ADMINISTRADORES</v-tab>
          <v-tab-item>
          </v-tab-item>
          <v-tab>CLIENTES</v-tab>
        </v-tabs>
      </div>
    </v-flex>
  </v-card>
</template>
<script>
export default {
  // created () {
  // this.$store.commit('SET-LAYOUT', 'administrador-layout')
  // },
  data () {
    const defaultForm = Object.freeze({
      nombre: '',
      apellidos: '',
      correo: '',
      telefono: '',
      id: '',
      usuario: '',
      contraseña: '',
      Ccontraseña: '',
      terms: false
    })

    return {
      show1: false,
      show2: false,
      active: null,
      form: Object.assign({}, defaultForm),
      rules: {
        name: [val => (val || '').length > 0 || 'This field is required']
      },
      conditions: false,
      usuario: ['Cliente', 'Administrador'],
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
      snackbar: false,
      terms: false,
      defaultForm
    }
  },

  computed: {
    formIsValid () {
      return (
        this.form.nombre &&
        this.form.apellidos &&
        this.form.correo &&
        this.form.telefono &&
        this.form.id &&
        this.form.usuario &&
        this.form.contraseña &&
        this.form.Ccontraseña &&
        this.form.terms
      )
    }
  },

  methods: {
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    submit () {
      this.snackbar = true
      this.resetForm()
    }
  }
}
</script>
<style scope>
.este{
  background-color: white
}
</style>
