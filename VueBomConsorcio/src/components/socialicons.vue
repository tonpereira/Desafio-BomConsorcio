<template>
  <div class="row text-center">
    <div class="col" v-for="item in icones" :key="item.index">
      <i :class="item.icone"></i>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { defineComponent } from "vue";

export default defineComponent({
  name: "socialicons",
  data() {
    return {
      icones: [
        { icone: "fa-brands fa-instagram" },
        { icone: "fa-brands fa-facebook-f" },
        { icone: "fa-brands fa-youtube" },
        { icone: "fa-brands fa-linkedin-in" },
        { icone: "fa-brands fa-twitter" },
      ],
    };
  },
  components: {},
  mounted() {},
});
</script>
