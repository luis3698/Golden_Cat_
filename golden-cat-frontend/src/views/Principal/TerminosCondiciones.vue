<template>
  <section>
    <div class="tyc-hero" :style="{ backgroundImage: `url(${terminosycondiciones})` }">
      <div class="tyc-hero__overlay"></div>
      <h1 class="tyc-hero__title white--text">Términos y condiciones</h1>
    </div>

    <v-container class="gc-section" style="max-width:860px">
      <p class="lead grey--text text--darken-2">
        Servincluidos Ltda. actúa como intermediario entre los usuarios y quienes proporcionan
        los servicios incluidos (aerolíneas, hoteles y transporte terrestre, entre otros) y se
        responsabiliza de estructurar paquetes turísticos para facilitar al viajero la obtención
        de cupos aéreos y la reservación de habitaciones en el Hotel Golden Cat, de acuerdo con la
        disponibilidad y la información suministrada por los prestadores de servicio.
      </p>
      <p class="grey--text text--darken-2">
        Los viajeros que accedan a este sitio o adquieran los servicios turísticos ofrecidos son
        responsables de leer y comprender las disposiciones contenidas en estos términos y
        condiciones. Si no está de acuerdo con alguna de ellas, absténgase de adquirir los
        servicios publicados.
      </p>

      <h2 class="tyc-h2">1. Procesamiento de pagos</h2>
      <v-divider class="mb-3"></v-divider>
      <p class="grey--text text--darken-2">
        Los servicios de procesamiento de pagos para bienes y/o servicios adquiridos en esta
        página web son proporcionados por Estricontio S.L. o por Servincluidos Ltda., según el
        tipo de método de pago utilizado. Si escoge pagar con tarjeta de crédito procesada a
        través de un adquirente europeo, estos términos constituyen un acuerdo entre usted y
        Estricontio S.L.; para cualquier otro tipo de compra, el acuerdo es con Servincluidos Ltda.
      </p>

      <h2 class="tyc-h2">1.1 Definiciones</h2>
      <v-divider class="mb-3"></v-divider>
      <ol class="tyc-defs grey--text text--darken-2">
        <li v-for="(def, i) in definiciones" :key="i"><strong>{{ def.t }}:</strong> {{ def.d }}</li>
      </ol>
    </v-container>
  </section>
</template>

<script>
import TERMINOSYCONDICIONES from '@/assets/terminosycondiciones.jpg'
export default {
  name: 'terminos-condiciones',
  data: () => ({
    terminosycondiciones: TERMINOSYCONDICIONES,
    definiciones: [
      { t: 'Hotel', d: 'Establecimiento destinado a prestar el servicio de alojamiento no permanente (inferior a 30 días), con o sin alimentación y servicios complementarios.' },
      { t: 'Contrato de hospedaje', d: 'Contrato de arrendamiento de carácter comercial mediante el cual se presta alojamiento a un huésped por el pago del precio respectivo.' },
      { t: 'Todo incluido', d: 'Alojamiento con todas las comidas, snacks y bar abierto con bebidas nacionales ilimitadas; algunos hoteles cuentan con servicio de bar 24 horas.' },
      { t: 'PQR', d: 'Petición, queja o reclamo que un cliente presenta y que debe ser documentada en el sistema.' },
      { t: 'Temporadas', d: 'Periodos determinados del año en los que aplican condiciones y tarifas diferenciales previamente establecidas.' },
      { t: 'Reserva', d: 'Separación de cupos aéreos y/o hoteleros en una fecha determinada para un cliente por un periodo de tiempo.' },
      { t: 'Reserva confirmada', d: 'Reserva sin abonos ni depósitos, o que no cumple aún con el plan de pagos establecido.' },
      { t: 'Reembolso', d: 'Operación mediante la cual se devuelve al cliente parte o la totalidad del dinero entregado, por el mismo medio de pago.' },
      { t: 'Factura', d: 'Documento que confirma el pago total del plan turístico.' },
      { t: 'Reversión', d: 'Devolución del dinero directamente a la tarjeta de crédito del cliente, mediante la franquicia autorizada.' }
    ]
  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>

<style scoped>
.tyc-hero {
  position: relative;
  min-height: 200px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tyc-hero__overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(11,58,53,.5), rgba(11,58,53,.72));
}
.tyc-hero__title { position: relative; z-index: 1; font-size: 38px; text-shadow: 0 2px 12px rgba(0,0,0,.35); }
.lead { font-size: 17px; line-height: 1.7; }
.tyc-h2 {
  font-family: 'Playfair Display', serif;
  color: var(--gc-teal, #0F4C46);
  font-size: 24px;
  margin-top: 28px;
}
.tyc-defs { line-height: 1.8; padding-left: 20px; }
.tyc-defs li { margin-bottom: 8px; }
p { line-height: 1.7; }
@media (max-width: 599px) { .tyc-hero__title { font-size: 28px; } }
</style>
