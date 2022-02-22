<template>
  <div>
    <h3 class="tituloFooter" v-html="titulo"></h3>
    <ul class="listaEmpresafooter">
      <li v-for="item in menus" :key="item.index">
        <a class="text-white" :href="item.link" v-html="item.label"></a>
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable */
import { defineComponent } from "vue";

export default defineComponent({
  name: "menufooter",
  data() {
    return {
      titulo: "A empresa",
      menus: [
        { link: "#", label: "Quem Somos" },
        { link: "#", label: "Segurança" },
        { link: "#", label: "Seja nosso Parceiro" },
        { link: "#", label: "Perguntas Frequentes" },
        { link: "#", label: "Blog" },
        { link: "#", label: "Guia do Consórcio" },
        { link: "#", label: "Compromisso com impacto" },
        { link: "#", label: "Termos de Uso" },
        { link: "#", label: "Trabalhe Conosco" },
      ],
    };
  },
  components: {},
  mounted() {},
});
</script>
