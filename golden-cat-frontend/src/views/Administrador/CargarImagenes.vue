<template>
  <div>
    <v-tabs v-model="active" color="cyan" dark slider-color="yellow" >
      <v-tab v-for="n in 3" :key="n" ripple> Item {{ n }} | |
            
      </v-tab>
      <v-tab-item v-for="n in 3"  :key="n">
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
         
        </v-card>
      </v-tab-item>
    </v-tabs>

    <div class="text-xs-center mt-3">
      <v-btn @click="next">next tab</v-btn>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        active: null,
        text: 'Loremctet ut aliquip ex ea commodo consequat.',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      }
    }
  }
</script>


<style>
#my-strictly-unique-vue-upload-multiple-image {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a8050d;

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin:  10px;
}

a {
  color: #05c36e;
}

.contenido{
  padding: 0px 250px!important;
}

.boton{
  margin: 20px 0px 0px 0px;
}
.botones{
  height: 70px;
  width: 300px;
  margin: 10px 0px 30px 150px;
}
.carrusel{
  padding: 0px 20px;
}
</style>
