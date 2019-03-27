<template>
  <div>
    <v-layout  wrap  justify-space-between row fill-height>
      <v-flex  xs12 sm6 md2>
        <v-text-field
          label="  No. habitación"
          solo
        ></v-text-field>
      </v-flex>
      <v-flex  xs12 sm6 md2 >
        <v-text-field
          label="  Fecha entrada"
          solo
        ></v-text-field>
      </v-flex>
      <v-flex  xs12 sm6 md2 >
        <v-text-field
          label="  Fecha salida"
          solo
        ></v-text-field>
      </v-flex>
      <v-flex  xs12 sm6 md2  >
        <v-text-field
          label="  No. adultos"
          solo
        ></v-text-field>
      </v-flex>
      <v-flex  xs12 sm6 md2>
        <v-text-field
          label="  No. niños"
          solo
        ></v-text-field>
      </v-flex>

      <v-btn><v-icon>search</v-icon></v-btn>
    <v-layout wrap  justify-space-between row>
     <template v-for="n in 6">
        <v-flex xs12 sm4 :key="n">
      <v-card width="300px" >
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        >
        </v-img>
        <v-card-title primary-title>
          <div>
            <div class="headline">Top western road trips</div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show1 = !show1">
            <v-icon>{{ show1 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
        <v-card-text v-show="show1">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>

     </template>
    </v-layout>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>
