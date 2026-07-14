<template>
  <v-container class="gc-section" style="max-width:960px">
    <!-- ===== Flujo de reserva ===== -->
    <v-stepper v-model="e1" v-show="!reservaConfirm" class="elevation-2">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" color="primary">Datos de reserva</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2" color="primary">Datos del cliente</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3" color="primary">Pago</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <!-- Paso 1 -->
        <v-stepper-content step="1">
          <v-layout row wrap>
            <v-flex xs12 md6 pa-2>
              <v-card color="primary" dark class="fill-height">
                <v-card-title class="subheading">Detalle de la reserva</v-card-title>
                <v-divider dark></v-divider>
                <v-list dark dense class="transparent">
                  <v-list-tile v-for="d in detalleReserva" :key="d.label">
                    <v-list-tile-content>{{ d.label }}</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ d.value }}</v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
            <v-flex xs12 md6 pa-2>
              <v-card class="fill-height">
                <v-card-title class="subheading primary--text">Comodidades</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="grey--text text--darken-1">
                  <div v-for="a in amenidades" :key="a"><v-icon small color="accent" class="mr-1">check</v-icon>{{ a }}</div>
                </v-card-text>
                <v-card-actions class="px-3 pb-3">
                  <v-btn small color="secondary" dark @click="dialogImg = true">
                    <v-icon small left>photo</v-icon>Ver habitación
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
          <v-card color="secondary" dark class="mt-2">
            <v-card-text class="text-xs-right">
              <span class="title">TOTAL:</span>
              <span class="display-1 font-weight-bold ml-3">{{ formatoPrecio(total) }}</span>
            </v-card-text>
          </v-card>
          <div class="mt-3">
            <v-btn color="primary" @click="e1 = 2">Continuar</v-btn>
            <v-btn flat to="/">Cancelar</v-btn>
          </div>
        </v-stepper-content>

        <!-- Paso 2 -->
        <v-stepper-content step="2">
          <v-card class="pa-3">
            <v-card-title class="subheading primary--text">Datos del cliente</v-card-title>
            <v-layout row wrap>
              <v-flex xs12 sm6 pa-2><v-text-field label="Nombre" v-model="cliente.nombre" color="primary"></v-text-field></v-flex>
              <v-flex xs12 sm6 pa-2><v-text-field label="Apellido" v-model="cliente.apellido" color="primary"></v-text-field></v-flex>
              <v-flex xs12 sm6 pa-2><v-text-field label="Documento (CC)" v-model="cliente.cc" color="primary"></v-text-field></v-flex>
              <v-flex xs12 sm6 pa-2><v-text-field label="Teléfono" v-model="cliente.telefono" color="primary"></v-text-field></v-flex>
              <v-flex xs12 sm6 pa-2><v-text-field label="Correo electrónico" v-model="cliente.correo" color="primary"></v-text-field></v-flex>
              <v-flex xs12 sm6 pa-2><v-text-field label="Ciudad" v-model="cliente.ciudad" color="primary"></v-text-field></v-flex>
            </v-layout>
          </v-card>
          <div class="mt-3">
            <v-btn color="primary" @click="e1 = 3">Continuar</v-btn>
            <v-btn flat @click="e1 = 1">Atrás</v-btn>
          </div>
        </v-stepper-content>

        <!-- Paso 3 -->
        <v-stepper-content step="3">
          <v-card class="pa-3">
            <v-card-title class="subheading primary--text">Método de pago</v-card-title>
            <v-layout row wrap>
              <v-flex v-for="m in metodosPago" :key="m.value" xs12 sm6 md3 pa-2>
                <v-btn block large
                  :color="pago === m.value ? 'primary' : 'grey lighten-3'"
                  :class="pago === m.value ? 'white--text' : ''"
                  @click="pago = m.value">
                  <v-icon left>{{ m.icon }}</v-icon>{{ m.label }}
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card>
          <div class="mt-3">
            <v-btn color="accent" class="black--text" :disabled="!pago" @click="dialogConfirmar = true">Reservar</v-btn>
            <v-btn flat @click="e1 = 2">Atrás</v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

    <!-- ===== Confirmación ===== -->
    <v-card v-show="reservaConfirm" class="pa-4 text-xs-center">
      <v-icon size="72" color="success">check_circle</v-icon>
      <h2 class="section-title mt-2">¡Reserva confirmada!</h2>
      <div class="gc-rule"></div>
      <v-layout row wrap class="text-xs-left mt-3">
        <v-flex xs12 sm6 pa-2>
          <v-card flat class="grey lighten-4 pa-3">
            <div class="subheading primary--text mb-2">Datos de la reserva</div>
            <div v-for="d in detalleReserva" :key="d.label"><b>{{ d.label }}</b> {{ d.value }}</div>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 pa-2>
          <v-card flat class="grey lighten-4 pa-3">
            <div class="subheading primary--text mb-2">Datos del cliente</div>
            <div><b>Nombre:</b> {{ cliente.nombre }} {{ cliente.apellido }}</div>
            <div><b>Teléfono:</b> {{ cliente.telefono }}</div>
            <div><b>Correo:</b> {{ cliente.correo }}</div>
            <div><b>Ciudad:</b> {{ cliente.ciudad }}</div>
            <div class="title primary--text mt-2">Total: {{ formatoPrecio(total) }}</div>
          </v-card>
        </v-flex>
      </v-layout>
      <v-btn color="primary" to="/" class="mt-3">Volver al inicio</v-btn>
    </v-card>

    <!-- Diálogo galería -->
    <v-dialog v-model="dialogImg" width="900">
      <v-card>
        <v-img :src="habitacion2" height="480"></v-img>
      </v-card>
    </v-dialog>

    <!-- Diálogo confirmar -->
    <v-dialog v-model="dialogConfirmar" persistent max-width="420">
      <v-card>
        <v-toolbar color="primary" dark dense flat><v-toolbar-title>Confirmar reserva</v-toolbar-title></v-toolbar>
        <v-card-text class="pt-3">
          ¿Deseas generar la reserva? Al confirmar, se asociará a tu cuenta. Podrás cancelarla
          desde <b>Mi cuenta → Mis reservas</b>.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="dialogConfirmar = false">Cancelar</v-btn>
          <v-btn color="primary" @click="confirmar">Confirmar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import HABITACION2 from '@/assets/habitacion2.jpg'

export default {
  name: 'datos-compra',
  data: () => ({
    reservaConfirm: false,
    habitacion2: HABITACION2,
    e1: 1,
    total: 650000,
    pago: '',
    dialogImg: false,
    dialogConfirmar: false,
    cliente: { nombre: '', apellido: '', cc: '', telefono: '', correo: '', ciudad: '' },
    detalleReserva: [
      { label: 'Tipo de habitación', value: 'Doble' },
      { label: 'Fecha de entrada', value: '12/05/2025' },
      { label: 'Fecha de salida', value: '15/05/2025' },
      { label: 'Adultos', value: '2' },
      { label: 'Niños', value: '0' }
    ],
    amenidades: [
      'Aire acondicionado',
      'Baño con ducha y secador de pelo',
      'Caja de seguridad electrónica',
      'Minibar con agua, refrescos y más',
      'Teléfono directo en dormitorio y baño',
      'Cama extra o cuna (a solicitud)'
    ],
    metodosPago: [
      { value: 'tarjeta', label: 'Tarjeta', icon: 'credit_card' },
      { value: 'efecty', label: 'Efecty', icon: 'point_of_sale' },
      { value: 'paypal', label: 'PayPal', icon: 'account_balance_wallet' },
      { value: 'hotel', label: 'Al llegar', icon: 'hotel' }
    ]
  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  methods: {
    formatoPrecio (v) { return '$' + Number(v).toLocaleString('es-CO') },
    confirmar () {
      this.dialogConfirmar = false
      this.reservaConfirm = true
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.section-title { font-size: 30px; color: var(--gc-teal, #0F4C46); margin: 4px 0; }
</style>
