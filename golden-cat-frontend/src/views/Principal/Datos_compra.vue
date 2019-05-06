  <template >
    <v-stepper  v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1"  color="indigo darken-4" >Datos reserva</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2"  color="indigo darken-4" >datos cliente</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3"  color="indigo darken-4" >generar reserva</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-5" color="grey lighten-1" height="450px" width="1100px">
              <v-container fluid class="indigo darken-3">
        <v-layout row>
          <v-flex xs6 >
            <v-card dark tile flat>
              <div class="indigo darken-4 darken-2 text-xs-center">
                <h3 class="headline font-weight-light mb-0">Datos de reserva</h3>
              </div>
            <v-card>
              <v-layout row>
                <v-flex xs8>
                  <v-card-text class=" font-weight-light text-sm-left .headline" >tipo de habitacion :</v-card-text>
                </v-flex>
                <v-flex xs4>
                  <v-card-text class=" font-weight-light text-sm-left .headline" >doble</v-card-text>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs8  >
                  <v-card-text class=" font-weight-light text-sm-left .headline" >Fecha de inicia de la reserva :</v-card-text>
                </v-flex>
                <v-flex xs4>
                  <v-card-text class=" font-weight-light text-sm-left .headline" >00/00/0000 </v-card-text>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs8 >
                  <v-card-text class=" font-weight-light text-sm-left .headline" >Fecha final de la reserva :</v-card-text>
                </v-flex>
                <v-flex xs4>
                  <v-card-text class=" font-weight-light text-sm-left .headline" >00/00/0000</v-card-text>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs8 >
                  <v-card-text class=" font-weight-light text-sm-left .headline" >Numero de adultos :</v-card-text>
                </v-flex>
                <v-flex xs4>
                  <v-card-text class=" font-weight-light text-sm-left .headline" >2</v-card-text>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex  >
                  <v-card-text class=" font-weight-light text-sm-left .headline" >Numeros de niños :</v-card-text>
                </v-flex>
                <v-flex xs4>
                  <v-card-text class=" font-weight-light text-sm-left .headline" >2</v-card-text>
                </v-flex>
              </v-layout>
            </v-card>
            </v-card>
          </v-flex>
          <v-flex xs6 >
            <v-card  tile flat color="indigo darken-3" >
              <div class="indigo darken-4 darken-2 text-xs-center">
                <h3 class="headline font-weight-light mb-0">Datos de reserva</h3>
              </div>
        <v-layout row>
          <v-flex xs12 mt-5>
            <v-card dark tile flat color="indigo darken-3">
              <v-card-text class="caption">
                  *Aire acondicionado <br>
                  *Baño con ducha, secador de pelo<br>
                  *Caja de seguridad electrónica<br>
                  *Minibar con agua, refrescos, cervezas y más ($)<br>
                  *Teléfono directo en dormitorio y baño<br>
                  *1 cama extra o una cuna (a solicitud)<br>
                  *2 Baños
              </v-card-text>
                <v-dialog v-model="dialogImg"  width="900"  >
          <template v-slot:activator="{ on }" >
            <v-btn  color="indigo darken-4"  dark  v-on="on" >
            ver habitacion
            </v-btn>
          </template>
          <v-card >
            <v-carousel >
              <v-carousel-item v-for="(item1,i) in items1" :key="i" :src="item1.src">
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-dialog>
            </v-card>
          </v-flex>
        </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 order-md2 order-xs1>
            <v-card dark tile flat color="indigo darken-3">
              <v-card-text>
                <v-layout row>
                <v-flex xs9>
                  <v-card-text class=" font-weight-light text-lg-right display-2" >TOTAL:</v-card-text>
                </v-flex>
                <v-flex xs2>
                  <v-card-text class=" font-weight-light text-sm-left display-2" >10.000$</v-card-text>
                </v-flex>
              </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
          </v-card>

          <v-btn  color="indigo darken-4" @click="e1 = 2"> Continue</v-btn>
          <v-btn flat to="/" >CANCELAR</v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <div class="indigo darken-4 darken-2 text-xs-center">
                <h3 class="headline font-weight-light mb-0">Datos del cliente</h3>
              </div>
          <v-card class="mb-5"  height="300px" width="1100px">

      <v-layout row wrap>
        <v-flex xs12 sm6 md3 order-md1 order-sm2>
          <v-card dark tile flat >
            <v-card-text class="text-lg-right">NOMBRE :</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md2 order-sm1>
          <v-card dark tile flat >
          <v-text-field small label="nombre" solo ></v-text-field>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md3 order-sm4>
          <v-card dark tile flat >
             <v-card-text >APELLIDO :</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md4 order-sm3>
          <v-card dark tile flat >
           <v-text-field small class="text-sm-left" label="apellido" solo ></v-text-field>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm6 md3 order-md1 order-sm2>
          <v-card dark tile flat >
            <v-card-text class="text-lg-right"> CC :</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md2 order-sm1>
          <v-card dark tile flat >
           <v-text-field small label="cc" solo ></v-text-field>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md3 order-sm4>
          <v-card dark tile flat >
             <v-card-text >TELEFONO :</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md4 order-sm3>
          <v-card dark tile flat>
            <v-text-field small label="telefono" solo ></v-text-field>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm6 md3 order-md1 order-sm2>
          <v-card dark tile flat >
            <v-card-text class="text-lg-right">CORREO ELECTRONICO :</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md2 order-sm1>
          <v-card dark tile flat>
           <v-text-field small label="correo electronico" solo ></v-text-field>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md3 order-sm4>
          <v-card dark tile flat >
            <v-card-text >CIUDAD :</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md4 order-sm3>
          <v-card dark tile flat >
           <v-text-field small label="ciudad" solo ></v-text-field>
          </v-card>
        </v-flex>
      </v-layout>

          </v-card>
          <v-btn color="indigo darken-4" @click="e1 = 3"> Continue</v-btn>
          <v-btn flat  @click="e1 = 1">ATRAS</v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card class="mb-5" color="grey lighten-1" height="300px" >
            <div class="indigo darken-4 darken-2 text-xs-center">
                <h3 class="headline font-weight-light mb-0">Datos pago</h3>
              </div>

        <v-flex xs12 order-lg2  class="colort ransparent text-xs-center">
        <v-dialog v-model="dialogEmail" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="blue darken-4" dark v-on="on">tarjeta de credito</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">EDiTAR E-MAIL</span>
            </v-card-title>
            <v-card-text >
              <v-container grid-list-md>
                <v-layout wrap>
                <v-flex xs12>
                    <v-text-field label="Email actual*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Email nuevo*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="confirma Email nuevo*" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>verifique que tidos los datos esten correctamente escritos</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="blue darken-4"  dark @click="dialogTarjeta = false">Close</v-btn>
              <v-btn color="blue darken-4"  dark @click="dialogTarjeta = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </v-flex>

        <v-flex xs12 order-lg2  class="colort ransparent text-xs-center">
        <v-dialog v-model="dialogEmail" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="blue darken-4" dark v-on="on">efecty</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">EDiTAR E-MAIL</span>
            </v-card-title>
            <v-card-text >
              <v-container grid-list-md>
                <v-layout wrap>
                <v-flex xs12>
                    <v-text-field label="Email actual*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Email nuevo*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="confirma Email nuevo*" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>verifique que tidos los datos esten correctamente escritos</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="blue darken-4"  dark @click="dialogEfecty = false">Close</v-btn>
              <v-btn color="blue darken-4"  dark @click="dialogEfecty = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </v-flex>

        <v-flex xs12 order-lg2  class="colort ransparent text-xs-center">
        <v-dialog v-model="dialogEmail" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="blue darken-4" dark v-on="on">pay pal</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">EDiTAR E-MAIL</span>
            </v-card-title>
            <v-card-text >
              <v-container grid-list-md>
                <v-layout wrap>
                <v-flex xs12>
                    <v-text-field label="Email actual*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Email nuevo*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="confirma Email nuevo*" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>verifique que tidos los datos esten correctamente escritos</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="blue darken-4"  dark @click="dialogPaypal = false">Close</v-btn>
              <v-btn color="blue darken-4"  dark @click="dialogPaypal = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </v-flex>

        <v-flex xs12 order-lg2  class="colort ransparent text-xs-center">
        <v-dialog v-model="dialogEmail" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="blue darken-4" dark v-on="on">al llegar</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">EDiTAR E-MAIL</span>
            </v-card-title>
            <v-card-text >
              <v-container grid-list-md>
                <v-layout wrap>
                <v-flex xs12>
                    <v-text-field label="Email actual*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Email nuevo*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="confirma Email nuevo*" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>verifique que tidos los datos esten correctamente escritos</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="blue darken-4"  dark @click="dialogHotel = false">Close</v-btn>
              <v-btn color="blue darken-4"  dark @click="dialogHotel = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </v-flex>

          </v-card>

           <v-layout row justify-center>
      <v-dialog v-model="dialogConfirmar" persistent max-width="290">
        <template v-slot:activator="{ on }">
          <v-btn color="indigo darken-4" dark v-on="on">reservar</v-btn>
          <v-btn flat @click="e1 = 2">atras</v-btn>
        </template>
        <v-card>
          <v- class="headline">esta seguro que desea generar la reserva?</v->
          <v-card-text>al confirmar  esta reserva se generara una reserva a esta cuenta de usuario </v-card-text>
          <v-card-text>en caso de cancelar la reserva lo podra hacer en el menu cuenta/reservas</v-card-text>
          <v-card-text>en caso de cancelar reseva y tener metodo de pago de forma virtual su dinero sera reembolsado a la misma cuenta entre las proximas 24 a 48 horas de la cancelacion </v-card-text>
          <v-card-text>en caso de no generarse el reembolso en las horas estrablecidas ponerce en conctacto con nuestros numero de atencion al cliente 32346545 - 72435565 </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
          <v-btn color="indigo darken-4" @click="e1 = 0"> confirma reserva</v-btn>
          <v-btn flat>Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </template>
<script>
import HABITACION2 from '@/assets/habitacion2.png'
export default {
  data: () => ({

    habitacion2: HABITACION2,
    e1: 0,
    dialogImg: false,
    dialogTarjeta: false,
    dialogPaypal: false,
    dialogHotel: false,
    dialogConfirmar: false,

    items1: [
      {
        src: 'https://www.hotelbestpricegracia.com/wp-content/uploads/2015/07/bestprice-90.jpg'
      },
      {
        src: 'https://www.hotelbestpricegracia.com/wp-content/uploads/2015/07/bestprice-169.jpg'
      },
      {
        src: 'https://www.hotelbestpricegracia.com/wp-content/uploads/2015/07/room17.jpg'
      },
      {
        src: 'https://www.hotelbestpricegracia.com/wp-content/uploads/2015/07/bestprice-66.jpg'
      }
    ]
  })
}

</script>
  <style scoped>

  </style>
