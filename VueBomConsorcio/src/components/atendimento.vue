<template>
  <div>
    <h3 class="tituloFooter" v-html="titulo"></h3>
    <ul class="listaEmpresafooter mb-4">
      <li class="mb-3" v-for="item in numeros" :key="item.index">
        {{ item.numero }}
        <br />({{ item.local }})
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable */
import { defineComponent } from "vue";

export default defineComponent({
  name: "centralatendimento",
  data() {
    return {
      titulo: "Canais de atendimento",
      numeros: [
        { numero: "4007-2647", local: "capitais e regiões metropolitanas" },
        { numero: "0800-005-3001", local: "outras localidades" },
      ],
    };
  },
  components: {},
  mounted() {},
});
</script>
