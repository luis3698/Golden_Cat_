<template>

   <v-container fluid>

      <v-layout row wrap>
        <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
            <v-container  fill-height fluid>
              <v-layout fill-height>
                <v-flex  justify-center align-center xs12 align-end flexbox>
                  <v-card-title class="headline font-weight-regular indigo darken-4 white--text">BAR Y CAFETERIA</v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-title>
            <div>
              <h3 class="headline">Bar y Cafeteria las 24 Horas </h3>
              <span>Brindar un sitio atractivo y exclusivo con horarios
                    extendidos y de muy buen ambiente, ofreciendo a nuestros
                    visitantes una atmósfera alegre y de distracción acompañada
                    de productos de calidad, música selecta y excelente servicio</span>
            </div>
          </v-card-title>
            </v-card-text>
          </v-card>
        </v-flex >

        <v-flex  d-flex xs6 sm6 md6>
          <v-card dark tile flat color="transparent">
              <v-img height="300px" :src="bar" ></v-img>
          </v-card>
        </v-flex>
      </v-layout>

       <v-layout row wrap>

         <v-flex  d-flex xs6 sm6 md6>
          <v-card dark tile flat color="transparent">
              <v-img height="300px" :src="spa" ></v-img>
          </v-card>
        </v-flex>

        <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <v-card-title class="headline font-weight-regular indigo darken-4   white--text">ZONA HUMEDA</v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-title>
            <div>
              <h3 class="headline">Spa en Pareja con Turco Privado y Sauna</h3>
              <span>Somos un Centro Integral de Estética Facial y Corporal dedicado
                 a mejorar y mantener la belleza del rostro y cuerpo buscando la
                 unificación del concepto belleza-salud, mediante productos de alta
                 calidad en combinación con aparatología de última generación y lo último
                 en técnicas manuales</span>
            </div>
          </v-card-title>
            </v-card-text>
          </v-card>
        </v-flex >

      </v-layout>

      <v-layout row wrap>
        <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <v-card-title class="headline font-weight-regular indigo darken-4 white--text">RESTAURANTE</v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-title>
            <div>
              <h3 class="headline">¡Un Restaurante Ideal para Ti!</h3>
              <span>Estamos dedicados a brindar momentos inolvidables y
                servicios gastronómicos de alta calidad, ponemos todo nuestro
                amor y máximo empeño en beneficio de nuestros comensales.</span>
            </div>
          </v-card-title>
            </v-card-text>
          </v-card>
        </v-flex >

        <v-flex  d-flex xs6 sm6 md6>
          <v-card dark tile flat color="transpare">
              <v-img height="300px" :src="restaurante" ></v-img>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>

</template>
<script>
import BAR from '@/assets/bar.jpg'
import RESTAURANTE from '@/assets/restaurante.jpg'
import SPA from '@/assets/spa.jpg'

export default {

  data: () => ({
    drawer: null,

    bar: BAR,
    restaurante: RESTAURANTE,
    spa: SPA

  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>

<style scoped>

</style>
