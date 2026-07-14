<template>
  <v-container fluid>
    <v-layout row wrap align-center class="mb-2">
      <v-flex>
        <h2 class="headline font-weight-bold primary--text">Galería de imágenes</h2>
        <div class="grey--text">Sube y administra las imágenes almacenadas en el servidor.</div>
      </v-flex>
      <v-flex shrink>
        <v-btn color="primary" :loading="uploading" @click="pickFile">
          <v-icon left>cloud_upload</v-icon>Subir imagen
        </v-btn>
        <input type="file" ref="file" accept="image/*" multiple style="display:none" @change="onFilePicked">
      </v-flex>
    </v-layout>

    <v-divider class="mb-3"></v-divider>

    <v-layout v-if="loading" justify-center class="pa-5">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-layout>

    <v-layout v-else-if="!images.length" column align-center class="pa-5 grey--text">
      <v-icon size="64" color="grey lighten-1">photo_library</v-icon>
      <div class="mt-2">Aún no hay imágenes. Sube la primera con el botón de arriba.</div>
    </v-layout>

    <v-layout v-else row wrap>
      <v-flex v-for="img in images" :key="img.uuid" xs6 sm4 md3 lg2 class="pa-2">
        <v-card>
          <v-img :src="img.url" aspect-ratio="1" class="grey lighten-3"></v-img>
          <v-card-actions>
            <span class="caption text-truncate" :title="img.originalName">{{ img.originalName || img.filename }}</span>
            <v-spacer></v-spacer>
            <v-btn icon small color="error" @click="remove(img)">
              <v-icon small>delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '@/plugins/api'
import { uploadImage } from '@/plugins/upload'
import Swal from 'sweetalert2'

export default {
  name: 'cargar-imagenes',
  data: () => ({
    images: [],
    loading: false,
    uploading: false
  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
    this.fetchImages()
  },
  methods: {
    async fetchImages () {
      this.loading = true
      try {
        const { data } = await api.get('/image')
        this.images = data
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    pickFile () {
      this.$refs.file.click()
    },
    async onFilePicked (e) {
      const files = Array.from(e.target.files || [])
      if (!files.length) return
      this.uploading = true
      try {
        for (const file of files) {
          const image = await uploadImage(file)
          this.images.unshift(image)
        }
        Swal.fire('Listo', 'Imagen(es) subida(s) correctamente', 'success')
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo subir la imagen', 'error')
      } finally {
        this.uploading = false
        this.$refs.file.value = ''
      }
    },
    async remove (img) {
      const confirm = await Swal.fire({
        title: '¿Eliminar imagen?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#E53935'
      })
      if (!confirm.value) return
      try {
        await api.delete(`/image/${img.uuid}`)
        this.images = this.images.filter(i => i.uuid !== img.uuid)
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo eliminar la imagen', 'error')
      }
    }
  }
}
</script>
