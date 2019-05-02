<template>
<v-flex xs12 sm12 md12>
        <v-toolbar
        color="indigo"
        dark
        tabs
        >
        <h1>Registar Usuario</h1>
        </v-toolbar>

          <v-flex md12>
            <v-card ref="form">
              <v-card-text>
                <v-text-field
                  ref="nombre"
                  v-model="nombre"
                  :rules="[() => !!nombre || 'Este campo es requerido',
                  () => !!nombre && nombre.length <= 25 || 'Haz superado el maximo de caracteres']"
                  counter="25"
                  :error-messages="errorMessages"
                  label="Nombre completo"

                  required
                ></v-text-field>
                <v-text-field
                  ref="usuario"
                  v-model="usuario"
                  :rules="[() => !!usuario || 'Este campo es requerido',
                  () => !!usuario && usuario.length <= 25 || 'Haz superado el maximo de caracteres']"
                  counter="25"
                  :error-messages="errorMessages"
                  label="Usuario"

                  required
                ></v-text-field>
                <v-text-field
                  ref="identificacion"
                  v-model="identificacion"
                  :rules="[
                    () => !!identificacion || 'Este campo es requerido',
                    () => !!identificacion && identificacion.length <= 25 || 'Haz superado el maximo de caracteres']"
                  label="CC"
                  type="number"
                  counter="25"
                  required
                  placeholder="Identificación"
                ></v-text-field>
                <v-text-field
                  ref="correoelectronico"
                  v-model="correoelectronico"
                  :rules="[() => !!correoelectronico || 'Este campo es requerido',
                  () => !!correoelectronico && correoelectronico.length <= 25 || 'Haz superado el maximo de caracteres']"
                  label="Correo electronico"
                  counter="25"
                  required
                ></v-text-field>
                <v-text-field
                  ref="telefono"
                  v-model="telefono"
                  :rules="[() => !! telefono || 'Este campo es requerido']"
                  label="Teléfono"
                  type="text"
                  required
                ></v-text-field>
                <v-text-field
                  ref="contraseña"
                  v-model="contraseña"
                  :rules="[() => !!contraseña || 'Este campo es requerido']"
                  label="Contraseña"
                  required
                ></v-text-field>
                <v-autocomplete
                  ref="pais"
                  v-model="pais"
                  :rules="[() => !!pais || 'This field is required']"
                  :items="paises"
                  label="Pais"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-card-text>
                <v-divider class="mt-5"></v-divider>
           <v-card-actions>
            <v-btn flat>Cancelar</v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip
                v-if="formHasErrors"
                left
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    class="my-0"
                    @click="resetForm"
                    v-on="on"
                  >
                    <v-icon>refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="primary" flat @click="submit">Guardar</v-btn>
          </v-card-actions>
            </v-card>
          </v-flex>
          <v-spacer>
            .
          </v-spacer>
          <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Lista de Usuarios</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-text-field  label="Buscar" outline hide-details></v-text-field>
          <v-btn round color="white" ><v-icon color="black">search</v-icon></v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field type="text" v-model="editedItem.name" label="Nombre completo"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.user" label="Usuario"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field type="number" v-model="editedItem.cc" label="Indentificacion"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.email" label="E-mail"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field type="number" v-model="editedItem.telefono" label="Teléfono"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.contraseña" label="Contraseña"></v-text-field>
                </v-flex>
              <v-flex xs12 sm6 md4>
                  <v-autocomplete type="text" :items="paises" v-model="editedItem.pais" label="Pais"></v-autocomplete>
              </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancelar</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Guardar</v-btn>
          </v-card-actions>
        </v-card>

      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.user }}</td>
        <td class="text-xs-right">{{ props.item.cc }}</td>
        <td class="text-xs-right">{{ props.item.email }}</td>
        <td class="text-xs-right">{{ props.item.telefono }}</td>
        <td class="text-xs-right">{{ props.item.contraseña }}</td>
        <td class="text-xs-right">{{ props.item.pais }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
   </v-flex>
</template>

<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  data: () => ({

    paises: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
    errorMessages: '',
    pais: null,
    formHasErrors: false,

    dialog: false,
    headers: [
      {
        text: 'Nombre Completo',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'User', value: 'user' },
      { text: 'CC', value: 'cc' },
      { text: 'E-mail', value: 'email' },
      { text: 'Teléfono', value: 'telefono', type: 'text' },
      { text: 'Contraseña', value: 'contraseña' },
      { text: 'Pais', value: 'pais' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      user: '',
      cc: 0,
      email: 0,
      telefono: 0,
      contraseña: 0,
      pais: 0
    },
    defaultItem: {
      name: '',
      user: '',
      cc: 0,
      email: 0,
      telefono: 0,
      contraseña: 0,
      pais: 0
    }
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Editar Usuario'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.desserts = [
        {
          name: 'Carlos Rodriguez',
          user: 'CRdiguez',
          cc: 8239621473,
          email: 'CarlosR@gmail.com',
          telefono: '3214556724',
          contraseña: 'k4j6g5k756',
          pais: ''
        },
        {
          name: 'Bruno Dias',
          user: 'gdfgd',
          cc: 1036524951,
          email: 'Bruno@gmail.com',
          telefono: '3214556724',
          contraseña: 'k4j6g5k756',
          pais: ''
        },
        {
          name: 'clar Kent',
          user: 'CRdigudghdg',
          cc: 1009647258,
          email: 'clarS@hotmail.com',
          telefono: '3214556724',
          contraseña: 'k4j6g5k756',
          pais: ''
        },
        {
          name: 'Benjamin Parker',
          user: 'CRdjyjgkyfk',
          cc: 1005641837,
          email: 'ParkerP@gmail.com',
          telefono: '3214556724',
          contraseña: 'k4j6g5k756',
          pais: ''
        },
        {
          name: 'Roberto Giraldo',
          user: 'CRdjkjk',
          cc: 1004583718,
          email: 'RoberGl@gmail.com',
          telefono: '3214556724',
          contraseña: 'k4j6g5k756',
          pais: ''
        }
      ]
    },
    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm('Estas seguro de elimnar este usuario?') && this.desserts.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }

}
</script>

<style>
  h1{
    padding-left: 40px;
    color: white;
  }
  .contenedor{
    background-color: blue
  }
</style>
