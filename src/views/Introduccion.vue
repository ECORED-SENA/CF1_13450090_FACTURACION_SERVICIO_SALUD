<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5
          .row.align-items-center.mb-4
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              .row.mb-3
                .col-auto.d-none.d-md-block
                  figure
                    img(src='@/assets/curso/intro/img2.svg', style="width:70px" alt='').m-auto
                .col
                  p.mb-0 Desde la creación de la Ley 100 de 1993 y sus decretos reglamentarios, se ha dado especial importancia a la operatividad y puesta en marcha del Sistema General de Seguridad Social en Salud en términos de cobertura y garantía en la prestación universal del servicio a todos los colombianos. En esta ocasión, destacamos el proceso de facturación de dichos servicios de salud que son prestados por las Instituciones Prestadoras de Servicios de Salud (IPS) y cuyos recursos son administrados por las Entidades Promotoras de Salud (EPS).
              .row
                .col-12
                  .p-4.bg-c2
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/intro/img3.svg', style="width:170px" alt='').m-auto
                      .col
                        p.mb-0 El propósito de este componente es conocer la normatividad vigente relacionada con la facturación en la prestación del servicio de salud, reconocer los tipos de usuarios del sistema, los planes de atención, los manuales tarifarios, los documentos asociados y sus soportes.
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img1.png', style="width:270px" alt='').m-auto
          .row.mb-5
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/intro/img2.png', style="width:370px" alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              .row
                .col-12
                  .p-4.bg-c3
                    .row
                      .col-auto.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/intro/img4.svg', style="width:70px" alt='').m-auto
                      .col
                        p.mb-0 Actualmente, las entidades prestadoras de servicios de salud en Colombia deben garantizar la calidad de sus servicios a los usuarios, como lo establece la Ley 100 de 1993. Para ello, es crucial mejorar continuamente sus procesos de contratación basándose en las normativas actuales que rigen el decreto 4747 de 2007, el cual define los criterios para los acuerdos de voluntades.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
