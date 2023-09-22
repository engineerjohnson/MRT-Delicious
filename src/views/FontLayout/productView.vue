<script>
import addToCard from "../../components/addToCard.vue";
import Toast from "../../utils/Toast.js";
import axios from "axios";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
// 載入loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
export default {
  data() {
    return {
      isLoading : false,
      product : {},
      cart_qty : "1",
    };
  },
  components : {
    addToCard,
    Loading
  },
  methods : {
    getProduct() {
      this.isLoading = true;
      axios.get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/product/${this.$route.params.productId}`)
      .then((res)=>{
        this.product = res.data.product;
        this.isLoading = false;
      })
      .catch((err)=>{
        this.isLoading = false;
        Toast.fire({
          title : `${err.response.data.message}`,
          icon : "error",
        });
      });
    }
  },
  mounted() {
    this.getProduct();
  }
};
</script>

<template>
  <Loading v-model:active="isLoading" :loader="'dots'"/>
  <div class="content">
    <div class="container py-5">
      <div class="row pt-5 justify-content-center">
        <div class="col-lg-5">
          <img :src="this.product.imageUrl" :alt="this.product.title" class="w-100 radius-img">
        </div>
        <div class="col-lg-5">
          <div class="mt-lg-0 ms-lg-3 mt-sm-3">
            <h3>{{ this.product.title }}</h3>
            <span class="badge rounded-pill bg-warning fs-6 mb-2">{{ this.product.unit }}</span>
            <div>
              <p class="mb-2">商品描述：{{ this.product.description }}</p>
              <p>營業時段 {{ this.product.content }}</p>
              <div class="d-flex align-items-center mb-2">
                <span>數量：</span>
                <div class="border border-dark bg-light">
                  <button type="button" class="btn" @click="this.cart_qty--"> - </button>
                  <input type="number" class="text-center border-0" v-model="this.cart_qty">
                  <button type="button" class="btn" @click="this.cart_qty++"> + </button>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span class="fw-bold fs-5">${{ this.product.price }}</span>
                </div>
                <div class="">
                  <addToCard :product_id = this.product.id :qty = this.cart_qty></addToCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .radius-img{
    border-radius: 10px;
  }
</style>