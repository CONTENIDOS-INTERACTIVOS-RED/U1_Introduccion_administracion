export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de la administración',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Concepto de administración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características de la administración',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Evolución histórica de la administración',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bonatti, P. (2020). La administración del siglo XXI: organizaciones transformadoras. Pluma Digital Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/125464/',
    },
    {
      referencia:
        'Gutiérrez Aragón, Ó. (2016). Fundamentos de administración de empresas (2 ed.). Ediciones Pirámide.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/49177?page=7',
    },
    {
      referencia:
        'Salgado Benítez, J. Guerrero López, L. & Salgado Hernández, N. (2016). Fundamentos de Administración. Grupo Editorial Éxodo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/130328',
    },
    {
      referencia:
        'Pérez Calle, R. (2023). Nuevas tendencias en gestión e innovación empresarial: adaptación a los nuevos escenarios globales y domésticos. Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/245436/',
    },
    {
      referencia:
        'Marcelino Aranda, M. (2015). Administración de la calidad: nuevas perspectivas. Grupo Editorial Patria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/39376/',
    },
    {
      referencia:
        'Jiménez Paternina, L. L., Chumaceiro Hernández, A. C. & Acurero Luzardo, M. T. (2018). Enfoques, teorías y perspectivas de la administración y sus programas académicos. Corporación Universitaria del Caribe - CECAR.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/217589/',
    },
    {
      referencia:
        'Zalazar, R. J. (2012). Introducción a la administración: paradigmas en las organizaciones. EUMED.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/51722/',
    },
    {
      referencia:
        'Ramírez Cardona, C. (2010). Fundamentos de administración (3 ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69115/',
    },
  ],
  glosario: [
    {
      termino: 'Administración',
      significado:
        'Ciencia social que gestiona recursos para lograr objetivos organizacionales.',
    },
    {
      termino: 'Control',
      significado: 'Evaluación y ajuste de actividades para cumplir metas.',
    },
    {
      termino: 'Eficiencia',
      significado: 'Capacidad de alcanzar objetivos con el mínimo de recursos.',
    },
    {
      termino: 'Eficacia',
      significado: 'Logro de metas propuestas de manera exitosa.',
    },
    {
      termino: 'Interdisciplinariedad',
      significado:
        'Integración de conocimientos de diversas disciplinas en la administración.',
    },
    {
      termino: 'Jerarquía',
      significado: 'Estructura de niveles de autoridad en una organización.',
    },
    {
      termino: 'Organización',
      significado: 'Distribución y coordinación de recursos y actividades.',
    },
    {
      termino: 'Productividad',
      significado:
        'Relación entre los recursos utilizados y los resultados obtenidos.',
    },
    {
      termino: 'Planificación',
      significado:
        'Proceso de definir objetivos y estrategias para alcanzarlos.',
    },
    {
      termino: 'Recursos Humanos',
      significado: 'Gestión de personas dentro de una organización.',
    },
    {
      termino: 'Recursos Financieros',
      significado: 'Fondos disponibles para operar y desarrollar una empresa.',
    },
    {
      termino: 'Revolución Industrial',
      significado:
        'Periodo histórico que dio origen a las primeras teorías administrativas.',
    },
    {
      termino: 'Universalidad',
      significado:
        'Presencia de la administración en cualquier organización social.',
    },
  ],
  complementario: [],
}
