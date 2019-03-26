<template>

<v-container fluid>
  <div class="transparent text-xs-center">
      <h1 class="font-weight-regular. ">¿QUÉ ES GOLDEN CAT?</h1>
    </div>
<v-card-text flatcolor="transparent">
      <v-layout row wrap>
        <v-flex d-flex xs3 sm md>

            <v-img  :src="logo" ></v-img>

        </v-flex >
        <v-flex d-flex xs3 sm md>
            <v-card-text>
              <h1 class="blockquote text-xs-center ">GOLDEN CAT es el poder de sorprender
                a nuestros clientes y somos expertos en dar experiencias de viaje
                únicas a través de la sorpresa y la diversión.</h1>
              </v-card-text>
        </v-flex >

         <v-flex d-flex xs3 sm md>
          <v-card-text>
              <h1 class="blockquote text-xs-center ">Nos apasiona la calidad y el buen
                servicio, y es por eso que dedicamos todo nuestro esfuerzo en ser los anfitriones
                de las mejores vacaciones.</h1>
              </v-card-text>
        </v-flex >

         <v-flex d-flex xs3 sm md>
          <v-card-text>
              <h1 class="blockquote text-xs-center ">Tenemos como propósito buscar todos los
                días la mejor forma de dar más de lo esperado a nuestros viajeros en destinos realmente
                especiales.</h1>
              </v-card-text>
        </v-flex >

      </v-layout>
</v-card-text>

<v-card-text>
      <v-layout row wrap>
        <v-flex d-flex xs3 sm md>
          <v-card flatcolor="transparent" >
            <v-img  :src="piscina1" ></v-img>
          </v-card>
        </v-flex >

        <v-flex d-flex xs9 sm md>
            <v-card-text>
              <blockquote class="blockquote1 text-xs-center ">MISION : Satisfacer las necesidades de nuestros
                clientes y huéspedes superando sus expectativas, brindándoles productos y servicios de calidad
                y amigables  con el medio ambiente a través de nuestros colaboradores. Aportar al desarrollo
                económico y turístico de la Región mediante nuestro compromiso de excelencia e innovación,
                generando a nuestros accionistas un crecimiento continuo  y sostenible año tras año.
                </blockquote>
              </v-card-text>
        </v-flex >
      </v-layout>
  </v-card-text>

  <v-card-text>
      <v-layout row wrap>
        <v-flex d-flex xs3 sm md>
          <v-card flatcolor="transparent" >
            <v-img  :src="hotel" ></v-img>
          </v-card>
        </v-flex >

        <v-flex d-flex xs9 sm md>
            <v-card-text>
              <blockquote class="blockquote1 text-xs-center ">VISION  :  Ser reconocido para el año 2020, como
                el Hotel líder en el triangulo del Café, siendo la mejor opción para la realización de eventos,
                congresos, y convenciones, y a su vez la mejor opción para su descanso y diversión en el Quindío.
                Teniendo en cuenta el desarrollo sostenible a través de los procesos ambientales, asegurando
                estabilidad laboral a nuestros colaboradores, generando empleo en la región y manteniendo altos
                estándares de calidad en la prestación del servicio
                </blockquote>
              </v-card-text>
        </v-flex >
      </v-layout>
    </v-card-text>

      <v-layout row wrap>
        <v-flex d-flex xs3 sm md>
          <v-card-text flatcolor="transparent" >
            <v-img  :src="hotel" ></v-img>
          </v-card-text>
        </v-flex >

         <v-flex d-flex xs3 sm md>
          <v-card-text flatcolor="transparent" >
            <v-img  :src="habitacion3" ></v-img>
          </v-card-text>
        </v-flex >

      <v-flex d-flex xs3 sm md>
          <v-card-text flatcolor="transparent" >
            <v-img  :src="piscina1" ></v-img>
          </v-card-text>
        </v-flex >

        <v-flex d-flex xs3 sm md>
          <v-card-text flatcolor="transparent" >
            <v-img  :src="almuerzo" ></v-img>
          </v-card-text>
        </v-flex >

      </v-layout>

      <v-layout row wrap>
        <v-flex d-flex xs3 sm md>
          <v-card-text flatcolor="transparent" >
            <v-img  :src="gym" ></v-img>
          </v-card-text>
        </v-flex >

         <v-flex d-flex xs3 sm md>
          <v-card-text flatcolor="transparent" >
            <v-img  :src="camarera" ></v-img>
          </v-card-text>
        </v-flex >

      <v-flex d-flex xs3 sm md>
          <v-card-text flatcolor="transparent" >
            <v-img  :src="habitacion2" ></v-img>
          </v-card-text>
        </v-flex >

        <v-flex d-flex xs3 sm md>
          <v-card-text flatcolor="transparent" >
            <v-img  :src="habitacion1" ></v-img>
          </v-card-text>
        </v-flex >

      </v-layout>

    </v-container>
</template>

<script>
import LOGO from '@/assets/golden_cat.png'
import HOTEL from '@/assets/hotel.jpg'
import PISCINA1 from '@/assets/piscina1.jpg'
import ALMUERZO from '@/assets/almuerzo.png'
import GYM from '@/assets/gym.jpg'
import CAMARERA from '@/assets/camarera.jpg'
import HABITACION2 from '@/assets/habitacion2.png'
import HABITACION1 from '@/assets/habitacion1.png'
import HABITACION3 from '@/assets/habitacion3.png'
export default {
  data () {
    return {
      logo: LOGO,
      hotel: HOTEL,
      piscina1: PISCINA1,
      almuerzo: ALMUERZO,
      gym: GYM,
      camarera: CAMARERA,
      habitacion2: HABITACION2,
      habitacion1: HABITACION1,
      habitacion3: HABITACION3
    }
  }
}

</script>

<style scoped>
.blockquote {
    padding: 76px 0px 76px 0px;

}
</style>
