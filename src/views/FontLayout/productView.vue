<script>
import axios from "axios";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
// 載入loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
export default {
  data() {
    return {
      isLoading : false,
    };
  },
  components : {
    Loading
  },
  methods : {
    getProduct() {
      this.isLoading = true;
      axios.get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/product/${this.$route.params.productId}`)
    }
  },
  mounted() {

  }
};
</script>

<template>
  <Loading v-model:active="isLoading" :loader="'dots'"/>
  <div class="content">
    <div class="container">
      <div>

      </div>
    </div>
  </div>
</template>

