<template>
  <section>
    <!-- Banner -->
    <div class="eventos-hero" :style="{ backgroundImage: `url(${copas})` }">
      <div class="eventos-hero__overlay"></div>
      <div class="eventos-hero__content text-xs-center white--text">
        <div class="gc-eyebrow gold--text">Golden Cat</div>
        <h1 class="eventos-hero__title">Eventos y celebraciones</h1>
      </div>
    </div>

    <v-container class="gc-section">
      <div class="text-xs-center mb-4">
        <p class="grey--text text--darken-1 mx-auto" style="max-width:720px">
          El hotel Golden Cat ofrece planes bajo diferentes modalidades para eventos y
          convenciones corporativas. Nuestras instalaciones cuentan con habitaciones
          cómodamente dotadas y servicios de spa, restaurante, bar, piscina y más.
        </p>
      </div>

      <v-layout row wrap>
        <v-flex v-for="ev in eventos" :key="ev.titulo" xs12 sm6 md4 pa-2>
          <v-card class="ev-card fill-height">
            <v-img :src="ev.img" height="220"></v-img>
            <v-card-title>
              <span class="ev-card__title">{{ ev.titulo }}</span>
            </v-card-title>
            <v-card-text class="grey--text text--darken-1">{{ ev.resumen }}</v-card-text>
            <v-card-actions class="px-3 pb-3">
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="abrir(ev)">Más detalles</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Diálogo de detalle -->
    <v-dialog v-model="dialog" width="520">
      <v-card v-if="seleccion">
        <v-toolbar color="primary" dark flat dense>
          <v-toolbar-title>{{ seleccion.titulo }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pt-3" v-html="seleccion.detalle"></v-card-text>
        <v-card-text class="pt-0">
          Contáctanos en <b>GoldenCat@gmail.com</b>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import COPAS from '@/assets/copas.jpg'
import PAREJA from '@/assets/pareja.jpg'
import CONFERENCIA from '@/assets/conferencia.jpg'
import FAMILIA from '@/assets/familia.jpg'

export default {
  name: 'eventos',
  data: () => ({
    copas: COPAS,
    dialog: false,
    seleccion: null,
    eventos: [
      {
        titulo: 'Grupos familiares',
        img: FAMILIA,
        resumen: 'Reuniones y celebraciones familiares con todo incluido.',
        detalle: 'Tenemos a tu disposición todos nuestros recursos para hacer que tu evento sea algo único e inolvidable, al mejor estilo Golden Cat con TODO INCLUIDO.'
      },
      {
        titulo: 'Bodas',
        img: PAREJA,
        resumen: 'Haz de tu matrimonio un día inolvidable para ti y tus invitados.',
        detalle: 'Disfruta el TODO INCLUIDO en Golden Cat y haz que tu matrimonio sea inolvidable para ti y tus invitados.'
      },
      {
        titulo: 'Convenciones',
        img: CONFERENCIA,
        resumen: 'Eventos corporativos con servicio a la medida.',
        detalle: 'SERVICIO A LA MEDIDA:<br>• Diseño de gastronomía conceptual<br>• Equipamiento tecnológico de última generación<br>• Montaje para fiestas, cócteles y eventos corporativos<br>• Diseño de experiencias sensoriales'
      }
    ]
  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  methods: {
    abrir (ev) {
      this.seleccion = ev
      this.dialog = true
    }
  }
}
</script>

<style scoped>
.eventos-hero {
  position: relative;
  min-height: 240px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.eventos-hero__overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(11,58,53,.5), rgba(11,58,53,.72));
}
.eventos-hero__content { position: relative; z-index: 1; padding: 20px; }
.eventos-hero__title { font-size: 40px; text-shadow: 0 2px 14px rgba(0,0,0,.35); }
.gold--text { color: var(--gc-gold-light, #E1C783); }
.ev-card { overflow: hidden; display: flex; flex-direction: column; }
.ev-card__title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  color: var(--gc-teal, #0F4C46);
}
@media (max-width: 599px) {
  .eventos-hero__title { font-size: 30px; }
}
</style>
