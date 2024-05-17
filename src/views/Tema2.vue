<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 La factura
    .row.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 Las facturas por prestación de servicios son en realidad notas preformadas que se expresan en términos monetarios. Estas notas se utilizan para el cobro del servicio a las entidades responsables del pago, como la EPS, los entes territoriales, el FOSYGA y los particulares, entre otros.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.svg', style="width:270px" alt='').m-auto
    .row.bg-c10
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-right")
              .row
                .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img1.png', style="width:280px" alt='').m-auto
                .col.ps-0
                  .ps-4.ps-lg-0.py-4.pe-4.bg-c7.h-100
                    .row
                      .col-12
                        .p-4.bg-c8
                          p Para el SGSSS, la normativa vigente es la Resolución 3047 de 2008, incluyendo todas sus modificaciones. Esta resolución es esencial para cada facturador, actuando como una guía primordial.
          p.mb-5(data-aos="fade-down") La factura debe incluir, junto con sus soportes, los siguientes datos:
          .row.justify-content-center.mb-5
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color:#F1C12C")
                  | Logo de la empresa e identificación tributaria.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#F1C12C")
                  | Resolución de aprobación para expedir facturas.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#F1C12C")
                  | Fecha.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#F1C12C")
                  | Valor en letras y números.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#F1C12C")
                  | Nombre del prestador del servicio (Dirección y teléfono de contacto).
                li.d-flex
                  i.fas.fa-check-circle(style="color:#F1C12C")
                  | Descripción del servicio.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#F1C12C")
                  | Identificación del usuario a quien se le prestó el servicio (Dirección y teléfono de contacto).
                li.d-flex
                  i.fas.fa-check-circle(style="color:#F1C12C")
                  | Firma de quien recibió el servicio.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#F1C12C")
                  | Anexos que comprueben atención.
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img2.png', style="width:280px" alt='').m-auto
          .row.justify-content-center.mb-5
            .col-lg-10
              .p-4.bg-c9(data-aos="fade-right")
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema2/img3.png', style="width:80px" alt='').m-auto
                  .col
                    p.mb-0 EI área de facturación debe prestar especial atención al alistamiento de la factura y sus soportes, ya que cualquier error puede comprometer los recursos económicos de la institución. Si el facturador notifica oportu namente cualquier error o inconsistencia, garantizará el flujo de efectivo necesario para la operatividad del sistema.

</template>

<script>
export default {
  name: 'Tema2',
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
