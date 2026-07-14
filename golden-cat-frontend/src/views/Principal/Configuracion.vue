<template>
  <v-container class="gc-section" style="max-width:900px">
    <div class="text-xs-center mb-4">
      <div class="gc-eyebrow">Mi cuenta</div>
      <h2 class="section-title">Configuración de perfil</h2>
      <div class="gc-rule"></div>
    </div>

    <v-layout row wrap>
      <!-- Avatar -->
      <v-flex xs12 md4 pa-2>
        <v-card class="text-xs-center pa-3 fill-height">
          <v-avatar size="140" class="mx-auto d-block elevation-2">
            <img :src="imgUrl">
          </v-avatar>
          <div class="subheading primary--text mt-3">{{ user.name }} {{ user.lastName }}</div>
          <div class="caption grey--text">{{ user.email }}</div>
          <v-btn small color="primary" class="mt-2" @click="pickFile">
            <v-icon small left>photo_camera</v-icon>Cambiar foto
          </v-btn>
          <input type="file" style="display:none" ref="image" accept="image/*" @change="onFilePicked">
        </v-card>
      </v-flex>

      <!-- Datos personales -->
      <v-flex xs12 md8 pa-2>
        <v-card class="pa-3 fill-height">
          <v-card-title class="subheading primary--text pt-0">Datos personales</v-card-title>
          <v-layout row wrap>
            <v-flex xs12 sm6 pa-2><v-text-field label="Nombre" color="primary" v-model="user.name"></v-text-field></v-flex>
            <v-flex xs12 sm6 pa-2><v-text-field label="Apellido" color="primary" v-model="user.lastName"></v-text-field></v-flex>
            <v-flex xs12 sm6 pa-2><v-text-field label="Identificación" color="primary" v-model="user.identification"></v-text-field></v-flex>
            <v-flex xs12 sm6 pa-2><v-text-field label="Teléfono" color="primary" v-model="user.phone"></v-text-field></v-flex>
            <v-flex xs12 pa-2><v-text-field label="Correo electrónico" color="primary" v-model="user.email" readonly hint="El correo no se puede modificar" persistent-hint></v-text-field></v-flex>
          </v-layout>
          <v-card-actions class="px-2">
            <v-btn flat color="primary" @click="dialogPassword = true">
              <v-icon small left>lock</v-icon>Cambiar contraseña
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="accent" class="black--text" :loading="saving" @click="saveProfile">Guardar cambios</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Diálogo contraseña -->
    <v-dialog v-model="dialogPassword" persistent max-width="480px">
      <v-card>
        <v-toolbar color="primary" dark dense flat><v-toolbar-title>Cambiar contraseña</v-toolbar-title></v-toolbar>
        <v-card-text class="pt-3">
          <v-text-field color="primary" label="Contraseña actual" type="password"></v-text-field>
          <v-text-field color="primary" label="Nueva contraseña" type="password"></v-text-field>
          <v-text-field color="primary" label="Confirmar nueva contraseña" type="password"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="dialogPassword = false">Cancelar</v-btn>
          <v-btn color="primary" @click="dialogPassword = false">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
import { uploadImage } from '@/plugins/upload'
import Swal from 'sweetalert2'
import api from '@/plugins/api'

const AVATAR_PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="130" height="130"><rect width="100%" height="100%" fill="#e8eaf6"/><circle cx="65" cy="52" r="26" fill="#9fa8da"/><rect x="28" y="86" width="74" height="40" rx="20" fill="#9fa8da"/></svg>'
)

export default {
  computed: {
    ...mapState(['user'])
  },
  data: () => ({
    imgUrl: AVATAR_PLACEHOLDER,
    imageName: '',
    items: [],
    saving: false,
    dialogEmail: false,
    dialogPassword: false
  }),
  created () {
    // Si el usuario ya tiene avatar guardado, lo mostramos
    if (this.user && Array.isArray(this.user.images) && this.user.images.length) {
      this.imgUrl = this.user.images[0]
    }
  },
  methods: {
    pickFile () {
      this.$refs.image.click()
    },
    async onFilePicked (e) {
      const files = e.target.files
      if (!files || files[0] === undefined) {
        this.imageName = ''
        return
      }
      const file = files[0]
      this.imageName = file.name
      if (this.imageName.lastIndexOf('.') <= 0) return
      try {
        this.imgUrl = URL.createObjectURL(file)
        const image = await uploadImage(file, { entityType: 'user', entityId: this.user.uuid })
        this.imgUrl = image.url
        this.$store.commit('SET_USER', { ...this.user, images: [image.url] })
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo subir la imagen', 'error')
      }
    },
    async saveProfile () {
      if (!this.user || !this.user.uuid) return
      this.saving = true
      try {
        await api.put(`/user/${this.user.uuid}`, {
          userUpdate: {
            name: this.user.name,
            lastName: this.user.lastName,
            phone: this.user.phone,
            identification: this.user.identification,
            images: this.user.images
          }
        })
        Swal.fire('Guardado', 'Tus datos se actualizaron correctamente', 'success')
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudieron guardar los cambios', 'error')
      } finally {
        this.saving = false
      }
    }
  }
}

</script>
<style >

</style>
