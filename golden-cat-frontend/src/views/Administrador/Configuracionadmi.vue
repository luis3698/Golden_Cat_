<template>
  <div>
    <h2 class="admin-title">Configuración de temporadas</h2>
    <p class="grey--text mb-3">Define las temporadas y sus fechas para el cálculo de tarifas.</p>

    <v-layout row wrap>
      <!-- Formulario -->
      <v-flex xs12 md5 pa-2>
        <v-card>
          <v-toolbar color="primary" dark flat dense>
            <v-icon left>date_range</v-icon>
            <v-toolbar-title>Nueva temporada</v-toolbar-title>
          </v-toolbar>
          <v-container grid-list-md>
            <v-select v-model="form.type" :items="['alta', 'baja']" label="Tipo de temporada" color="primary"></v-select>
            <v-text-field v-model="form.percentage" type="number" label="Porcentaje (%)" color="primary"></v-text-field>
            <v-select v-model="form.variation" :items="['Incrementa', 'Decrementa']" label="Variación" color="primary"></v-select>
            <v-text-field v-model="form.date_arrival" type="date" label="Fecha inicio" color="primary"></v-text-field>
            <v-text-field v-model="form.date_exit" type="date" label="Fecha fin" color="primary"></v-text-field>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="accent" class="black--text" :loading="saving" @click="guardar">Guardar temporada</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <!-- Listado -->
      <v-flex xs12 md7 pa-2>
        <v-card>
          <v-toolbar color="secondary" dark flat dense>
            <v-icon left>list</v-icon>
            <v-toolbar-title>Temporadas registradas</v-toolbar-title>
          </v-toolbar>
          <v-data-table :headers="headers" :items="temporadas" class="elevation-0">
            <template v-slot:items="props">
              <td>
                <v-chip small :color="props.item.type === 'alta' ? 'success' : 'info'" text-color="white">
                  {{ props.item.type }}
                </v-chip>
              </td>
              <td>{{ props.item.percentage }}%</td>
              <td>{{ props.item.variation }}</td>
              <td class="text-xs-right">
                <v-icon small color="error" @click="eliminar(props.item)">delete</v-icon>
              </td>
            </template>
            <template v-slot:no-data>
              <div class="text-xs-center pa-3 grey--text">No hay temporadas registradas.</div>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import api from '@/plugins/api'
import Swal from 'sweetalert2'

export default {
  name: 'configuracion-admi',
  data: () => ({
    saving: false,
    temporadas: [],
    form: { type: 'alta', percentage: '', variation: 'Incrementa', date_arrival: '', date_exit: '' },
    headers: [
      { text: 'Tipo', value: 'type' },
      { text: 'Porcentaje', value: 'percentage' },
      { text: 'Variación', value: 'variation' },
      { text: 'Acciones', value: 'type', sortable: false, align: 'right' }
    ]
  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
    this.cargar()
  },
  methods: {
    async cargar () {
      try {
        const { data } = await api.get('/season')
        this.temporadas = data
      } catch (error) {
        console.error(error)
      }
    },
    async guardar () {
      if (!this.form.percentage) {
        Swal.fire('Atención', 'Ingresa el porcentaje de la temporada', 'warning')
        return
      }
      this.saving = true
      try {
        const { data: season } = await api.post('/season', {
          seasonNew: {
            type: this.form.type,
            percentage: Number(this.form.percentage),
            variation: this.form.variation
          }
        })
        if (this.form.date_arrival && this.form.date_exit) {
          await api.post('/season_date', {
            season_dateNew: {
              date_arrival: this.form.date_arrival,
              date_exit: this.form.date_exit,
              seasonId: season.id
            }
          })
        }
        await this.cargar()
        this.form = { type: 'alta', percentage: '', variation: 'Incrementa', date_arrival: '', date_exit: '' }
        Swal.fire('¡Listo!', 'Temporada registrada', 'success')
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo registrar la temporada', 'error')
      } finally {
        this.saving = false
      }
    },
    async eliminar (item) {
      const res = await Swal.fire({
        title: '¿Eliminar temporada?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#C0392B'
      })
      if (!res.value) return
      try {
        await api.delete(`/season/${item.uuid}`)
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
