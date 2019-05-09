<template>
<v-container fluid>
      <v-layout row>
        <v-flex xs6 >
          <v-card dark tile flat color="error">
            <v-card-text>#1</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card dark tile flat color="red darken-4">
            <v-card-text>#2</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4  >
          <v-card dark tile flat color="red lighten-1">
            <v-card-text>#1</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs4 >
          <v-card dark tile flat color="red lighten-2">
            <v-card-text>#2</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs4 >
          <v-card dark tile flat color="red darken-1">
            <v-card-text>#3</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3  >
          <v-card dark tile flat color="red darken-2">
            <v-card-text>#1</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 >
          <v-card dark tile flat color="deep-orange lighten-1">
            <v-card-text>#2</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 >
          <v-card dark tile flat color="deep-orange darken-3">
            <v-card-text>#3</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <v-card dark tile flat color="deep-orange">
            <v-card-text>#4</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</script>
<style>

</style>
