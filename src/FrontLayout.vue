<script>
import { RouterView } from "vue-router";
import banner from "../src/components/frontend/BannerComponent.vue";
import footerComported from "../src/components/frontend/FooterComponter.vue";
export default {
  components: {
    RouterView,
    banner,
    footerComported,
  },
};
</script>

<template>
  <banner id="banner"></banner>
  <RouterView></RouterView>
  <footerComported id="footer"></footerComported>
</template>
