<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 La pirámide de la alimentación
    .row.justify-content-center.mb-5
      .col-lg-10.bg-c6(data-aos="fade-right")
        .p-4
          .row.align-items-center
            .col-md-auto.pe-md-0.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema6/img1.svg', style="width:140px" alt='').m-auto
            .col
              p.mb-0 La pirámide de la alimentación es una figura geométrica que orienta a las personas sobre la perspectiva de una dieta equilibrada diaria.
    p.mb-5(data-aos="fade-left") La pirámide de alimentos subraya algunos conceptos de suma importancia:
    .row.bg-c24
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema6/img2.png', style="width:380px" alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
                .row.align-items-center(titulo="Variedad")
                  .col-12
                    p Uno de los inconvenientes más usuales en la alimentación es la monotonía, debido a que, por lo general, se come lo mismo; por eso la variedad es un factor importante en el equilibrio nutricional. 
                    p.mb-0 Hay que tener claro que ningún alimento aporta todos los nutrientes en las cantidades necesarias, por eso la dieta diaria debe contener los principales grupos de alimentos (ningún grupo de nutrientes es más importante que otro).
                .row.align-items-center(titulo="Proporcionalidad")
                  .col-12
                    p.mb-0 Se aconseja comer la mayor cantidad de alimentos que se encuentran en la base de la pirámide y en menor proporción los que se hallan en la parte superior. Los nutrientes que se consumen deben ser en las cantidades adecuadas y suficientes, evitando excesos.
                .row.align-items-center(titulo="Moderación")
                  .col-12
                    p.mb-0 Se recomiendan alimentos en porciones moderadas en número y tamaño, según las necesidades de energía de cada persona en particular. Seguir las pautas dadas ayuda a prevenir algunas enfermedades como la obesidad.
          .row.mb-4(data-aos="fade-down")
            .col-auto
              .row.align-items-center
                .col-auto(style="z-index: 2")
                  figure
                    img(src='@/assets/curso/tema2/img2.svg', style="width:70px" alt='').m-auto
                .col.bg-c7
                  .px-3.py-2
                    h3.text-white.mb-0 Niveles de la pirámide de alimentación
          .row.align-items-center.mb-4
            .col-lg-6.order-2.order-lg-1(data-aos="fade-right")
              ul.lista-ul
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | 
                  p.mb-0 #[b.txt-c1 Primer nivel:] está ubicado en la base de la pirámide y los alimentos que se encuentran allí son de tipo energético, es decir, aportan calorías al organismo, como por ejemplo cereales, arroz, pan, pasta y papas. Se recomienda que el consumo de este grupo vaya de cuatro a seis raciones al día.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | 
                  p.mb-0 #[b.txt-c1 Segundo nivel:] en este nivel están las frutas y las verduras. Este grupo de alimentos aporta a la dieta fibra, vitaminas y antioxidantes, aspectos requeridos por todas las edades. Se aconsejan de dos a tres raciones diarias de estos alimentos.
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema6/img3.png', style="width:500px" alt='').m-auto
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema6/img2.svg', style="width:500px" alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              .row.mb-3
                .col-12.bg-c1
                  .p-4
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-walking(style="color:#787CF0")
                        | 
                        p.mb-0 #[b.txt-c1 Tercer nivel:] comprende lácteos, carnes, mariscos, huevos y frutos secos. Dentro de los derivados lácteos se hallan la leche, el queso y el yogur.
                    p.ms-3 A las personas con sobrepeso se les recomienda consumir estos alimentos semidescremados, lo aconsejable son dos raciones al día. En el grupo de las carnes, se sugiere la alimentación con pescado, porque es el más aportante en hierro y grasas esenciales. De las carnes rojas las más favorables son las magras, ricas en proteínas, hierro y zinc; lo saludable son dos raciones al día. 
                    p.ms-3.mb-0 Los frutos secos pertenecen a este nivel porque tienen un alto contenido proteico. Aquí también se hallan las legumbres, las cuales aportan proteínas de muy buena calidad nutricional; la ración recomendada para los frutos secos es de tres a siete porciones semanales, y para las legumbres, de tres raciones semanales.
              ul.lista-ul
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | 
                  p.mb-0 #[b.txt-c1 Cúspide de la pirámide:] allí se encuentran productos que tienen una gran cantidad de grasas como las aceitunas y los aceites vegetales (girasol, oliva, maíz y soya). El consumo de estos productos debe ser moderado, porque aportan muchas calorías y además se almacenan con facilidad en el cuerpo.

</template>

<script>
export default {
  name: 'Tema6',
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
