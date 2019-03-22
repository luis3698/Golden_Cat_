<template>
<div>
<h2> ¿QUÉ ES GOLDEN CAT? </h2>
<img src="/golden-cat-frontend/src/assets/golden_cat.png" alt="cat">
</div>
</template>

<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>

<style>
h2{
  display: block;
  font-size: 2em;
  -webkit-margin-before: 0.83em;
  margin-block-start: -11.17em;
  -webkit-margin-after: 0.83em;
  margin-block-end: 0.83em;
  -webkit-margin-start: 0px;
  margin-inline-start: 0px;
  -webkit-margin-end: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  color: white;
}
div>img{
  height: 500px;
  width: 500px;
  margin: auto;
  padding-top: 5px;
}
</style>
