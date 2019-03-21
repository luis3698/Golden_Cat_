<template>
<div>
  <component :is="layout"></component>
</div>
</template>

<script>
import PrincipalLayout from './layouts/PrincipalLayout.vue'
import AdministradorLayout from './layouts/AdministradorLayout.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: { PrincipalLayout, AdministradorLayout },
  data () {
    return {
    }
  },
  computed: mapState(['layout'])
}
</script>
