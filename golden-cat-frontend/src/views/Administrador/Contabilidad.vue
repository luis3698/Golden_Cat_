<template>
  <div>
    <h2 class="admin-title">Contabilidad y reportes</h2>
    <p class="grey--text mb-3">Selecciona la información que deseas exportar.</p>

    <v-card class="mb-4">
      <v-toolbar color="primary" dark flat dense>
        <v-icon left>assessment</v-icon>
        <v-toolbar-title>Generar reportes</v-toolbar-title>
      </v-toolbar>
      <v-container grid-list-lg fluid>
        <v-layout row wrap>
          <v-flex v-for="opt in opciones" :key="opt" xs12 sm6 md4>
            <v-checkbox v-model="seleccion" :label="opt" :value="opt" color="primary" hide-details></v-checkbox>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>

    <v-card>
      <v-toolbar color="secondary" dark flat dense>
        <v-icon left>file_download</v-icon>
        <v-toolbar-title>Formato de salida</v-toolbar-title>
      </v-toolbar>
      <v-container grid-list-lg fluid>
        <v-layout row wrap align-center>
          <v-flex xs12 sm6>
            <v-radio-group v-model="formato" row>
              <v-radio label="PDF" value="pdf" color="primary"></v-radio>
              <v-radio label="Excel" value="excel" color="primary"></v-radio>
            </v-radio-group>
          </v-flex>
          <v-flex xs12 sm6 class="text-sm-right">
            <v-btn color="accent" class="black--text" :loading="loading" @click="generar">
              <v-icon left>cloud_download</v-icon>Generar reporte
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'contabilidad',
  data: () => ({
    seleccion: [],
    formato: 'pdf',
    loading: false,
    opciones: ['Clientes', 'Habitaciones', 'Servicios', 'Reservas', 'Ventas', 'Inventario', 'Personal', 'Facturas', 'Ranking']
  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  methods: {
    generar () {
      if (!this.seleccion.length) {
        Swal.fire('Atención', 'Selecciona al menos un reporte', 'warning')
        return
      }
      this.loading = true
      setTimeout(() => {
        this.loading = false
        Swal.fire('Reporte generado', `Se generó el reporte (${this.seleccion.join(', ')}) en formato ${this.formato.toUpperCase()}.`, 'success')
      }, 900)
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
