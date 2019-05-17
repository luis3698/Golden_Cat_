<template>
   <v-flex xs12 sm12 md12>
        <v-toolbar
        color="blue darken-1"
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
                  ref="telefono"
                  v-model="telefono"
                  :rules="[() => !!telefono || 'Este campo es requerido']"
                  label="Telefono"
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
                  ref="habitacion"
                  v-model="habitacion"
                  :rules="[() => !!habitacion || 'Este campo es requerido']"
                  label="Tipo de Habitacion"
                  required
                ></v-text-field>
                <v-text-field
                  ref="nhabitacion"
                  v-model="nhabitacion"
                  :rules="[() => !!nhabitacion || 'Este campo es requerido']"
                  label="No. Habitacion"
                  required
                ></v-text-field>
                <v-text-field
                  ref="precio"
                  v-model="precio"
                  :rules="[() => !!precio || 'Este campo es requerido']"
                  label="Precio de la Habitacion"
                  required
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
                  <v-text-field v-model="editedItem.name" label="Nombre Completo"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.cc" label="Indentificacion"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.email" label="E-mail"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.telefono" label="telefono"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field type="date" v-model="editedItem.fe" label="Fecha Entrada"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field type="date" v-model="editedItem.fs" label="Fecha Salida"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.habitacion" label="Tipo de Habitacion"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.nhabitacion" label="No. Habitacion"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.precio" label="Precio"></v-text-field>
                </v-flex>
              <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.adulto" label="No. Adultos"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.niño" label="No. Niños"></v-text-field>
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
        <td class="text-xs-right">{{ props.item.cc }}</td>
        <td class="text-xs-right">{{ props.item.email }}</td>
        <td class="text-xs-right">{{ props.item.telefono }}</td>
        <td class="text-xs-right">{{ props.item.fe }}</td>
        <td class="text-xs-right">{{ props.item.fs }}</td>
        <td class="text-xs-right">{{ props.item.habitacion }}</td>
        <td class="text-xs-right">{{ props.item.nhabitacion }}</td>
        <td class="text-xs-right">{{ props.item.precio }}</td>
        <td class="text-xs-right">{{ props.item.adulto }}</td>
        <td class="text-xs-right">{{ props.item.niño }}</td>
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
    telefono: null,
    fechaentrada: null,
    fechasalida: null,
    habitacion: null,
    nhabitacion: null,
    precio: null,
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
        telefono: this.telefono,
        fechaentrada: this.fechaentrada,
        fechasalida: this.fechasalida,
        habitacion: this.habitacion,
        nhabitacion: this.nhabitacion,
        precio: this.precio,
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
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Nombre Completo',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'CC', value: 'cc' },
      { text: 'E-mail', value: 'email' },
      { text: 'Telefono', value: 'telefono' },
      { text: 'Fecha Entrada', value: 'fe', type: 'date' },
      { text: 'Fecha Salida', value: 'fs', type: 'date' },
      { text: 'Tipo habitacion', value: 'habitacion' },
      { text: 'No. habitacion', value: 'nhabitacion' },
      { text: 'Precio', value: 'precio' },
      { text: 'No. Adultos', value: 'adulto' },
      { text: 'No. Niños', value: 'niño' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      cc: 0,
      email: 0,
      telefono: 0,
      fe: 0,
      fs: 0,
      habitacion: 0,
      nhabitacion: 0,
      precio: 0,
      adulto: 0,
      niño: 0
    },
    defaultItem: {
      name: '',
      cc: 0,
      email: 0,
      telefono: 0,
      fe: 0,
      fs: 0,
      habitacion: 0,
      nhabitacion: 0,
      precio: 0,
      adulto: 0,
      niño: 0
    }
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Editar Reserva'
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
          cc: 8239621473,
          email: 'CarlosR@gmail.com',
          telefono: '3065241786',
          fe: '2008-11-24',
          fs: '2009-01-30',
          habitacion: 'presindencial',
          nhabitacion: 201,
          precio: '200.000',
          adulto: 10,
          niño: 5
        },
        {
          name: 'Bruno Dias',
          cc: 1036524951,
          email: 'Bruno@gmail.com',
          telefono: '3065241786',
          fe: '2012-12-12',
          fs: '2012-12-30',
          habitacion: 'presindencial',
          nhabitacion: 201,
          precio: '200.000',
          adulto: 1,
          niño: 1
        },
        {
          name: 'clar Kent',
          cc: 1009647258,
          email: 'clarS@hotmail.com',
          telefono: '3065241786',
          fe: '2005-06-21',
          fs: '2005-08-23',
          habitacion: 'presindencial',
          nhabitacion: 201,
          precio: '200.000',
          adulto: 1,
          niño: 0
        },
        {
          name: 'Benjamin Parker',
          cc: 1005641837,
          email: 'ParkerP@gmail.com',
          telefono: '3065241786',
          fe: '2003-03-06',
          fs: '2003-06-15',
          habitacion: 'presindencial',
          nhabitacion: 201,
          precio: '200.000',
          adulto: 2,
          niño: 1
        },
        {
          name: 'Roberto Giraldo',
          cc: 1004583718,
          email: 'RoberGl@gmail.com',
          telefono: '3065241786',
          fe: '2008-07-12',
          fs: '2008-08-10',
          habitacion: 'presindencial',
          nhabitacion: 201,
          precio: '200.000',
          adulto: 5,
          niño: 3
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
