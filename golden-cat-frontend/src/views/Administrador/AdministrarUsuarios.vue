<template>
  <v-card class="este" flat>
    <v-snackbar v-model="snackbar" absolute top right color="success">
      <span>Registration successful!</span>
      <v-icon dark>check_circle</v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <v-container class="este" grid-list-xl fluid color="white">
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
        <v-tabs fixed-tabs v-model="active" color="blue darken-1">
          <v-tab>ADMINISTRADORES</v-tab>
          <v-tab-item>
            <v-toolbar flat color="white">
              <v-dialog v-model="dialog" max-width="500px">
                <v-card class="este">
                  <v-card-text c>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.nombres" label="Nombre"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.apellidos" label="Apellidos"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.correo" label="Correo Electronico"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.telefono" label="Telefono"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.id" label="Identificacion"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
            <v-data-table
              :headers="headers"
              :items="desserts"
              class="elevation-1"
            >
              <template v-slot:items="props">
                <td>{{ props.item.nombres }}</td>
                <td class="justify-center">{{ props.item.apellidos }}</td>
                <td class="justify-center">{{ props.item.correo }}</td>
                <td class="justify-center">{{ props.item.telefono }}</td>
                <td class="justify-center">{{ props.item.id }}</td>
                <td class="justify-center layout px-0">
                  <v-icon
                    small
                    class="mr-2"
                    @click="editItem(props.item)"
                  >
                    edit
                  </v-icon>
                  <v-icon
                    small
                    @click="deleteItem(props.item)"
                  >
                    delete
                  </v-icon>
                </td>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>
            </v-data-table>
          </v-tab-item>
          <v-tab>CLIENTES</v-tab>
          <v-tab-item>
            <v-toolbar flat color="white">
              <v-dialog v-model="dialog" max-width="500px">
                <v-card class="este">
                  <v-card-text c>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.nombres" label="Nombre"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.apellidos" label="Apellidos"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.correo" label="Correo Electronico"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.telefono" label="Telefono"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.id" label="Identificacion"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
            <v-data-table
              :headers="headers"
              :items="desserts"
              class="elevation-1"
            >
              <template v-slot:items="props">
                <td>{{ props.item.nombres }}</td>
                <td class="justify-center">{{ props.item.apellidos }}</td>
                <td class="justify-center">{{ props.item.correo }}</td>
                <td class="justify-center">{{ props.item.telefono }}</td>
                <td class="justify-center">{{ props.item.id }}</td>
                <td class="justify-center layout px-0">
                  <v-icon
                    small
                    class="mr-2"
                    @click="editItem(props.item)"
                  >
                    edit
                  </v-icon>
                  <v-icon
                    small
                    @click="deleteItem(props.item)"
                  >
                    delete
                  </v-icon>
                </td>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>
            </v-data-table>
          </v-tab-item>
        </v-tabs>
      </div>
    </v-flex>
  </v-card>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
    this.initialize()
  },
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
      terms: false,
    })

    return {
      dialog: false,
      editedIndex: -1,
      defaultItem: {
        nombres: '',
        apellidos: 0,
        correo: 0,
        telefono: 0,
        id: 0
      },
      editedItem: {
        nombres: '',
        apellidos: 0,
        correo: 0,
        telefono: 0,
        id: 0
      },
      headers: [
        { text: 'Nombre', value: 'nombres' },
        { text: 'Apellido', value: 'apellidos' },
        { text: 'Correo', value: 'correo' },
        { text: 'Telefono', value: 'telefono' },
        { text: 'Indentificacion', value: 'id' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      desserts: [
        {
          nombres: 'Frozen Yogurt',
          apellidos: 159,
          correo: 6.0,
          telefono: 24,
          id: 4.0
        },
        {
          nombres: 'Ice cream sandwich',
          apellidos: 237,
          correo: 9.0,
          telefono: 37,
          id: 4.3
        },
      ],
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
    },
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
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
    },
    initialize () {
      this.desserts = [
        {
          nombres: 'Frozen Yogurt',
          apellidos: 159,
          correo: 6.0,
          telefono: 24,
          id: 4.0
        },
        {
          nombres: 'Ice cream sandwich',
          apellidos: 237,
          correo: 9.0,
          telefono: 37,
          id: 4.3
        },
        
      ]
    },
    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
<style scope>
.este{
  background-color: white !important
}
</style>
