<template>
   <v-flex  md12>
        <v-toolbar>

          <v-flex xs12 sm6 md3>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Picker in menu"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
        <v-flex xs1></v-flex>
        <v-flex  md2>
          <v-text-field
            regular
            type="number"
            label="No. habitacion"
          ></v-text-field>
        </v-flex>
        <v-flex xs1></v-flex>
        <v-flex md2>
        <v-select
          :items="items"
          label="Tipo habitación"
        ></v-select>
      </v-flex>
      <v-flex xs1></v-flex>
      <v-btn color="success">Buscar</v-btn>
        </v-toolbar>
    <v-flex xs12>
      <div class="rojo">
        <v-tabs color="blue darken-1">
          <v-tab ripple>Reservas activas</v-tab>
          <v-tab-item>
            <v-card flat>
              <v-card-text color="green">
                <div>
    <v-toolbar flat color="white">
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">Realizar reserva</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text md12>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6>
                  <v-select v-model="editedItem.habitacion" :items="items" label="Tipo habitacion"></v-select>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field background-color="white" color="white" dark="false" regular class="fecha,todo" label="seleccionar fechas" ref="myinput"  v-model="editedItem.range"></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 class="todo">
                  {{date1}}
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field v-model="editedItem.personas" label="No. personas"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.precio" label="Precio"></v-text-field>
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
        <td class="text-xs-right">{{ props.item.habitacion }}</td>
        <td class="text-md3-right">{{ props.item.range }}</td>
        <td class="text-xs-right">{{ props.item.personas }}</td>
        <td class="text-xs-right">{{ props.item.precio }}</td>
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
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab ripple>Reservas en curso</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text color="blue darken-1">
              <div>
                  <v-data-table
                    :headers="headers1"
                    :items="desserts1"
                    class="elevation-1"
                  >
                    <template v-slot:items="props">
                      <td>{{ props.item.name1 }}</td>
                      <td class="text-xs-right">{{ props.item.apellidos1 }}</td>
                      <td class="text-xs-right">{{ props.item.id1 }}</td>
                      <td class="text-xs-right">{{ props.item.email1 }}</td>
                      <td class="text-xs-right">{{ props.item.telefono1 }}</td>
                      <td class="text-xs-right">{{ props.item.habitacion1 }}</td>
                      <td class="text-md3-right">{{ props.item.range1 }}</td>
                      <td class="text-xs-right">{{ props.item.personas1 }}</td>
                      <td class="text-xs-right">{{ props.item.departamento1 }}</td>
                      <td class="text-xs-right">{{ props.item.country1 }}</td>
                      <td class="text-xs-right">{{ props.item.precio1 }}</td>
                    </template>
                  </v-data-table>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab ripple>Reservas Canceladas</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text color="blue darken-1">
              <div>
                <v-data-table
                  :headers="headers2"
                  :items="desserts2"
                  class="elevation-1"
                >
                  <template v-slot:items="props">
                    <td>{{ props.item.name2 }}</td>
                      <td class="text-xs-right">{{ props.item.apellidos2 }}</td>
                      <td class="text-xs-right">{{ props.item.id2 }}</td>
                      <td class="text-xs-right">{{ props.item.email2 }}</td>
                      <td class="text-xs-right">{{ props.item.telefono2 }}</td>
                      <td class="text-xs-right">{{ props.item.habitacion2 }}</td>
                      <td class="text-md3-right">{{ props.item.range2 }}</td>
                      <td class="text-xs-right">{{ props.item.personas2 }}</td>
                      <td class="text-xs-right">{{ props.item.departamento2 }}</td>
                      <td class="text-xs-right">{{ props.item.country2 }}</td>
                      <td class="text-xs-right">{{ props.item.precio2 }}</td>
                  </template>
                </v-data-table>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-flex>
   </v-flex>
</template>
<script>
import { Spanish } from 'flatpickr/dist/l10n/es.js'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/material_blue.css'
export default {
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nueva reserva' : 'Edit Item'
    },
    form () {
      return {
        country: this.country,
        departamento: this.departamento
      }
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
    this.initialize()
  },
  mounted () {
    const myInput = this.$refs.myinput.$el.querySelector('input')
    const flat = flatpickr(myInput, this.configFlat)
  },
  data: () => ({
    dialog: false,
    headers1: [
      {
        text: 'Nombres',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Apellidos', value: 'apellidos1' },
      { text: 'Identificacion', value: 'id1' },
      { text: 'Email', value: 'email1' },
      { text: 'Telefono', value: 'telefono1' },
      { text: 'Tipo habitacion', value: 'habitacion1' },
      { text: 'Fecha', value: 'range1' },
      { text: 'No. personas', value: 'personas1' },
      { text: 'Departamento', value: 'departamento1' },
      { text: 'Pais', value: 'country1' },
      { text: 'Precio', value: 'precio1' }
    ],
    headers2: [
      {
        text: 'Nombres',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Apellidos', value: 'apellidos2' },
      { text: 'Identificacion', value: 'id2' },
      { text: 'Email', value: 'email2' },
      { text: 'Telefono', value: 'telefono2' },
      { text: 'Tipo habitacion', value: 'habitacion2' },
      { text: 'Fecha', value: 'range2' },
      { text: 'No. personas', value: 'personas2' },
      { text: 'Departamento', value: 'departamento2' },
      { text: 'Pais', value: 'country2' },
      { text: 'Precio', value: 'precio2' }
    ],
    headers: [
      { text: 'Tipo habitacion', value: 'habitacion' },
      { text: 'Fecha', value: 'range' },
      { text: 'No. personas', value: 'personas' },
      { text: 'Precio', value: 'precio' },
      { text: 'Acciones', value: 'name', sortable: false }
    ],
    desserts: [],
    desserts1: [],
    desserts2: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      apellidos: '',
      id: '',
      email: '',
      telefono: '',
      habitacion: '',
      range: '',
      personas: '',
      departamento: '',
      country: '',
      precio: ''
    },
    defaultItem: {
      name: '',
      apellidos: '',
      id: '',
      email: '',
      telefono: '',
      habitacion: '',
      range: '',
      personas: '',
      departamento: '',
      country: '',
      precio: ''
    },
    date: new Date().toISOString().substr(0, 10),
    date1: null,
    menu: false,
    configFlat: { mode: 'range', dateFormat: 'Y-m-d H:i', locale: Spanish },
    range: '',
    countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad  Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
    items: ['Sencilla', 'Doble', 'Swite', 'Presidencial'],
    departamentos: ['AMAZONAS', 'ANTIOQUIA', 'ARAUCA', 'ATLÁNTICO', 'BOLÍVAR', 'BOYACÁ', 'CALDAS', 'CAQUETÁ', 'CASANARE', 'CAUCA', 'CESAR', 'CHOCÓ', 'CÓRDOBA', 'CUNDINAMARCA', 'DISTRITO CAPITAL', 'GUAINÍA', 'GUAVIARE', 'HUILA', 'LA GUAJIRA', 'MAGDALENA', 'META', 'NARIÑO', 'NORTE DE SANTANDER', 'PUTUMAYO', 'QUINDÍO', 'RISARALDA', 'SAN ANDRÉS Y PROVIDENCIA', 'SANTANDER', 'SUCRE', 'TOLIMA', 'VALLE', 'VAUPÉS', 'VICHADA']

  }),
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    initialize () {
      this.desserts = [

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
.card{
  background-color: white !important
}
</style>
