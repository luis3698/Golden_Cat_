<template>
<v-flex md12>
    <v-container class="contenedor" fill-height fluid grid-list-xl label="Usuario">
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
                      </v-container>
                  </v-form>
              </material-card>
              
          </v-flex>
          
      </v-layout>
      
    </v-container>
  
</v-flex>

</template>

<script>
<<<<<<< HEAD
=======
const avatars = [
  '?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',
  '?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',
  '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',
  '?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',
  '?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly'
]

const pause = ms => new Promise(resolve => setTimeout(resolve, ms))
>>>>>>> ff065b35701116b307ef621e6e107a7d137500d1
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
<<<<<<< HEAD
=======
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
>>>>>>> ff065b35701116b307ef621e6e107a7d137500d1
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
