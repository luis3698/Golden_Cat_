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
                            <div id="app">
  <v-app id="inspire">
    <v-card>
      <v-card-title class="indigo white--text headline">
        User Directory
      </v-card-title>
      <v-layout
        justify-space-between
        pa-3
      >
        <v-flex xs5>
          <v-treeview
            :active.sync="active"
            :items="items"
            :load-children="fetchUsers"
            :open.sync="open"
            activatable
            active-class="primary--text"
            class="grey lighten-5"
            open-on-click
            transition
          >
            <template v-slot:prepend="{ item, active }">
              <v-icon
                v-if="!item.children"
                :color="active ? 'primary' : ''"
              >
                mdi-account
              </v-icon>
            </template>
          </v-treeview>
        </v-flex>
        <v-flex
          d-flex
          text-xs-center
        >
          <v-scroll-y-transition mode="out-in">
            <div
              v-if="!selected"
              class="title grey--text text--lighten-1 font-weight-light"
              style="align-self: center;"
            >
              Select a User
            </div>
            <v-card
              v-else
              :key="selected.id"
              class="pt-4 mx-auto"
              flat
              max-width="400"
            >
              <v-card-text>
                <v-avatar
                  v-if="avatar"
                  size="88"
                >
                  <v-img
                    :src="`https://avataaars.io/${avatar}`"
                    class="mb-4"
                  ></v-img>
                </v-avatar>
                <h3 class="headline mb-2">
                  {{ selected.name }}
                </h3>
                <div class="blue--text mb-2">{{ selected.email }}</div>
                <div class="blue--text subheading font-weight-bold">{{ selected.username }}</div>
              </v-card-text>
              <v-divider></v-divider>
              <v-layout
                tag="v-card-text"
                text-xs-left
                wrap
              >
                <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>Company:</v-flex>
                <v-flex>{{ selected.company.name }}</v-flex>
                <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>Website:</v-flex>
                <v-flex>
                  <a :href="`//${selected.website}`" target="_blank">{{ selected.website }}</a>
                </v-flex>
                <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>Phone:</v-flex>
                <v-flex>{{ selected.phone }}</v-flex>
              </v-layout>
            </v-card>
          </v-scroll-y-transition>
        </v-flex>
      </v-layout>
    </v-card>
  </v-app>
</div>
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
