<template>
  <q-footer class="text-white q-py-lg">
    <div class="container d-none d-sm-block">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <a href="#">
            <img src="img/logo_branca.png" alt="BomConsórcio" />
          </a>
          <p class="textFooterGotham mt-2">
            Nosso propósito: Conectar pessoas e oportunidades no mercado de
            consórcios.
          </p>
          <img
            src="img/logo_abac.png"
            class="img-fluid mb-4"
            alt="ABAC certificada"
          />
          <img
            class="img-fluid"
            src="img/Logo_empresa_certificada.png"
            alt="empresa certificada"
          />
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <menufooter />
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <produtosfooter />
          <h3 class="tituloFooter">Baixe o App</h3>
          <img
            class="img-fluid mb-3"
            src="img/bt-app-store.png"
            alt="Disponível AppStore"
          />
          <img
            class="img-fluid"
            src="img/bt-google-play.png"
            alt="Disponível GooglePlay"
          />
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <atendimento />
          <img
            class="img-fluid me-2"
            src="img/A3FinTechs.png"
            alt="A3FinTechs"
          />
          <img
            class="img-fluid"
            src="img/SiteProtegido.png"
            alt="Site Protegido"
          />
        </div>
      </div>
    </div>
    <!-- footer mobile -->
    <div
      class="container d-block d-sm-none d-md-none d-lg-none d-xl-none text-center"
    >
      <a href="#"><img src="img/logo_branca.png" alt="BomConsórcio" /></a>
      <p class="textFooterGotham mt-2">
        Nosso propósito: Conectar pessoas e oportunidades no mercado de
        consórcios.
      </p>
      <button
        type="button"
        class="btn btnFaleConosco nunito-20-semibold bg-white rounded-pill"
      >
        Fale Conosco
      </button>
      <div class="iconsFooter py-4">
        <socialicons />
      </div>
      <h3 class="tituloFooter">Baixe nosso aplicativo</h3>
      <img
        class="q-mr-sm"
        src="img/bt-app-store.png"
        alt="Disponível AppStore"
      />
      <img src="img/bt-google-play.png" alt="Disponível GooglePlay" />
      <div class="row pt-4 pb-0">
        <carouselfooter />
      </div>
    </div>
    <hr class="q-my-lg" />
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12">
          <p class="textEndereco mb-0">
            Av. Tancredo Neves, 1283, Sl. 502 | Salvador – BA. CEP. 41.820-021
            <br />
            Rua.Ministro Jesuino Cardoso, 633, 8º andar | Vila Olímpia – SP.
            CEP. 04.544-051
          </p>
        </div>
        <div
          class="col-lg-3 col-md-4 col-sm-4 col-xs-12 iconsFooter text-center"
        >
          <socialicons />
        </div>
      </div>
    </div>
  </q-footer>
</template>
<script>
/* eslint-disable */
import { defineComponent } from "vue";
import socialicons from "components/socialicons.vue";
import carouselfooter from "components/carouselfooter.vue";
import menufooter from "components/menufooter.vue";
import produtosfooter from "components/produtos.vue";
import atendimento from "components/atendimento.vue";

export default defineComponent({
  name: "pagefooter",
  data() {
    return {};
  },
  components: {
    socialicons,
    carouselfooter,
    menufooter,
    produtosfooter,
    atendimento,
  },
  mounted() {},
});
</script>
