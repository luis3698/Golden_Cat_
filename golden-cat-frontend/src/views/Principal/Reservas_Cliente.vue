<template>
  <v-container class="gc-section">
    <div class="text-xs-center mb-4">
      <div class="gc-eyebrow">Mi cuenta</div>
      <h2 class="section-title">Mis reservas</h2>
      <div class="gc-rule"></div>
    </div>

    <v-tabs v-model="active" color="primary" dark slider-color="accent" grow>
      <v-tab ripple>Activas</v-tab>
      <v-tab ripple>Canceladas</v-tab>

      <!-- Activas -->
      <v-tab-item>
        <div class="pt-3">
          <v-layout v-if="activas.length" row wrap>
            <v-flex v-for="r in activas" :key="r.uuid" xs12 md6 pa-2>
              <v-card class="fill-height">
                <v-layout row wrap>
                  <v-flex xs12 sm5><v-img :src="habitacion2" height="160"></v-img></v-flex>
                  <v-flex xs12 sm7>
                    <v-card-title primary-title>
                      <div>
                        <div class="subheading font-weight-bold primary--text">Reserva {{ r.uuid.slice(0,8) }}</div>
                        <div class="caption grey--text">Entrada: {{ fecha(r.date_arrival) }}</div>
                        <div class="caption grey--text">Salida: {{ fecha(r.date_exit) }}</div>
                        <div class="caption grey--text">Personas: {{ r.number_personas }}</div>
                        <v-chip small label color="success" text-color="white" class="mt-2">{{ r.state }}</v-chip>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn small flat color="error" @click="borrar(r)"><v-icon small left>delete</v-icon>Cancelar reserva</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
          <div v-else class="text-xs-center grey--text py-5">
            <v-icon size="64" color="grey lighten-1">event_busy</v-icon>
            <div class="mt-2">Aún no tienes reservas activas.</div>
            <v-btn color="primary" class="mt-3" to="/">Explorar habitaciones</v-btn>
          </div>
        </div>
      </v-tab-item>

      <!-- Canceladas -->
      <v-tab-item>
        <div class="pt-3">
          <v-layout v-if="canceladas.length" row wrap>
            <v-flex v-for="r in canceladas" :key="r.uuid" xs12 md6 pa-2>
              <v-card class="fill-height">
                <v-layout row wrap>
                  <v-flex xs12 sm5><v-img :src="habitacion2" height="160"></v-img></v-flex>
                  <v-flex xs12 sm7>
                    <v-card-title primary-title>
                      <div>
                        <div class="subheading font-weight-bold primary--text">Reserva {{ r.uuid.slice(0,8) }}</div>
                        <div class="caption grey--text">Entrada: {{ fecha(r.date_arrival) }}</div>
                        <div class="caption grey--text">Salida: {{ fecha(r.date_exit) }}</div>
                        <div class="caption grey--text">Personas: {{ r.number_personas }}</div>
                        <v-chip small label color="error" text-color="white" class="mt-2">{{ r.state }}</v-chip>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
          <div v-else class="text-xs-center grey--text py-5">
            <v-icon size="64" color="grey lighten-1">event_busy</v-icon>
            <div class="mt-2">No tienes reservas canceladas.</div>
          </div>
        </div>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import HABITACION2 from '@/assets/habitacion2.jpg'
import api from '@/plugins/api'

export default {
  name: 'reservas-cliente',
  data: () => ({
    habitacion2: HABITACION2,
    active: null,
    reservas: []
  }),
  computed: {
    activas () { return this.reservas.filter(r => r.state !== 'Cancelada') },
    canceladas () { return this.reservas.filter(r => r.state === 'Cancelada') }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
    this.cargar()
  },
  methods: {
    fecha (d) { return d ? new Date(d).toLocaleDateString('es-CO') : '—' },
    async cargar () {
      try {
        const { data } = await api.get('/reservation')
        this.reservas = data
      } catch (error) {
        console.error(error)
      }
    },
    async borrar (r) {
      try {
        await api.delete(`/reservation/${r.uuid}`)
        this.reservas = this.reservas.filter(x => x.uuid !== r.uuid)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
.section-title { font-size: 32px; color: var(--gc-teal, #0F4C46); margin: 4px 0; }
</style>
