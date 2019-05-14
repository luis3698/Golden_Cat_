<template>
    <div class="grande">
      <v-container class="todo" fluid>
        <p class="titulo white--text display-1" >Generar Reportes</p>
        <v-layout row>
          <v-flex xs4 >
            <v-radio-group class="Layout" v-model="radios" :mandatory="false">
              <v-checkbox v-model="selected" label="Clientes" value="Clientes"></v-checkbox>
              <v-checkbox v-model="selected" label="Habitaciones" value="Horarios"></v-checkbox>
              <v-checkbox v-model="selected" label="Servicios" value="Membresias"></v-checkbox>
            </v-radio-group>
            <v-spacer></v-spacer>
          </v-flex>
          <v-flex xs4>
            <v-radio-group class="Layout" v-model="radios" :mandatory="false">
              <v-checkbox v-model="selected" label="reservas" value="Entrenadores"></v-checkbox>
              <v-checkbox v-model="selected" label="Ventas" value="Ventas"></v-checkbox>
              <v-checkbox v-model="selected" label="Inventario" value="Compras"></v-checkbox>
            </v-radio-group>
          </v-flex>
          <v-flex xs4>
            <v-radio-group class="Layout" v-model="radios" :mandatory="false">
              <v-checkbox v-model="selected" label="Reservas" value="Reservas"></v-checkbox>
              <v-checkbox v-model="selected" label="Personal" value="Inventario"></v-checkbox>
              <v-checkbox v-model="selected" label="Ranking" value="Progreso"></v-checkbox>
            </v-radio-group>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid>
        <p class="titulo1 white--text" >Generar Reporte(s) en:</p>
        <v-layout row>
          <v-flex xs4 >
              <v-radio-group class="Layout" v-model="radios" :mandatory="false">
                <v-radio label="PDF" value="pdf"></v-radio>
              </v-radio-group>
          </v-flex>
          <v-flex xs4 >
            <v-radio-group class="Layout" v-model="radios" :mandatory="false">
              <v-radio label="EXCEL" value="excel"></v-radio>
            </v-radio-group>
          </v-flex>
          <v-flex xs4 >
            <v-radio-group class="Layout" v-model="radios" :mandatory="false">
              <v-btn
                color="blue darken-4"
                class="botton"
                @click="loader = 'loading3'"
               >Generar<v-icon right>cloud_upload</v-icon>
                </v-btn>
            </v-radio-group>
          </v-flex>

        </v-layout>
      </v-container>
    </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  data () {
    return {
      radios: 'radio-1'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .Layout{
    background-color: white
    padding-top 20px
    padding-left 30px
  }
  .titulo{
    background-color blue
    margin 0 0 -16px 0
    font-size 20px
    padding-left 15px
  }
  .titulo1{
    background-color blue
    margin 0 0 -16px 0
    font-size 20px
    padding-left 15px
  }
  .botton{
    color white
    height 40px
    margin -8px
  }
  .todo{
    width 1000px
  }
  .v-btn__content {
    color white
  }
  .theme--light.v-label {
    color: black;
}
  .Layout[data-v-d10918c0] {
    background-color: #756C6C;
  }
</style>
