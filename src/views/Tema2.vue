<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Composición de los alimentos
    .row.justify-content-center
      .col-lg-10.bg-c6
        .p-4
          .row.align-items-center
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema2/img1.svg', style="width:70px" alt='').m-auto
            .col
              p.mb-0 Los nutrientes presentes en los alimentos se dividen en cuatro grupos: carbohidratos, proteínas, grasas y vitaminas.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Carbohidratos
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width:400px" alt='').m-auto
      .col-lg-8
        p Los hidratos de carbono o carbohidratos son moléculas de carbono, hidrógeno y oxígeno, cuya fórmula es (CH2O)n. Se clasifican en azúcares simples, los cuales están conformados por una sola molécula, llamados monosacáridos, por los disacáridos o azúcares dobles, formados por dos moléculas, y por los polisacáridos, constituidos por 10 moléculas (considerados los azúcares más complejos). Estos compuestos se hallan en la mayoría de los alimentos y su función principal es dar energía a las personas.
        p Otras de las funciones más importantes de los carbohidratos son:
        ul.lista-ul
          li.d-flex
            i.fas.fa-walking(style="color:#787CF0")
            | Dar energía al cerebro y al sistema nervioso central para que operen adecuadamente.
          li.d-flex
            i.fas.fa-walking(style="color:#787CF0")
            | Mantener un correcto funcionamiento de los músculos y de la presión arterial.
          li.d-flex
            i.fas.fa-walking(style="color:#787CF0")
            | Sostener la temperatura corporal y las funciones de los órganos internos.
          li.d-flex
            i.fas.fa-walking(style="color:#787CF0")
            | Ayudar al organismo a construir moléculas más complejas.
    p.mb-5 Los carbohidratos se clasifican según la complejidad de su estructura molecular, así:
    .row.align-items-center.mb-5
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Monosacáridos o azúcares simples")
            .col-12
              p Están formados según el número de carbonos presentes en la molécula, los cuales pueden oscilar entre tres y seis átomos de carbono. 
              p.mb-0 Las tres hexosas más importantes en la nutrición y el metabolismo son la glucosa, la fructosa y la galactosa. La glucosa es el azúcar simple más utilizado por las células para obtener energía; la fructosa, más conocida como el azúcar de las frutas por estar presente en estas, se forma en el organismo de los seres humano en la digestión, a partir de la hidrólisis de la sacarosa y, por último, la galactosa, la cual se halla en la leche y que por medio de la digestión es liberada para que el hígado la convierta en glucosa para luego pasar a la circulación.
          .row(titulo="Disacáridos")
            .col-12
              p Están conformados por dos monosacáridos enlazados entre sí que mediante el proceso de hidrólisis en la digestión se convierten en hexosas. Los más conocidos en este grupo son la sacarosa, la lactosa y la maltosa. La lactosa es el azúcar que se encuentra en la leche de los mamíferos, asimismo está formada por una molécula de glucosa y una de galactosa. 
              p.mb-0 La sacarosa formada por una molécula de glucosa y una de fructosa, es un azúcar que se encuentra en la caña y la remolacha. La maltosa no está presente en los alimentos, sino que se genera en el organismo humano como producto de la digestión del almidón; además está formada por dos moléculas de glucosa entrelazadas entre sí.
          .row(titulo="Polisacáridos")
            .col-12
              p Constituidos por cadenas largas de monosacáridos, es el grupo más complejo entre los carbohidratos; se descomponen en moléculas más pequeñas por hidrólisis en el organismo de los seres humanos y tienen la función de mantener reservas de energía. Los más conocidos en este grupo son el almidón, el glucógeno, las dextrinas y la fibra dietaria.
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img2.png', style="width:280px" alt='').m-auto
    .row.mb-4
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width:70px" alt='').m-auto
          .col.bg-c7
            .px-3.py-2
              h3.text-white.mb-0 Fibra dietaria
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img3.svg', style="width:380px" alt='').m-auto
      .col-lg-8
        p La fibra es de origen vegetal y se halla en las paredes celulares de los vegetales. Bajo esta denominación se pueden incluir carbohidratos como el almidón resistente, el cual no se degrada ante las enzimas digestivas; dentro de este grupo se incluye la lignina, la cual no es un hidrato de carbono.
        p.mb-0 Los componentes más conocidos de la fibra son la celulosa, la hemicelulosa, las pectinas, las gomas, el agar, los mucilagos y la lignina.
    .row.mb-4
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width:70px" alt='').m-auto
          .col.bg-c7
            .px-3.py-2
              h3.text-white.mb-0 Fibra soluble
    p.mb-5 En este grupo se encuentran las pectinas, las gomas y el agar. Estos productos tienen la característica de disolverse con facilidad en agua formando un gel grueso.
    .row.mb-5
      .col-lg-9.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="Funciones")
            .row
              .col-12
                p #[b Funciones]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Aumento del volumen y de la viscosidad del bolo.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Retraso de la digestión y enlentecimiento de la absorción intestinal.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Incremento de la absorción en los enterocitos distales.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Rebaja la demanda de insulina debido a que disminuye la liberación del polipéptido inhibidor gástrico.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Aumento del tránsito intestinal, parte de los carbohidratos se absorben mal.
          .tarjeta.color-acento-botones.p-4(titulo="Beneficios")
            .row
              .col-12
                p #[b Beneficios]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Ayuda a regular el azúcar en la sangre.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Disminuye el colesterol malo (LDL) el cual es beneficioso, pues reduce el riesgo de que las personas padezcan enfermedades cardíacas.
          .tarjeta.color-acento-botones.p-4(titulo="Fuentes alimentarias")
            .row
              .col-12
                p #[b Fuentes alimentarias]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Lentejas.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Arvejas.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Duraznos.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Naranjas.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Zanahorias.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Salvado de avena.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Cebada.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Arándano rojo.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema2/img3.png', style="width:290px" alt='').m-auto
    .row.mb-4
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width:70px" alt='').m-auto
          .col.bg-c7
            .px-3.py-2
              h3.text-white.mb-0 Fibra insoluble
    p.mb-5 En esta agrupación se halla la celulosa, la hemicelulosa y la lignina; la fibra insoluble no se descompone, ni se disuelve en el intestino de los seres humanos, sino que pasa al tacto gástrico casi intacta.
    .row
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img4.png', style="width:290px" alt='').m-auto
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="Funciones")
            .row
              .col-12
                p #[b Funciones]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Ayuda a regular el pH en el intestino, pasándolo de ácido a alcalino.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Permite que el bolo se mueva a través del intestino.
          .tarjeta.color-acento-botones.p-4(titulo="Beneficios")
            .row
              .col-12
                p #[b Beneficios]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Los movimientos intestinales son estimulados, previniendo el estreñimiento.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Ayuda a remover los desechos del colon.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Admite un pH óptimo en el intestino, lo cual ayuda a prevenir el cáncer de colon.
          .tarjeta.color-acento-botones.p-4(titulo="Fuentes alimentarias")
            .row
              .col-12
                p #[b Fuentes alimentarias]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Linaza.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Coliflor.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Salvado de trigo.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Avena integral.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Pasta integral.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Pan integral.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Corteza de frutas, papas y tubérculos.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Las proteínas
    .row.bg-c9
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-md-8.col-lg-5.mb-4.mb-lg-0
              .p-4.bg-c8.h-100
                .row.align-items-center.h-100
                  .col
                    p.mb-0 Son sustancias orgánicas que en general contienen una base de elementos químicos como carbono, hidrógeno, oxígeno y nitrógeno; también se componen por cadenas lineales de aminoácidos las cuales están encadenadas a enlaces peptídicos formados en el grupo carboxilo de un aminoácido.
            .col-md-8.col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img4.svg', style="width:270px" alt='').m-auto
            .col-md-8.col-lg-4
              figure.mb-3
                img(src='@/assets/curso/tema2/img5.svg', style="width:70px" alt='')
              p.mb-0 Por añadidura son compuestos que desempeñan muchas funciones en los seres humanos, haciendo parte de tejidos, tendones, músculos, piel y uñas; además, realizan acciones metabólicas, reguladoras, transportan oxígeno, y grasas en la sangre, pertenecen al código genético (ADN), lo que define la identidad de cada persona.
          p.mb-5 A continuación, se presenta un esquema con las funciones de las proteínas.
          .row.justify-content-center
            .col-lg-6
              .p-4.bg-c10
                .titulo-sexto.color-acento-contenido
                  p.text-white.mb-0 #[b Figura 1.] Funciones de las proteínas
                figure
                  img(src='@/assets/curso/tema2/img7.svg', style="width:570px" alt='Imagen que presenta las funciones de las proteínas, la cuales son: transportadoras, reguladoras, defensivas, energéticas y plásticas o estructurales.').m-auto
            .col-lg-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema2/img6.svg', style="width:282px" alt='').m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3  Las grasas o lípidos
    .row.align-items-center.mb-3
      .col-lg-9.order-2.order-lg-1
        p Son sustancias que se encuentran en las células de animales o vegetales. La función más importante para el organismo de los seres humanos es dar energía al metabolismo y trasportar vitaminas liposolubles.
        .row.justify-content-center.mb-3
          .col-9.col-md-auto.pe-md-0
            figure
              img(src='@/assets/curso/tema2/img8.svg', style="width:290px" alt='').m-auto
          .col-9.col-md.ps-md-0
            .bg-c11.p-4.h-100
              .row.align-items-center.h-100
                p.mb-0 Se puede decir que las grasas son un conjunto de sustancias que tienen poca solubilidad en el agua, pero sin embargo se pueden solubilizar en solventes como el éter o el cloroformo; además el medio por el cual se sintetizan es a través de los hidratos de carbono.
        p.mb-0 Los lípidos están constituidos por colesterol libre, esterificado, triglicéridos, ácidos grasos libres y fosfolípidos, estos compuestos están presentes en las lipoproteínas plásticas y son los encargados de transportar los quilomicrones, las lipoproteínas de densidad baja (LDL) y las proteínas de alta densidad (HDL).
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema2/img6.png', style="width:260px" alt='').m-auto
    .row.align-items-center
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img7.png', style="width:480px" alt='').m-auto
      .col-lg-7
        p La importancia de los lípidos en la alimentación está relacionada con:
        ul.lista-ul
          li.d-flex
            i.fas.fa-walking(style="color:#787CF0")
            | Su gran aporte energético, además son el combustible metabólico. Un gramo de grasa equivale a 9 kcal.
          li.d-flex
            i.fas.fa-walking(style="color:#787CF0")
            | Su importante contribución a la dieta de ácidos grasos esenciales como el linoleico y el alfa-linolénico, ya que no son producidos por el organismo.
          li.d-flex
            i.fas.fa-walking(style="color:#787CF0")
            | El transporte de vitaminas liposolubles como la A, D, E, K que se encuentran en el organismo en bajas proporciones y que requieren de los ácidos grasos para formar lipoproteínas en las membranas celulares.
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido
      h2 2.4 Las vitaminas
    .row.bg-c13.mb-5
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-md-8.col-lg-5.mb-4.mb-lg-0
              .p-4.bg-c8.h-100
                .row.align-items-center.h-100
                  .col
                    p.mb-0 Son sustancias orgánicas que se pueden obtener de los alimentos; igualmente son de gran importancia para el hombre porque ayudan a que el organismo se desarrolle adecuadamente. Cuando hay carencia de ellas en la dieta se pueden generar enfermedades.
            .col-md-8.col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img8.png', style="width:270px" alt='').m-auto
            .col-md-8.col-lg-4
              figure.mb-3
                img(src='@/assets/curso/tema2/img9.svg', style="width:70px" alt='')
              p.mb-0 Las vitaminas se deben suministrar al cuerpo en pequeñas cantidades, pues el organismo no puede producirlas, a excepción de algunas.
          p.mb-5 Las vitaminas se pueden clasificar en:
          .row.justify-content-center.mb-5
            .col-md-8.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c12.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img10.svg', style="width:90px" alt='').m-auto
                .row.justify-content-center.mb-3
                  .col-auto
                    .bg-white.p-2
                      p.mb-0 #[b Hidrosolubles]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Ácido ascórbico C.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Complejo B.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Tiamina.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Riboflavina.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Niacina.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Ácido pantoténico.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Piridoxina.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Biotina.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Ácido fólico.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Cobalamina.
            .col-md-8.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c12.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img11.svg', style="width:90px" alt='').m-auto
                .row.justify-content-center.mb-3
                  .col-auto
                    .bg-white.p-2
                      p.mb-0 #[b Liposolubles]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Vitamina A.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Vitamina E.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Vitamina D.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Vitamina K.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Vitamina F.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Vitámeros.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Provitamina.
            .col-md-8.col-lg-6
              figure
                img(src='@/assets/curso/tema2/img9.png', style="width:580px" alt='').m-auto
          p.mb-5 La siguiente tabla nos presenta una comparación entre esta comparación.
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Tabla 1.] Hidrosolubles versus liposolubles
              .tabla-a.color-primario
                table
                  thead
                    tr
                      th.text-white Ítem
                      th.text-white Hidrosolubles
                      th.text-white Liposolubles
                  tbody
                    tr
                      td Composición química.
                      td Excepto la vitamina C, todas las demás contienen nitrógeno y algunas, azufre, fósforo, y cobalto.
                      td Sólo están formados por carbono, hidrógeno y oxígeno.
                    tr
                      td Provitaminas.
                      td No.
                      td Si (en algunos casos).
                    tr
                      td Absorción.
                      td
                        p.mb-0 Transporte activo.
                        p.mb-0 Difusión facilitada.
                      td
                        p.mb-0 Difusión simple.
                        p.mb-0 Presencia de grasa.
                    tr
                      td Transporte.
                      td Libres.
                      td Requieren las proteínas.
                    tr
                      td Depósito.
                      td Poco importantes.
                      td Se almacena en tejido adiposo e hígado.
                    tr
                      td Necesidades.
                      td Vía urinaria (B12, B5, ácido fólico).
                      td Vía fecal.
                    tr
                      td Excreción.
                      td Se requiere en dosis frecuentes.
                      td Se requiere en dosis periódicas.
    p.b-5 A continuación, se presentan las situaciones de riesgo de deficiencia vitamínica:
    .row.bg-c14
      .col-12
        .px-5
          .row.justify-content-center.mb-5(data-aos="fade-left")
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c4.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img12.svg', style="width:100px" alt='').m-auto
                .row.justify-content-center.mb-3
                  .col-auto.bg-c5
                    .p-3
                      p.text-center.text-white.mb-0 #[b Ingesta insuficiente]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Alcoholismo.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Tercera edad.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Regímenes hipocalóricos.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Vegetarianos estrictos.
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c4.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img13.svg', style="width:100px" alt='').m-auto
                .row.justify-content-center.mb-3
                  .col-auto.bg-c5
                    .p-3
                      p.text-center.text-white.mb-0 #[b Necesidades metabólicas incrementadas]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Embarazo y lactancia.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Períodos postoperatorios.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Enfermedades crónicas o infecciosas.
            .col-md-6.col-lg-3
              .p-4.bg-c4.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img14.svg', style="width:100px" alt='').m-auto
                .row.justify-content-center.mb-3
                  .col-auto.bg-c5
                    .p-3
                      p.text-center.text-white.mb-0 #[b Interacción con medicamentos]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Anticonceptivos orales, antibióticos.
                  li.d-flex
                    i.fas.fa-walking(style="color:#787CF0")
                    | Situaciones de mala absorción.
          p.mb-5 Existen diferentes factores que pueden neutralizar o destruir las vitaminas, entre estos:
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img15.svg', style="width:340px" alt='').m-auto
            .col-lg-8
              .tarjeta.tarjeta--azul1
                .p-5
                  SlyderA(tipo="b")
                    .row.align-items-center
                      .col-lg-8.mb-4.mb-lg-0
                        p.text-white #[b Bebidas alcohólicas]
                        p.text-white.mb-0 El alcohol disminuye el apetito en las personas y genera carencias de vitaminas B2, B3, B6 y ácido fólico. 
                      .col-lg-4
                        figure
                          img(src='@/assets/curso/tema2/img16.svg', style="width:180px" alt='').m-auto
                    .row.align-items-center
                      .col-lg-8.mb-4.mb-lg-0
                        p.text-white #[b Cigarrillo]
                        p.text-white.mb-0 El consumo de este producto hace que el organismo gaste más vitaminas, por ende, se recomienda incrementar la ingesta de vitamina C, debido a que ayuda a desintoxicar.
                      .col-lg-4
                        figure
                          img(src='@/assets/curso/tema2/img17.svg', style="width:180px" alt='').m-auto
                    .row.align-items-center
                      .col-lg-8.mb-4.mb-lg-0
                        p.text-white #[b Situaciones estresantes]
                        p.text-white.mb-0 Las personas bajo estrés emocional generan más adrenalina haciendo que el organismo consuma más vitamina C y produciendo la necesidad que se ingieran más vitaminas del grupo B y E.
                      .col-lg-4
                        figure
                          img(src='@/assets/curso/tema2/img18.svg', style="width:180px" alt='').m-auto
                    .row.align-items-center
                      .col-lg-8.mb-4.mb-lg-0
                        p.text-white #[b Azúcar o alimentos azucarados]
                        p.text-white.mb-0 Cuando los seres humanos consumen azúcar blanco, el cuerpo gasta muchas vitaminas para metabolizarlo, sobre todo las del grupo B1.
                      .col-lg-4
                        figure
                          img(src='@/assets/curso/tema2/img19.svg', style="width:180px" alt='').m-auto
    Separador
    #t_2_5
    .titulo-segundo.color-acento-contenido
      h2 2.5 Los minerales
    p Son sustancias naturales compuestas por moléculas formadas por átomos de uno o más elementos químicos. Son muy importantes para la salud del cuerpo humano, porque aportan los nutrientes necesarios para que funcione de manera correcta.
    p Los minerales se dividen en dos grupos:
    p.mb-5 Los #[span.txt-c2 #[b macroelementos]], aquellos que se deben consumir en cantidades considerables:
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img12.png', style="width:340px" alt='').m-auto
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Calcio, potasio y magnesio")
            .col-12
              p.mb-0 Forman parte de los huesos y del tejido conjuntivo, son esenciales para la circulación de la sangre.
          .row(titulo="Fósforo")
            .col-12
              p.mb-0 Este elemento en asocio con ciertos lípidos, forma los fosfolípidos, los cuales son muy importantes para la membrana celular y el tejido nervioso, también constituyen la estructura de los huesos.
          .row(titulo="Sodio")
            .col-12
              p.mb-0 Es responsable de la trasmisión de impulsos nerviosos. Las necesidades de este compuesto aumentan cuando la persona suda mucho, toma diuréticos, o cuando se tienen diarreas o vómitos.
          .row(titulo="Potasio")
            .col-12
              p.mb-0 Participa en la contracción del músculo cardíaco y además actúa en la regulación del balance de agua en el organismo.
    .row.align-items-center.mb-5
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Magnesio")
            .col-12
              p.mb-0 Es muy importante para la asimilación de la vitamina C y el calcio, también participa en la correcta transmisión de los impulsos nerviosos. De igual manera ayuda a la buena digestión de las grasas, y a fijar el calcio.
          .row(titulo="Cloro")
            .col-12
              p.mb-0 Ayuda al hígado en la eliminación de toxinas, favorece el equilibrio de ácido-base, apoya el transporte de CO2 en la sangre, y contribuye al mantenimiento de los huesos.
          .row(titulo="Azufre")
            .col-12
              p.mb-0 Está presente en la composición de hormonas y vitaminas, además hace parte del cabello, de las uñas, y de la piel.
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img13.png', style="width:340px" alt='').m-auto
    p.mb-5 Los #[span.txt-c2 #[b microelementos]], aquellos que se deben consumir en cantidades mínimas:
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img14.png', style="width:380px" alt='').m-auto
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Hierro")
            .col-12
              p.mb-0 Es importante para la producción de glóbulos rojos y hemoglobina, asimismo interviene en el metabolismo celular por medio de enzimas.
          .row(titulo="Flúor")
            .col-12
              p.mb-0 Hace parte de la estructura de los huesos, y en los dientes aumenta la resistencia de la placa bacteriana.
          .row(titulo="Yodo")
            .col-12
              p.mb-0 Ayuda a la producción de la hormona de la tiroides y al funcionamiento de los tejidos nerviosos, igualmente interviene en el crecimiento físico y mental.
          .row(titulo="Cobre")
            .col-12
              p.mb-0 Contribuye a convertir el hierro almacenado en hemoglobina, además participa en la asimilación de la vitamina C. Es muy importante en la formación de huesos, tendones, sistema vascular, y tejido conectivo.
          .row(titulo="Zinc")
            .col-12
              p.mb-0 Hace parte de los huesos en las enzimas anhidrasa carbónica, deshidrogenasa y carboxipeptidasa. Hace parte del proceso de producción de linfocitos y contribuye a la síntesis de proteínas.

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
