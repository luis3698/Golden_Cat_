<template>
   <v-flex  md12>
        <v-toolbar>

          <v-flex xs12 sm6 md2>
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
    <v-flex  md3>
          <v-text-field
            type="number"
            regular
            label="No. adultos"
          ></v-text-field>
        </v-flex>
        <v-flex xs1></v-flex>
        <v-flex  md3>
          <v-text-field
            type="number"
            regular
            label="No. niños"
          ></v-text-field>
        </v-flex>
        <v-flex xs1></v-flex>
        <v-flex  md3>
          <v-text-field
            regular
            type="number"
            label="No. habitacion"
          ></v-text-field>
        </v-flex>
        <v-flex xs1></v-flex>
        <v-flex md3>
        <v-select
          :items="items"
          label="Tipo habitación"
        ></v-select>
      </v-flex>
        </v-toolbar>

        <v-dialog light="true" v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Realizar reserva</v-btn>
      </template>
      <v-card class="card">
        <v-card-title>
          <span class="headline">Datos cliente</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Nombres" v-model="nombre" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Apellidos" v-model="apellido"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                v-model="id"
                  label="Identificación"
                  hint="Solo mayor de edad"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                v-model="email"
                 label="Email*"
                 required>
                 </v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field v-model="tel"
                  label="Teléfono"
                  hint="Solo número nacional"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select v-model="tipo"
                  :items="items"
                  label="Tipo habitacion"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field background-color="white" color="white" dark="false" regular class="fecha,todo" label="seleccionar fechas" ref="myinput"  v-model="range"></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 class="todo">
                {{date1}}
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field type="number" v-model="niños" label="No. niños"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field type="number" v-model="adultos" label="No. adultos"></v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-select
                  label="Departamento"
                  v-model="departamento"
                  :items="departamentos"
                  hint="Solo en caso de provenir del mismo pais"
                  persistent-hintDF
                ></v-select>
              </v-flex>
              <v-flex xs12 sm4>
                <v-select
                  ref="country"
                  v-model="country"
                  :items="countries"
                  label="Pais"
                  hint="Solo en caso de provenir del exterior"
                  persistent-hint
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  v-model="precio"
                  label="Precio"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['Tarjeta credito', 'Tarjeta debito', 'Efectivo']"
                  label="Metodo pago"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field  hint="Solo en caso de pago con tarjeta"
                  persistent-hint label="Password*" type="password" required></v-text-field>
              </v-flex>

            </v-layout>
          </v-container>
          <small>*indica campo requerido</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-flex xs12>
      <div class="rojo">
        <v-tabs color="blue darken-1">
          <v-tab ripple>Reservas activas</v-tab>
          <v-tab-item>
            <v-card flat>
              <v-card-text color="green">
                <div>
                  <v-toolbar flat color="white">
                    <v-toolbar-title>My CRUD</v-toolbar-title>
                    <v-divider
                      class="mx-2"
                      inset
                      vertical
                    ></v-divider>
                    <v-spacer></v-spacer>

                  </v-toolbar>
                  <v-data-table
                    :headers="headers"
                    :items="desserts"
                    class="elevation-1"
                  >
                    <template v-slot:items="props">
                      <td>{{ props.item.name }}</td>
                      <td class="text-xs-right">{{ props.item.tel }}</td>
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
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab ripple>Reservas en curso</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text color="blue darken-1">

            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab ripple>Reservas Canceladas</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text color="blue darken-1">

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
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
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
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Calories', value: 'tel' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      tel: 0,
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
    },
    date: new Date().toISOString().substr(0, 10),
    date1: null,
    menu: false,
    dialog1: false,
    carta: [],
    configFlat: { mode: 'range', dateFormat: 'Y-m-d H:i', locale: Spanish },
    range: '',
    countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad  Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
    items: ['Sencilla', 'Doble', 'Swite', 'Presidencial'],
    dialog: false,
    departamentos: ['AMAZONAS', 'ANTIOQUIA', 'ARAUCA', 'ATLÁNTICO', 'BOLÍVAR', 'BOYACÁ', 'CALDAS', 'CAQUETÁ', 'CASANARE', 'CAUCA', 'CESAR', 'CHOCÓ', 'CÓRDOBA', 'CUNDINAMARCA', 'DISTRITO CAPITAL', 'GUAINÍA', 'GUAVIARE', 'HUILA', 'LA GUAJIRA', 'MAGDALENA', 'META', 'NARIÑO', 'NORTE DE SANTANDER', 'PUTUMAYO', 'QUINDÍO', 'RISARALDA', 'SAN ANDRÉS Y PROVIDENCIA', 'SANTANDER', 'SUCRE', 'TOLIMA', 'VALLE', 'VAUPÉS', 'VICHADA']

  }),
  watch: {
    dialog (val) {
      val || this.close()
    }
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
</script>
<style scope>
.theme--light.v-sheet {
    background-color: dimgray;
}
.card{
  background-color: white !important
}
</style>
