<template>
  <q-layout view="hHh lpR fff">
    <headerpage />

    <q-page-container>
      <router-view />
    </q-page-container>

    <footerpage />
  </q-layout>
</template>

<script>
/* eslint-disable */
import { defineComponent } from "vue";
import headerpage from "components/header.vue";
import footerpage from "components/footer.vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      labelBtnComprar: "Comprar consórcio",
      labelBtnVender: "Vender consórcio",
    };
  },
  components: { headerpage, footerpage },
  mounted() {},
});
</script>
