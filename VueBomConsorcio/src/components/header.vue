<template>
  <nav
    class="navbar navbar-expand-lg navbar-expand-xs shadow-sm navbar-light bg-white navClass"
  >
    <div class="container">
      <div class="logo col-auto">
        <a class="navbar-brand" href="#">
          <img class="gt-xs inline" src="/img/logo.png" alt="BomConsórcio" />
          <img
            class="lt-sm inline"
            src="/img/icon_logo.png"
            alt="BomConsórcio"
          />
        </a>
      </div>
      <div class="col me-lg-2 d-none d-lg-block">
        <div class="collapse navbar-collapse float-end" id="navbarNav">
          <ul class="navbar-nav roboto-14-500 preto-menu color-comprar">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Quem Somos</a
              >
              <ul
                class="dropdown-menu roboto-14-500 p-2"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a class="dropdown-item ps-0" href="#">Bom Consórcio</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item ps-0" href="#"
                    >Perguntas Frequentes</a
                  >
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item ps-0" href="#"
                    >Compromisso com Impacto</a
                  >
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item ps-0" href="#">Guia do Consórcio</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item ps-0" href="#">Blog</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Segurança</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#"
                >Seja nosso Parceiro</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Minha Conta</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-auto">
        <button
          type="button"
          id="IdbtnComprar"
          class="q-mr-sm btn btnTopo border-2 nunito-20-semibold border-comprar color-comprar btn-outline rounded-pill"
        >
          Comprar consórcio
        </button>
        <button
          type="button"
          id="IdbtnVender"
          class="btn btnTopo border-2 nunito-20-semibold border-vender color-vender btn-outline rounded-pill"
        >
          Vender consórcio
        </button>
      </div>
      <div class="col-auto col-xs-auto">
        <button
          class="navbar-toggler ms-2 border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="col-12 d-block d-lg-none d-xl-none">
        <div class="collapse navbar-collapse float-start" id="navbarNav">
          <ul class="navbar-nav roboto-14-500 preto-menu color-comprar">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Quem Somos</a
              >
              <ul
                class="dropdown-menu roboto-14-500 p-2"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a class="dropdown-item ps-0" href="#">Bom Consórcio</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item ps-0" href="#"
                    >Perguntas Frequentes</a
                  >
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item ps-0" href="#"
                    >Compromisso com Impacto</a
                  >
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item ps-0" href="#">Guia do Consórcio</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item ps-0" href="#">Blog</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Segurança</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#"
                >Seja nosso Parceiro</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Minha Conta</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
/* eslint-disable */
import { defineComponent } from "vue";

export default defineComponent({
  name: "headercomponent",
  data() {
    return {
      largura: "",
    };
  },
  components: {},
  methods: {
    alteracaoCelular(largura) {
      // console.log("testt");
      if (largura <= 576) {
        $("button#IdbtnComprar").text("Comprar");
        $("button#IdbtnVender").text("Vender");
        $("nav.navbar").removeClass("shadow-sm");
      } else {
        $("button#IdbtnComprar").text("Comprar consórcio");
        $("button#IdbtnVender").text("Vender consórcio");
        $("nav.navbar").addClass("shadow-sm");
      }
    },
  },
  mounted() {
    this.largura = $(document).width();
    this.alteracaoCelular(this.largura);
    var self = this;

    $(window).resize(function () {
      self.largura = $(document).width();
      self.alteracaoCelular(self.largura);
    });
  },
});
</script>
