<template>

<v-container fluid>
  <div class="transparent text-xs-center">
      <h3 class="letra text-md-center" >¿ Que es Golden Cat ?</h3>
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
  <div >
   <h3 class="letra text-md-center" >mision</h3>
  </div>
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
  <div >
   <h3 class="letra text-md-center" >vision</h3>
  </div>
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
      <v-layout row wrap>

        <v-flex d-flex xs12 sm md>
            <v-card-text>
              <h3 class="letra text-md-center" >NUESTROS VALORES</h3>
              <blockquote class="blockquote1 text-xs-center ">En Golden Cat deseamos siempre dejar una huella imborrable
                en nuestros huéspedes para que recuerden nuestra esencia y así poder ofrecer la mejor experiencia de vacaciones
                . Es por esto, que nos basamos en los siguientes valores para cumplir con este fin:
                </blockquote>
              </v-card-text>
        </v-flex >
      </v-layout>
            <v-layout row>
        <v-flex xs4 >
          <v-container class="color1" >
          <v-card  tile flat color="transparent">
            <h3 class="letra text-md-center" >FRESCURA</h3>
            <P>Buscamos conocer las necesidades y expectativas
              de nuestros viajeros para que puedan vivir momentos
              llenos de calidez que los haga sentir mejor que en casa.</P>
            <video width="300px" height="170px" src="@/assets/videos/Nuestros valores (Calidez).mp4" controls></video>
          </v-card>
          </v-container>
        </v-flex>
        <v-flex xs4>
          <v-container class="color2" >
          <v-card tile flat color="transparent">
            <h3 class="letra colorletra text-md-center" >CALIDEZ</h3>
            <P class="colorletra">En nuestros destinos deseamos transmitir sensaciones únicas,
              como cuando ves un hermoso atardecer y sientes esa paz y tranquilidad que necesita tu corazón.</P>
            <video width="300px" height="170px" src="@/assets/videos/Nuestros valores (Cercanía).mp4" controls></video>
          </v-card>
          </v-container>
        </v-flex>
        <v-flex xs4>
          <v-container class="color3">
          <v-card  tile flat color="transparent">
            <h3 class="letra text-md-center" >  GENEROSIDAD</h3>
            <P>Buscamos conocer las necesidades y expectativas
              de nuestros viajeros para que puedan vivir momentos
              llenos de calidez que los haga sentir mejor que en casa.</P>
             <video width="300px" height="170px" src="@/assets/videos/Nuestros valores (Frescura).mp4" controls></video>
          </v-card>
          </v-container>
        </v-flex>
      </v-layout>
      <v-layout row>
        </v-layout>
            <v-layout row>
        <v-flex xs4 >
          <v-container class="color4">
          <v-card  tile flat color="transparent">
            <h3 class="letra text-md-center" >CERCANIAS</h3>
            <P>Buscamos conocer las necesidades y expectativas de nuestros viajeros para que puedan vivir
              momentos llenos de calidez que los haga sentir mejor que en casa</P>
             <video width="300px" height="170px" src="@/assets/videos/Nuestros valores (Generosidad).mp4" controls></video>
          </v-card>
          </v-container>
        </v-flex>
        <v-flex xs4>
          <v-container class="color5">
          <v-card tile flat color="transparent">
            <h3 class="letra text-md-center" >LIBERTAD</h3>
            <P>Aquí damos rienda suelta a tu imaginación haciendo realidad todo lo que
              más has deseado para convertir tus vacaciones en una experiencia única e inolvidable.</P>
             <video width="300px" height="170px" src="@/assets/videos/Nuestros valores (Intimidad).mp4" controls></video>
          </v-card>
          </v-container>
        </v-flex>
         <v-flex xs4>
           <v-container class="color6">
           <v-card tile flat color="transparent">
             <h3 class="letra text-md-center" >INTIMIDAD</h3>
            <P>Ofrecemos en medio de nuestros hermosos destinos una experiencia inolvidable que
              hará vibrar todos tus sentidos a través de una atención casi personalizada.</P>
            <video width="300px" height="170px" src="@/assets/videos/Nuestros valores (Libertad).mp4" controls></video>
            </v-card>
           </v-container>
        </v-flex>

      </v-layout>
      <div class="darken-3 text-xs-center">
   <h3 class="letra1 text-md-center" >Disfruta nuestro #TodoIncluido hasta la última gota porque tú</h3>
   <h3 class="letra2 text-md-center" >lo mereces todo</h3>
  </div>
    </v-card-text>
    </v-container>
</template>
<script>
import LOGO from '@/assets/golden_cat.png'
import HOTEL from '@/assets/hotel.jpg'
import PISCINA1 from '@/assets/piscina1.jpg'
export default {
  data () {
    return {
      logo: LOGO,
      hotel: HOTEL,
      piscina1: PISCINA1
    }
  }
}
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Raleway');
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');
.blockquote {
    padding: 76px 0px 76px 0px;
}
.color1 {
  background-color: #D50000;
}
.color2{
  background-color: #FFFF00;
}
.color3{
  background-color: #5E35B1 ;
}
.color4{
  background-color: #03A9F4 ;
}
.color5{
  background-color: #009688;
}
.color6{
  background-color: #B0BEC5;
}
.letra{
  font-family: 'Amatic SC', cursive;
  font-size: 50px;

}
.letra1{
 font-family: 'Raleway', sans-serif;
  font-size: 20px;

}
.letra2{
font-family: 'Parisienne', cursive;

  font-size: 50px;

}
.colorletra{
  color: rgb(245, 0, 0);
}

</style>
