<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Acuerdo de voluntades y normatividad
    .row.mb-5
      .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
        p El Estado Colombiano cuenta con diferentes reglas que establecen garantías para la realización de contratos o acuerdos de voluntades entre Instituciones Prestadoras de Salud (IPS) y Empresas Promotoras de Salud (EPS), permitiendo el aseguramiento a los usuarios y la prestación de los servicios de salud correspondientes a cada red de servicios.
        p.mb-0 Como normatividad principal, se cuentan:
      .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img1.svg', style="width:220px" alt='').m-auto
    .row.mb-5
      .col-12
        .p-5.bg-c13(data-aos="fade-down")
          .tarjeta.tarjeta--azul
            .p-5
              SlyderA(tipo="b")
                .row.justify-content-center
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Resolución 3374 de 2000]
                    p.mb-0 Reglamenta los datos básicos que deben reportar los prestadores de servicios de salud y las entidades administradoras de planes de beneficios sobre los servicios de salud prestados.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema4/img1.png', style='width:280px' alt="").m-auto
                .row.justify-content-center
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Decreto 4747 de 2007]
                    p.mb-0 Regula aspectos de las relaciones entre los prestadores de servicios de salud y las entidades responsables del pago de los servicios de salud.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema4/img2.png', style='width:280px' alt="").m-auto
                .row.justify-content-center
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Congreso de Colombia, 9 de enero de 2007]
                    p.mb-0 Regula la relación entre responsables del pago y prestadores de servicios de salud, especialmente en lo relacionado con las EPS en regímenes contributivo y subsidiado.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema4/img3.png', style='width:280px' alt="").m-auto
                .row.justify-content-center
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Resolución 1479 de 2015]
                    p.mb-0 Señala el procedimiento para el cobro y pago de servicios y tecnologías sin cobertura en el POS para afiliados al régimen subsidiado.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema4/img4.png', style='width:280px' alt="").m-auto
                .row.justify-content-center
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Resolución 6408 de 2016]
                    p.mb-0 Modifica el Plan de Beneficios en Salud con cargo a la UPC e incluye anexos técnicos.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema4/img5.png', style='width:280px' alt="").m-auto
                .row.justify-content-center
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Resolución 6411 de 2016]
                    p.mb-0 Fija el valor de la UPC para la cobertura del plan de beneficios en salud de los regímenes contributivo y subsidiado en la vigencia 2017.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema4/img6.png', style='width:280px' alt="").m-auto
                .row.justify-content-center
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Resolución 1132 de 2017]
                    p.mb-0 Modifica la Resolución 4678 de 2015, adopta la CUPS y dicta otras disposiciones relacionadas con la Resolución 6408 de 2016.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema4/img7.png', style='width:280px' alt="").m-auto
                .row.justify-content-center
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Resolución 1687 de 2017]
                    p.mb-0 Sustituye el Anexo 2 "Listado de Procedimientos en Salud del Plan de Beneficios en Salud con cargo a la UPC" de la Resolución 6408 de 2016 y se dictan otras disposiciones.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema4/img8.png', style='width:280px' alt="").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .row
          .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/img9.png', style="width:250px" alt='').m-auto
          .col.ps-0
            .ps-4.ps-lg-0.py-4.pe-4.bg-c7.h-100
              .row
                .col-12
                  .p-4.bg-c8
                    p.mb-0 EI facturador desarrolla las competencias para identificar los tipos de acuerdos, para así cobrar los servicios prestados ante las Entidades responsables, según el Decreto 4747 de 2007, que tiene en cuenta diferentes tipos de acuerdos de voluntades.
    .row.mb-5
      .col-lg-8(data-aos="fade-right")
        p La relación contractual entre los prestadores y aseguradores se modifica automáticamente, de acuerdo con la dinámica de la actividad regulatoria. Los acuerdos de voluntades se realizan entre los representantes legales de las IPS y las EPS, y tienen que ver con la contratación de los servicios en salud. Para este caso, se contemplan varios aspectos, como pueden ser:
        .row
          .col-12
            .p-2.bg-c14
              .row
                .col-auto.pe-0
                  i.fas.fa-check-circle(style="color:#F1C12C")
                .col
                  p.mb-0 Término de duración.
          .col-12
            .p-2.bg-c15
              .row
                .col-auto.pe-0
                  i.fas.fa-check-circle(style="color:#F1C12C")
                .col
                  p.mb-0 El valor.
          .col-12
            .p-2.bg-c14
              .row
                .col-auto.pe-0
                  i.fas.fa-check-circle(style="color:#F1C12C")
                .col
                  p.mb-0 Información de la población objeto.
          .col-12
            .p-2.bg-c15
              .row
                .col-auto.pe-0
                  i.fas.fa-check-circle(style="color:#F1C12C")
                .col
                  p.mb-0 Servicios contratados.
          .col-12
            .p-2.bg-c14
              .row
                .col-auto.pe-0
                  i.fas.fa-check-circle(style="color:#F1C12C")
                .col
                  p.mb-0 Mecanismos y forma de pago.
          .col-12
            .p-2.bg-c15
              .row
                .col-auto.pe-0
                  i.fas.fa-check-circle(style="color:#F1C12C")
                .col
                  p.mb-0 Tarifas que deben ser aplicadas a las unidades de pago.
          .col-12
            .p-2.bg-c14
              .row
                .col-auto.pe-0
                  i.fas.fa-check-circle(style="color:#F1C12C")
                .col
                  p.mb-0 Proceso y operación del sistema de referencia y contrarreferencia.
          .col-12
            .p-2.bg-c15
              .row
                .col-auto.pe-0
                  i.fas.fa-check-circle(style="color:#F1C12C")
                .col
                  p.mb-0 Periodicidad en la entrega de información RIPS.
          .col-12
            .p-2.bg-c14
              .row
                .col-auto.pe-0
                  i.fas.fa-check-circle(style="color:#F1C12C")
                .col
                  p.mb-0 Periodicidad y forma de auditoría.
          .col-12
            .p-2.bg-c15
              .row
                .col-auto.pe-0
                  i.fas.fa-check-circle(style="color:#F1C12C")
                .col
                  p.mb-0 Mecanismos de interventoría o seguimiento.
          .col-12
            .p-2.bg-c14
              .row
                .col-auto.pe-0
                  i.fas.fa-check-circle(style="color:#F1C12C")
                .col
                  p.mb-0 Mecanismos para la solución de conflictos.
          .col-12
            .p-2.bg-c15
              .row
                .col-auto.pe-0
                  i.fas.fa-check-circle(style="color:#F1C12C")
                .col
                  p.mb-0 Mecanismos y términos para la liquidación.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img10.png', style='width:390px' alt="").m-auto
    p.mb-5(data-aos="fade-down") El facturador siempre debe tener en cuenta todos los criterios para poder aplicar dicha factura según cada acuerdo, ya que puede haber varias clases de contratos según las diferentes aseguradoras. Los aplicativos que utilizan los responsables de pago están parametrizados con los valores pactados y a cobrar.
    .row.mb-5
      .col-12
        .p-5.bg-c13(data-aos="fade-left")
          .tarjeta.tarjeta--azul
            .p-5
              SlyderA(tipo="b")
                .row.justify-content-center
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Pago por capitación]
                    p.mb-0 Es un pago anticipado de una suma fija realizado por persona, la cual tendrá derecho a recibir atención durante un periodo establecido, basado en un conjunto de servicios acordados. La unidad de pago se establece mediante una tarifa previamente convenida, que depende del número de personas que se prevea atender.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema4/img11.png', style='width:280px' alt="").m-auto
                .row.justify-content-center
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Pago por evento]
                    p.mb-0 Este mecanismo determina que el pago se realiza por las actividades, procedimientos, intervenciones, insumos y medicamentos proporcionados o suministrados a un paciente durante un periodo concreto, asociado a un evento específico de atención en salud. La unidad de pago la constituye cada actividad, procedimiento, intervención, insumo o medicamento suministrado, con tarifas acordadas con antelación.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema4/img12.png', style='width:280px' alt="").m-auto
                .row.justify-content-center
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Pago por caso, conjunto integral de atenciones, paquete o grupo relacionado por diagnóstico]
                    p.mb-0 A través de este mecanismo se efectúa el pago de conjuntos de actividades, procedimientos, intervenciones, insumos y medicamentos, suministrados a un paciente y vinculados a un evento de salud, diagnóstico o grupo de diagnóstico correspondiente. La unidad de pago la conforma cada caso, conjunto o paquete de servicios prestados, o grupo relacionado por diagnóstico, con tarifas previamente pactadas.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema4/img13.png', style='width:280px' alt="").m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto 
        .px-4.bg-c12
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema3/img3.svg', style="width:50px" alt='').m-auto
            .col
              h3 Responsables de pagos Empresas Administradoras de Planes de Beneficios (EAPB)
    p.mb-5(data-aos="fade-right") Dentro de las EAPB se encuentran las Entidades Promotoras de Salud del Régimen Contributivo y Subsidiado, Empresas Solidarias de Salud, las asociaciones mutuales en sus actividades de salud, las Entidades Promotoras de Salud Indígenas, las Cajas de Compensación Familiar en sus actividades de salud, las entidades que administran planes adicionales de salud, las entidades obligadas a compensar, las entidades adaptadas de salud, las entidades pertenecientes al régimen de excepción de salud y las universidades en sus actividades de salud.
    .row.justify-content-center
      .col-lg-10
        .p-4.bg-c2(data-aos="fade-left")
          .row
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema4/img3.svg', style="width:120px" alt='').m-auto
            .col
              p.mb-0 Las entidades responsables del pago de los servicios de salud deben difundir entre sus usuarios la conformación de su red de prestación de servicios. Para ello, deberán publicar anualmente en un periódico de amplia circulación en su área de influencia, el listado actualizado de los prestadores de servicios de salud que la conforman. Este listado debe estar organizado por el tipo de servicios contratados y por el nivel de complejidad.

</template>

<script>
export default {
  name: 'Tema4',
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
