<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Nutrientes presentes en los principales grupos de alimentos
    .row.justify-content-center.mb-5
      .col-lg-10.bg-c6(data-aos="fade-right")
        .p-4
          .row.align-items-center
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema2/img1.svg', style="width:70px" alt='').m-auto
            .col
              p.mb-0 A continuación, se mencionan los principales nutrientes en los alimentos.
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width:70px" alt='').m-auto
          .col.bg-c7
            .px-3.py-2
              h3.text-white.mb-0 La leche y sus derivados
    p(data-aos="fade-right") Son alimentos que contienen proteínas, grasas y carbohidratos.
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width:260px" alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.align-items-center(titulo="Leche")
            .col-lg-8.mb-4.mb-lg-0
              ul.lista-ul
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Las proteínas de la leche como la caseína y la lactoalbúmina, tienen alto valor biológico.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | El carbohidrato de la leche es la lactosa, un disacárido compuesto por glucosa y galactosa.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | La leche contiene vitaminas liposolubles como la A, D, B12, calcio y fósforo.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | La grasa presente en la leche se conforma de ácidos grasos saturados.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | En el mercado hay tres tipos de leche, entera con 3,5 % de grasa, semidescremada con 1,5 % de grasa y desnatada con 0,5 % de grasa.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img2.png', style="width:260px" alt='').m-auto
          .row.align-items-center(titulo="Queso")
            .col-lg-8.mb-4.mb-lg-0
              p Este alimento tiene proteínas de alto valor biológico, calcio, y vitaminas A, B2, B12, D, E, K; además abarca un alto nivel graso, haciéndolo un producto rico en calorías, por lo que se aconseja consumir quesos desnatados. 
              p.mb-0 Hay que tener en cuenta que los quesos curados son ricos en grasas, pero estos pierden los carbohidratos en el proceso de elaboración.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img4.png', style="width:260px" alt='').m-auto
          .row.align-items-center(titulo="Yogur")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Este producto es un derivado de la leche, obtenido del proceso de adicionar un cultivo de microorganismos, los cuales se encargan de fermentar y de generar ácido láctico. El valor nutricional del yogur es similar al de la leche, pero tiene más disponibilidad de calcio por el pH ácido generado a partir de la fermentación.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img3.png', style="width:260px" alt='').m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width:70px" alt='').m-auto
          .col.bg-c7
            .px-3.py-2
              h3.text-white.mb-0 Proteínas
    .row.bg-c15
      .col-12
        .px-5
          p.mb-5(data-aos="fade-right") Son alimentos que contienen proteínas, grasas y carbohidratos.
          TabsC.color-primario.mb-5(data-aos="fade-left")
            .py-3.py-md-4(titulo="Carne")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b.txt-c1 Carne]
                  p La carne es un alimento que tiene entre 16 a 22 % de proteínas, también ostenta minerales como hierro, fósforo, magnesio, potasio, y vitaminas como B1, B2, B6, B12, ácido fólico, y niacina; además contiene grasa, la cual varía entre 4 a 25 %.
                  p Según el contenido de grasas las carnes se clasifican en:
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-walking(style="color:#787CF0")
                      | 
                      p.mb-0 #[b.txt-c1 Magras:] si aportan más o menos 6 gramos por 100 gramos del alimento.
                    li.d-flex
                      i.fas.fa-walking(style="color:#787CF0")
                      | 
                      p.mb-0 #[b.txt-c1 Semigrasas:] si brindan entre 6 a 12 gramos por 100 gramos del alimento.
                    li.d-flex
                      i.fas.fa-walking(style="color:#787CF0")
                      | 
                      p.mb-0 #[b.txt-c1 Grasas:] si aportan más o menos 12 gramos de grasa por 100 gramos del alimento.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img5.png', style="width:360px" alt='').m-auto
            .py-3.py-md-4(titulo="Pescados")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b.txt-c1 Pescados]
                  p Abarcan un alto valor nutritivo, su aporte de proteína es de 18 a 20 % con elevada utilidad biológica. Dentro de sus componentes está el fósforo, el calcio, la tiamina y la riboflavina, asimismo, el ácido graso presente en algunos pescados es poliinsaturado como el Omega 3.
                  p La clasificación del pescado va de acuerdo a su contenido lipídico, es decir:
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-walking(style="color:#787CF0")
                      | 
                      p.mb-0 #[b.txt-c1 Azules o grasos:] en este grupo se hallan el emperador, el atún, el salmón y la anguila, todos con un contenido lipídico del 10 %.
                    li.d-flex
                      i.fas.fa-walking(style="color:#787CF0")
                      | 
                      p.mb-0 #[b.txt-c1 Magros o blancos:] en esta asociación se encuentran la merluza, el lenguado, el bacalao, el gallo y el rape, todos con un contenido lipídico de más o menos el 5 %.
                    li.d-flex
                      i.fas.fa-walking(style="color:#787CF0")
                      | 
                      p.mb-0 #[b.txt-c1 Variedad intermedia:] en esta sección se hallan la sardina, el boquerón, la caballa y el arenque, todos con contenido lipídico del 5 %.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img6.png', style="width:360px" alt='').m-auto
            .py-3.py-md-4(titulo="Mariscos")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b.txt-c1 Mariscos]
                  p Son los crustáceos como la langosta, el langostino, la gamba, el centollo y la cigala. Estas especies tienen poca grasa poliinsaturada y poseen más colesterol. 
                  p.mb-0 Dentro de los mariscos también se encuentran los moluscos como las ostras, la navaja, el mejillón, el berberecho, la almeja y el caracol, los cuales ostentan bajos porcentajes de colesterol.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img7.png', style="width:360px" alt='').m-auto
            .py-3.py-md-4(titulo="Huevos")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b.txt-c1 Huevos]
                  p Alimento rico en nutrientes esenciales, está constituido por:
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-walking(style="color:#787CF0")
                      | 
                      p.mb-0 #[b.txt-c1 Clara:] compuesta por albúmina, encierra casi la mayoría de las proteínas del huevo.
                    li.d-flex
                      i.fas.fa-walking(style="color:#787CF0")
                      | 
                      p.mb-0 #[b.txt-c1 Yema:] contiene proteínas, vitaminas y minerales como el fósforo y el azufre. Es rica en grasa saturada, monoinsaturada, poliinsaturada y en colesterol.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img8.png', style="width:360px" alt='').m-auto
          p.mb-5 Continuemos con el estudio de otros grupos de alimentos.
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width:70px" alt='').m-auto
          .col.bg-c7
            .px-3.py-2
              h3.text-white.mb-0 Cereales y derivados
    p.mb-5(data-aos="fade-right") Están compuestos por carbohidratos (6-12 %), proteínas, grasas (1-5 %). Son ricos en minerales como hierro, potasio, fósforo y vitaminas del complejo B. Si estos alimentos se consumen en forma integral, su aporte en fibra será mayor.
    .row.mb-5
      .col-lg-6.bg-c16(data-aos="fade-right")
        .p-5
          .row.align-items-end.mb-4
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema3/img2.svg', style="width:70px" alt='').m-auto
            .col
              p.mb-0 #[b.txt-c3 Arroz]
          p Cereal rico en carbohidratos, es el más consumido del planeta. 
          p.mb-0 El arroz integral contiene vitamina E, B y fibra, mientras que el arroz molido y sin cascarilla, pierde entre un 50 % de los minerales y un 80 % de las vitaminas liposolubles.
      .col-lg-6.bg-c17(data-aos="fade-left")
        .p-5
          .row.align-items-end.mb-4
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema3/img3.svg', style="width:70px" alt='').m-auto
            .col
              p.mb-0 #[b.txt-c3 Maíz]
          p Este cereal es muy importante, porque es uno de los más consumidos en el mundo, contiene carbohidratos, vitaminas, minerales y carotenos en altos porcentajes. 
          p.mb-0 El maíz no tiene gluten, haciéndolo un alimento perfecto para los celiacos.
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width:70px" alt='').m-auto
          .col.bg-c7
            .px-3.py-2
              h3.text-white.mb-0 Grasas
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c18.h-100
          figure.mb-3
            img(src='@/assets/curso/tema3/img4.svg', style="width:100px" alt='').m-auto
          .row.justify-content-center.mb-3
            .col-auto.bg-c5
              .p-3
                p.text-center.text-white.mb-0 #[b Margarina]
          p.mb-0 Producto constituido por grasas hidrogenadas de configuración trans. Las margarinas light tienen 40 % de grasa.
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c18.h-100
          figure.mb-3
            img(src='@/assets/curso/tema3/img5.svg', style="width:100px" alt='').m-auto
          .row.justify-content-center.mb-3
            .col-auto.bg-c5
              .p-3
                p.text-center.text-white.mb-0 #[b Aceite de oliva]
          p.mb-0 Extraído como su nombre lo dice, de las olivas. Está compuesto por ácidos grasos monoinsaturados en mayor cantidad y poliinsaturados en menor cuantía; presenta un alto valor energético y está catalogado como un alimento funcional.
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c18.h-100
          figure.mb-3
            img(src='@/assets/curso/tema3/img6.svg', style="width:100px" alt='').m-auto
          .row.justify-content-center.mb-3
            .col-auto.bg-c5
              .p-3
                p.text-center.text-white.mb-0 #[b Aceite de girasol, maíz y soya]
          p.mb-0 Estos aceites provienen de vegetales y contienen un alto contenido de linolénico y vitamina E.

</template>

<script>
export default {
  name: 'Tema3',
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
