<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Este es el inicio</h1>
    Nombre: <input type="text" v-model="nombre">
    <p>{{nombre}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      nombre: ''
    }
  },
  components: {

  }
}
</script>
