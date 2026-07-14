<template>
  <section>
    <!-- Mapa -->
    <div class="map-wrap">
      <iframe
        title="Ubicación Golden Cat"
        width="100%" height="100%" frameborder="0" scrolling="no"
        marginheight="0" marginwidth="0"
        src="https://maps.google.com/maps?q=google&t=&z=13&ie=UTF8&iwloc=&output=embed">
      </iframe>
    </div>

    <v-container class="gc-section">
      <!-- Datos de contacto -->
      <v-layout row wrap>
        <v-flex xs12 md6 pa-2>
          <v-card class="fill-height">
            <v-card-text class="text-xs-center">
              <v-icon size="42" color="primary">email</v-icon>
              <h3 class="contact-title">Correos electrónicos</h3>
              <div class="contact-item">HOTELGOLDENCAT@GMAIL.COM</div>
              <div class="contact-item">HOTELGOLDENCAT@HOTMAIL.COM</div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md6 pa-2>
          <v-card class="fill-height">
            <v-card-text class="text-xs-center">
              <v-icon size="42" color="primary">call</v-icon>
              <h3 class="contact-title">Líneas telefónicas</h3>
              <div class="contact-item">32346545</div>
              <div class="contact-item">72435565</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <!-- Trabaja con nosotros -->
      <div class="text-xs-center mt-5 mb-3">
        <div class="gc-eyebrow">Únete al equipo</div>
        <h2 class="section-title">Trabaja con nosotros</h2>
        <div class="gc-rule"></div>
      </div>

      <v-layout row wrap>
        <v-flex v-for="job in vacantes" :key="job.titulo" xs12 sm6 md4 pa-2>
          <v-card class="fill-height job-card">
            <v-img :src="job.img" height="180"></v-img>
            <v-card-title><span class="job-title">{{ job.titulo }}</span></v-card-title>
            <v-card-text class="grey--text text--darken-1">{{ job.desc }}</v-card-text>
            <v-card-actions class="px-3 pb-3">
              <v-icon small color="accent" class="mr-1">email</v-icon>
              <span class="caption">GoldenCat@gmail.com</span>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import LIMPIEZA from '@/assets/limpieza.jpg'
import RECEPCIONISTA from '@/assets/Recepcionista.jpg'
import MESERO from '@/assets/mesero.jpg'

export default {
  name: 'contactanos',
  data: () => ({
    vacantes: [
      { titulo: 'Limpieza', img: LIMPIEZA, desc: 'Se requieren operarios de limpieza con experiencia para desinfección de baños, pisos, vidrios y manejo de maquinaria.' },
      { titulo: 'Recepcionista', img: RECEPCIONISTA, desc: 'Profesional en administración o afines para atención al huésped, manejo de proveedores y de personal. Experiencia en servicio.' },
      { titulo: 'Mesa y bar', img: MESERO, desc: 'Personal con experiencia en catering, servicio y atención a eventos. Liderazgo y un año de experiencia laboral.' }
    ]
  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>

<style scoped>
.map-wrap { width: 100%; height: 360px; overflow: hidden; }
.map-wrap iframe { display: block; border: 0; }
.section-title { font-size: 30px; color: var(--gc-teal, #0F4C46); margin: 4px 0; }
.contact-title {
  font-family: 'Playfair Display', serif;
  color: var(--gc-teal, #0F4C46);
  margin: 10px 0 6px;
}
.contact-item { font-size: 15px; color: #555; letter-spacing: .5px; }
.job-card { overflow: hidden; display: flex; flex-direction: column; }
.job-title { font-family: 'Playfair Display', serif; font-size: 20px; color: var(--gc-teal, #0F4C46); }
@media (max-width: 599px) { .map-wrap { height: 260px; } }
</style>
