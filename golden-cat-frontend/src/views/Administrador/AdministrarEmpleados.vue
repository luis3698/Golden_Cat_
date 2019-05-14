<template>
<v-flex xs12 sm12 md12>
        <v-toolbar
        color="indigo"
        dark
        tabs
        >
        <h1>Registar Empleado</h1>
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
                  ref="identificaion"
                  v-model="identificacion"
                  :rules="[() => !!identificacion || 'Este campo es requerido',
                  () => !!identificacion && identificacion.length <= 25 || 'Haz superado el maximo de caracteres']"
                  counter="25"
                  :error-messages="errorMessages"
                  label="Id"
                  type="number"
                  required
                ></v-text-field>
                <v-text-field
                  ref="cc"
                  v-model="cc"
                  :rules="[
                    () => !!cc || 'Este campo es requerido',
                    () => !!cc && cc.length <= 25 || 'Haz superado el maximo de caracteres']"
                  label="CC"
                  type="number"
                  counter="25"
                  required
                  placeholder="Identificación"
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
                  ref="telefono"
                  v-model="telefono"
                  :rules="[() => !! telefono || 'Este campo es requerido']"
                  label="Teléfono"
                  type="text"
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
            <v-btn color="primary" flat @click="submit">Guardar</v-btn>
          </v-card-actions>
            </v-card>
          </v-flex>
          <v-spacer>
            .
          </v-spacer>
          <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Lista de Empleados</v-toolbar-title>
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
                  <v-text-field type="text" v-model="editedItem.name" label="Nombre completo"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field type="number" v-model="editedItem.identificacion" label="Id"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field type="number" v-model="editedItem.cc" label="CC"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.email" label="E-mail"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field type="number" v-model="editedItem.telefono" label="Teléfono"></v-text-field>
                </v-flex>

              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancelar</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Guardar</v-btn>
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
        <td class="text-xs-right">{{ props.item.identificacion }}</td>
        <td class="text-xs-right">{{ props.item.cc }}</td>
        <td class="text-xs-right">{{ props.item.email }}</td>
        <td class="text-xs-right">{{ props.item.telefono }}</td>
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
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  data: () => ({

    errorMessages: '',
    formHasErrors: false,

    dialog: false,
    headers: [
      {
        text: 'Nombre Completo',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Id', value: 'identificacion' },
      { text: 'CC', value: 'cc' },
      { text: 'E-mail', value: 'email' },
      { text: 'Teléfono', value: 'telefono', type: 'text' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      identificacion: '',
      cc: 0,
      email: 0,
      telefono: 0,
    },
    defaultItem: {
      name: '',
      identificacion: '',
      cc: 0,
      email: 0,
      telefono: 0,
    }
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Editar Empleado'
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
          name: 'Carlos Rodriguez',
          identificacion: '01',
          cc: 8239621473,
          email: 'CarlosR@gmail.com',
          telefono: '3214556724',
          contraseña: 'k4j6g5k756',
        },
        {
          name: 'Bruno Dias',
          identificacion: '02',
          cc: 1036524951,
          email: 'Bruno@gmail.com',
          telefono: '3214556724',
          contraseña: 'k4j6g5k756',
        },
        {
          name: 'clar Kent',
          identificacion: '03',
          cc: 1009647258,
          email: 'clarS@hotmail.com',
          telefono: '3214556724',
          contraseña: 'k4j6g5k756',
        },
        {
          name: 'Benjamin Parker',
          identificacion: '04',
          cc: 1005641837,
          email: 'ParkerP@gmail.com',
          telefono: '3214556724',
          contraseña: 'k4j6g5k756',
        },
        {
          name: 'Roberto Giraldo',
          identificacion: '05',
          cc: 1004583718,
          email: 'RoberGl@gmail.com',
          telefono: '3214556724',
          contraseña: 'k4j6g5k756',
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
      confirm('Estas seguro de elimnar este empleado?') && this.desserts.splice(index, 1)
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
