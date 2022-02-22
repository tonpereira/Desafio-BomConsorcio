<template>
  <div class="owl-carousel owl-theme carouselfooter">
    <div class="item" v-for="item in imagens" :key="item.index">
      <img :src="'img/' + item.imagem" :alt="item.alt" />
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { defineComponent } from "vue";

export default defineComponent({
  name: "carouselfooter",
  data() {
    return {
      imagens: [
        { imagem: "logo-b-footer.png", alt: "Empresa certificada" },
        { imagem: "logo-abac-footer.png", alt: "ABAC - Empresa Associada" },
        { imagem: "a3fintechs-footer.png", alt: "A3FinTechs" },
        { imagem: "SiteProtegido.png", alt: "Site Protegido" },
      ],
    };
  },
  components: {},
  mounted() {
    $(".owl-carousel.carouselfooter").owlCarousel({
      loop: false,
      margin: 10,
      responsiveClass: true,
      mouseDrag: false,
      responsive: {
        0: {
          items: 3,
          nav: false,
          dots: true,
        },
        550: {
          items: 3,
          nav: false,
          dots: true,
        },
      },
    });
  },
});
</script>
