<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 El valor energético de los alimentos
    .row.bg-c25.mb-5
      .col-12
        .px-5
          .row.align-items-center.mb-4
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              .row.justify-content-center.mb-3
                .col-9.col-lg-auto.pe-md-0
                  figure
                    img(src='@/assets/curso/tema7/img1.svg', style="width:400px" alt='').m-auto
                .col-9.col-lg.ps-md-0
                  .bg-c1.p-4.h-100
                    .row.align-items-center.h-100
                      p.mb-0 Es la cantidad de energía que se aporta al cuerpo humano, resultante de la combustión de lípidos, proteínas y glúcidos. Esta energía es utilizada por el cuerpo para mantener la temperatura y realizar todas sus funciones, se expresa en calorías o kilocalorías. Es importante tener presente que la caloría es una medida de calor que consiste en trasferir calor físicamente para de esta manera aumentar la temperatura de un gramo de agua en 1 grado, entonces se puede decir que una kilocaloría equivale a 1000 calorías.
              p.mb-0 La dieta de las personas adultas está entre 1000 a 5000 kilocalorías por día. Todos los nutrientes presentes en los alimentos tienen un valor energético diferente, por lo que se toman valores estándares para cada grupo. Por ejemplo, un gramo de un glúcido al quemarse libera cuatro kilocalorías, lo mismo ocurre con las proteínas que desatan cuatro kilocalorías; en cambio las grasas al quemarse generan nueve kilocalorías, por eso es que los alimentos ricos en grasas constituyen un aporte en contenido energético mayor y la reserva de energía que el cuerpo humano almacena es en forma de grasa.
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema7/img2.png', style="width:260px" alt='').m-auto
          .row.align-items-center.mb-5
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema7/img3.png', style="width:460px" alt='').m-auto
            .col-lg-7(data-aos="fade-left")
              .p-4.bg-c26
                figure.mb-3
                  img(src='@/assets/curso/tema7/img2.svg', style="width:70px" alt='')
                p.mb-0 Es importante tener claro que no todos los alimentos que se consumen se queman para producir energía, una gran parte de estos los usa el organismo para construir estructuras y facilitar las reacciones químicas para prolongar la vida. Un ejemplo de los nutrientes que no aportan energía son las fibras, las vitaminas, los minerales y los oligoelementos.
          .row.mb-4(data-aos="fade-down")
            .col-auto
              .row.align-items-center
                .col-auto(style="z-index: 2")
                  figure
                    img(src='@/assets/curso/tema2/img2.svg', style="width:70px" alt='').m-auto
                .col.bg-c7
                  .px-3.py-2
                    h3.text-white.mb-0 Tablas de composición de los alimentos
          p.mb-5(data-aos="fade-left") En las tablas de composición de un alimento, se describe cuántas kilocalorías tiene el alimento, así como proteínas, lípidos y glúcidos. Para conocer el total de calorías de un alimento, es necesario saber la proporción de gramos de cada nutriente, para luego multiplicarlo por el valor calórico, por ejemplo, una porción de helado contiene:
          .row.align-items-center
            .col-lg-6.order-2.order-lg-1(data-aos="fade-right")
              .p-4.bg-c27
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Proteínas: 4, entonces se multiplica 4 g x 4 calorías = 16 calorías.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Grasas: 12, es decir 12 x 9 calorías = 108 calorías.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Carbohidratos: 19, por lo tanto, se multiplica 19 x 4 = 76 calorías.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Calorías totales = 200 calorías.
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema7/img4.png', style="width:580px" alt='').m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width:70px" alt='').m-auto
          .col.bg-c7
            .px-3.py-2
              h3.text-white.mb-0 Necesidades energéticas del ser humano
    p(data-aos="fade-right") El consumo diario de energía depende de los requerimientos del cuerpo, es decir del gasto que el organismo hace para suplir sus necesidades (gasto calórico total). 
    p.mb-5(data-aos="fade-right") Ahora, conozcamos los componentes del gasto calórico total:
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema7/img5.png', style="width:380px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.align-items-center(titulo="Metabolismo basal (TMB)")
            .col-12
              p s la cantidad mínima de energía que el organismo necesita para mantenerse despierto, en reposo y cumplir todas sus actividades vitales como respiración, presión arterial, latidos del corazón, entre otros. 
              p El metabolismo basal depende de factores como:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Sexo: los hombres tienen mayor metabolismo basal que las mujeres.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Talla: las personas altas tienen mayor metabolismo basal que las bajas.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Peso: entre más peso, más metabolismo basal se requiere.
                li.d-flex
                  i.fas.fa-walking(style="color:#787CF0")
                  | Edad: entre más joven, el metabolismo basal es mayor debido al crecimiento.
          .row.align-items-center(titulo="Mantenimiento de la temperatura corporal")
            .col-12
              p.mb-0 Este concepto tiene que ver con la temperatura del medio ambiente, pues cuando una persona está en un clima caliente, el metabolismo basal puede bajar en un 10% en relación con lugares de clima frío.
          .row.align-items-center(titulo="Efecto térmico de los alimentos")
            .col-12
              p.mb-0 Este factor está representado por la cantidad de energía que utiliza el cuerpo para procesos de digestión, absorción, metabolismo y almacenamiento de nutrientes. Los procesos mencionados anteriormente ocupan un 10 % de la energía total consumida diariamente.
          .row.align-items-center(titulo="Actividad física")
            .col-12
              p Factor representado por la energía utilizada durante el ejercicio físico voluntario o por diversos movimientos. 
              p.mb-0 El requerimiento diario de energía se establece al sumar los siguientes factores: metabolismo basal, efecto térmico de los alimentos y la actividad física.
          .row.align-items-center(titulo="Gasto energético total")
            .col-12
              p.mb-0 Es importante conocer el gasto energético diario para así saber lo que en realidad el cuerpo necesita, porque a veces la dieta tiene un desequilibrio en nutrientes. Por ejemplo, cuando se consumen más calorías de las que se necesitan, el organismo las almacena en forma de grasa, ocasionando un aumento de peso.
    p(data-aos="fade-right") #[b.txt-c1 Método FAO/OMS/UNU (1985)]
    p.mb-5(data-aos="fade-right") Las ecuaciones empleadas para calcular el gasto energético en reposo, elaboradas por expertos de la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO), Universidad de Naciones Unidas (UNU) y la Organización Mundial de la Salud (OMS) se presentan en las siguientes tablas:
    .row.justify-content-center
      .col-auto.mb-5
        .p-5.bg-c26(data-aos="fade-down")
          p #[b P:] peso corporal en kilogramos. 
          p.mb-0 #[b kcal:] kilocalorías.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Tabla 2.] Ecuaciones para estimar el gasto energético en reposo (GER) de sujetos sanos
        .tabla-a.color-primario(data-aos="fade-left")
          table
            caption Nota. Iñarritu (s.f.)
            thead
              tr
                th.text-white Edad
                th.text-white Varones
                th.text-white Mujeres
            tbody
              tr
                td.text-center #[b (años)]
                td.text-center #[b kcal / día]
                td.text-center #[b kcal/ día]
              tr
                td 0 - 3
                td (60,9 x P) - 54
                td (61,0 x P) - 51
              tr
                td 3 - 10
                td (22,7 x P) + 495
                td (22,5 x P) + 499
              tr
                td 10 - 18
                td (17,5 x P) + 651
                td (12,2 x P) + 746
              tr
                td 18 - 30
                td (15,3 x P) + 679
                td (14,7 x P) + 496
              tr
                td 30 - 60
                td (11,5 x P) + 879
                td (8,7 x P) + 829
              tr
                td > 60
                td (13,5 x P) + 487
                td (10,5 x P) + 596
      .col-lg-7
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Tabla 3.] Factores para estimar las necesidades energéticas diarias totales en diversos niveles de actividad general para mujeres y hombres entre 19 y 50 años
        .tabla-a.color-primario(data-aos="fade-left")
          table
            caption Nota. Iñarritu (s.f.)
            thead
              tr
                th(colspan="2").text-white Nivel general de actividad - factor de actividad (x GER)
            tbody
              tr
                td
                  p.text-center.mb-0 #[b Muy leve]
                  p.text-center.mb-0 Hombres: 1,3.
                  p.text-center.mb-0 Mujeres: 1,3.
                td
                  p.text-center.mb-0 #[b Leve]
                  p.text-center.mb-0 Hombres: 1,6.
                  p.text-center.mb-0 Mujeres: 1,5.
              tr
                td
                  p.text-center.mb-0 #[b Moderado]
                  p.text-center.mb-0 Hombres: 1,7.
                  p.text-center.mb-0 Mujeres: 1,6.
                td
                  p.text-center.mb-0 #[b Intenso]
                  p.text-center.mb-0 Hombres: 2,1.
                  p.text-center.mb-0 Mujeres: 1,9.
              tr
                td(colspan="2")
                  p.text-center.mb-0 #[b Excepcional]
                  p.text-center.mb-0 Hombres: 2,4.
    p.mb-5(data-aos="fade-right") Ahora, conozcamos las actividades relacionadas con cada nivel de actividad:
    .row.mb-5.h-100
      .col-lg.pe-lg-0.order-2.order-lg-1(data-aos="fade-right")
        .p-4.bg-c28.h-100
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              |
              p.mb-0 #[b.txt-c1 Actividad muy leve:] diversas labores, ya sea sentado o de pie, por ejemplo, pintar, manejar, trabajo de laboratorio, computación, coser, planchar, cocinar, jugar cartas, tocar un instrumento musical, entre otros.
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              |
              p.mb-0 #[b.txt-c1 Actividad leve:] caminar, trabajos eléctricos, mesero, limpieza de casa, cuidado de los niños, golf, tenis de mesa, entre otros.
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              |
              p.mb-0 #[b.txt-c1 Actividad moderada:] andar vigorosamente, cortar el pasto, bailar, ciclismo en superficie plana, esquiar, tenis, llevar una carga, entre otros.
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              |
              p.mb-0 #[b.txt-c1 Actividad intensa:] trasladarse con carga en una pendiente, tala de árboles, excavación manual intensa, basquetbol, escalar, fútbol, correr, natación, ciclismo en cuesta, aeróbicos, entre otros.
            li.d-flex
              i.fas.fa-walking(style="color:#787CF0")
              |
              p.mb-0 #[b.txt-c1 Excepcional:] atletas de alto rendimiento.
      .col-lg-auto.ps-lg-0.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema7/img6.png', style="width:425px" alt='').m-auto
    .row.bg-c29
      .col-12
        .px-5.pb-5
          p.mb-5(data-aos="fade-right") Ahora, para calcular el gasto energético en reposo, se puede utilizar el método de la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO), de la Universidad de Naciones Unidas (UNU) y de la Organización Mundial de la Salud (OMS):
          .row.align-items-center.mb-5
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema7/img8.png', style="width:425px" alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              .row.mb-3
                .col-12
                  .p-3.bg-c30
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema7/img3.svg', style="width:70px" alt='').m-auto
                      .col
                        p.text-white.mb-0 1. Se calcula el gasto energético reposo (GER) con las ecuaciones de la FAO, de la OMS y de la UNU; allí está incluido el efecto térmico de los alimentos.
              .row
                .col-12
                  .p-3.bg-c30
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema7/img4.svg', style="width:70px" alt='').m-auto
                      .col
                        p.text-white.mb-0 2. El gasto energético en reposo (GER) se multiplica por la constante del factor de actividad física teniendo en cuenta la tabla 2.
          .row.mb-4(data-aos="fade-down")
            .col-auto
              .row.align-items-center
                .col-auto(style="z-index: 2")
                  figure
                    img(src='@/assets/curso/tema2/img2.svg', style="width:70px" alt='').m-auto
                .col.bg-c7
                  .px-3.py-2
                    h3.text-white.mb-0 Ejercicio de gasto energético total (GET)
          p.mb-5(data-aos="fade-right") Si se toma el caso de una dieta en una mujer de 30 años que mide 1.59 metros, que pesa 55 kg, y cuyo índice de masa corporal (IMC) es de 20 (adecuado); asimismo realiza actividad física leve, pues es profesora de una universidad y en las tardes siempre regresa a su casa caminando en un recorrido que dura 20 minutos, ¿cuál sería el gasto energético en reposo?
          .row.align-items-center
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema7/img9.png', style="width:280px" alt='').m-auto
            .col-lg-9(data-aos="fade-left")
              p Gasto energético en reposo (GER): para hallar el gasto energético en reposo se debe tener en cuenta la tabla 1, donde la ecuación para estimar el gasto energético para una mujer de 30 años es:
              .row.mb-3
                .col-auto
                  .p-4.bg-c10
                    p.text-white.mb-0 Ecuación gasto energético en reposo (GER) = 14,7 x P + 496
                    p.text-white.mb-0 = 14,7 x 55 + 496
                    p.text-white.mb-0 = 1304 kilocalorías
              p Para hallar el gasto energético en reposo por la actividad física, es necesario tener en cuenta el valor para actividad física leve descrito en la tabla 2:
              .row
                .col-auto
                  .p-4.bg-c20
                    p.mb-0 Gasto energético en reposo (GER) x factor de actividad física leve = 1304 x 1,5
                    p.mb-0 = 1956 kilocalorías
                    p.mb-0 Luego el gasto energético total (GET) = 1950 kilocalorías / día

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
