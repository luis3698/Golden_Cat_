<template>
  <section>
    <!-- ===================== HERO + BUSCADOR ===================== -->
    <div class="hero" :style="{ backgroundImage: `url(${portadahotel})` }">
      <div class="hero__overlay"></div>
      <div class="hero__content text-xs-center white--text">
        <div class="gc-eyebrow gold--text">Hotel Boutique</div>
        <h1 class="hero__title">Vive una experiencia inolvidable</h1>
        <p class="hero__subtitle">La mejor opción para ti y tu familia en el corazón del Quindío</p>
      </div>
    </div>

    <v-container class="booking-wrap">
      <v-card class="booking pa-3">
        <v-layout row wrap align-center justify-center>
          <v-flex xs12 sm6 md4 pa-2>
            <div class="field-label">Fechas</div>
            <VueHotelDatepicker placeholder="Entrada / Salida" />
          </v-flex>
          <v-flex xs6 sm3 md2 pa-2>
            <v-select :items="itemsnumeroadultos" v-model="adultos" label="Adultos" prepend-inner-icon="person" hide-details></v-select>
          </v-flex>
          <v-flex xs6 sm3 md2 pa-2>
            <v-select :items="itemsnumeroniños" v-model="ninos" label="Niños" prepend-inner-icon="child_care" hide-details></v-select>
          </v-flex>
          <v-flex xs12 sm4 md2 pa-2>
            <v-select :items="tiposHabitacion" v-model="acomodacion" label="Habitación" prepend-inner-icon="king_bed" hide-details></v-select>
          </v-flex>
          <v-flex xs12 md2 pa-2>
            <v-btn block large color="accent" class="black--text" @click="buscar">
              <v-icon left>search</v-icon>Buscar
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>

    <!-- ===================== RESULTADOS DE BÚSQUEDA ===================== -->
    <v-container v-if="reservaConfirm" class="gc-section">
      <div class="text-xs-center mb-4">
        <div class="gc-eyebrow">Disponibilidad</div>
        <h2 class="section-title">Habitaciones disponibles</h2>
        <div class="gc-rule"></div>
      </div>
      <v-layout row wrap>
        <v-flex v-for="room in habitacionesApi" :key="room.uuid" xs12 sm6 md4 lg3 pa-2>
          <v-card class="room-card fill-height">
            <v-img :src="room.images && room.images[0] ? room.images[0] : habitacion2" height="180">
              <v-chip small color="accent" text-color="black" class="room-card__state">{{ room.state }}</v-chip>
            </v-img>
            <v-card-title class="pb-0">
              <div>
                <div class="room-card__type">Habitación {{ tipoNombre(room) }}</div>
                <div class="caption grey--text">Código {{ room.code }} · hasta {{ room.number_max }} personas</div>
              </div>
            </v-card-title>
            <v-card-text class="pt-2">
              <span class="room-card__price">{{ formatoPrecio(room.value_base) }}</span>
              <span class="grey--text caption"> / noche</span>
            </v-card-text>
            <v-card-actions class="px-3 pb-3">
              <v-btn block color="primary" to="/Datos_Compra">Reservar</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex v-if="!habitacionesApi.length" xs12 class="text-xs-center grey--text py-5">
          <v-icon size="56" color="grey lighten-1">hotel</v-icon>
          <div class="mt-2">No hay habitaciones para mostrar en este momento.</div>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- ===================== CONTENIDO PRINCIPAL ===================== -->
    <template v-else>
      <!-- Tipos de habitación -->
      <v-container class="gc-section">
        <div class="text-xs-center mb-4">
          <div class="gc-eyebrow">Nuestras habitaciones</div>
          <h2 class="section-title">Espacios pensados para descansar</h2>
          <div class="gc-rule"></div>
        </div>
        <v-layout row wrap>
          <v-flex v-for="hab in habitaciones" :key="hab.nombre" xs12 sm6 md3 pa-2>
            <v-card class="tipo-card fill-height">
              <div class="tipo-card__media">
                <v-img :src="hab.img" height="200"></v-img>
                <div class="tipo-card__label">{{ hab.nombre }}</div>
              </div>
              <v-card-text class="text-xs-center">
                <p class="mb-0 grey--text text--darken-1">{{ hab.desc }}</p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <!-- Banner promocional -->
      <div class="promo">
        <v-container class="text-xs-center">
          <h2 class="promo__title white--text">La mejor opción para ti y tu familia</h2>
          <p class="white--text mb-4">Disfruta nuestro #TodoIncluido hasta la última gota, porque tú lo mereces todo.</p>
          <v-img :src="gifpublicidad" max-width="900" class="mx-auto" contain></v-img>
        </v-container>
      </div>

      <!-- Experiencias -->
      <v-container class="gc-section">
        <div class="text-xs-center mb-4">
          <div class="gc-eyebrow">Experiencias</div>
          <h2 class="section-title">Momentos que se quedan contigo</h2>
          <div class="gc-rule"></div>
        </div>
        <v-layout row wrap>
          <v-flex v-for="exp in experiencias" :key="exp.titulo" xs12 sm6 md4 pa-2>
            <v-card class="exp-card">
              <v-img :src="exp.img" height="260" gradient="to top, rgba(11,58,53,.85), rgba(11,58,53,.1)">
                <div class="exp-card__content">
                  <v-icon color="goldlight" size="34">{{ exp.icon }}</v-icon>
                  <div class="exp-card__title">{{ exp.titulo }}</div>
                </div>
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
  </section>
</template>

<script>
import HABITACIONMATRINOMIAL from '@/assets/HabitacionMatrimoniales.jpg'
import HABITACIONSUITE from '@/assets/HabitacionSuite.jpg'
import HABITACIONDOBLE from '@/assets/HabitacionDoble.jpg'
import HABITACIONINDIVIDUAL from '@/assets/HabitacionIndividual.jpg'
import VueHotelDatepicker from '@northwalker/vue-hotel-datepicker'
import PORTADAHOTEL from '@/assets/portadahotel.jpg'
import PAREJA from '@/assets/pareja.jpg'
import CONFERENCIA from '@/assets/conferencia.jpg'
import FAMILIA from '@/assets/familia.jpg'
import api from '@/plugins/api'
import HABITACION2 from '@/assets/habitacion2.jpg'
import GIFPUBLICIDAD from '@/assets/gifpublicidad.gif'

export default {
  name: 'inicio',
  components: { VueHotelDatepicker },
  data: () => ({
    itemsnumeroadultos: ['1', '2', '3', '4', '5'],
    itemsnumeroniños: ['0', '1', '2', '3', '4'],
    tiposHabitacion: ['Individual', 'Doble', 'Matrimonial', 'Suite'],
    adultos: '2',
    ninos: '0',
    acomodacion: '',
    reservaConfirm: false,
    portadahotel: PORTADAHOTEL,
    habitacion2: HABITACION2,
    gifpublicidad: GIFPUBLICIDAD,
    habitacionesApi: [],
    tiposMap: {},
    habitaciones: [
      { nombre: 'Individual', img: HABITACIONINDIVIDUAL, desc: 'Ideal para viajeros que buscan comodidad y tranquilidad.' },
      { nombre: 'Doble', img: HABITACIONDOBLE, desc: 'Espacio perfecto para compartir con la mejor compañía.' },
      { nombre: 'Matrimonial', img: HABITACIONMATRINOMIAL, desc: 'Romanticismo y confort para una escapada especial.' },
      { nombre: 'Suite', img: HABITACIONSUITE, desc: 'Lujo y amplitud para una experiencia inolvidable.' }
    ],
    experiencias: [
      { titulo: 'Grupos familiares', img: FAMILIA, icon: 'family_restroom' },
      { titulo: 'Bodas', img: PAREJA, icon: 'favorite' },
      { titulo: 'Convenciones', img: CONFERENCIA, icon: 'groups' }
    ]
  }),
  async created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
    try {
      const [rooms, tipos] = await Promise.all([
        api.get('/room'),
        api.get('/type_room')
      ])
      this.habitacionesApi = rooms.data
      this.tiposMap = (tipos.data || []).reduce((acc, t) => {
        acc[t.id] = t.name
        return acc
      }, {})
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    buscar () {
      this.reservaConfirm = true
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    tipoNombre (room) {
      const name = this.tiposMap[room.typeRoomId]
      return name ? name.charAt(0).toUpperCase() + name.slice(1) : 'Estándar'
    },
    formatoPrecio (valor) {
      if (valor == null) return ''
      return '$' + Number(valor).toLocaleString('es-CO')
    }
  }
}
</script>

<style scoped>
/* ---------- Hero ---------- */
.hero {
  position: relative;
  min-height: 420px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(11,58,53,.55), rgba(11,58,53,.75));
}
.hero__content {
  position: relative;
  z-index: 1;
  padding: 24px;
  max-width: 760px;
}
.hero__title {
  font-size: 46px;
  line-height: 1.1;
  margin: 8px 0;
  text-shadow: 0 2px 14px rgba(0,0,0,.35);
}
.hero__subtitle {
  font-size: 18px;
  opacity: .95;
}
.gold--text { color: var(--gc-gold-light, #E1C783); }

/* ---------- Buscador ---------- */
.booking-wrap {
  margin-top: -48px;
  position: relative;
  z-index: 2;
}
.booking {
  border-top: 3px solid var(--gc-gold, #C8A24C);
}
.field-label {
  font-size: 12px;
  color: #8a8a8a;
  margin-bottom: 2px;
}

/* ---------- Títulos de sección ---------- */
.section-title {
  font-size: 32px;
  color: var(--gc-teal, #0F4C46);
  margin: 4px 0;
}

/* ---------- Tarjetas de tipo de habitación ---------- */
.tipo-card { overflow: hidden; }
.tipo-card__media { position: relative; }
.tipo-card__label {
  position: absolute;
  left: 0; bottom: 0;
  background: rgba(15,76,70,.88);
  color: #fff;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  padding: 6px 16px;
  border-top-right-radius: 12px;
}

/* ---------- Banner promocional ---------- */
.promo {
  background: linear-gradient(135deg, var(--gc-teal, #0F4C46), var(--gc-teal-dark, #0B3A35));
  padding: 56px 0;
  margin: 8px 0;
}
.promo__title { font-size: 30px; margin-bottom: 8px; }

/* ---------- Experiencias ---------- */
.exp-card { overflow: hidden; }
.exp-card__content {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 18px;
  text-align: center;
  color: #fff;
}
.exp-card__title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  margin-top: 4px;
}

/* ---------- Tarjetas de resultado ---------- */
.room-card { display: flex; flex-direction: column; overflow: hidden; }
.room-card__state { position: absolute; top: 10px; right: 10px; }
.room-card__type {
  font-family: 'Playfair Display', serif;
  font-size: 19px;
  color: var(--gc-teal, #0F4C46);
}
.room-card__price {
  font-size: 22px;
  font-weight: 600;
  color: var(--gc-teal, #0F4C46);
}

/* ---------- Responsive ---------- */
@media (max-width: 599px) {
  .hero { min-height: 320px; }
  .hero__title { font-size: 32px; }
  .hero__subtitle { font-size: 15px; }
  .section-title { font-size: 26px; }
  .booking-wrap { margin-top: -24px; }
}
</style>
