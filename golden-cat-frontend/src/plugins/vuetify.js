import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import es from 'vuetify/es5/locale/es'

// Identidad visual Golden Cat — hotel boutique:
// verde teal profundo + dorado + crema cálido.
Vue.use(Vuetify, {
  theme: {
    primary: '#0F4C46',      // teal profundo (barra, elementos principales)
    secondary: '#0B3A35',    // teal oscuro
    accent: '#C8A24C',       // dorado (acentos, botones destacados)
    goldlight: '#E1C783',    // dorado claro
    cream: '#F6F1E8',        // fondo crema
    error: '#C0392B',
    info: '#2F80A2',
    success: '#2E7D32',
    warning: '#E0A100'
  },
  options: {
    customProperties: true   // expone --v-primary-base, etc. en CSS
  },
  iconfont: 'md',
  lang: {
    locales: { es },
    current: 'es'
  }
})
