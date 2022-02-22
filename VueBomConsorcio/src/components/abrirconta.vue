<template>
  <div class="criarconta col-md-6 col-sm-12 col-xs-12">
    <h1 class="">Abra agora <span>a sua conta</span></h1>
    <p class="subTitle">
      Venha conosco e em poucos passos você poderá comprar e vender consórcios.
    </p>
    <button
      type="button"
      class="btn my-3 btnNovaConta nunito-20-semibold text-white rounded-pill"
    >
      Criar nova conta
    </button>
    <!-- itens -->
    <div class="row">
      <carouselcards />
    </div>
    <!-- itens -->
  </div>
</template>

<script>
/* eslint-disable */

import { defineComponent } from "vue";
import carouselcards from "components/carouselabrirconta.vue";

export default defineComponent({
  name: "abrirconta",
  components: { carouselcards },
  mounted() {
    $(".owl-carousel.carouselCards").owlCarousel({
      loop: false,
      margin: 10,
      responsiveClass: true,
      mouseDrag: false,
      responsive: {
        0: {
          items: 2,
          nav: false,
          dots: true,
        },
        600: {
          items: 2,
          nav: false,
          dots: true,
        },
        1000: {
          items: 3,
          nav: true,
          dots: false,
        },
      },
    });
  },
});
</script>
