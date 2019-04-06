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
                              <v-flex xs12 md6>
                              <v-text-field label="Correo electronico" class="purple-input" solo/>
                              </v-flex>
                              <v-flex xs12 md6 >
                              <v-text-field label="Nombres" class="purple-input" solo/>
                              </v-flex>
                              <v-flex xs12 md6>
                              <v-text-field label="Apellidos" class="purple-input" solo/>
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
                              <v-flex xs12 md6>
                              <v-text-field label="Ciudad" class="purple-input" solo/>
                              </v-flex>
                              <v-flex xs12 md6>
                              <v-text-field label="Pais"  class="purple-input" solo/>
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

                              <v-flex
                              xs12 md1
                              text-xs-right
                              >
                              <v-btn

                                  color="success"
                              >
                                  Actualizar perfil
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
        { text: 'Codigo', value: 'calories' },
        { text: 'Identificación', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ],
      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
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
    color: white
  }
</style>
