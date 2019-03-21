<template>
    <div><h1>Reservas</h1></div>

</template>

<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>
