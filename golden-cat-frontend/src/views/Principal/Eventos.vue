<template>
<v-container class="contenedor" fluid>
<v-img class="imgportada" :src="mesero" ></v-img>
</v-container>
</template>
<script>
import MESERO from '@/assets/mesero.jpg'
export default ({
  data () {
    return {
      mesero: MESERO
    }
  }
})
</script>
<style scoped>
.imgportada{
    height:300px;
    width:100%;
}
</style>

