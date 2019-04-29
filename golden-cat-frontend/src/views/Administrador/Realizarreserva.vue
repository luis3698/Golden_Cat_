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
                <v-text-field
                  ref="adultos"
                  v-model="adultos"
                  :rules="[() => !!adultos || 'Este campo es requerido',
                  ]"
                  :items="adultoss"
                  label="No. adultos"
                  type="number"
                  placeholder="Select..."
                  required
                ></v-text-field>
                <v-text-field
                  ref="niños"
                  v-model="niños"
                  :rules="[() => !!niños || 'Este campo es requerido']"
                  :items="niñoss"
                  label="No. niños"
                  type="number"
                  placeholder="Select..."
                  required
                ></v-text-field>
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
          <v-spacer>
            .
          </v-spacer>
          <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Lista de Reservas</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-text-field  label="Buscar" outline hide-details></v-text-field>
          <v-btn round color="white" ><v-icon color="black">search</v-icon></v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
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
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
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
  </div>
   </v-flex>
</template>

<script>
export default {
  data: () => ({
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
  },data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7
          }
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
