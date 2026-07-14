<template>
<div>
  <component :is="layout"></component>
</div>
</template>

<script>
import PrincipalLayout from './layouts/PrincipalLayout.vue'
import AdministradorLayout from './layouts/AdministradorLayout.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: { PrincipalLayout, AdministradorLayout },
  computed: mapState(['layout'])
}
</script>

<style>
/* ===== Estilos globales Golden Cat ===== */
:root {
  --gc-teal: #0F4C46;
  --gc-teal-dark: #0B3A35;
  --gc-gold: #C8A24C;
  --gc-gold-light: #E1C783;
  --gc-cream: #F6F1E8;
  --gc-ink: #2A2A2A;
  --gc-muted: #6B6B6B;
}

.application.theme--light {
  background: var(--gc-cream) !important;
}

.application {
  font-family: 'Poppins', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--gc-ink);
}

/* Títulos con tipografía serif elegante */
h1, h2, h3, .display-1, .display-2, .display-3, .headline, .title, .gc-serif {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif !important;
  letter-spacing: .2px;
}

/* Tarjetas con esquinas suaves y sombra sutil */
.application .v-card {
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(15, 76, 70, 0.08) !important;
}

/* Botones más redondeados y sin gritos en mayúsculas */
.application .v-btn {
  border-radius: 8px;
  text-transform: none;
  letter-spacing: .3px;
  font-weight: 500;
}

/* Botón de acento (dorado) con buen contraste */
.application .v-btn.accent,
.application .v-btn.accent:hover {
  color: #17130A !important;
}

/* Enlaces de acento */
a { color: var(--gc-teal); }

/* Barra de scroll discreta */
::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-thumb { background: #cdbfa6; border-radius: 6px; }
::-webkit-scrollbar-thumb:hover { background: var(--gc-gold); }

/* Divisor dorado reutilizable */
.gc-rule {
  width: 64px;
  height: 3px;
  background: var(--gc-gold);
  border-radius: 3px;
  margin: 12px auto 20px;
}

/* Sección con separación vertical consistente */
.gc-section { padding: 48px 0; }

/* Eyebrow / etiqueta pequeña dorada */
.gc-eyebrow {
  color: var(--gc-gold);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 13px;
  font-weight: 600;
}
</style>
