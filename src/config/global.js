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
      tema: 'Alimentación saludable',
      referencia:
        'INCMNSZ Educación para la Salud. (2021). <i>Alimentación sana - cerebro sano - INCMNSZ - Educación para la Salud</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vs2U6BvZ4U4',
    },
  ],
  glosario: [
    {
      termino: 'Carbohidratos',
      significado:
        'son macronutrientes que proporcionan energía al cuerpo, especialmente al cerebro y al sistema nervioso. Están compuestos principalmente de carbono, hidrógeno y oxígeno.',
    },
    {
      termino: 'Proteínas',
      significado:
        'macronutrientes esenciales compuestos de aminoácidos que el cuerpo utiliza para construir y reparar tejidos, producir enzimas y hormonas, y apoyar el sistema inmunológico.',
    },
    {
      termino: 'Grasas o lípidos',
      significado:
        'son un tipo de lípido y son macronutrientes importantes que el cuerpo utiliza para energía, aislamiento y protección de órganos vitales. Las grasas también facilitan la absorción de vitaminas solubles en grasa (A, D, E, K).',
    },
    {
      termino: 'Vitaminas',
      significado:
        'son micronutrientes que el cuerpo necesita en pequeñas cantidades para funcionar adecuadamente y mantener la salud. Son esenciales para procesos como la producción de energía, la función inmune, la coagulación de la sangre y funciones celulares.',
    },
    {
      termino: 'Minerales',
      significado:
        'son elementos inorgánicos que el cuerpo utiliza para numerosas funciones biológicas, como la construcción de huesos, la regulación del metabolismo y la garantización del funcionamiento adecuado de los nervios y músculos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Hernández, M. y Sastre, A. (1999). Tratado de nutrición. Madrid, España: Díaz de Santos.',
      link: '',
    },
    {
      referencia: 'Iñarritu, M. (s.f.). Elaboración de una dieta. ',
      link:
        'http://www.edu.xunta.es/centros/ieschapela/system/files/ELABORACI%C3%93N%20DIETAS_1.pdf',
    },
    {
      referencia:
        'Mataix, J. (2002). Nutrición y alimentación humana: Nutrientes y alimentos. Madrid, España: Ergon.',
      link: '',
    },
    {
      referencia:
        'Sección de programas de salud de la concejalía de sanidad del ayuntamiento de Valencia. (2009). 2 Guía de nutrición y alimentación saludable: la pirámide de la alimentación. ',
      link:
        'http://www.valencia.es/ayuntamiento/Sanidad.nsf/0/004DD7F111F0F31DC12575E6003BF9B2/$FILE/piramide_IMPR_reduc.pdf?OpenElement&lang=1',
    },
    {
      referencia:
        'Valero, T., Del Pozo, S., Ruiz, E., Ávila, J. y Varela, G. (s.f.). Guía nutricional de la carne. ',
      link: 'http://www.fedecarne.es/ficheros/swf/pdf/guiaNutricion.pdf',
    },
    {
      referencia:
        'Vázquez, C., De Cos, A. y López, C. (2005). Alimentación y nutrición: Manual teórico-práctico. Madrid, España: Díaz de Santos.',
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
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta Temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
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
