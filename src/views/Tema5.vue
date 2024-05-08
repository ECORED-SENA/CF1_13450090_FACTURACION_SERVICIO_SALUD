<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Dieta moderada
    p.mb-5(data-aos="fade-right") Consiste en hacer un control de nutrientes de la dieta. La ingesta en exceso de alimentos puede incurrir en el desarrollo de enfermedades crónicas por lo que es importante tener en cuenta:
    .row.bg-c23
      .col-12
        .px-5
          .row.justify-content-center.mb-5(data-aos="fade-left")
            .col-xl-3.col-lg-5.col-md-6.col-10.mb-4.mb-xl-0
              .crd_hover_txt1(data-aos="flip-left")
                .crd_hover_txt1--img
                  figure
                    img(src="@/assets/curso/tema5/img1.png", alt="alt")
                .crd_hover_txt1--body
                  p.text-center.mb-4 #[b Consumo de azúcares refinados]
                  p.mb-0 Estos azúcares deben aportar menos del 10 al 15 % de la energía total consumida.
            .col-xl-3.col-lg-5.col-md-6.col-10.mb-4.mb-xl-0
              .crd_hover_txt1(data-aos="flip-left")
                .crd_hover_txt1--img
                  figure
                    img(src="@/assets/curso/tema5/img2.png", alt="alt")
                .crd_hover_txt1--body
                  p.text-center.mb-4 #[b Grasas saturadas]
                  p.mb-0 Los ácidos grasos saturados deben aportar menos del 7 % de la energía total consumida.
            .col-xl-3.col-lg-5.col-md-6.col-10.mb-4.mb-xl-0
              .crd_hover_txt1(data-aos="flip-left")
                .crd_hover_txt1--img
                  figure
                    img(src="@/assets/curso/tema5/img3.png", alt="alt")
                .crd_hover_txt1--body
                  p.text-center.mb-4 #[b Colesterol]
                  p.mb-0 Consumir menos de 300 gramos al día.
            .col-xl-3.col-lg-5.col-md-6.col-10.mb-4.mb-xl-0
              .crd_hover_txt1(data-aos="flip-left")
                .crd_hover_txt1--img
                  figure
                    img(src="@/assets/curso/tema5/img4.png", alt="alt")
                .crd_hover_txt1--body
                  p.text-center.mb-4 #[b Consumo de sal]
                  p.mb-0 Consumir menos de 6 gramos al día.
          p.mb-5(data-aos="fade-left") Además de cumplir con rigurosidad las anteriores recomendaciones, es importante realizar una adecuada distribución de las comidas, porque de esta manera se mantiene un peso adecuado. La siguiente imagen presenta esa distribución.
          .row.justify-content-center.mb-5
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c19
                .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 3.] Distribución de los alimentos durante el día
                figure
                  img(src='@/assets/curso/tema5/img1.svg', style="width:570px" alt='La imagen presenta un perfil calórico, compuesto por proteínas, carbohidratos y lípidos.').m-auto
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema5/img5.png', style="width:370px" alt='').m-auto
    p.mb-5(data-aos="fade-right") Ampliemos la información sobre cada uno de ellos:
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width:70px" alt='').m-auto
          .col.bg-c7
            .px-3.py-2
              h3.text-white.mb-0 Desayuno
    .row.align-items-center.mb-5
      .col-lg.order-2.order-lg-1(data-aos="fade-right")
        p Es la comida más importante del día, porque aporta la energía y los nutrientes que el cuerpo necesita, incluyendo el hecho que se ha tenido un ayuno prolongado durante la noche. 
        p Los alimentos ingeridos en la mañana deben aportar alrededor de una cuarta parte de la energía que el organismo necesita en el día.
        p.mb-0  El desayuno debe ser variado e incluir por lo menos cuatro alimentos de los diferentes grupos alimenticios:
      .col-md-auto.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img2.svg', style="width:230px" alt='').m-auto
    .row.justify-content-center.mb-5
      .col-11.col-lg-9.col-xl-6.mb-4(data-aos="fade-right")
        .row.justify-content-center
          .col-md-auto.pe-md-0
            figure
              img(src='@/assets/curso/tema5/img7.png', style="width:320px" alt='').m-auto
          .col-11.col-md.bg-c11
            .p-3
              p Leches y derivados.
              ul.lista-ul
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Un vaso de leche con o sin chocolate, café o té.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Un yogur con o sin grasa.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Una porción de queso cuajada o curado.
      .col-11.col-lg-9.col-xl-6.mb-4(data-aos="fade-down")
        .row.justify-content-center
          .col-md-auto.pe-md-0
            figure
              img(src='@/assets/curso/tema5/img8.png', style="width:320px" alt='').m-auto
          .col-11.col-md.bg-c11
            .p-3
              p Cereales y derivados.
              ul.lista-ul
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Pan blanco o integral.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Galletas o tostadas.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Cereales.
      .col-11.col-lg-9.col-xl-6.mb-4(data-aos="fade-up")
        .row.justify-content-center
          .col-md-auto.pe-md-0
            figure
              img(src='@/assets/curso/tema5/img9.png', style="width:320px" alt='').m-auto
          .col-11.col-md.bg-c1
            .p-3
              p Frutas y hortalizas.
              ul.lista-ul
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Frutas.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Jugo natural de cualquier fruta.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Verduras frescas.
      .col-11.col-lg-9.col-xl-6.mb-4(data-aos="fade-left")
        .row.justify-content-center
          .col-md-auto.pe-md-0
            figure
              img(src='@/assets/curso/tema5/img10.png', style="width:320px" alt='').m-auto
          .col-11.col-md.bg-c1
            .p-3
              p Complementos.
              ul.lista-ul
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Aceite de oliva.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Mermelada.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Huevos.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Frutos secos.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Jamón.
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.align-items-center(titulo="Media mañana")
            .col-12
              p Es una comida que se debe consumir horas después del desayuno para así adquirir fuerzas hasta el almuerzo. Se puede comer:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Una fruta.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Yogur o un vaso de leche.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Jugo de frutas.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Galletas integrales.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Un sánduche con una rebanada de tomate, jamón de pavo y pan integral.
          .row.align-items-center(titulo="Almuerzo")
            .col-12
              p Es la segunda comida de más importancia. Debe ser muy completa de acuerdo con los grupos de alimentos, es decir, ofrecer proteínas, verduras, cereales y algún derivado lácteo; por lo general consta:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | De un primer plato, el cual puede ser pasta, arroz o verduras.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | De un segundo plato, el cual puede comprender pescado, carne o pollo.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | De un tercer plato, el cual incluye el postre, es decir una fruta o un yogur.
              p.mb-0 La bebida acompañante puede ser un vaso de agua o un jugo de frutas, hecho en agua bajo en azúcar.
          .row.align-items-center(titulo="Media tarde")
            .col-12
              p Es un alimento que se consume en horas de la tarde, el cual puede ser:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Galletas o tostadas.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Jugo.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Fruta.
          .row.align-items-center(titulo="Comida")
            .col-12
              p Es la última del día, es importante no acostarse sin comer, debe ser ligera y no muy tarde en la noche. Se recomienda consumir:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Pescado.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Pollo.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Tortilla.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Arroz.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Pan integral.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Verduras.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img3.svg', style="width:370px" alt='').m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width:70px" alt='').m-auto
          .col.bg-c7
            .px-3.py-2
              h3.text-white.mb-0 Importancia del agua en la dieta
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p El agua es el principal componente de los seres vivos. En los seres humanos se encuentra en un 60 % en el interior de las células, el resto se halla al exterior de estas, circulando a través de la sangre y los tejidos.
        p.mb-0 Por medio del agua, las células se comunican y transportan el oxígeno y los nutrientes a los tejidos; además este líquido ayuda al cuerpo a eliminar desechos del metabolismo celular y a regular la temperatura corporal cuando se realiza ejercicio o cuando la temperatura ambiente es muy elevada.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img4.svg', style="width:370px" alt='').m-auto
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c8.h-100
          .row.align-items-center.h-100
            .col
              p.mb-0 El agua suministrada al organismo es la que se consume en forma de alimentos como sopas, caldos, jugos y bebidas refrescantes. Algunos alimentos como las frutas y verduras contienen un 80 % de agua, por eso estos alimentos deben considerarse siempre a la hora de mantener un buen balance hídrico.
      .col-md-8.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema5/img5.svg', style="width:270px" alt='').m-auto
      .col-md-8.col-lg-4(data-aos="fade-left")
        figure.mb-3
          img(src='@/assets/curso/tema5/img6.svg', style="width:70px" alt='')
        p Las necesidades de agua de cada persona dependen de aspectos como edad, sexo, dieta, estado físico, enfermedades, y hasta del clima. 
        p.mb-0 Generalmente se recomienda un suministro de agua de al menos ocho raciones diarias (1 ración = 1 vaso = 250 mililitros).
    p.mb-5(data-aos="fade-right") La ingesta de agua es diferente en poblaciones de riesgo:
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img11.png', style="width:370px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.align-items-center(titulo="Niños")
            .col-12
              p.mb-0 Demandan más agua que los adultos, porque están en pleno crecimiento y por ende, su organismo requiere más del preciado líquido.
          .row.align-items-center(titulo="Mujeres embarazadas")
            .col-12
              p.mb-0 Es importante prestar mucha atención a la hidratación de la madre según la evolución y desarrollo del feto.
          .row.align-items-center(titulo="Mujeres en período lactante")
            .col-12
              p.mb-0 Necesitan ingerir un volumen mayor de agua para así responder a la cantidad de leche requerida por el lactante. Los bebés son muy sensibles a la falta de agua, por lo que se les recomienda a las madres lactantes, consumir 3,1 litros al día.
          .row.align-items-center(titulo="Los ancianos")
            .col-12
              p.mb-0 Son muy susceptibles a deshidratarse debido a las enfermedades que pueden llegar a padecer por su edad; además, tienen pérdida de la sensación de sed, por lo que se les recomienda que consuman mínimo entre 6 a 8 raciones diarias, es decir 1,5 a 2 litros por día.
    .row.justify-content-center
      .col-lg-10
        .p-4.bg-c22(data-aos="fade-left")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema5/img7.svg', style="width:90px" alt='').m-auto
            .col
              p.mb-0 Cuando hay deshidratación, por lo general el cuerpo ya ha perdido 1 % del peso corporal; por tal razón se debe beber agua constantemente, para mantener el cuerpo hidratado.

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
