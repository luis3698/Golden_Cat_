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
<<<<<<< HEAD
                 label="Email*"
=======
                v-model="email"
                 label="Email*" 
>>>>>>> b73e6ebae4d020f900b4afd79b12207e585143d3
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
<<<<<<< HEAD

              <v-flex xs12 sm6>
        <v-text-field background-color="white" color="white" dark="false" solo class="fecha,todo" label="seleccionar fechas" ref="myinput"  v-model="range"></v-text-field>
      </v-flex>
      <v-flex xs12 sm12 class="todo">
        {{date}}
      </v-flex>

=======
              <v-flex xs12 sm6>
                <v-text-field background-color="white" color="white" dark="false" regular class="fecha,todo" label="seleccionar fechas" ref="myinput"  v-model="range"></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 class="todo">
                {{date}}
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field type="number" v-model="niños" label="No. niños"></v-text-field>
              </v-flex>
>>>>>>> b73e6ebae4d020f900b4afd79b12207e585143d3
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
      <v-tabs v-model="active"  color="blue darken-1" dark slider-color="greed" >
        <v-tab ripple> reservas activas</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text color="green" >
              <template v-for="n in 1">
              <v-flex xs12 :key="n" mb-3>
                <v-card color="blue darken-1"  class="white--text" >
                  <v-layout row>
                    <v-flex xs5>
                      <v-card-title>
                        <div>
<<<<<<< HEAD
                          <h2 class=" mb-4">Nombres: {{ tipo }}</h2>

                          <h2 class=" mb-4">identificacion: {{ tipo }}</h2>
                          <h2 class=" mb-4">Telefono: {{ tipo }}</h2>

                          <h2  class="mb-4">fecha de la reserva  : 25/05/2017 </h2>
                          <h2  class=" mb-4">numero de adultos : 2</h2>
=======
                          <h4 class=" mb-3">Nombres: {{ nombre }}</h4>
                          <h4 class=" mb-3">identificacion: {{ id }}</h4>
                          <h4 class=" mb-3">Telefono: {{ tel }}</h4>
                          <h4 class=" mb-3">fecha de la reserva: {{ range }}</h4>
                          <h4 class=" mb-3">Pais: {{ country }}</h4>
                          <h4 class=" mb-3">numero de adultos: {{ adultos }} </h4>
>>>>>>> b73e6ebae4d020f900b4afd79b12207e585143d3
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title>
                        <div>
                          <h4 class=" mb-3">Apellidos: {{ apellido }}</h4>
                          <h4 class=" mb-3">Email: {{ email }}</h4>
                          <h4 class=" mb-3">tipo de habitacion: {{ tipo }}</h4>
                          <h4 class=" mb-3">Departamento: {{ departamento }}</h4>
                          <h4 class=" mb-3">precio de la habitacion: {{ precio }}</h4>
                          <h4>numero de niños: {{ niños }}</h4>
                        </div>
                      </v-card-title>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              </template >
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab ripple> reservas en curso</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text color="green">
              <template v-for="n in 1">
              <v-flex xs12 :key="n" mb-3>
                <v-card color="green darken-1" class="white--text">
                  <v-layout row>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>

                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">650000$ </div>
                          <div>numero de niños: 0</div>

                        </div>

                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-expansion-panel>
                        <v-expansion-panel-content >
                          <template v-slot:header>
                            <div>detalles</div>
                          </template>
                          <v-card>
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            <v-btn small color="blue darken-1"  >borrar reserva<v-icon small>business</v-icon>
                            </v-btn>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
              </v-flex>
              </template >
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab ripple> reservas canceladas</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text> <template v-for="n in 8">
              <v-flex xs12 :key="n" mb-3>
                <v-card color="red darken-1" class="white--text">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">650000$ </div>
                          <div>numero de niños: 0</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-expansion-panel>
                        <v-expansion-panel-content >
                          <template v-slot:header>
                            <div>detalles</div>
                          </template>
                          <v-card>
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños
                            </v-card-text>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
              </v-flex>
              </template >
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
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    dialog1: false,
    carta: [],
    date: '',
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
  }
}
</script>
<style scoped>
.theme--light.v-sheet {
    background-color: dimgray;
}
.card{
  background-color: white !important
}
</style>
