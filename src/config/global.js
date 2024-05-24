export default {
  global: {
    componenteFormativo:
      'Normativa y procedimientos para la facturación en el sistema de salud colombiano',
    descripcionCurso:
      'La normativa colombiana desde 1993, con la Ley 100, regula la facturación de servicios de salud, optimizando el flujo de caja de las Instituciones Prestadoras de Servicios de Salud (IPS). Esto incluye detallados procedimientos y términos para la recuperación equitativa de costos y la humanización del servicio. Destacan resoluciones como la 3047 de 2008 y el Decreto 4747 de 2007, que especifican formatos, términos y procedimientos para el efectivo cobro y pago de los servicios de salud.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normatividad',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La factura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tipos de usuarios y planes de beneficios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Acuerdo de voluntades y normatividad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Sistema de selección y clasificación de pacientes en urgencias “Triage”',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Registro Individual de Prestación de Servicio de Salud (RIPS)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Historias clínicas y custodia de la información',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Sistema de selección y clasificación de pacientes en urgencias “Triage”',
      referencia: 'Emermédica Oficial (2022). Qué es el triage. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=93U719WgxyM&ab_channel=Emerm%C3%A9dicaOficial',
    },
    {
      tema: 'Registro Individual de Prestación de Servicio de Salud (RIPS)',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Redes integrales de prestadores de servicios de salud. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=ceMzqmSXdOU&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Historias clínicas y custodia de la información',
      referencia:
        'Noticias Caracol (2018). ¡Es un documento privado! Solo en estos casos puede pedir copia de su historia clínica. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=uYCnttSp9Ew&ab_channel=NoticiasCaracol',
    },
  ],
  glosario: [
    {
      termino: 'Ley 100 de 1993',
      significado:
        'ley que establece el Sistema General de Seguridad Social en Salud en Colombia, entre otros sistemas complementarios.',
    },
    {
      termino: 'IPS (Instituciones Prestadoras de Servicios de Salud)',
      significado:
        'organizaciones encargadas de prestar servicios médicos y de salud a los afiliados del sistema de salud.',
    },
    {
      termino: 'EPS (Entidades Promotoras de Salud)',
      significado:
        'entidades encargadas de administrar los planes de salud y asegurar la prestación de los servicios médicos a sus afiliados bajo el sistema de salud colombiano.',
    },
    {
      termino: 'Resolución 3047 de 2008',
      significado:
        'establece formatos, mecanismos de envío, procedimientos y términos en las relaciones entre prestadores de servicios de salud y entidades responsables del pago.',
    },
    {
      termino: 'Decreto 4747 de 2007',
      significado:
        'regula aspectos de las relaciones entre prestadores de servicios de salud y entidades responsables del pago de los servicios de salud.',
    },
    {
      termino: 'Flujo de caja',
      significado:
        'gestión del efectivo que entra y sale en una entidad, en este contexto, relacionado con el pago y cobro por servicios de salud.',
    },
    {
      termino: 'Humanización del servicio',
      significado:
        'enfoque en la prestación de servicios de salud que prioriza el cuidado, la ética y la calidad en el trato a los pacientes, asegurando un servicio digno y respetuoso.',
    },
  ],
  referencias: [
    {
      referencia:
        'Colombia. (1993). Ley 100 de 23 de diciembre de 1993 por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones. Diario Oficial No. 41.148.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2007). Decreto 4747 de 7 de diciembre de 2007 Por medio del cual se regulan algunos aspectos de las relaciones entre los prestadores de servicios de salud y las entidades responsables del pago de los servicios de salud de la población a su cargo, y se dictan otras disposiciones Diario Oficial No. 46.827.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2008). Resolución 3047 de 29 de agosto de 2008 por la cual se definen, para todos los actores del Sistema General de Seguridad Social en Salud, los procedimientos y condiciones que deben cumplir los Prestadores de Servicios de Salud y las Entidades Promotoras de Salud para la solicitud, autorización, realización y cobro de los servicios de salud. Diario Oficial No. 47.091.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2012). Resolución 4331 de 2012 por la cual se adicionan y modifican parcialmente la Resolución 3047 de 2008.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2015). Resolución 1479 de 2015 por la cual se señala el procedimiento para el cobro y pago de servicios y tecnologías sin cobertura en el POS, para afiliados al Régimen Subsidiado.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2016). Resolución 6408 de 2016 por la cual se modifica el Plan de Beneficios en Salud con cargo a la UPC e incluye anexos técnicos.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2017). Resolución 1132 de 2017 por la cual se modifica la Resolución 4678 de 2015, adopta la CUPS y dicta otras disposiciones relacionadas con la Resolución 6408 de 2016.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2015). Resolución 5592 de 2015 que actualiza integralmente el Plan de Beneficios en Salud con cargo a la Unidad de Pago por Capitación.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2000). Resolución 3374 de 2000 que reglamenta los datos básicos que deben reportar los prestadores de servicios de salud y las entidades administradoras de planes de beneficios sobre los servicios de salud prestados.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2016). Resolución 6411 de 2016 que fija el valor de la UPC para la cobertura del plan de beneficios en salud de los regímenes contributivo y subsidiado en la vigencia 2017.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2017). Resolución 1687 de 2017 que sustituye el Anexo 2 "Listado de Procedimientos en Salud del Plan de Beneficios en Salud con cargo a la UPC" de la Resolución 6408 de 2016 y dicta otras disposiciones.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Claudia Patricia Velásquez Orozco',
          cargo: 'Experta Temática',
          centro:
            'Centro de Formación en Talento Humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y Producción audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador de Recursos Educativos Digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Margarita Marcela Medrano Gómez',
        //  cargo: 'Evaluador para contenidos inclusivos y accesibles',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
