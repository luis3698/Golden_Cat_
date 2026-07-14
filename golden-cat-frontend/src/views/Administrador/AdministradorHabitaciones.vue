<template>
  <div>
    <h2 class="admin-title">Habitaciones</h2>
    <p class="grey--text mb-3">Administra las habitaciones del hotel, sus tarifas e imágenes.</p>

    <v-layout row wrap>
      <!-- Formulario -->
      <v-flex xs12 md5 pa-2>
        <v-card>
          <v-toolbar color="primary" dark flat dense>
            <v-icon left>meeting_room</v-icon>
            <v-toolbar-title>{{ editando ? 'Editar habitación' : 'Nueva habitación' }}</v-toolbar-title>
          </v-toolbar>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6><v-text-field v-model="form.code" label="No. habitación" color="primary"></v-text-field></v-flex>
              <v-flex xs12 sm6>
                <v-select v-model="form.estado" :items="['Disponible', 'Mantenimiento']" label="Estado" color="primary"></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select v-model="form.typeRoomId" :items="tipoOptions" item-text="label" item-value="id" label="Tipo" color="primary"></v-select>
              </v-flex>
              <v-flex xs12 sm6><v-text-field v-model="form.number_max" type="number" label="No. máximo personas" color="primary"></v-text-field></v-flex>
              <v-flex xs12 sm6><v-text-field v-model="form.number_max_precio_base" type="number" label="Máx. a precio base" color="primary"></v-text-field></v-flex>
              <v-flex xs12 sm6><v-text-field v-model="form.value_base" type="number" label="Valor base" color="primary" prefix="$"></v-text-field></v-flex>
              <v-flex xs12 sm6><v-text-field v-model="form.value_persona" type="number" label="Valor por persona" color="primary" prefix="$"></v-text-field></v-flex>
              <v-flex xs12 sm6 class="text-xs-center">
                <v-avatar tile size="80" class="grey lighten-3">
                  <img v-if="form.imagen" :src="form.imagen">
                  <v-icon v-else color="grey">image</v-icon>
                </v-avatar>
                <div>
                  <v-btn small flat color="primary" :loading="uploading" @click="pickFile">Subir imagen</v-btn>
                  <input type="file" style="display:none" ref="image" accept="image/*" @change="onFilePicked">
                </div>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn flat @click="reset">Limpiar</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="accent" class="black--text" :loading="saving" @click="guardar">{{ editando ? 'Actualizar' : 'Agregar' }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <!-- Tabla -->
      <v-flex xs12 md7 pa-2>
        <v-card>
          <v-toolbar color="secondary" dark flat dense>
            <v-icon left>list</v-icon>
            <v-toolbar-title>Habitaciones registradas</v-toolbar-title>
          </v-toolbar>
          <v-data-table :headers="headers" :items="rooms" class="elevation-0">
            <template v-slot:items="props">
              <td>{{ props.item.code }}</td>
              <td>{{ tipos[props.item.typeRoomId] || '—' }}</td>
              <td>
                <v-chip small :color="props.item.state === 'Disponible' ? 'success' : 'warning'" text-color="white">{{ props.item.state }}</v-chip>
              </td>
              <td>{{ formatoPrecio(props.item.value_base) }}</td>
              <td class="text-xs-right">
                <v-icon small class="mr-2" color="primary" @click="editar(props.item)">edit</v-icon>
                <v-icon small color="error" @click="eliminar(props.item)">delete</v-icon>
              </td>
            </template>
            <template v-slot:no-data>
              <div class="text-xs-center pa-3 grey--text">No hay habitaciones registradas.</div>
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
import { uploadImage } from '@/plugins/upload'

const emptyForm = () => ({
  uuid: null, code: '', estado: 'Disponible', typeRoomId: null,
  number_max: '', number_max_precio_base: '', value_base: '', value_persona: '',
  imagen: '', images: []
})

export default {
  name: 'administrador-habitaciones',
  data: () => ({
    rooms: [],
    tipos: {},
    tipoList: [],
    saving: false,
    uploading: false,
    form: emptyForm(),
    headers: [
      { text: 'No.', value: 'code' },
      { text: 'Tipo', value: 'typeRoomId' },
      { text: 'Estado', value: 'state' },
      { text: 'Valor base', value: 'value_base' },
      { text: 'Acciones', value: 'code', sortable: false, align: 'right' }
    ]
  }),
  computed: {
    editando () { return !!this.form.uuid },
    tipoOptions () {
      return this.tipoList.map(t => ({ id: t.id, label: t.name.charAt(0).toUpperCase() + t.name.slice(1) }))
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
    this.cargar()
  },
  methods: {
    async cargar () {
      try {
        const [rooms, tipos] = await Promise.all([api.get('/room'), api.get('/type_room')])
        this.rooms = rooms.data
        this.tipoList = tipos.data
        this.tipos = (tipos.data || []).reduce((a, t) => { a[t.id] = t.name; return a }, {})
      } catch (error) {
        console.error(error)
      }
    },
    formatoPrecio (v) { return v != null ? '$' + Number(v).toLocaleString('es-CO') : '' },
    pickFile () { this.$refs.image.click() },
    async onFilePicked (e) {
      const file = (e.target.files || [])[0]
      if (!file) return
      this.uploading = true
      try {
        this.form.imagen = URL.createObjectURL(file)
        const image = await uploadImage(file, { entityType: 'room' })
        this.form.imagen = image.url
        this.form.images = [image.url]
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo subir la imagen', 'error')
      } finally {
        this.uploading = false
        this.$refs.image.value = ''
      }
    },
    reset () { this.form = emptyForm() },
    editar (room) {
      this.form = {
        uuid: room.uuid,
        code: room.code,
        estado: room.state,
        typeRoomId: room.typeRoomId,
        number_max: room.number_max,
        number_max_precio_base: room.number_max_precio_base,
        value_base: room.value_base,
        value_persona: room.value_persona,
        imagen: (room.images && room.images[0]) || '',
        images: room.images || []
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    payload () {
      return {
        code: this.form.code,
        state: this.form.estado,
        typeRoomId: this.form.typeRoomId,
        number_max: Number(this.form.number_max) || 1,
        number_max_precio_base: Number(this.form.number_max_precio_base) || 1,
        value_base: Number(this.form.value_base) || 0,
        value_persona: Number(this.form.value_persona) || 0,
        images: this.form.images
      }
    },
    async guardar () {
      if (!this.form.code) {
        Swal.fire('Atención', 'Ingresa el número de habitación', 'warning')
        return
      }
      this.saving = true
      try {
        if (this.editando) {
          await api.put(`/room/${this.form.uuid}`, { roomUpdate: this.payload() })
        } else {
          await api.post('/room', { roomNew: this.payload() })
        }
        await this.cargar()
        this.reset()
        Swal.fire('¡Listo!', 'Habitación guardada', 'success')
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo guardar la habitación', 'error')
      } finally {
        this.saving = false
      }
    },
    async eliminar (room) {
      const res = await Swal.fire({
        title: '¿Eliminar habitación?',
        text: `Habitación ${room.code}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#C0392B'
      })
      if (!res.value) return
      try {
        await api.delete(`/room/${room.uuid}`)
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
