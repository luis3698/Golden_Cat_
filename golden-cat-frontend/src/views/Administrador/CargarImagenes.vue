<template>
  <v-expansion-panel>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div>1. Habitaciones Ventana Inicio</div>
              </template>
              <v-card>
                <v-card dark tile flat color="red ">
            <v-card-text  class="  text-xs-center">
              <h5 class="headline mb-0">Habitaciones Ventana Inicio</h5>
              <v-divider ></v-divider>
              <p>presentacion de habitaciones en el inicio de la pagina.<br>el orden de las imagenes es<br> (Habitacion Individual, Habitacion Doble, Habitacion Matimonial, Habitacion Suite)</p>
                <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
                <vue-upload-multiple-image
                 @upload-success="uploadImageSuccess"
                 @before-remove="beforeRemove"
                 @edit-image="editImage"
                 @data-change="dataChange"
                 :data-images="images"
                 ></vue-upload-multiple-image>
              </div>
               <v-btn color="success">Subir Cambios</v-btn>
            </v-card-text>
          </v-card>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div>2. Servicio Extra 1</div>
              </template>
              <v-card>
                 <v-card dark tile flat color="black">
              <v-card-text  class="  text-xs-center">
              <h5 class="headline mb-0">Servicio Extra 1</h5>
              <v-divider ></v-divider>
              <p>imagenes y textros del servico 1<br>maximo 5 imagenes</p>
              <v-layout>
                <v-flex xs4>
                  <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
                  <vue-upload-multiple-image
                   @upload-success="uploadImageSuccess"
                   @before-remove="beforeRemove"
                   @edit-image="editImage"
                   @data-change="dataChange"
                   :data-images="images"
                   ></vue-upload-multiple-image>
                  </div>
                </v-flex >
              <v-flex xs8>
                <v-text-field  label="titulo del servisio" single-line outline></v-text-field>
                <v-text-field  label="subtitulo del servisio" single-line outline></v-text-field>
                <v-textarea outline label="parrafo informativo" value=" "></v-textarea>
              </v-flex >
              </v-layout>

               <v-btn color="success">Subir Cambios</v-btn>
            </v-card-text>
          </v-card>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div>3. Servicio Extra 2</div>
              </template>
              <v-card>
                 <v-card dark tile flat color="black">
              <v-card-text  class="  text-xs-center">
              <h5 class="headline mb-0">Servicio Extra 2</h5>
              <v-divider ></v-divider>
              <p>imagenes y textros del servico 2<br>maximo 5 imagenes</p>
              <v-layout>
                <v-flex xs4>
                  <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
                  <vue-upload-multiple-image
                   @upload-success="uploadImageSuccess"
                   @before-remove="beforeRemove"
                   @edit-image="editImage"
                   @data-change="dataChange"
                   :data-images="images"
                   ></vue-upload-multiple-image>
                  </div>
                </v-flex >
              <v-flex xs8>
                <v-text-field  label="titulo del servisio" single-line outline></v-text-field>
                <v-text-field  label="subtitulo del servisio" single-line outline></v-text-field>
                <v-textarea outline label="parrafo informativo" value=" "></v-textarea>
              </v-flex >
              </v-layout>

               <v-btn color="success">Subir Cambios</v-btn>
            </v-card-text>
          </v-card>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div>4. Servicio Extra 3</div>
              </template>
              <v-card>
                 <v-card dark tile flat color="black">
              <v-card-text  class="  text-xs-center">
              <h5 class="headline mb-0">Servicio Extra 3</h5>
              <v-divider ></v-divider>
              <p>imagenes y textros del servico 3<br>maximo 5 imagenes</p>
              <v-layout>
                <v-flex xs4>
                  <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
                  <vue-upload-multiple-image
                   @upload-success="uploadImageSuccess"
                   @before-remove="beforeRemove"
                   @edit-image="editImage"
                   @data-change="dataChange"
                   :data-images="images"
                   ></vue-upload-multiple-image>
                  </div>
                </v-flex >
              <v-flex xs8>
                <v-text-field  label="titulo del servisio" single-line outline></v-text-field>
                <v-text-field  label="subtitulo del servisio" single-line outline></v-text-field>
                <v-textarea outline label="parrafo informativo" value=" "></v-textarea>
              </v-flex >
              </v-layout>

               <v-btn color="success">Subir Cambios</v-btn>
            </v-card-text>
          </v-card>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div>5. Servicio Extra 4</div>
              </template>
              <v-card>
                 <v-card dark tile flat color="black">
              <v-card-text  class="  text-xs-center">
              <h5 class="headline mb-0">Servicio Extra 4</h5>
              <v-divider ></v-divider>
              <p>imagenes y textros del servico 4<br>maximo 5 imagenes</p>
              <v-layout>
                <v-flex xs4>
                  <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
                  <vue-upload-multiple-image
                   @upload-success="uploadImageSuccess"
                   @before-remove="beforeRemove"
                   @edit-image="editImage"
                   @data-change="dataChange"
                   :data-images="images"
                   ></vue-upload-multiple-image>
                  </div>
                </v-flex >
              <v-flex xs8>
                <v-text-field  label="titulo del servisio" single-line outline></v-text-field>
                <v-text-field  label="subtitulo del servisio" single-line outline></v-text-field>
                <v-textarea outline label="parrafo informativo" value=" "></v-textarea>
              </v-flex >
              </v-layout>

               <v-btn color="success">Subir Cambios</v-btn>
            </v-card-text>
          </v-card>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div>6. Servicio Extra 5</div>
              </template>
              <v-card>
                 <v-card dark tile flat color="black">
              <v-card-text  class="  text-xs-center">
              <h5 class="headline mb-0">Servicio Extra 5</h5>
              <v-divider ></v-divider>
              <p>imagenes y textros del servico 5<br>maximo 5 imagenes</p>
              <v-layout>
                <v-flex xs4>
                  <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
                  <vue-upload-multiple-image
                   @upload-success="uploadImageSuccess"
                   @before-remove="beforeRemove"
                   @edit-image="editImage"
                   @data-change="dataChange"
                   :data-images="images"
                   ></vue-upload-multiple-image>
                  </div>
                </v-flex >
              <v-flex xs8>
                <v-text-field  label="titulo del servisio" single-line outline></v-text-field>
                <v-text-field  label="subtitulo del servisio" single-line outline></v-text-field>
                <v-textarea outline label="parrafo informativo" value=" "></v-textarea>
              </v-flex >
              </v-layout>

               <v-btn color="success">Subir Cambios</v-btn>
            </v-card-text>
          </v-card>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div>7. Servicio Extra 6</div>
              </template>
              <v-card>
                 <v-card dark tile flat color="black">
              <v-card-text  class="  text-xs-center">
              <h5 class="headline mb-0">Servicio Extra 6</h5>
              <v-divider ></v-divider>
              <p>imagenes y textros del servico 6<br>maximo 5 imagenes</p>
              <v-layout>
                <v-flex xs4>
                  <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
                  <vue-upload-multiple-image
                   @upload-success="uploadImageSuccess"
                   @before-remove="beforeRemove"
                   @edit-image="editImage"
                   @data-change="dataChange"
                   :data-images="images"
                   ></vue-upload-multiple-image>
                  </div>
                </v-flex >
              <v-flex xs8>
                <v-text-field  label="titulo del servisio" single-line outline></v-text-field>
                <v-text-field  label="subtitulo del servisio" single-line outline></v-text-field>
                <v-textarea outline label="parrafo informativo" value=" "></v-textarea>
              </v-flex >
              </v-layout>

               <v-btn color="success">Subir Cambios</v-btn>
            </v-card-text>
          </v-card>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>

</template>

<script>
import VueUploadMultipleImage from 'vue-upload-multiple-image'
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      images: []
    }
  },
  components: {
    VueUploadMultipleImage
  },
  methods: {
    uploadImageSuccess (formData, index, fileList) {
      console.log('data', formData, index, fileList)
      // Upload image api
      // axios.post('http://your-url-upload', { data: formData }).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove (index, done, fileList) {
      console.log('index', index, fileList)
      var r = confirm('remove image')
      if (r == true) {
        done()
      } else {
      }
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    },
    dataChange (data) {
      console.log(data)
    }
  }
}
</script>

<style>
#my-strictly-unique-vue-upload-multiple-image {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a8050d;

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin:  10px;
}

a {
  color: #05c36e;
}

</style>
