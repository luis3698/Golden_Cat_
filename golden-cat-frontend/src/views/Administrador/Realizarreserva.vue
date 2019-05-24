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
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card class="card">
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
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
      <v-tabs v-model="active" color="blue darken-1" dark slider-color="greed" >
        <v-tab ripple> reservas activas</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text color="green">
              <template v-for="n in 8">
              <v-flex xs12 :key="n" mb-3>
                <v-card color="red" class="blue darken-1">
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
                <v-card color="orange darken-4" class="white--text">
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
export default {
  data: () => ({
   date: new Date().toISOString().substr(0, 10),
    menu: false,
    dialog1: false,
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
    this.initialize()
  },
  data: () => ({
    items: ['Sencilla', 'Doble', 'Swite', 'Presidencial'],
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

<style scope>
.todos{
  background-color: #1e88e5;
  border-radius: 20px 20px 20px 20px;
}
.rojo{
  background-color: red !important;
}
.theme--light.v-sheet {
    background-color: dimgray;
}
.card{
  background-color: white !important
}
</style>

