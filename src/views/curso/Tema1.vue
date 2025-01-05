<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1.Concepto de administración'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    p.mb-3(data-aos="fade-up") Para comenzar a estudiar el contenido de esta unidad, debemos primero conocer qué es la administración.
    .bg-full-width.bg-color-3.mb-5(data-aos="flip-up")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-7
            h2.mb-4 Administración
            p.mb-4  La administración es una disciplina fundamental para el desarrollo eficiente de las organizaciones en el mundo moderno. Como ciencia social y herramienta estratégica, la administración permite dirigir, planificar, organizar y controlar recursos para alcanzar objetivos específicos. En el PDF Administración, se explorarán las principales definiciones, enfoques y áreas complementarias que sustentan la administración, destacando su evolución, su relación con disciplinas como la economía y la contabilidad, y su papel esencial en la gestión empresarial. Asimismo, se analizarán los debates académicos que definen su naturaleza, permitiendo una comprensión profunda de su impacto en la optimización de los procesos organizacionales y la toma de decisiones estratégicas.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/administracion.pdf')" target="_blank")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Administración
          .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/1.png', alt='')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Características de la administración
    p.mb-5(data-aos="fade-up") Teniendo claro el concepto de administración, conozcamos sus características:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t1/2.png")
      .col-sm-12.col-lg-8
        AcordionA(tipo="b")
          div(titulo="Universalidad") La administración está presente en cualquier organismo social, debido a que en todos ellos es necesario coordinar mancomunadamente, los recursos disponibles. Por esta razón, la encontramos en cabeza del Estado, las fuerzas armadas, las empresas, las instituciones educativas, las organizaciones religiosas, entre otros. Es posible encontrar variaciones; según la circunstancia específica, los elementos de la administración se mantienen constantes en todos los casos. Esto la convierte en una disciplina aplicable a cualquier organización social.
          div(titulo="Especificidad") La administración, aunque acompañe a otros fenómenos de naturaleza distinta, posee características que la hacen única y diferente. Por ejemplo, una persona puede ser sobresaliente en su área de recursos humanos, como la psicología organizacional, pero no destacar como administrador. Su carácter particular la distingue de otras ciencias o técnicas.
          div(titulo="Unidad temporal") La administración, a pesar de dividirse en etapas, fases y elementos, es un fenómeno único que está presente continuamente en una organización. Por ejemplo, mientras se elabora un plan, también se toman decisiones, se supervisa y se controla. Los distintos aspectos administrativos coexisten en mayor o menor medida.
          div(titulo="Unidad jerárquica") Todas las personas que ocupan posiciones de mando en una organización participan, de una u otra forma, en el proceso administrativo. En una empresa de industria textil, por ejemplo, este proceso incluye a toda la línea de mando, desde el gerente general hasta los supervisores.
    .bg-full-width.bg-fondo-1.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-8
            AcordionA(tipo="b")
              div(titulo="Instrumentalidad") La administración es una herramienta que permite a las organizaciones alcanzar sus metas de manera eficiente. Es utilizada como un medio para cumplir con los objetivos, previamente establecidos.
              div(titulo="Amplitud de aplicación") Puede ser ejercida en todos los niveles de una organización formal, incluyendo roles como presidentes, gerentes, supervisores y hasta personas en el hogar.
              div(titulo="Interdisciplinariedad") La administración se apoya en principios, procesos, métodos y técnicas de diversas disciplinas que contribuyen a la eficiencia laboral. Entre estas se encuentran las matemáticas, la estadística, el derecho, la economía, la contabilidad, el mercadeo, la sociología, la psicología, la filosofía y la antropología.
              div(titulo="Flexibilidad") Los métodos y principios administrativos pueden ajustarse a las necesidades específicas de cualquier organización o grupo social, lo que los hace aplicables a una amplia variedad de situaciones.
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src="@/assets/curso/t1/3.png")

        #t_1_2.titulo-segundo(data-aos="flip-up")
          h2 #[span 1.2] Evolución histórica de la administración
        .row.justify-content-center
          .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/t1/4.svg', alt='')
          .col-sm-12.col-lg-8
            p.mb-3 Con la Revolución Industrial, surgió la necesidad de perfeccionar el conocimiento empírico mediante un enfoque científico, dando lugar al pensamiento administrativo, que se ha desarrollado durante casi un siglo.
            .bg-color-1.p-4.mb-0
              .row.align-items-start
                .col-lg-2.d-none.d-lg-block
                  img(src="@/assets/curso/t1/5.svg").mx-auto
                .col-lg
                  p.mb-0 El análisis científico de las empresas ha sido objeto de amplio estudio; esta actividad ha sido continua desde principios del siglo XX. Ahora bien, en la actualidad, el pensamiento administrativo se ha consolidado generando un impacto social de gran importancia que a través de diversas áreas y enfoques, ha posicionado la administración de empresas como un motor clave en el desarrollo de las sociedades.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://www.redalyc.org/pdf/4259/425942331004.pdf' target='_blank' rel='noopener noreferrer') Aragón-Correa, J. A., Hurtado-Torres, N., Sharma, S. & García-Morales, V. J. (2008). Environmental strategy and performance in small firms: A resource-based perspective.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://revistas.unilibre.edu.co/index.php/revista_cultural/article/download/10624/10094/31895' target='_blank' rel='noopener noreferrer') Lopera Mesa, J. D. & Medina Quintero, C. F. (2022). Influencia de la cultura en la transformación social: Una mirada desde la educación.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0121-68052010000200005" target="_blank" rel="noopener noreferrer") López, P. A. & Mariño Arévalo, A. (2010). Hacia una evolución en el campo del conocimiento de la disciplina administrativa.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer") Chatgtp

            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Kl1dh8dtcBc" target="_blank" rel="noopener noreferrer") Felipe Delgado. (2020). Historia de la Administración de Empresas


          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')




















</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
