<template>

            <v-card flat>

              <v-card-text>
                   <template>
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

              </v-card>
            </v-flex>
             </template >
                <v-layout align-center mb-1>
                  <v-icon>fas fa-lock</v-icon>
                  <strong class="title">Tarjetas de crédito</strong>
                  <v-spacer></v-spacer>
                </v-layout>
                <p>
                 Tus datos se autocompletarán para que puedas reservar más fácilmente
                  alojamientos y servicios adicionales con Golden Cat Tus datos de
                  pago se guardarán de forma segura.
                </p>

                <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="indigo darken-4" dark v-on="on">agregar tarjeta
            <v-icon dark>add</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">datos de tarjeta</span>
          </v-card-title>
          <v-card-text align-center>
            <v-container grid-list-md pa-0>
              <v-layout wrap>

                <v-flex xs12 >
                  <v-text-field label="numero dela tarjeta" required ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="nombre de titular" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md2>
                  <v-text-field label="M M" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm2>
                 <v-text-field label="Y Y" required></v-text-field>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs12 sm4>
                 <v-text-field label="Código de seguridad" required></v-text-field>
                </v-flex>

                <v-flex xs12 sm12>
                  <v-autocomplete
                    :items="['Master Card', 'Visa', 'American Express', 'Dinners Club']"
                    label="tipo de tarjeta"
                  ></v-autocomplete>
                  <v-checkbox v-model="x" label="guardar datos de tarjeta" value="left" ></v-checkbox>
                </v-flex>
              </v-layout>
            </v-container>
            <small>verifique los datos ingresados esten correctos</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken" flat @click="dialog = false">salir</v-btn>
            <v-btn color="blue darken" flat @click="dialog = false">guardar

            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
              </v-card-text>
            </v-card>

</template>
<script>
export default {
  data () {
    return {
      dialogm1: '',
      dialog: false
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
<style>

</style>
