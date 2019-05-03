<template>
 <div>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          id="gmap_canvas"
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?q=google&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        />
      </div>
    </div>

          <v-card flatcolor="transparent" >
            <v-card-text  class=" darken-2 text-xs-center">
              <div class="indigo darken-4 darken-2 text-xs-center">
                  <span class="white--text">CORREOS ELECTRONICOS</span>
              </div>
              <span class="white--text">HOTELGOLDENCAT@GMAIL.COM     <v-icon small>email</v-icon>
              </span> <br>
              <span class="white--text">HOTELGOLDENCAT@HOTMAIL.COM     <v-icon small>email</v-icon>
              </span>
            </v-card-text>
            <v-card-text class=" darken-2 text-xs-center">
              <div class="indigo darken-4 darken-2 text-xs-center">
                  <span class="white--text">LINEAS TELEFONICAS</span>
              </div>
              <v-card-text>
              <span class="white--text">32346545
                <v-icon small>call</v-icon>
                </span> <br>
              <span class="white--text ">72435565
                <v-icon small>call</v-icon>
              </span>
              </v-card-text>
              <div class="indigo darken-4 darken-2 text-xs-center">
                  <span class="white--text ">TRABAJA CON NOSOTROS</span>
              </div>
            </v-card-text>
          </v-card>

  </div>

</template>

<script>

</script>
<style>

.mapouter {
  text-align:right;
  height:400px;
  width:1200px;

}
.gmap_canvas {
  overflow:hidden;
  background:none!important;
  height:100%;
  width:100%;
}
</style>
