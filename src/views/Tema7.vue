<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Historias clínicas y custodia de la información
    .row.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p El referente de las historias clínicas de los usuarios se reglamenta con la Resolución 1995 de 1999 (julio 8) por la cual se establecen normas para el manejo de la historia clínica y la Resolución 839 de 2017 que tiene por objeto establecer el manejo, custodia, tiempo de retención, conservación y disposición final de los expedientes de las historias clínicas, así como reglamentar el procedimiento que deben adelantar las entidades del SGSSS-, para el manejo de estas en caso de liquidación.
        .row
          .col-12
            .py-2.pe-2.bg-c22
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema7/img1.svg', style="width:70px" alt='').m-auto
                .col
                  p.mb-0 Los facturadores deben basarse en los datos que los profesionales de la salud hayan registrado acerca del estado de salud del paciente.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema7/img2.svg', style="width:370px" alt='').m-auto
    .row.align-items-center
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema7/img1.png', style="width:490px" alt='').m-auto
      .col-lg-7(data-aos="fade-left")
        .row
          .col-md-auto.d-none.d-md-block
            figure.mt-2
              img(src='@/assets/curso/tema7/img3.svg', style="width:70px" alt='').m-auto
          .col
            p.mb-0 La historia clínica, que es un documento privado, obligatorio y sometido a reserva, en el cual se registran cronológicamente las condiciones de salud del paciente, los actos médicos y los demás procedimientos ejecutados por el equipo de salud que interviene en su atención. Dicho documento únicamente puede ser conocido por terceros previa autorización del paciente o en los casos previstos por la ley. Se entiende por estado de salud los datos e informes acerca de la condición somática, psíquica, social, cultural, económica y medioambiental que pueden incidir en la salud de la persona.

</template>

<script>
export default {
  name: 'Tema7',
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
