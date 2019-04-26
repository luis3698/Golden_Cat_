<template>
   <v-container fluid>
      <v-layout row wrap>
        <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
            <v-container  fill-height fluid>
              <v-layout fill-height>
                <v-flex  justify-center align-center xs12 align-end flexbox>
                  <v-card-title class="headline center font-weight-regular indigo darken-4 ">BAR Y CAFETERIA</v-card-title>
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
          <v-carousel height="300px">
            <v-carousel-item v-for="(item1,i) in items1" :key="i" :src="item1.src">
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>

       <v-layout row wrap>
       <v-flex  d-flex xs6 sm6 md6>
          <v-carousel height="300px">
      <v-carousel-item v-for="(item2,i) in items2" :key="i" :src="item2.src">
      </v-carousel-item>
    </v-carousel>
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
          <v-carousel height="300px">
             <v-carousel-item v-for="(item3,i) in items3" :key="i" :src="item3.src">
             </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>

       <v-layout row wrap>
         <v-flex  d-flex xs6 sm6 md6>
          <v-carousel height="300px">
             <v-carousel-item v-for="(item4,i) in items4" :key="i" :src="item4.src">
               </v-carousel-item>
            </v-carousel>
        </v-flex>
        <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <v-card-title class="headline font-weight-regular indigo darken-4   white--text">EL MEJOR SERVICIO</v-card-title>
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
                  <v-card-title class="headline font-weight-regular indigo darken-4 white--text">ZONAS VERDES</v-card-title>
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
          <v-carousel  height="300px">
            <v-carousel-item v-for="(item5,i) in items5" :key="i" :src="item5.src">
             </v-carousel-item>
            </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>

export default {

  data () {
    return {
      items1: [
        {
          src: 'https://static.iris.net.co/arcadia/upload/images/2017/10/6/66024_1.jpg'
        },
        {
          src: 'https://globalmediarocks.s3-us-west-1.amazonaws.com/uploads/cae2f693-0295-4e67-90fd-f9bd7a2a6999/BARES.jpg'
        },
        {
          src: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/69/76/c2/sanno-cafeteria.jpg'
        },
        {
          src: 'http://4.bp.blogspot.com/-1Mmc87d3QQs/T_1bekHTs1I/AAAAAAAAAM0/jTuvUwOgPEQ/s1600/CARTA-OPEN2.jpg'
        }

      ],
      items2: [
        {
          src: 'https://static1.ideal.es/www/multimedia/201707/24/media/cortadas/piscina-kECB-U404135467062XF-624x385@Ideal.jpg'
        },
        {
          src: 'https://www.hotelvillalba.com/files/piscina-spa.jpg'
        },
        {
          src: 'https://www.lagunaparkhotel.com/images/galcms/1920x1080c50q80/galleryone/laguna-spa/zoom/_dsc5853_10099.jpg'
        },
        {
          src: 'https://storage.googleapis.com/mmc-elcaribe-bucket/uploads/2019/01/9d6183b0-spa.jpg'
        }
      ],
      items3: [
        {
          src: 'https://u.tfstatic.com/restaurant_photos/658/69658/169/612/l-o-restaurante-marquise-3b9f9.jpg'
        },
        {
          src: 'http://novedadesonline.com.ar/wp-content/uploads/2018/11/ticr_890_370.jpg'
        },
        {
          src: 'https://okdiario.com/img/2017/09/01/carta-de-vinos-655x368.jpg'
        },
        {
          src: 'https://i.blogs.es/21641c/dinner-939434_1280/450_1000.jpg'
        }
      ],
      items4: [
        {
          src: 'https://www.cesae.es/images/articulos/foto%20recepcion.jpg'
        },
        {
          src: 'https://blog.sercotelhoteles.com/wp-content/uploads/2017/11/Dia-Mundial-del-Botones.jpg'
        },
        {
          src: 'https://3.bp.blogspot.com/-38Fd4Y7whrU/W5bB6_Zo4AI/AAAAAAAAHO0/mJL6Tbqn3-Yi-mC9jaQW9dvqrAd5NViMQCPcBGAYYCw/s640/mucamas-000-696x464.jpg'
        },
        {
          src: 'https://cdn0.bodas.com.mx/emp/fotos/6/1/4/3/img-0673_5_106143.jpg'
        }
      ],
      items5: [
        {
          src: 'https://compartirpalabramaestra.org/sites/default/files/styles/articulos/public/field/image/docentes-y-estudiantes-recuperan-zona-verde-en-tuquerres-narino.jpg'
        },
        {
          src: 'https://estaticos.qdq.com/swdata/photos/672/672628912/ea1506215fbb4c5c856c366d4db460ea.jpg'
        },
        {
          src: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/e8/32/74/zona-verde.jpg'
        }
      ]
    }
  }
}

</script>

<style scoped>

</style>
