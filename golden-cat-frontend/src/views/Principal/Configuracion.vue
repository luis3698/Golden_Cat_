<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout  justify-center  wrap>
      <v-flex xs12 md8>
        <material-card title="Edit Profile" text="Complete your profile">
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field  label="primer nombre"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field  label="segundo nombre"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="e_mail" />
                </v-flex>
                <v-flex xs12 md6 >
                  <v-text-field label="contraseña" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="confirma contraseña" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="ciudad" class="ciudad"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="region"  class="region"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="ciudad" type="ciudad"/>
                </v-flex>
                <v-flex xs12 text-xs-center>
                  <v-btn class="mx-0 font-weight-light" color="success">guardar cambios</v-btn>
                </v-flex>
              </v-layout>

            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex xs12 md4>
        <material-card class="v-card-profile">
          <v-avatar slot="offset" class="mx-auto d-block" size="130">
            <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg">
          </v-avatar>
          <v-card-text class="text-xs-center">
            <v-btn small >Agregsr foto de perfil</v-btn> </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  //
}
</script>

<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
