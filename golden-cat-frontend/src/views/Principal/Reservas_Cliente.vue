<template>
    <h1>hola mundo</h1>
</template>

<script>
export default {
    name: 'inicio',
    created () {
        this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
}
</script>

<style>

</style>


