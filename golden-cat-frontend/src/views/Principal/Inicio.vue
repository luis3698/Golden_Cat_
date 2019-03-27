<template>
  <div>
    <h1>Encuentra tu Habitacion</h1>
    <v-layout justify-space-around row wrap>
      <v-flex xs12 sm6 md2>
        <v-text-field label="Fecha de Entrada" outline color: black></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md2>
        <v-text-field label="Fecha de Salida" outline></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md2>
        <v-text-field label="Numero de Adultos" outline></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md2>
        <v-text-field label="Numero de Niños" outline></v-text-field>
      </v-flex>
      <v-btn><v-icon>search</v-icon></v-btn>
    </v-layout>
    <v-layout wrap justify-space-around row>
      <template v-for="n in 8">
        <v-flex xs12 sm3 :key="n">
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
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
  </div>
</template>
<script>
export default {
  name: 'inicio',
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  data: () => ({
    show1: false
  })
}
</script>
<style>

</style>
