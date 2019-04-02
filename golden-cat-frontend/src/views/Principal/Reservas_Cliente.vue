<template>
      <v-tabs v-model="active" color="cyan" dark  slider-color="yellow" >
        <v-tab v-for="n in 3" :key="n" ripple  >
          Item {{ n }}
        </v-tab>

        <v-tab-item v-for="n in 3" :key="n">
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item v-for="n in 3" :key="n">
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item v-for="n in 3" :key="n">
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>

      

</template>




<script>
export default {
  name: 'inicio',
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
  
<style>

</style>
