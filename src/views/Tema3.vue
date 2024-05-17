<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Tipos de usuarios y planes de beneficios
    .row.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p Desde la creación de la #[b Ley 100 de 1993], los tipos de usuarios del SGSSS se han ido ampliando para garantizar la cobertura a todos los habitantes del país.
        .row
          .col-12
            .p-4.bg-c2
              .row
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/img1.svg', style="width:70px" alt='').m-auto
                .col
                  p.mb-0 #[b La resolución 5592 de 2015], emitida por el Ministerio de la Protección Social, actualizó integralmente el Plan de Beneficios en Salud con cargo a la Unidad de Pago por Capitación. Esto significa que el Estado colombiano asigna a las Entidades Promotoras de Salud un valor económico por cada persona afiliada, determinado según su ubicación geográfica, edad y sexo, para su administración. Además, los servicios que prestan las IPS deben regirse por los servicios autorizados en el Plan de beneficios para su cobro a las administradoras.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width:290px" alt='').m-auto
    .row.bg-c11.mb-5
      .col-12
        .px-5
          .row.justify-content-center
            .col-lg-10(data-aos="fade-right")
              .titulo-sexto.color-secundario
                p.mb-0 #[b Tabla 1.] Tipos de usuarios del Sistema General de Seguridad Social en Salud
              .tabla-a.color-secundario.mb-4
                table
                  caption Referencia Tabla - Norma APA
                  thead
                    tr
                      th Condiciones de la normatividad vigente
                      th Parentesco
                      th Documento para acreditar afiliación
                  tbody
                    tr(style="background-color:#F6F6F6 !important")
                      td Siempre.
                      td Cotizante.
                      td Fotocopia del documento de identidad.
                    tr(style="background-color:#FFFFFF !important")
                      td Si están casados.
                      td Cónyuge.
                      td
                        p.mb-0 Fotocopia del documento de identidad.
                        p.mb-0 Registro civil de matrimonio.
                    tr(style="background-color:#F6F6F6 !important")
                      td En unión marital de hecho o unión libre.
                      td Compañero.
                      td
                        p.mb-0 Fotocopia del documento de identidad.
                        p.mb-0 Declaración juramentada de convivencia vigente (No ante notario). No mayor a seis meses.
                    tr(style="background-color:#FFFFFF !important")
                      td Si existen (Los míos, los tuyos y los nuestros) incluye adoptivos con documento legal.
                      td Hijos entre 0 y 6 años y 364 días.
                      td Fotocopia del documento de Identidad (Registro civil).
                    tr(style="background-color:#F6F6F6 !important")
                      td En el caso de ser el afiliado soltero o de hacer pago adicional de UPC.
                      td Padres.
                      td
                        p.mb-0 Fotocopia del documento de identidad.
                        p.mb-0 Registros civiles que se requieran para demostrar parentesco.
                    tr(style="background-color:#FFFFFF !important")
                      td Caso de cobertura especial - Consultar condiciones.
                      td Otros hasta tercer grado de consanguinidad. (Abuelos, bisabuelos, tíos, hermanos, sobrinos, nietos, bisnietos).
                      td
                        p.mb-0 Fotocopia del documento de Identidad.
                        p.mb-0 Registros civiles que se requieran para demostrar parentesco.
                        p.mb-0 Recibo de pago de UPC (planilla de autoliquidación).
                    tr(style="background-color:#F6F6F6 !important")
                      td Caso de cobertura especial - Consultar condiciones.
                      td Nietos que dependan económicamente del abuelo.
                      td Registro civil para demostrar parentesco.
    .row.mb-4(data-aos="fade-down")
      .col-auto 
        .px-4.bg-c12
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema3/img3.svg', style="width:50px" alt='').m-auto
            .col
              h3 Soportes físicos y digitales
    .row.mb-4
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p El acuerdo de voluntades, parametrizado en cada entidad facturadora, establece que los soportes sean físicos o digitales según el caso, sin dejar de lado lo estipulado en la Resolución 3047 de 2008 y sus adiciones o modificaciones. Además, existe el MAPIPOS (Manual de Actividades, Intervenciones y Procedimientos del Plan Obligatorio de Salud) en el SGSSS, según la Resolución 5261 de 1994, que presenta de manera cefalocaudal (de la cabeza a los pies) las actividades, intervenciones y procedimientos según el plan de beneficios.
        p.mb-0 Este manual está organizado y clasificado por nivel de atención en el Plan de Beneficios del Sistema, como se ve a continuación:
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img2.png', style="width:290px" alt='').m-auto
    .row.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img3.png', style="width:290px" alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Primer nivel")
            .col-12
              p Atención ambulatoria:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Consulta médica general.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Atención inicial, estabilización, resolución o remisión del paciente en urgencias.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Atención odontológica.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Laboratorio clínico.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Radiología.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Medicamentos esenciales.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Citología.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Acciones intra y extramurales de promoción, prevención y control.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Atención quirúrgica.
              p Servicios con internación:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Atención obstétrica.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Atención n o quirúrgica u obstétrica.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Laboratorio clínico.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Radiología.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Medicamentos esenciales.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Valoración diagnóstica y manejo médico.
          .row(titulo="Segundo nivel")
            .col-12
              p.mb-0 Atención ambulatoria especializada: se define como la atención médica, no quirúrgica, no procedimental, no intervencionista, brindada por un profesional de la medicina, especialista en una o más de las disciplinas de esta ciencia y en la cual ha mediado interconsulta o remisión por el profesional general de la salud. Tendrá el mismo carácter técnico - administrativo para los niveles II y III de complejidad atención; junto con lo del primer nivel y más especializados.
          .row(titulo="Tercer nivel")
            .col-12
              p.mb-0 Condiciones de acceso a los servicios: la utilización de servicios incluidos en este nivel requerirá la aprobación previa de la Entidad Promotora de Salud, quien podrá utilizar para ello comités médicos científicos quienes deberán ceñirse a las guías de atención integral; junto con lo del primer nivel y más especializados.
          .row(titulo="Cuarto nivel")
            .col-12
              p Patologías de tipo catastrófico: son patologías catastróficas aquellas que representan una alta complejidad técnica en su manejo, alto costo, bajo ocurrencia y bajo costo efectividad en su tratamiento. Se consideran dentro de este nivel, los siguientes procesamientos:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Trasplante renal.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Diálisis.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Neurocirugía, sistema nervioso.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Cirugía cardiaca.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Reemplazos articulares.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Manejo del gran quemado.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Manejo del trauma mayor.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Manejo de pacientes infectados por (VIH).
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Quimioterapia y radioterapia para el cáncer.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Manejo de pacientes en unidad de cuidados intensivos.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#283DE2")
                  | Tratamiento quirúrgico de enfermedades congénitas.
    .row.mb-4(data-aos="fade-down")
      .col-auto 
        .px-4.bg-c12
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema3/img3.svg', style="width:50px" alt='').m-auto
            .col
              h3 Manuales tarifarios
    .row.mb-4
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p Existen el Manual Tarifario ISS (Acuerdo 256 de 2001 y Acuerdo 312 de 2004) y el Manual Tarifario SOAT (Decreto 2423 de 1996) como referentes para el cobro de atenciones en la prestación del servicio de salud en Colombia, sin dejar de lado que los contratos que regulan las operaciones comerciales de la prestación del servicio pueden variar según las negociaciones establecidas por las partes contratantes.
        p.mb-0 Este manual está organizado y clasificado por nivel de atención en el Plan de Beneficios del Sistema, como se ve a continuación:
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img4.png', style="width:290px" alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .row
          .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img5.png', style="width:250px" alt='').m-auto
          .col.ps-0
            .ps-4.ps-lg-0.py-4.pe-4.bg-c7.h-100
              .row
                .col-12
                  .p-4.bg-c8
                    p.mb-0 EI Manual Tarifario ISS utiliza la Unidad de Valor Relativo (UVR) según puntos establecidos, y se pueden pactar porcentajes adicionales o reducidos de puntos de valor para cada cobro. Por su parte, eI tarifario SOAT cuenta con una tarifa establecida anualmente y se actualiza en enero de cada año, acorde con el incremento del salario mínimo legal vigente en el país.

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
