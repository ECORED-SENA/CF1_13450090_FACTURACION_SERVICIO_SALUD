<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Registro Individual de Prestación de Servicio de Salud (RIPS)
    .row.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 Los RIPS, Registro Individual de Prestación de Servicio de Salud, tal como quedó establecido en la Resolución 3374 de 2000 modificada por la Resolución 951 de 2002, #[b “fijan algunos lineamientos en relación con el Registro Individual de Prestación de Servicios de Salud, RIPS”. Y la Resolución 1531 de 2014, “por la cual se modifica la Resolución 3374 de 2000 en cuanto al mecanismo de transferencia de datos del Registro Individual de Prestación de Servicios de Salud (RIPS) y su ámbito de aplicación”.]
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6/img1.svg', style="width:220px" alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c6(data-aos="fade-down")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema6/img2.svg', style="width:70px" alt='').m-auto
            .col
              p El RIPS provee los datos mínimos y básicos que se requieren para hacer seguimiento al Sistema de Prestaciones de Salud en el SGSSS, en relación con el paquete obligatorio de servicios (POS y POSS).
              p.mb-0 Tomado de la Resolución 3374 de 2000.
    p.mb-5 El Registro Individual de Prestación de Servicios de Salud, RIPS, está conformado por tres clases de datos:
    .row.bg-c4.mb-5
      .col-12
        .p-5
          .row.align-items-center.justify-content-center
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema6/img1.png', style="width:320px" alt='').m-auto
            .col-lg-7(data-aos="fade-left")
              SlyderF(columnas="col-md-6")
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3
                    .col-3
                      img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      p.txt-c1.mb-0 #[b Datos de identificación]
                  p.mb-0 Incluyen los datos de la entidad administradora del plan de beneficios, los del prestador del servicio y los de la transacción, reportados en una factura de venta.
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3
                    .col-3
                      img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      p.txt-c1.mb-0 #[b Datos del RIPS]
                  p.mb-0 Relacionados con las consultas, procedimientos, servicios de urgencia, hospitalización y medicamentos, incluyendo características y valores de cada uno.
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3
                    .col-3
                      img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      p.txt-c1.mb-0 #[b Datos de consulta]
                  p.mb-0 Aplicables a todo tipo de consulta (programada, urgencia, médica general/especializada, odontológica general/especializada y otras profesiones de salud).
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3
                    .col-3
                      img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      p.txt-c1.mb-0 #[b Datos de procedimientos]
                  p.mb-0 Aplicables a todos los procedimientos, ya sean diagnósticos, terapéuticos, de detección temprana o de protección específica.
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3
                    .col-3
                      img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      p.txt-c1.mb-0 #[b Datos de hospitalización]
                  p.mb-0 Generados cuando se requiere hospitalización por cualquier motivo, incluyendo consultas, procedimientos y estancias.
    p.mb-5 La transferencia de dichos datos se hará en archivos separados.
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c19
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema6/img3.svg', style="width:170px" alt='').m-auto
            .col(data-aos="fade-left")
              ul.lista-ul 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#F1C12C")
                  | Los datos correspondientes a la prestación individual de servicios de salud de urgencia, incluye las consultas, procedimientos y estancia en observación. La transferencia de dichos datos se hará en archivos separados.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#F1C12C")
                  | Los datos de recién nacidos corresponden individualmente a los de las condiciones y características al nacer de uno o más niños o niñas.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#F1C12C")
                  | Los datos de medicamentos están relacionados con la denominación y forma farmacológica de estos.
    p.mb-5 Los procesos informáticos para la generación y conservación de los RIPS son los siguientes:
    .row.mb-5
      .col-12
        .p-4.bg-c20(data-aos="fade-left")
          .row.align-items-center.mb-4
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema6/img4.svg', style="width:170px" alt='').m-auto
            .col
              .p-4.bg-c21
                p.mb-0 #[b Actualización]
                p.mb-0 Registro primario del dato, modificación, eliminación e ingreso de estos a medios magnéticos o electrónicos.
          .row.align-items-center.mb-4
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema6/img5.svg', style="width:170px" alt='').m-auto
            .col
              .p-4.bg-c21
                p.mb-0 #[b Validación]
                p.mb-0 Verificación de los datos registrados en términos de correspondencia con la definición, estructura y características definidas en la resolución; incluye la referencia cruzada entre variables.
          .row.align-items-center.mb-4
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema6/img6.svg', style="width:170px" alt='').m-auto
            .col
              .p-4.bg-c21
                p.mb-0 #[b Organización]
                p.mb-0 Ordenamiento de los datos sobre los servicios individuales de salud según las estructuras estandarizadas del Sistema Integral de Información en Salud.
          .row.align-items-center.mb-4
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema6/img7.svg', style="width:170px" alt='').m-auto
            .col
              .p-4.bg-c21
                p.mb-0 #[b Administración de los datos]
                p.mb-0 Conservación, depuración y eliminación de la información en las bases de datos, establecimiento de niveles de control y seguridad de los datos.
          .row.align-items-center.mb-4
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema6/img8.svg', style="width:170px" alt='').m-auto
            .col
              .p-4.bg-c21
                p.mb-0 #[b Transferencia de datos]
                p.mb-0 Envío de los datos utilizando un medio de comunicación magnético o electrónico, que permite la actualización de los mismos entre diferentes entidades.
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema6/img9.svg', style="width:170px" alt='').m-auto
            .col
              .p-4.bg-c21
                p.mb-0 #[b Disposición de información]
                p.mb-0 Oferta de información de dominio público en medios masivos de comunicación.
    .row.align-items-center.mb-5
      .col-md-auto.d-none.d-md-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img11.svg', style="width:80px" alt='').m-auto
      .col(data-aos="fade-left")
        p.mb-0 Los archivos de datos deben identificarse con el tipo de archivo (dos caracteres), el número de la remisión de los datos (de uno a seis caracteres), para un nombre con un total máximo de ocho caracteres más la extensión del archivo que debe ser TXT.
    .row.justify-content-center.align-items-center
      .col-lg-6.order-2.order-lg-1.pe-lg-0(data-aos="fade-right")
        .p-4.bg-c15
          p.mb-0 Las cuentas sin RIPS no son radicadas para pagos, los archivos planos con la información correspondiente a los registros deben ser validados con el fin de optimizar el desembolso del recurso previa auditoría por parte del responsable de pago.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2.ps-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6/img2.png', style="width:410px" alt='').m-auto

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
