<script>
import addToCard from "../../components/frontend/AddToCard.vue";
import swiperProductCard from "../../components/frontend/SwiperProductCard.vue";
import produceStore from "../../stores/ProductStore.js";
import Toast from "../../utils/Toast.js";
import { mapState, mapActions } from "pinia";
import axios from "axios";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
// 載入loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
export default {
  data() {
    return {
      isLoading: false,
      product: {},
      cart_qty: 1,
    };
  },
  computed: {
    ...mapState(produceStore, ["standProduct"]),
  },
  components: {
    addToCard,
    swiperProductCard,
    Loading,
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      axios
        .get(
          `${VITE_APP_API}/v2/api/${VITE_APP_PATH}/product/${this.$route.params.productId}`
        )
        .then((res) => {
          this.product = res.data.product;
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          Toast.fire({
            title: `${err.response.data.message}`,
            icon: "error",
          });
        });
    },
    buttonReduce(value) {
      if (value == 1) {
        return true;
      } else {
        return false;
      }
    },
    ...mapActions(produceStore, ["changeStandType", "getProducts"]),
  },
  watch: {
    cart_qty(val) {
      //input的值是E或e時 value會是"" 所以才會val == "" 就是判斷e或E
      if (val < 0 || val == "") {
        Toast.fire({
          title: "「請輸入1以上的數字」",
          icon: "error",
        });
        this.cart_qty = 1;
      }
      this.$emit("update:qty", this.local_qty); // local_qty更改時傳到父元件
    },
    product(val) {
      this.getProducts();
      this.changeStandType(val.unit);
    },
    $route: {
      handler(newProduct, oldProduct) {
        const new_productId = newProduct.params.productId;
        const old_productId = oldProduct.params.productId;
        if (
          newProduct.name == oldProduct.name &&
          new_productId != old_productId
        ) {
          this.getProduct();
          this.cart_qty = 1;
        }
      },
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<template>
  <Loading v-model:active="isLoading" :loader="'dots'" />
  <div class="content">
    <div class="container py-5">
      <div class="row py-5 justify-content-center">
        <div class="col-lg-5">
          <img
            :src="this.product.imageUrl"
            :alt="this.product.title"
            class="w-100 radius-img"
          />
        </div>
        <div class="col-lg-5">
          <div class="mt-lg-0 ms-lg-3 mt-sm-3">
            <h3>{{ this.product.title }}</h3>
            <span class="badge rounded-pill bg-warning fs-6 mb-2">{{
              this.product.unit
            }}</span>
            <div>
              <p class="mb-2">商品描述：{{ this.product.description }}</p>
              <p>營業時段 {{ this.product.content }}</p>
              <div class="bg-light d-flex align-items-center mb-2 w-100">
                <button
                  type="button"
                  class="btn px-0 border-0 width-10 buttonStyle"
                  @click="cart_qty--"
                  :disabled="buttonReduce(cart_qty)"
                >
                  -
                </button>
                <input
                  type="number"
                  class="text-center border-0 width-90"
                  v-model="cart_qty"
                />
                <button
                  type="button"
                  class="btn px-0 border-0 width-10 buttonStyle"
                  @click="cart_qty++"
                >
                  +
                </button>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span class="fw-bold fs-5">${{ this.product.price }}</span>
                </div>
                <div class="">
                  <addToCard
                    :product_id="this.product.id"
                    :qty="this.cart_qty"
                  ></addToCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-bottom border-2">
        <h4 class="fw-bold">鄰近美食</h4>
      </div>
      <div class="tab-content mt-5">
        <swiper-product-card :products="standProduct"></swiper-product-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.radius-img {
  border-radius: 10px;
}
/* 隐藏 input type="number" 的箭头按钮 */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
.card,
.card-footer {
  background: none;
  border: none;
}
.card {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 3px 3px 3px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.image-hover {
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px;
}

input[type="number"] {
  -webkit-appearance: textfield; /* For webkit browsers like Chrome and Safari */
  -moz-appearance: textfield; /* For Mozilla Firefox */
}

input:focus-visible {
  outline: rgb(163, 163, 163) auto 1px;
  outline-offset: 0px;
}
</style>
