<template>
<<<<<<< HEAD

   <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>Vuetify</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
=======
<v-flex xs12>
  <div>
    <v-tabs v-model="active" color="indigo darken-4" dark slider-color="yellow" >
      <v-tab ripple> reservas canceladas</v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <template v-for="n in 8">
             <v-flex xs12 :key="n" mb-3>
              <v-card color="red" class="white--text">
                <v-layout row >
                  <v-flex xs4>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline mb-4">tipo de habitacion: doble</div>
                        <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                        <div  class=" mb-4">numero de adultos : 2</div>
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
      <v-tab ripple> historial de reservas</v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
             <template v-for="n in 8">
             <v-flex xs12 :key="n" mb-3>
              <v-card color="blue" class="white--text">
                <v-layout row >
                  <v-flex xs4>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline mb-4">tipo de habitacion: doble</div>
                        <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                        <div  class=" mb-4">numero de adultos : 2</div>
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
      <v-tab ripple> reservas activas</v-tab>
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
>>>>>>> 133d3ad9d3aaf4414b99861230721adb7ff4e0bc
</template>
<script>

import HABITACION2 from '@/assets/habitacion2.png'
export default {
  name: 'inicio',
  data () {
    return {
      habitacion2: HABITACION2,
      active: null
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  methods: {
    next () {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    }
  }
}
</script>

<style>

</style>
