<template>
  <div class="owl-carousel owl-theme carouselCards mb-lg-0 mb-md-0 mb-4">
    <div class="item" v-for="item in cards" :key="item.index">
      <div class="card border-0 text-center">
        <div :class="'iconCards ' + item.cor">
          <img :src="'img/' + item.img" alt="" />
          <!-- <i class="fa-regular fa-file"></i> -->
        </div>
        <div class="detalhesCards">
          <p class="tituloCard mb-1" v-html="item.titulo"></p>
          <p class="textoCard" v-html="item.subtitulo"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { defineComponent } from "vue";

export default defineComponent({
  name: "carouselabrirconta",
  data() {
    return {
      cards: [
        {
          cor: "bg-roxoGradient",
          img: "icon_simplicidade.svg",
          titulo: "Simplicidade",
          subtitulo: "Confira a proposta e anexe os documentos",
        },
        {
          cor: "bg-verdeGradient",
          img: "icon_comodidade.svg",
          titulo: "Comodidade",
          subtitulo: "Assine o contrato online pelo nosso site",
        },
        {
          cor: "bg-salmaoGradient",
          img: "icon_felicidade.svg",
          titulo: "Felicidade",
          subtitulo: "Aguarde o recebimento do seu dinheiro",
        },
      ],
    };
  },
  components: {},
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
