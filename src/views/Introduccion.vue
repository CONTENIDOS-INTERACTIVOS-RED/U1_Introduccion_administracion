<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno(subTitulo="Introducción")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .bg-full-width.bg-fondo-1.mb-5(data-aos="fade-up")
        .px-5.py-4
          .row.justify-content-center.mb-5
            .col-sm-12.col-lg-7
              .bg-color-1.p-4.mb-4
                p.mb-0 La Unidad 1, titulada "Fundamentos de la administración", tiene como resultado de aprendizaje, reconocer y aplicar los principios básicos de la administración, en contextos organizacionales, identificando sus características y su relevancia en el entorno empresarial. En esta unidad, se sentarán las bases conceptuales necesarias para entender los principios administrativos, su evolución histórica y su relación con diversas disciplinas complementarias. Este conocimiento permitirá a los estudiantes comprender cómo los procesos administrativos, apoyan el logro de objetivos organizacionales.
              p.mb-0 Durante la unidad, se explorarán temas como las características universales de la administración, sus etapas y principios básicos. También se abordará la importancia de la administración como disciplina esencial para la gestión eficiente de recursos humanos, materiales y financieros, en cualquier tipo de organización. Los estudiantes tendrán la oportunidad de analizar ejemplos prácticos y desarrollar habilidades en planificación, organización, dirección y control.
            .col-sm-12.col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/intro/1.svg', alt='')
          .row.justify-content-center
            .col-sm-12.col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/intro/3.png', alt='')
            .col-sm-12.col-lg-7
              .bg-color-2.p-4.mb-4
                .row.align-items-start
                  .col-lg-2.d-none.d-lg-block
                    img(src="@/assets/curso/intro/2.svg").mx-auto
                  .col-lg
                    p.mb-1 Además, se presentará un recorrido histórico sobre la evolución de la administración, desde los enfoques clásicos, hasta las perspectivas contemporáneas. Esta visión permitirá a los estudiantes reflexionar sobre la aplicación de los fundamentos administrativos en escenarios actuales y su papel en la solución de problemas organizacionales. Con actividades prácticas y recursos interactivos, esta unidad fomenta un aprendizaje integral que conecte teoría y práctica.
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
