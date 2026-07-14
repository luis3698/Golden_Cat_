<template>
  <section>
    <!-- Hero -->
    <div class="qe-hero" :style="{ backgroundImage: `url(${hotel})` }">
      <div class="qe-hero__overlay"></div>
      <div class="qe-hero__content text-xs-center white--text">
        <v-avatar tile size="72" class="mb-2"><img :src="logo" alt="Golden Cat"></v-avatar>
        <h1 class="qe-hero__title">¿Qué es Golden Cat?</h1>
        <p class="qe-hero__subtitle">Expertos en crear experiencias de viaje únicas</p>
      </div>
    </div>

    <v-container class="gc-section">
      <!-- Pilares -->
      <v-layout row wrap>
        <v-flex v-for="(p, i) in pilares" :key="i" xs12 md4 pa-2>
          <v-card class="fill-height pa-3 text-xs-center">
            <v-icon size="40" color="accent">{{ p.icon }}</v-icon>
            <p class="pilar-text mt-2">{{ p.text }}</p>
          </v-card>
        </v-flex>
      </v-layout>

      <!-- Misión -->
      <v-layout row wrap align-center class="mt-4">
        <v-flex xs12 sm5 pa-2>
          <v-img :src="piscina1" height="240" class="qe-img"></v-img>
        </v-flex>
        <v-flex xs12 sm7 pa-2>
          <div class="gc-eyebrow">Nuestra</div>
          <h2 class="section-title">Misión</h2>
          <p class="grey--text text--darken-2">
            Satisfacer las necesidades de nuestros clientes y huéspedes superando sus expectativas,
            brindándoles productos y servicios de calidad y amigables con el medio ambiente.
            Aportar al desarrollo económico y turístico de la Región mediante nuestro compromiso de
            excelencia e innovación, generando un crecimiento continuo y sostenible.
          </p>
        </v-flex>
      </v-layout>

      <!-- Visión -->
      <v-layout row wrap align-center class="mt-3">
        <v-flex xs12 sm7 pa-2 order-sm1 order-xs2>
          <div class="gc-eyebrow">Nuestra</div>
          <h2 class="section-title">Visión</h2>
          <p class="grey--text text--darken-2">
            Ser reconocido como el hotel líder en el Triángulo del Café, siendo la mejor opción para la
            realización de eventos, congresos y convenciones, y a su vez para el descanso y la diversión
            en el Quindío. Con un enfoque en el desarrollo sostenible, la estabilidad laboral de nuestros
            colaboradores y los más altos estándares de calidad en el servicio.
          </p>
        </v-flex>
        <v-flex xs12 sm5 pa-2 order-sm2 order-xs1>
          <v-img :src="hotel" height="240" class="qe-img"></v-img>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Valores -->
    <div class="qe-valores">
      <v-container>
        <div class="text-xs-center mb-4">
          <div class="gc-eyebrow">Lo que nos define</div>
          <h2 class="section-title">Nuestros valores</h2>
          <div class="gc-rule"></div>
          <p class="grey--text text--darken-1 mx-auto" style="max-width:640px">
            En Golden Cat deseamos dejar una huella imborrable en nuestros huéspedes. Nos basamos en
            los siguientes valores para ofrecer la mejor experiencia de vacaciones:
          </p>
        </div>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 v-for="valor in valores" :key="valor.titulo" class="pa-2">
            <v-card class="valor-card fill-height" :style="{ borderTopColor: valor.color }">
              <v-card-text class="text-xs-center">
                <v-icon :color="valor.color" size="52">{{ valor.icono }}</v-icon>
                <h3 class="valor-titulo" :style="{ color: valor.color }">{{ valor.titulo }}</h3>
                <p class="valor-desc">{{ valor.descripcion }}</p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </section>
</template>

<script>
import LOGO from '@/assets/golden_cat.png'
import HOTEL from '@/assets/hotel.jpg'
import PISCINA1 from '@/assets/piscina1.jpg'

export default {
  name: 'que-es-golden-cat',
  data () {
    return {
      logo: LOGO,
      hotel: HOTEL,
      piscina1: PISCINA1,
      pilares: [
        { icon: 'auto_awesome', text: 'Golden Cat es el poder de sorprender a nuestros clientes con experiencias de viaje únicas a través de la sorpresa y la diversión.' },
        { icon: 'verified', text: 'Nos apasiona la calidad y el buen servicio; por eso dedicamos todo nuestro esfuerzo a ser los anfitriones de las mejores vacaciones.' },
        { icon: 'favorite', text: 'Buscamos cada día la mejor forma de dar más de lo esperado a nuestros viajeros en destinos realmente especiales.' }
      ],
      valores: [
        { titulo: 'Frescura', color: '#D50000', icono: 'spa', descripcion: 'Buscamos conocer las necesidades y expectativas de nuestros viajeros para que vivan momentos llenos de calidez que los hagan sentir mejor que en casa.' },
        { titulo: 'Calidez', color: '#F9A825', icono: 'wb_sunny', descripcion: 'Deseamos transmitir sensaciones únicas, como cuando ves un hermoso atardecer y sientes esa paz y tranquilidad que necesita tu corazón.' },
        { titulo: 'Generosidad', color: '#5E35B1', icono: 'volunteer_activism', descripcion: 'Damos siempre más de lo esperado, acompañando a cada huésped con un servicio atento y detallista durante toda su estancia.' },
        { titulo: 'Cercanía', color: '#03A9F4', icono: 'favorite', descripcion: 'Escuchamos a nuestros viajeros para ofrecerles una atención humana y personalizada que los haga sentir en familia.' },
        { titulo: 'Libertad', color: '#009688', icono: 'flight_takeoff', descripcion: 'Damos rienda suelta a tu imaginación haciendo realidad lo que más deseas para convertir tus vacaciones en una experiencia inolvidable.' },
        { titulo: 'Intimidad', color: '#607D8B', icono: 'nightlight_round', descripcion: 'Ofrecemos, en medio de nuestros hermosos destinos, una experiencia que hará vibrar todos tus sentidos con una atención casi personalizada.' }
      ]
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>

<style scoped>
.qe-hero {
  position: relative;
  min-height: 300px;
  background-size: cover;
  background-position: center;
  display: flex; align-items: center; justify-content: center;
}
.qe-hero__overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(11,58,53,.55), rgba(11,58,53,.78));
}
.qe-hero__content { position: relative; z-index: 1; padding: 24px; }
.qe-hero__title { font-size: 44px; text-shadow: 0 2px 14px rgba(0,0,0,.35); }
.qe-hero__subtitle { font-size: 18px; opacity: .95; }
.section-title { font-size: 30px; color: var(--gc-teal, #0F4C46); margin: 4px 0 10px; }
.pilar-text { color: #555; font-size: 15px; line-height: 1.6; }
.qe-img { border-radius: 12px; }
.qe-valores { background: #fff; padding: 40px 0; border-top: 1px solid #eee; }
.valor-card {
  border-top: 4px solid #999;
  border-radius: 10px;
  transition: transform .2s ease, box-shadow .2s ease;
}
.valor-card:hover { transform: translateY(-4px); box-shadow: 0 10px 24px rgba(0,0,0,.14) !important; }
.valor-titulo { font-family: 'Playfair Display', serif; font-size: 26px; margin: 8px 0 6px; }
.valor-desc { color: #555; font-size: 15px; line-height: 1.5; }
p { line-height: 1.7; }
@media (max-width: 599px) { .qe-hero__title { font-size: 32px; } }
</style>
