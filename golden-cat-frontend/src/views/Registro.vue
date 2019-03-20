<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="i in 2" :key="`6${i}`" xs6>
        <v-card dark color="secondary">
          <v-card-text class="px-10">6</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
