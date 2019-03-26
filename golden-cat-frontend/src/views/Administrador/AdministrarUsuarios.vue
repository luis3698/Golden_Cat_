<template>
    <v-flex xs12 sm12 md12>
        <v-toolbar flat color="white" height="100px">
            <v-toolbar-title>Usuarios</v-toolbar-title>
            <v-divider
                class="mx-2"
                inset
                vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                    <v-btn color="indigo" dark class="mb-2" v-on="on">Registrar Usuario</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.name" label="Nombre"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.calories" label="Codigo"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.fat" label="ID"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.carbs" label="Telefono"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.protein" label="Correo"></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="indigo" flat @click="close">Cancel</v-btn>
                        <v-btn color="indigo" flat @click="save">Save</v-btn>
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
            <v-btn color="indigo" @click="initialize">Cargar</v-btn>
        </template>
    </v-data-table>
    </v-flex>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Nombre',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Codigo', value: 'calories' },
      { text: 'ID', value: 'fat' },
      { text: 'Telefono', value: 'carbs' },
      { text: 'Correo', value: 'protein' },
      { text: 'Acciones', value: 'name', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: ''
    },
    defaultItem: {
      name: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: ''
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
          name: '',
          calories: '',
          fat: '',
          carbs: '',
          protein: ''
        },
        {
          name: '',
          calories: '',
          fat: '',
          carbs: '',
          protein: ''
        },
        {
          name: '',
          calories: '',
          fat: '',
          carbs: '',
          protein: ''
        },
        {
          name: '',
          calories: '',
          fat: '',
          carbs: '',
          protein: ''

        },
        {
          name: '',
          calories: '',
          fat: '',
          carbs: '',
          protein: ''
        },
        {
          name: '',
          calories: '',
          fat: '',
          carbs: '',
          protein: ''
        },
        {
          name: '',
          calories: '',
          fat: '',
          carbs: '',
          protein: ''
        },
        {
          name: '',
          calories: '',
          fat: '',
          carbs: '',
          protein: ''
        },
        {
          name: '',
          calories: '',
          fat: '',
          carbs: '',
          protein: ''
        },
        {
          name: '',
          calories: '',
          fat: '',
          carbs: '',
          protein: ''
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
      confirm('Estás seguro de eliminar este usuario?') && this.desserts.splice(index, 1)
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
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>
