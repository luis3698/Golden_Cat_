<template>
    <div>
        <h1>hola {{nombre}}</h1>
    </div>
</template>
<script>
export default {
  name: 'saludar',
  props: ['nombre']
}
</script>
