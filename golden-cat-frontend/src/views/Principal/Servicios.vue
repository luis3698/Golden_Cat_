<template>
  <v-container class="gc-section">
    <div class="text-xs-center mb-4">
      <div class="gc-eyebrow">Golden Cat</div>
      <h2 class="section-title">Nuestros servicios</h2>
      <div class="gc-rule"></div>
      <p class="grey--text text--darken-1 mx-auto" style="max-width:640px">
        Todo lo que necesitas para una estancia perfecta, con la calidez y el detalle
        que caracterizan a Golden Cat.
      </p>
    </div>

    <v-layout row wrap>
      <v-flex v-for="serv in serviciosView" :key="serv.name" xs12 sm6 md4 pa-2>
        <v-card class="serv-card fill-height">
          <v-img :src="serv.img" height="200" gradient="to top, rgba(0,0,0,.45), rgba(0,0,0,0)">
            <v-chip small color="accent" text-color="black" class="serv-card__tag">{{ serv.pressure }}</v-chip>
          </v-img>
          <v-card-title class="pb-1">
            <v-icon color="primary" class="mr-2">{{ serv.icon }}</v-icon>
            <span class="serv-card__title">{{ serv.name }}</span>
          </v-card-title>
          <v-card-text class="grey--text text--darken-1">{{ serv.description }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '@/plugins/api'
import SPA from '@/assets/spa.jpg'
import RESTAURANTE from '@/assets/restaurante.jpg'
import BAR from '@/assets/bar.jpg'
import GYM from '@/assets/gym.jpg'
import PISCINA from '@/assets/piscina1.jpg'
import ZONAVERDE from '@/assets/zonaverde.jpg'

const IMG = {
  restaurante: RESTAURANTE,
  bar: BAR,
  spa: SPA,
  gimnasio: GYM,
  piscina: PISCINA,
  'zonas verdes': ZONAVERDE
}
const ICON = {
  restaurante: 'restaurant',
  bar: 'local_bar',
  spa: 'spa',
  gimnasio: 'fitness_center',
  piscina: 'pool',
  'zonas verdes': 'park'
}

export default {
  name: 'servicios',
  data: () => ({
    servicios: []
  }),
  computed: {
    serviciosView () {
      const list = this.servicios.length ? this.servicios : this.fallback
      return list.map(s => {
        const key = (s.name || '').toLowerCase()
        return {
          ...s,
          img: IMG[key] || SPA,
          icon: ICON[key] || 'star'
        }
      })
    },
    fallback () {
      return [
        { name: 'Restaurante', description: 'Gastronomía local e internacional preparada con ingredientes frescos.', pressure: 'Incluido' },
        { name: 'Bar', description: 'Cócteles de autor y una selecta carta de vinos.', pressure: 'Opcional' },
        { name: 'Spa', description: 'Masajes y tratamientos para tu relajación total.', pressure: 'Opcional' },
        { name: 'Gimnasio', description: 'Equipamiento cardiovascular y de fuerza a tu disposición.', pressure: 'Incluido' },
        { name: 'Piscina', description: 'Piscina climatizada con amplia zona de descanso.', pressure: 'Incluido' },
        { name: 'Zonas verdes', description: 'Jardines y áreas al aire libre para desconectar.', pressure: 'Incluido' }
      ]
    }
  },
  async created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
    try {
      const { data } = await api.get('/services')
      this.servicios = data
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped>
.section-title { font-size: 32px; color: var(--gc-teal, #0F4C46); margin: 4px 0; }
.serv-card { overflow: hidden; display: flex; flex-direction: column; }
.serv-card__tag { position: absolute; top: 10px; right: 10px; }
.serv-card__title {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  color: var(--gc-teal, #0F4C46);
}
</style>
