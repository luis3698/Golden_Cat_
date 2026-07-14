<template>
  <v-container class="gc-section" style="max-width:900px">
    <div class="text-xs-center mb-4">
      <div class="gc-eyebrow">Ayuda</div>
      <h2 class="section-title">Preguntas frecuentes</h2>
      <div class="gc-rule"></div>
      <p class="grey--text text--darken-1">Resolvemos las dudas más habituales sobre tus reservas.</p>
    </div>

    <v-expansion-panel popout>
      <v-expansion-panel-content v-for="(faq, i) in faqs" :key="i">
        <template v-slot:header>
          <div class="faq-question">
            <v-icon color="accent" class="mr-2">help_outline</v-icon>{{ faq.q }}
          </div>
        </template>
        <v-card>
          <v-card-text class="grey--text text--darken-2">{{ faq.a }}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
export default {
  name: 'preguntas-frecuentes',
  data: () => ({
    faqs: [
      { q: '¿Puedo realizar modificaciones a una reserva confirmada y pagada?', a: 'Sí, se pueden realizar modificaciones.' },
      { q: '¿Cómo lo puedo hacer?', a: 'A través de www.goldencat.com, en la opción Reservas → Detalles → Selecciona cambios.' },
      { q: '¿Qué información necesito para radicar mi reserva?', a: 'Se te pedirán datos personales como nombre, apellido, teléfono, documento, correo y país para validar la reserva.' },
      { q: '¿Qué cambios puedo realizar en la reserva?', a: 'Cambios de nombre y de fechas de viaje. Recuerda hacer los cambios 48 horas antes de tu llegada al hotel.' },
      { q: '¿Puedo cancelar una reserva?', a: 'Sí. En www.goldencat.com, opción Cuenta → Reservas → Detalles → Cancelar reserva.' },
      { q: '¿Cómo puedo pagar las reservas?', a: 'Puedes pagar con tarjeta de crédito, Efecty, PayPal o Baloto.' },
      { q: 'Si cancelo una reserva ya pagada, ¿qué pasa con mi dinero?', a: 'Si el pago fue virtual, tu dinero será reembolsado a la misma cuenta entre 24 y 48 horas tras la cancelación.' },
      { q: '¿Cómo me comunico con el hotel?', a: 'En www.goldencat.com/contactanos encuentras números telefónicos y correos electrónicos para contactarnos.' },
      { q: '¿Qué hago si la devolución de mi dinero no se genera?', a: 'Si no se genera el reembolso en el tiempo establecido, comunícate con atención al cliente: 32346545 - 72435565.' },
      { q: 'Si la cancelación obedece a un caso de fuerza mayor, ¿qué debo hacer?', a: 'Diligencia tu solicitud a través de la opción PQR adjuntando los soportes que certifican el motivo.' }
    ]
  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>

<style scoped>
.section-title { font-size: 32px; color: var(--gc-teal, #0F4C46); margin: 4px 0; }
.faq-question {
  display: flex;
  align-items: center;
  font-weight: 500;
  color: var(--gc-teal, #0F4C46);
}
</style>
