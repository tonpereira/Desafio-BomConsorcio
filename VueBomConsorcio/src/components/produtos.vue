<template>
  <div>
    <h3 class="tituloFooter" v-html="titulo"></h3>
    <ul class="listaEmpresafooter mb-4">
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
  name: "produtosfooter",
  data() {
    return {
      titulo: "Produtos",
      menus: [
        { link: "#", label: "Minha Conta" },
        { link: "#", label: "Vender Consórcio" },
        { link: "#", label: "Comprar Consórcio" },
      ],
    };
  },
  components: {},
  mounted() {},
});
</script>
