<template>
    <section>
        <h2>hola {{nombre}}</h2>
        <button @click="sumar">agregar</button>
        <p>{{contador}}</p>
    </section>
</template>
<script>
export default {
  name: 'productos',
  data () {
    return {
      nombre: 'sebastian',
      contador: 0

    }
  },
  methods: {
    sumar () {
      // this.contador = this.contador + 1
      this.contador++
    }
  }
}
</script>
<style lang="stylus">
    section
        background-color red
        padding 30px
        h1
            background-color blue
</style>
