<template>
  <div>
    <h2 class="admin-title">Gestión de usuarios</h2>
    <p class="grey--text mb-3">Registra, edita y elimina administradores y clientes.</p>

    <!-- Registro -->
    <v-card class="mb-4">
      <v-toolbar color="primary" dark flat dense>
        <v-icon left>person_add</v-icon>
        <v-toolbar-title>Registrar usuario</v-toolbar-title>
      </v-toolbar>
      <v-form ref="form" @submit.prevent="save">
        <v-container grid-list-lg fluid>
          <v-layout wrap>
            <v-flex xs12 sm6 md4><v-text-field v-model="form.nombre" color="primary" label="Nombres"></v-text-field></v-flex>
            <v-flex xs12 sm6 md4><v-text-field v-model="form.apellidos" color="primary" label="Apellidos"></v-text-field></v-flex>
            <v-flex xs12 sm6 md4><v-text-field v-model="form.correo" color="primary" label="Correo electrónico"></v-text-field></v-flex>
            <v-flex xs12 sm6 md4><v-text-field v-model="form.telefono" color="primary" label="Teléfono" type="number"></v-text-field></v-flex>
            <v-flex xs12 sm6 md4><v-text-field v-model="form.id" color="primary" label="Identificación" type="number"></v-text-field></v-flex>
            <v-flex xs12 sm6 md4>
              <v-select v-model="form.typeUser" :items="usuario" color="primary" label="Tipo de usuario"></v-select>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field
                v-model="form.contraseña"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                :type="show1 ? 'text' : 'password'"
                color="primary" label="Contraseña"
                @click:append="show1 = !show1"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field
                v-model="form.Ccontraseña"
                :append-icon="show2 ? 'visibility' : 'visibility_off'"
                :type="show2 ? 'text' : 'password'"
                color="primary" label="Confirmar contraseña"
                @click:append="show2 = !show2"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat @click="resetForm">Cancelar</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="accent" class="black--text" @click="save">Registrar</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>

    <!-- Listados -->
    <v-card>
      <v-tabs fixed-tabs v-model="active" color="primary" dark slider-color="accent">
        <v-tab>Administradores</v-tab>
        <v-tab>Clientes</v-tab>

        <v-tab-item>
          <v-data-table :headers="headers" :items="usersAdmin" class="elevation-0">
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.lastName }}</td>
              <td>{{ props.item.email }}</td>
              <td>{{ props.item.phone }}</td>
              <td>{{ props.item.identification }}</td>
              <td class="text-xs-right">
                <v-icon small class="mr-2" color="primary" @click="editItem(props.item)">edit</v-icon>
                <v-icon small color="error" @click="deleteItem(props.item)">delete</v-icon>
              </td>
            </template>
            <template v-slot:no-data>
              <div class="text-xs-center pa-3 grey--text">No hay administradores.</div>
            </template>
          </v-data-table>
        </v-tab-item>

        <v-tab-item>
          <v-data-table :headers="headers" :items="usersCliente" class="elevation-0">
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.lastName }}</td>
              <td>{{ props.item.email }}</td>
              <td>{{ props.item.phone }}</td>
              <td>{{ props.item.identification }}</td>
              <td class="text-xs-right">
                <v-icon small class="mr-2" color="primary" @click="editItem(props.item)">edit</v-icon>
                <v-icon small color="error" @click="deleteItem(props.item)">delete</v-icon>
              </td>
            </template>
            <template v-slot:no-data>
              <div class="text-xs-center pa-3 grey--text">No hay clientes.</div>
            </template>
          </v-data-table>
        </v-tab-item>
      </v-tabs>
    </v-card>

    <!-- Editar -->
    <v-dialog v-model="dialog" max-width="560px">
      <v-card>
        <v-toolbar color="primary" dark flat dense><v-toolbar-title>Editar usuario</v-toolbar-title></v-toolbar>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6><v-text-field v-model="editedItem.name" color="primary" label="Nombre"></v-text-field></v-flex>
            <v-flex xs12 sm6><v-text-field v-model="editedItem.lastName" color="primary" label="Apellidos"></v-text-field></v-flex>
            <v-flex xs12 sm6><v-text-field v-model="editedItem.email" color="primary" label="Correo"></v-text-field></v-flex>
            <v-flex xs12 sm6><v-text-field v-model="editedItem.phone" color="primary" label="Teléfono"></v-text-field></v-flex>
            <v-flex xs12 sm6><v-text-field v-model="editedItem.identification" color="primary" label="Identificación"></v-text-field></v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="close">Cancelar</v-btn>
          <v-btn color="primary" @click="updateUser">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import api from '@/plugins/api'
import Swal from 'sweetalert2'

const defaultForm = Object.freeze({
  nombre: '', apellidos: '', correo: '', telefono: '', id: '',
  contraseña: '', typeUser: '', Ccontraseña: ''
})

export default {
  name: 'administrar-usuarios',
  data () {
    return {
      dialog: false,
      editedItem: {},
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Apellido', value: 'lastName' },
        { text: 'Correo', value: 'email' },
        { text: 'Teléfono', value: 'phone' },
        { text: 'Identificación', value: 'identification' },
        { text: 'Acciones', value: 'name', sortable: false, align: 'right' }
      ],
      show1: false,
      show2: false,
      active: null,
      form: Object.assign({}, defaultForm),
      usuario: ['cliente', 'administrador'],
      usersAdmin: [],
      usersCliente: []
    }
  },
  computed: {
    ...mapState(['users'])
  },
  watch: {
    users () { this.filtroUsers() }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
    this.getUsers()
  },
  methods: {
    filtroUsers () {
      this.usersAdmin = this.users.filter(u => u.typeUser === 'administrador')
      this.usersCliente = this.users.filter(u => u.typeUser === 'cliente')
    },
    async getUsers () {
      try {
        const { data } = await api.get('/user')
        this.$store.commit('SET_USERS', data)
      } catch (error) {
        console.error(error)
      }
    },
    resetForm () {
      this.form = Object.assign({}, defaultForm)
      if (this.$refs.form) this.$refs.form.reset()
    },
    async save () {
      if (this.form.contraseña !== this.form.Ccontraseña) {
        Swal.fire('Atención', 'Las contraseñas no coinciden', 'warning')
        return
      }
      try {
        await api.post('/user', {
          userNew: {
            name: this.form.nombre,
            lastName: this.form.apellidos,
            email: this.form.correo,
            phone: this.form.telefono,
            identification: this.form.id,
            password: this.form.contraseña,
            typeUser: this.form.typeUser || 'cliente'
          }
        })
        await this.getUsers()
        this.resetForm()
        Swal.fire('¡Listo!', 'Usuario registrado con éxito', 'success')
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo registrar el usuario', 'error')
      }
    },
    editItem (item) {
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    close () {
      this.dialog = false
      this.editedItem = {}
    },
    async updateUser () {
      try {
        await api.put(`/user/${this.editedItem.uuid}`, {
          userUpdate: {
            name: this.editedItem.name,
            lastName: this.editedItem.lastName,
            email: this.editedItem.email,
            phone: this.editedItem.phone,
            identification: this.editedItem.identification
          }
        })
        await this.getUsers()
        this.close()
        Swal.fire('Guardado', 'Usuario actualizado', 'success')
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo actualizar', 'error')
      }
    },
    async deleteItem (item) {
      const res = await Swal.fire({
        title: '¿Eliminar usuario?',
        text: `${item.name} ${item.lastName}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#C0392B'
      })
      if (!res.value) return
      try {
        await api.delete(`/user/${item.uuid}`)
        await this.getUsers()
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
