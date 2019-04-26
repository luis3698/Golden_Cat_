<template>
 <div>
   <h1>Perfil usuario</h1>
    <v-container fill-height fluid grid-list-xl>
      <v-layout  justify-center  wrap>
          <v-flex xs12 md12>
              <material-card color="green" title="Edit Profile" text="Complete your profile">
                  <v-form>
                      <v-container >
                          <v-layout wrap>
                              <v-flex xs12 md6>
                              <v-text-field class="purple-input" label="Usuario" solo/>
                              </v-flex>
                              <v-flex
                              xs12
                              md6>
                              <v-text-field
                                  class="purple-input"
                                  label="Telefono"
                                  type="number"
                                  solo/>
                              </v-flex>
                              <v-flex xs12 md12>
                              <v-text-field label="Correo electronico" class="purple-input" solo/>
                              </v-flex>
                              <v-flex xs12 md12 >
                              <v-text-field label="Nombres y apellidos" class="purple-input" solo/>
                              </v-flex>
                              <v-flex md6>
                              <v-text-field
                                  :append-icon="show3 ? 'visibility' : 'visibility_off'"
                                  :rules="[rules.required, rules.min]"
                                  :type="show3 ? 'text' : 'password'"
                                  name="input-10-2"
                                  label="Contraseña"
                                  hint="Al menos 8 caracteres"
                                  value=""
                                  class="input-group--focused"
                                  @click:append="show3 = !show3"
                                  solo
                              ></v-text-field>
                              </v-flex>
                              <v-flex xs12 md6 >
                              <v-text-field label="Identificación" class="purple-input" solo/>
                              </v-flex>
                              <v-flex
                              xs12 md1
                              text-xs-right
                              >
                              <v-btn

                                  color="success"
                              >
                                  Guardar usuario
                              </v-btn>
                              </v-flex>
                          </v-layout>
                            <v-data-table
                              :headers="headers"
                              :items="desserts"
                              class="elevation-1"
                            >
                              <template v-slot:items="props">
                                <td>{{ props.item.name }}</td>
                                <td class="text-xs-right">{{ props.item.calories }}</td>
                                <td class="text-xs-right">{{ props.item.fat }}</td>
                                <td class="text-xs-right">{{ props.item.carbs }}</td>
                                <td class="text-xs-right">{{ props.item.protein }}</td>

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
                            </v-data-table>
                      </v-container>
                  </v-form>
              </material-card>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script scoped>
export default {
  data () {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Requirido',
        min: v => v.length >= 8 || 'Minimo 8 caracteres'

      },
      headers: [
        {
          text: 'Nombre',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Usuario', value: 'calories', align: 'center' },
        { text: 'Identificación', value: 'fat', align: 'center' },
        { text: 'Correo', value: 'carbs', align: 'center' },
        { text: 'Telefono', value: 'protein', align: 'center' },
        { text: 'Acciones', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Maicol Sánchez',
          calories: 'Maicky',
          fat: 10456456,
          carbs: 'mssanchez@gmail.com',
          protein: 345435345
        },
        {
          name: 'Maicol Sánchez',
          calories: 'Maicky',
          fat: 10456456,
          carbs: 'mssanchez@gmail.com',
          protein: 345435345
        }
      ],
      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Estas seguro que quieres eliminar este item?') && this.desserts.splice(index, 1)
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
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>

<style>
  h1{
    padding-left: 40px;
    color: white;
  }
</style>
