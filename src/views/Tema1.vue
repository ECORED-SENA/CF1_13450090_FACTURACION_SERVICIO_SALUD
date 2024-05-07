<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Alimentación, nutrición y clasificación de los alimentos
    p.mb-5(data-aos="fade-right") Para comenzar con el estudio de la alimentación y nutrición, es importante que tengamos claros los siguientes conceptos:
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width:300px" alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Alimentos")
            .col-12
              p.mb-0 Son productos naturales o que han sufrido algún tipo de trasformación mediante un proceso de elaboración, haciéndolos aptos para el consumo humano. Los alimentos son indispensables para la vida, porque aportan los nutrientes y la energía necesaria para que una persona conserve una buena salud, la cual le permita realizar todas sus actividades cotidianas.
          .row(titulo="Nutrientes")
            .col-12
              p.mb-0 Son sustancias presentes en los alimentos como por ejemplo proteínas, vitaminas, carbohidratos, lípidos y minerales, las cuales cumplen diversas funciones en el organismo de un ser humano. Se debe tener en cuenta que deben suministrarse en las cantidades necesarias.
          .row(titulo="Alimentación")
            .col-12
              p.mb-0 Es el proceso mediante el cual los seres vivos obtienen del entorno una serie de alimentos, con el fin de satisfacer las necesidades de nutrientes requeridas para su buen funcionamiento. En el caso del hombre, la selección de los alimentos es voluntaria y se da mediante diferentes factores socioeconómicos (disponibilidad de productos), culturales y psicológicos (preferencias).
          .row(titulo="Nutrición")
            .col-12
              p.mb-0 Es la ciencia que estudia la relación entre los nutrientes y el organismo humano a nivel individual y colectivo a lo largo de la vida y por medio de diferentes situaciones fisiológicas y patológicas. Una buena nutrición en la población se genera a través del esfuerzo de múltiples disciplinas.
    p.mb-5(data-aos="fade-right") Para que los alimentos conserven las sustancias nutritivas y obtener una buena nutrición, se requiere:
    .row.align-items-center.mb-5
      .col-lg-8.bg-c2(data-aos="fade-right")
        .p-4
          .row.mb-3
            .col-12.bg-c3
              .p-3
                .row.align-items-center
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img1.svg', style="width:50px" alt='').m-auto
                  .col
                    p.mb-0 Implementar en el sector agropecuario nuevas tecnologías, las cuales garanticen alimentos en cantidades suficientes, sanos y con alto valor nutritivo.
          .row.mb-3
            .col-12.bg-c3
              .p-3
                .row.align-items-center
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
                  .col
                    p.mb-0 Que en la trasformación de materias primas en productos se empleen procedimientos que garanticen la conservación del valor nutritivo de los alimentos.
          .row.mb-3
            .col-12.bg-c3
              .p-3
                .row.align-items-center
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img3.svg', style="width:50px" alt='').m-auto
                  .col
                    p.mb-0 Asegurar mediante leyes gubernamentales, que los alimentos si cumplen con las características nutritivas.
          .row.mb-3
            .col-12.bg-c3
              .p-3
                .row.align-items-center
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img4.svg', style="width:50px" alt='').m-auto
                  .col
                    p.mb-0 Ratificar en el almacenamiento y transporte de los productos elaborados, que el alimento no va a perder sus propiedades nutritivas.
          .row.mb-3
            .col-12.bg-c3
              .p-3
                .row.align-items-center
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
                  .col
                    p.mb-0 Desarrollar programas educativos en las escuelas sobre nutrición y sobre su importancia en el desarrollo humano.
          .row
            .col-12.bg-c3
              .p-3
                .row.align-items-center
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
                  .col
                    p.mb-0 Que los alimentos se ingieran de manera eficiente en todos los sectores de la población, haciendo énfasis en hogares infantiles y colegios.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img2.png', style="width:360px" alt='').m-auto
    p.mb-5(data-aos="fade-right") Los alimentos pueden clasificarse según:
    .row(data-aos="fade-left")
      .col-md-6.col-lg.mb-4.mb-lg-0
        .p-4.bg-c4.h-100
          figure.mb-3
            img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
          .row.justify-content-center.mb-3
            .col-auto.bg-c5
              .p-3
                p.text-center.text-white.mb-0 #[b Su procedencia]
          ul.lista-ul
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              | Animal.
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              | Vegetal.
      .col-md-6.col-lg.mb-4.mb-lg-0
        .p-4.bg-c4
          figure.mb-3
            img(src='@/assets/curso/tema1/img8.svg', style="width:100px" alt='').m-auto
          .row.justify-content-center.mb-3
            .col-auto.bg-c5
              .p-3
                p.text-center.text-white.mb-0 #[b Función de sus nutrientes]
          ul.lista-ul
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              | Proteínas.
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              | Carbohidratos.
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              | Grasas.
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              | Vitaminas.
      .col-md-6.col-lg.mb-4.mb-lg-0
        .p-4.bg-c4.h-100
          figure.mb-3
            img(src='@/assets/curso/tema1/img9.svg', style="width:100px" alt='').m-auto
          .row.justify-content-center.mb-3
            .col-auto.bg-c5
              .p-3
                p.text-center.text-white.mb-0 #[b Papel en el organismo]
          ul.lista-ul
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              | Energético.
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              | Constructor.
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              | Regulador.
      .col-md-6.col-lg.mb-4.mb-lg-0
        .p-4.bg-c4.h-100
          figure.mb-3
            img(src='@/assets/curso/tema1/img10.svg', style="width:100px" alt='').m-auto
          .row.justify-content-center.mb-3
            .col-auto.bg-c5
              .p-3
                p.text-center.text-white.mb-0 #[b Su composición nutricional]
          ul.lista-ul
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              | Grupos básicos.
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              | Grupo de alimentos complementarios.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
