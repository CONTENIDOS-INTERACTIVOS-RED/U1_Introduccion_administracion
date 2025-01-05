<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3.Importancia de la administración en las organizaciones'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center(data-aos="flip-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/t3/1.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-4 Según Ramírez Cardona (2010), la administración es fundamental en las organizaciones, porque proporciona las bases para planificar, organizar, dirigir y controlar, los recursos, de manera eficiente. Su importancia radica en la capacidad de coordinar esfuerzos humanos, materiales y financieros, para alcanzar objetivos estratégicos y metas operativas. 
        .bg-color-4.p-4.mb-5
          .row.align-items-start
            .col-lg-2.d-none.d-lg-block
              img(src="@/assets/curso/t3/2.svg").mx-auto
            .col-lg
              p.mb-0 Una buena administración asegura que las decisiones se tomen de forma racional y basada en datos, lo que permite la optimización del uso de recursos, la minimización de riesgos y la adaptación a cambios en el entorno.
    p.mb-3(data-aos="flip-up") Además, la administración facilita la comunicación y la cooperación entre diferentes áreas y departamentos, lo que mejora la productividad y la calidad de los productos o servicios ofrecidos. Esto se refleja en los siguientes aspectos:
    .bg-full-width.bg-fondo-2.mb-0(data-aos="flip-up")
      .p-4.p-md-5
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-4.pe-xl-8.d-none.d-lg-block
              img(src='@/assets/curso/t3/3.png')
          .col-11.col-md-8.col-xl-7
            SlyderF(columnas="col-12 col-lg-6")
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t3/4.svg' alt='Icono adaptabilidad')
                    h4.text-center Adaptabilidad al entorno
                    p.mb-0.text-center La administración permite a las organizaciones responder a cambios en su entorno, promoviendo soluciones innovadoras y anticipando desafíos.

              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t3/6.svg' alt='Icono competitividad')
                    h4.text-center Competitividad en PYMES
                    p.mb-0.text-center En el caso de las pequeñas y medianas empresas, la administración efectiva es una herramienta indispensable para mantenerse competitivas en mercados exigentes.

              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t3/7.svg' alt='Icono éxito')
                    h4.text-center Éxito organizacional
                    p.mb-0.text-center Las entidades sociales, al gestionar correctamente sus recursos humanos y materiales, logran optimizar sus niveles de productividad y alcanzar sus metas.

              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t3/8.svg' alt='Icono desarrollo')
                    h4.text-center Desarrollo organizacional
                    p.mb-0.text-center Mediante técnicas administrativas eficientes, las organizaciones pueden impulsar su crecimiento y consolidar su posición en el mercado.

              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t3/9.svg' alt='Icono mejora')
                    h4.text-center Mejora continua
                    p.mb-0.text-center Uno de los principios fundamentales de la administración es trabajar constantemente en el perfeccionamiento de procesos para alcanzar mejores resultados.
    .bg-full-width.bg-color-8.mb-0(data-aos="flip-up")
      .px-5.py-4
        p.mb-0.fw-bold Además, la administración se fundamenta en pilares como:
    .bg-full-width.bg-fondo-4.p-5.mb-0(data-aos="flip-up")
      SlyderA(tipo='b').bg-white
        .row.justify-content-center.p-5
          .col-lg-5.col-7.d-none.d-lg-block: img(src='@/assets/curso/t3/10.png', alt='Imagen simplificación del trabajo')
          .col-lg-7.mb-lg-0.mb-3
            h4 Simplificación del trabajo
            p.mb-0 La aplicación de principios y métodos administrativos, contribuye para agilizar procesos y aumentar la efectividad organizacional.

        .row.justify-content-center.p-5
          .col-lg-5.col-7.d-none.d-lg-block: img(src='@/assets/curso/t3/11.png', alt='Imagen universalidad')
          .col-lg-7.mb-lg-0.mb-3
            h4 Universalidad
            p.mb-0 Es una disciplina necesaria para el funcionamiento de cualquier organismo social, independiente de su tamaño o tipo.

        .row.justify-content-center.p-5
          .col-lg-5.col-7.d-none.d-lg-block: img(src='@/assets/curso/t3/12.png', alt='Imagen productividad y eficiencia')
          .col-lg-7.mb-lg-0.mb-3
            h4 Productividad y eficiencia
            p.mb-0 La correcta implementación de la administración está directamente vinculada al éxito operativo y al aprovechamiento óptimo de los recursos.

        .row.justify-content-center.p-5
          .col-lg-5.col-7.d-none.d-lg-block: img(src='@/assets/curso/t3/13.png', alt='Imagen bien común')
          .col-lg-7.mb-lg-0.mb-3
            h4 Bien común
            p.mb-0 Al gestionar recursos de manera adecuada, la administración promueve beneficios no solo para la organización, sino también para la comunidad en general.

    .bg-full-width.bg-color-2.mb-4
      .px-5.py-4
        .row.align-items-center(data-aos="flip-up")
          .col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/t3/14.svg").mx-auto
          .col-lg
            p.mb-0 Estos principios subrayan cómo la administración asegura el éxito organizacional, sino y contribuye al bienestar social y al progreso económico. 


    .row.justify-content-center(data-aos="flip-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/t3/15.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-4  La falta de una correcta y adecuada administración, puede tener consecuencias graves y de amplio alcance, en una organización. Sin una gestión adecuada, es común que los recursos sean utilizados de manera ineficiente, lo que genera desperdicios y aumenta los costos operativos. Esto afecta la rentabilidad, y limita la capacidad de la organización para invertir en innovación, capacitación, o expansión.
        .bg-color-4.p-4.mb-5
          p.mb-0  La falta de planificación lleva a la pérdida de dirección y enfoque, lo que resulta en objetivos poco claros o inconsistentes, además desencadena conflictos internos, duplicación de esfuerzos y una mala asignación de recursos, afectando la productividad y la moral de los empleados. De igual forma, a largo plazo, la carencia de administración adecuada, puede generar una cultura organizacional desorganizada y desmotivadora, impactando negativamente en la satisfacción laboral y en la retención del talento.





    .bg-full-width.bg-fondo-2.mb-0
      .px-5.py-4
        .row.align-items-center(data-aos="flip-up")
          .col-sm-12.col-lg-6
            .row.justify-content-center
              .col-sm-12.col-lg-12
                .bg-color-3.p-4.mb-5
                  p.mb-0  Desde el punto de vista del control y la supervisión, una administración deficiente puede provocar una falta de monitoreo adecuado, sobre el desempeño organizacional, lo que facilita errores, irregularidades y hasta posibles fraudes; además, sin un liderazgo claro, la toma de decisiones se vuelve reactiva en lugar de proactiva, dificultando la capacidad de la organización para adaptarse a cambios en el entorno, como nuevas exigencias de mercado, cambios tecnológicos o fluctuaciones económicas. 
                p.mb-4 En términos de relaciones con los clientes y otras partes interesadas, la falta de administración efectiva puede resultar en una pobre atención al cliente, pérdida de confianza y reputación dañada, lo que a su vez puede impactar en la competitividad y participación en el mercado. Las organizaciones con administración ineficaz, también suelen enfrentar dificultades en la implementación de nuevas estrategias o proyectos, debido a la falta de estructura y dirección claras.
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src="@/assets/curso/t3/16.svg").mx-auto



    .bg-full-width.bg-color-4.mb-0
      .px-5.py-4
        .row.align-items-center(data-aos="flip-up")
          .col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/t3/14.svg").mx-auto
          .col-lg
            p.mb-0 Teniendo en cuenta lo anterior, se puede concluir que la ausencia de una administración adecuada, lleva a la desorganización, la falta de eficiencia y la pérdida de oportunidades estratégicas, lo que puede resultar en un declive general del rendimiento y sostenibilidad de la organización, en el largo plazo.

    .bg-full-width.border-top.actividad.ctn-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario='cuestionario'/>

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    cuestionario: {
      tema: 'Inclusión y Diversidad',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste sobre inclusión y diversidad respondiendo las siguientes preguntas.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'En una escuela rural, se detectó que un estudiante con discapacidad auditiva no logra acceder a las lecciones debido a la falta de intérpretes. ¿Qué principio de inclusión se debe aplicar para resolver esta situación?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Equidad',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Accesibilidad',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Autonomía',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Justicia',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La accesibilidad es fundamental para garantizar que todos los estudiantes puedan participar efectivamente en el proceso educativo.',
          mensaje_incorrecto:
            'No es correcto. Recuerda que la accesibilidad es el principio que garantiza el acceso a la educación para todos.',
        },
        {
          id: 2,
          texto:
            'Una empresa adapta los espacios y horarios laborales para permitir que una empleada en silla de ruedas se integre sin dificultades. ¿Qué tipo de inclusión se está aplicando en este caso?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inclusión laboral',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Inclusión social',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inclusión cultural',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inclusión escolar',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La inclusión laboral implica adaptar el entorno de trabajo para garantizar la participación plena de todos los empleados.',
          mensaje_incorrecto:
            'No es correcto. La adaptación del espacio de trabajo corresponde a la inclusión laboral.',
        },
        {
          id: 3,
          texto:
            'En un aula diversa, se incluye un programa de aprendizaje bilingüe para estudiantes indígenas que están aprendiendo español. ¿A qué tipo de diversidad responde este caso?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diversidad cultural',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diversidad de género',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diversidad étnica',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diversidad lingüística',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Este caso refleja el respeto y la adaptación a la diversidad cultural en el entorno educativo.',
          mensaje_incorrecto:
            'No es correcto. El programa bilingüe responde principalmente a la diversidad cultural de los estudiantes.',
        },
        {
          id: 4,
          texto:
            'En una institución educativa, un niño diagnosticado con hiperactividad tiene dificultades para concentrarse durante las clases tradicionales. El docente decide implementar actividades interactivas y pausas activas. ¿Qué principio de la inclusión está aplicando el docente?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Autonomía',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Participación',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Equidad',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Universalización',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El docente está promoviendo la participación activa del estudiante mediante estrategias adaptadas.',
          mensaje_incorrecto:
            'No es correcto. Las actividades interactivas buscan fomentar la participación del estudiante.',
        },
        {
          id: 5,
          texto:
            'En una empresa, el departamento de recursos humanos diseña procesos de selección que consideran a personas con discapacidad y ajusta entrevistas según sus necesidades. ¿Qué tipo de inclusión refleja este escenario?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inclusión laboral',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Inclusión escolar',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inclusión social',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inclusión comunitaria',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La adaptación de los procesos de selección es un ejemplo claro de inclusión laboral.',
          mensaje_incorrecto:
            'No es correcto. Las adaptaciones en procesos de selección corresponden a la inclusión laboral.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Has demostrado un excelente entendimiento de los principios de inclusión y diversidad.',
      mensaje_final_reprobado:
        'Te invitamos a revisar nuevamente el material sobre inclusión y diversidad para reforzar tus conocimientos.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
