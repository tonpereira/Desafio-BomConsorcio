<template>
  <q-page class="container">
    <div class="row my-md-4">
      <jasoucliente />
      <abrirconta />
    </div>
  </q-page>
</template>

<script>
/* eslint-disable */
import abrirconta from "components/abrirconta.vue";
import jasoucliente from "components/jasoucliente.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: { abrirconta, jasoucliente },
});
</script>
