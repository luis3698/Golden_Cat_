<template>
    <div>
        <h1>Esta es la vista de servicios</h1>
        <!-- <saludar :nombre="nombre[0]"/>
        <saludar :nombre="nombre[1]"/>
        <saludar :nombre="nombre[2]"/>
        <saludar :nombre="nombre[3]"/> -->
        <template v-for="(n , index) in nombre">
            <saludar :nombre="n" :key="index"/>
        </template>
    </div>
</template>
<script>
import Saludar from '../components/Saludar.vue'
export default {
  name: 'servicios',
  data () {
    return {
      nombre: ['sebastina', 'camilo', 'dixon', 'gerardo', 'ferley', 'andrea', 'duvan']
    }
  },
  components: { Saludar }
}
</script>
