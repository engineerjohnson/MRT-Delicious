<script>
import Toast from "../../utils/Toast.js";
import { mapState, mapActions } from "pinia";
import cartStore from "../../stores/CartStore.js";
import cartNavbar from "../../components/frontend/CartNavbar.vue";
// 載入loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
export default {
  data() {
    return {
      location: "Cart",
      cart_qty: "",
    };
  },
  computed: {
    ...mapState(cartStore, ["cart_data", "isLoading", "cart_length"]),
  },
  components: {
    cartNavbar,
    Loading,
  },
  methods: {
    ...mapActions(cartStore, ["updateCart", "deleteCart", "deleteCartAll"]),
    //去填寫資料
    toCheck() {
      this.$router.push("/Check");
    },
    //繼續選購
    toStand() {
      this.$router.push("/Stand");
    },
    formatPrice(price) {
      if (price == null) {
        return "";
      }
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    checkUpdateCart(data, qty) {
      if (qty < 1 || qty == "") {
        Toast.fire({
          title: "「請輸入1以上的數字」",
          icon: "error",
        });
      } else {
        this.updateCart(data, qty);
      }
    },
    buttonReduce(value) {
      if (value == 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    //在banner有gerCart 所以這裡不用再一次了
  },
};
</script>

<template>
  <Loading v-model:active="isLoading" :loader="'dots'" />
  <div class="content">
    <div class="container">
      <cart-navbar :cartLocation="location"></cart-navbar>
      <div class="row justify-content-center">
        <div v-if="cart_length != 0" class="col-lg-9 mt-4 bg-lightOrange">
          <div>
            <div
              class="d-flex justify-content-between align-items-center bg-lightOrange"
            >
              <h2 class="w-50 py-md-2 py-1 mb-0">購物車</h2>
              <div>
                <button type="button" class="btn fs-2" @click="deleteCartAll()">
                  X
                </button>
              </div>
            </div>
            <div>
              <div
                v-for="cart in cart_data.carts"
                :key="cart"
                class="row justify-content-center cart_border mb-2"
              >
                <div id="Cart-img" class="col-4">
                  <img :src="cart.product.imageUrl" :alt="cart.product.title" />
                </div>
                <div class="col-8">
                  <div class="d-flex justify-content-between">
                    <p class="mb-0 d-inline-block fs-5">
                      {{ cart.product.title }}
                    </p>
                    <button
                      type="button"
                      class="btn card_btn"
                      @click="deleteCart(cart)"
                    >
                      X
                    </button>
                  </div>
                  <div class="my-2 w-100 d-flex justify-content-center">
                    <div class="d-flex align-items-center w-75">
                      <button
                        type="button"
                        class="btn px-0 border-0 button-style"
                        @click.prevent="checkUpdateCart(cart, cart.qty - 1)"
                        :disabled="buttonReduce(cart.qty - 1)"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        class="text-center border-0 width-90 input-style"
                        v-model="cart.qty"
                        @keyup.enter="checkUpdateCart(cart, cart.qty)"
                      />
                      <button
                        type="button"
                        class="btn px-0 border-0 button-style"
                        @click.prevent="checkUpdateCart(cart, cart.qty + 1)"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p class="text-end my-2 cart_total">
                    單品總計${{ formatPrice(cart.total) }}
                  </p>
                </div>
              </div>
            </div>
            <p class="text-end fs-4">
              總計:{{ formatPrice(cart_data.total) }}元
            </p>
          </div>
        </div>
        <div v-else class="col-lg-9 mt-4">
          <h3 class="fw-bolder">購物車內目前沒有商品，快去前往選購吧!!</h3>
        </div>
        <div class="d-flex justify-content-around my-5">
          <button
            type="button"
            class="btn btn-warning text-white"
            @click="toStand()"
          >
            繼續選購
          </button>
          <div v-if="cart_length != 0">
            <button
              type="button"
              class="btn btn-warning text-white"
              @click="toCheck()"
            >
              填寫資料
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#Cart-img {
  width: 130px;
  max-height: 130px;
  margin: auto 0;
}
.cart_border {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}

.card_btn {
  padding-top: 0;
  padding-bottom: 0;
}

img {
  max-width: 100%;
  max-height: 100%;
  transition: 0.3s;
}

/* 隐藏 input type="number" 的箭头按钮 */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

.button-style {
  background-color: rgb(200, 200, 200) !important;
  border-radius: inherit !important;
  width: 10%;
}
.button-style:hover {
  background-color: rgb(160, 160, 160) !important;
}

.input-style {
  height: 36px;
}
@media (max-width: 576px) {
  #Cart-img {
    width: 120px;
    max-height: 80px;
  }
}

input:focus-visible {
  outline: rgb(163, 163, 163) auto 1px;
  outline-offset: 0px;
}
.button-style {
  width: 20%;
}
</style>
