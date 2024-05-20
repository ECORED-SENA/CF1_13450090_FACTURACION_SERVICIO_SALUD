<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Sistema de selección y clasificación de pacientes en urgencias “Triage”
    .row.mb-5
      .col-lg-auto.pe-lg-0.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img1.png', style="width:100px" alt='').m-auto
      .col.ps-lg-0(data-aos="fade-left")
        .p-4.bg-c16.h-100
          p.mb-0 El Ministerio de Protección Social estableció un modelo de selección y clasificación de urgencias, conocido como #[b "Triage"], que los prestadores de servicios de salud con servicios de urgencias habilitados deben cumplir obligatoriamente.
    .row.mb-5
      .col-12
        .px-5.bg-c17
          .titulo-sexto.color-secundario(data-aos="fade-right")
            p.mb-0 #[b Tabla 2.] Clasificación del “Triage”
          .tabla-a.color-secundario.mb-5(data-aos="fade-down")
            table
              caption Referencia Tabla - Norma APA
              thead
                tr
                  th TRIAGE I
                  th TRIAGE II
                  th TRIAGE III
                  th PRIORIDAD IV
                  th PRIORIDAD V
              tbody
                tr(style="background-color:#FAE9B5 !important")
                  td.text-center #[b Reanimación]
                  td.text-center #[b Emergencia]
                  td.text-center #[b Urgencia]
                  td.text-center #[b No Urgencia]
                  td.text-center #[b No Urgencia]
                tr
                  td(style="background-color:#FFAFAF !important") Condiciones de salud extremas que amenazan la vida del paciente.
                  td(style="background-color:#B1D8FF !important") Situación de alto riesgo que representa peligro inminente de estado de salud.
                  td(style="background-color:#90CCA4 !important") Condición aguda, no amenazante de la vida, moderada.
                  td(style="background-color:#A4DCBC !important") Condición de salud que puede ser aguda, pero no compromete al estado general del paciente y no representa un riesgo evidente.
                  td(style="background-color:#CDF1DC !important") Condición clínica relacionada con problemas agudos crónicos o servicio de atención aguda determinado al estado general del paciente.
                tr
                  td(style="background-color:#FFAFAF !important") Requiere una intervención médica inmediata.
                  td(style="background-color:#B1D8FF !important") Debe recibir una atención médica rápida.
                  td(style="background-color:#90CCA4 !important") Requiere consulta médica no inmediata.
                  td(style="background-color:#A4DCBC !important") No representa un riesgo evidente para la vida.
                  td(style="background-color:#CDF1DC !important") No representa un riesgo evidente para la vida.
                tr
                  td(style="background-color:#FFAFAF !important") #[b ATENCIÓN:] Inmediata.
                  td(style="background-color:#B1D8FF !important") #[b ATENCIÓN:] Dentro de los siguientes 30 minutos.
                  td(style="background-color:#90CCA4 !important") #[b ATENCIÓN:] Hasta 2 Horas.
                  td(style="background-color:#A4DCBC !important") #[b ATENCIÓN:] De 2 Hasta 4 Horas.
                  td(style="background-color:#CDF1DC !important") #[b ATENCIÓN:] Cita por consulta externa.
          p(data-aos="fade-right") El facturador tendrá que verificar y tener en cuenta algunos de los siguientes procedimientos, mediante diferentes medios telemáticos, internet, y bases de datos.
    .row.mb-4(data-aos="fade-down")
      .col-auto 
        .px-4.bg-c12
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema3/img3.svg', style="width:50px" alt='').m-auto
            .col
              h3 Verificación de derechos de los usuarios
    p(data-aos="fade-right") La verificación de derechos de los usuarios es el procedimiento mediante el cual se identifica la entidad responsable del pago de los servicios de salud. Para ello, se debe presentar el documento de identificación del usuario, que puede ser el Registro Civil, la Tarjeta de Identidad, la Cédula de Ciudadanía, entre otros.
    .row.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-3
          .col-12
            .p-4.bg-c6
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema5/img2.png', style="width:100px" alt='').m-auto
                .col
                  p.mb-0 Esta información debe ser ingresada en la base de datos proporcionada por los responsables del pago, como el comprobador de derechos ADRES o la Secretaría de Salud. El usuario puede realizar este procedimiento a través de su documento de identidad, sin que se le exijan copias, fotocopias o autenticaciones de ningún documento.
        p.mb-0 El procedimiento de verificación de derechos se llevará a cabo después de la selección y clasificación del paciente mediante el "Triage", y en ningún caso podrá ser motivo para retrasar la atención inicial de urgencias.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img3.png', style="width:300px" alt='').m-auto
    .row.align-items-center.mb-2
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img4.png', style="width:300px" alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Informe de urgencias")
            .col-12
              p.mb-0 Todo prestador de servicios de salud debe informar obligatoriamente a la entidad responsable del pago, el ingreso de pacientes al servicio de urgencias dentro de las 24 horas siguientes al inicio de la atención. El informe se realiza mediante el diligenciamiento y envío del anexo No 2 de la resolución 3047 de 2008.
          .row(titulo="Autorización de servicios posteriores")
            .col-12
              p Las entidades responsables del pago deben responder a las solicitudes de autorización de servicios (anexo 4 de la resolución 3047 de 2008) en los siguientes términos:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Para atención subsiguiente a la atención inicial de urgencias: dentro de las dos (2) horas siguientes al recibo de la solicitud.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Para atención de servicios adicionales: dentro de las seis (6) horas siguientes al recibo de la solicitud.
          .row(titulo="Proceso de referencia y contrarreferencia")
            .col-12
              p.mb-0 El diseño, organización y documentación del proceso de referencia y contrarreferencia, y la operación del sistema correspondiente, son obligaciones de las entidades responsables del pago de servicios de salud. Estas entidades deben disponer de una red de prestadores de servicios de salud que garanticen la disponibilidad y suficiencia de los servicios en todos los niveles de complejidad a su cargo, así como la disponibilidad de la red de transporte y comunicaciones para garantizar la calidad, continuidad e integralidad en la atención.
    .row
      .col-12
        .p-5.bg-c18(data-aos="fade-right")
          .row.mb-5
            .col-md-auto.d-none.d-md-block
              figure.mt-2
                img(src='@/assets/curso/tema5/img2.svg', style="width:80px" alt='').m-auto
            .col
              p.mb-0 Cuando el transporte se realice en una ambulancia debidamente habilitada, que no esté vinculada a la IPS remisora, la entidad que tiene habilitado el servicio de transporte será responsable de la atención durante el mismo. Esta atención deberá contar con la tecnología disponible según el servicio de ambulancia habilitado, y se extenderá hasta la entrega del paciente en la entidad receptora definida por la entidad responsable del pago.
          .row.justify-content-center
            .col-lg-10
              .p-3.bg-c9
                .row.align-items-center
                  .col-md-auto.mb-3.mb-md-0
                    figure
                      img(src='@/assets/curso/tema5/img6.png', style="width:80px" alt='').m-auto
                  .col
                    p.mb-0 #[b Parágrafo.] Las entidades responsables del pago de servicios de salud podrán apoyarse para la operación del proceso de referencia y contrarreferencia a su cargo, en los centros reguladores de urgencias y emergencias, para lo cual deberán suscribir contratos o convenios según sea el caso.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
