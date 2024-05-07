<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .row.justify-content-center.mb-3
          .col-lg-auto.px-0
            figure
              img(src='@/assets/curso/intro/img1.png', style="width:378px" alt='').m-auto
          .col-md-7.col-lg.bg-c1
            .p-4
              figure.mb-3
                img(src='@/assets/curso/intro/img1.svg', style="width:60px" alt='')
              p.mb-0 El presente componente formativo, explica los diferentes compuestos presentes en los alimentos, como son los hidratos de carbono, las proteínas, los lípidos, las vitaminas y los minerales, su función en el desarrollo del ser humano, así como los diferentes grupos de alimentos y nutrientes presentes en cada uno de ellos.
        p Luego, se estudiarán los conceptos y características de una alimentación saludable, haciendo énfasis sobre la reconocida pirámide de alimentos y se explica el valor energético de los nutrientes, así como su gasto energético total en reposo.
        p.txt-c1.mb-0 #[b Bienvenido a este proceso de aprendizaje.]
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img2.png', style="width:320px" alt='').m-auto
    
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
