<template>
  <div>
    <v-layout row wrap align-center class="mb-2">
      <v-flex>
        <h2 class="admin-title">Reservas</h2>
        <p class="grey--text mb-0">Gestiona las reservas del hotel.</p>
      </v-flex>
      <v-flex shrink>
        <v-btn color="accent" class="black--text" @click="openDialog">
          <v-icon left>add</v-icon>Nueva reserva
        </v-btn>
      </v-flex>
    </v-layout>

    <v-card>
      <v-tabs v-model="active" color="primary" dark slider-color="accent" grow>
        <v-tab>Activas</v-tab>
        <v-tab>En curso</v-tab>
        <v-tab>Finalizadas</v-tab>
        <v-tab>Canceladas</v-tab>

        <v-tab-item v-for="estado in estados" :key="estado">
          <v-data-table :headers="headers" :items="porEstado(estado)" class="elevation-0">
            <template v-slot:items="props">
              <td>{{ props.item.uuid.slice(0, 8) }}</td>
              <td>{{ nombreHabitacion(props.item) }}</td>
              <td>{{ props.item.number_personas }}</td>
              <td>{{ fecha(props.item.date_arrival) }}</td>
              <td>{{ fecha(props.item.date_exit) }}</td>
              <td>
                <v-chip small :color="colorEstado(props.item.state)" text-color="white">{{ props.item.state }}</v-chip>
              </td>
              <td class="text-xs-right">
                <v-icon small color="error" @click="eliminar(props.item)">delete</v-icon>
              </td>
            </template>
            <template v-slot:no-data>
              <div class="text-xs-center pa-3 grey--text">No hay reservas en este estado.</div>
            </template>
          </v-data-table>
        </v-tab-item>
      </v-tabs>
    </v-card>

    <!-- Nueva reserva -->
    <v-dialog v-model="dialog" max-width="560px">
      <v-card>
        <v-toolbar color="primary" dark flat dense><v-toolbar-title>Nueva reserva</v-toolbar-title></v-toolbar>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-select v-model="form.roomId" :items="roomOptions" item-text="label" item-value="id" label="Habitación" color="primary"></v-select>
            </v-flex>
            <v-flex xs12 sm6><v-text-field v-model="form.number_personas" type="number" label="No. de personas" color="primary"></v-text-field></v-flex>
            <v-flex xs12 sm6>
              <v-select v-model="form.state" :items="estados" label="Estado" color="primary"></v-select>
            </v-flex>
            <v-flex xs12 sm6><v-text-field v-model="form.date_arrival" type="date" label="Fecha entrada" color="primary"></v-text-field></v-flex>
            <v-flex xs12 sm6><v-text-field v-model="form.date_exit" type="date" label="Fecha salida" color="primary"></v-text-field></v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="dialog = false">Cancelar</v-btn>
          <v-btn color="primary" :loading="saving" @click="guardar">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import api from '@/plugins/api'
import Swal from 'sweetalert2'

export default {
  name: 'realizar-reserva',
  data: () => ({
    active: null,
    dialog: false,
    saving: false,
    reservas: [],
    rooms: [],
    tipos: {},
    estados: ['Activa', 'En curso', 'Finalizada', 'Cancelada'],
    headers: [
      { text: 'Código', value: 'uuid', sortable: false },
      { text: 'Habitación', value: 'roomId' },
      { text: 'Personas', value: 'number_personas' },
      { text: 'Entrada', value: 'date_arrival' },
      { text: 'Salida', value: 'date_exit' },
      { text: 'Estado', value: 'state' },
      { text: 'Acciones', value: 'uuid', sortable: false, align: 'right' }
    ],
    form: { roomId: null, number_personas: '2', state: 'Activa', date_arrival: '', date_exit: '' }
  }),
  computed: {
    roomOptions () {
      return this.rooms.map(r => ({
        id: r.id,
        uuid: r.uuid,
        typeRoomId: r.typeRoomId,
        label: `Habitación ${r.code} · ${this.tipos[r.typeRoomId] || 'estándar'}`
      }))
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
    this.cargar()
  },
  methods: {
    async cargar () {
      try {
        const [reservas, rooms, tipos] = await Promise.all([
          api.get('/reservation'), api.get('/room'), api.get('/type_room')
        ])
        this.reservas = reservas.data
        this.rooms = rooms.data
        this.tipos = (tipos.data || []).reduce((a, t) => { a[t.id] = t.name; return a }, {})
      } catch (error) {
        console.error(error)
      }
    },
    porEstado (estado) { return this.reservas.filter(r => r.state === estado) },
    fecha (d) { return d ? new Date(d).toLocaleDateString('es-CO') : '—' },
    colorEstado (s) {
      return { 'Activa': 'success', 'En curso': 'info', 'Finalizada': 'primary', 'Cancelada': 'error' }[s] || 'grey'
    },
    nombreHabitacion (r) {
      const room = this.rooms.find(x => x.id === r.roomId)
      return room ? `Habitación ${room.code}` : '—'
    },
    openDialog () {
      this.form = { roomId: null, number_personas: '2', state: 'Activa', date_arrival: '', date_exit: '' }
      this.dialog = true
    },
    async guardar () {
      if (!this.form.roomId || !this.form.date_arrival || !this.form.date_exit) {
        Swal.fire('Atención', 'Completa habitación y fechas', 'warning')
        return
      }
      const room = this.rooms.find(r => r.id === this.form.roomId)
      this.saving = true
      try {
        await api.post('/reservation', {
          reservationNew: {
            id_type_room: String(room.typeRoomId || room.uuid),
            number_personas: Number(this.form.number_personas),
            date_arrival: this.form.date_arrival,
            date_exit: this.form.date_exit,
            state: this.form.state,
            roomId: this.form.roomId
          }
        })
        await this.cargar()
        this.dialog = false
        Swal.fire('¡Listo!', 'Reserva creada', 'success')
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo crear la reserva', 'error')
      } finally {
        this.saving = false
      }
    },
    async eliminar (item) {
      const res = await Swal.fire({
        title: '¿Eliminar reserva?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#C0392B'
      })
      if (!res.value) return
      try {
        await api.delete(`/reservation/${item.uuid}`)
        await this.cargar()
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo eliminar', 'error')
      }
    }
  }
}
</script>

<style scoped>
.admin-title {
  font-family: 'Playfair Display', serif;
  color: var(--gc-teal, #0F4C46);
  font-size: 28px;
}
</style>
