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

<script>
const avatars = [
  '?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',
  '?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',
  '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',
  '?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',
  '?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly'
]

const pause = ms => new Promise(resolve => setTimeout(resolve, ms))
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
      active: [],
      avatar: null,
      open: [],
      users: []

    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  computed: {
    items () {
      return [
        {
          name: 'Users',
          children: this.users
        }
      ]
    },
    selected () {
      if (!this.active.length) return undefined

      const id = this.active[0]

      return this.users.find(user => user.id === id)
    }
  },

  watch: {
    selected: 'randomAvatar'
  },

  methods: {
    async fetchUsers (item) {
      // Remove in 6 months and say
      // you've made optimizations! :)
      await pause(1500)

      return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => (item.children.push(...json)))
        .catch(err => console.warn(err))
    },
    randomAvatar () {
      this.avatar = avatars[Math.floor(Math.random() * avatars.length)]
    }
  }
}
</script>

<style>
  h1{
    padding-left: 40px;
    color: white;
  }
</style>
