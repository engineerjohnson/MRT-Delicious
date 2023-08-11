<script>
import { mapState, mapActions } from "pinia";//暫時不會用到mapState
import cartStore from "../../stores/cart.js";
// 載入loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
export default {
  data(){
    return{
    };
  },
  computed: {
    ...mapState(cartStore,["cart_data", "isLoading"]),
  },
  components:{
    Loading,
  },
  methods: {
    //去填寫資料
    Check() {
      this.$router.push("/Check");
    },
    //繼續選購
    Stand() {
      this.$router.push("/Stand");
    },
    ...mapActions(cartStore,["getCart","updateCart","deleteCart","deleteCartAll"]),
    formatPrice(price){
      if(price == null){
        return "";
      }
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  mounted(){
    this.getCart();
  }
};
</script>

<template>
  <Loading v-model:active="isLoading" :loader="'dots'"/>
  <div class="content">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10 pt-5">
          <div class="breadcrumb mt-5">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item text-warning active fs-5 fw-bold">
                  購物車資料
                </li>
                <li class="breadcrumb-item fs-5">填寫訂單資料</li>
                <li class="breadcrumb-item fs-5" aria-current="page">結帳</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-9 mt-4 bg-lightOrange">
              <div
                class="d-flex justify-content-between align-items-center bg-lightOrange"
              >
                <p class="w-50 py-md-2 py-1 fs-3 mb-0">購物車</p>
                <div>
                  <button type="button" class="btn fs-1" @click="deleteCartAll()">X</button>
                </div>
              </div>
              <!-- <table class="table align-middle bg-lightOrange">
                <thead>
                  <tr class="bg-warning">
                    <th>圖片</th>
                    <th>商品名稱</th>
                    <th>數量</th>
                    <th>單品總價</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cart in cart_data.carts" :key="cart">
                    <td>
                      <div id="Cart-img">
                        <img :src="cart.product.imageUrl" alt="" />
                      </div>
                    </td>
                    <td>{{ cart.product.title }}</td>
                    <td>
                      <select class="form-select" v-model="cart.qty" @change="updateCart(cart)">
                        <option :value="i" v-for="i in 50" :key="i + 1">
                          {{ i }}
                        </option>
                      </select>
                    </td>
                    <td>${{ formatPrice(cart.total) }}</td>
                    <td>
                      <button type="button" class="btn" @click="deleteCart(cart)">X</button>
                    </td>
                  </tr>
                </tbody>
              </table> -->
              <div>
                <div v-for="cart in cart_data.carts" :key="cart" class="row justify-content-center cart_border mb-2">
                  <div id="Cart-img" class="col-4 me-4">
                    <img :src="cart.product.imageUrl" alt="" />
                  </div>
                  <div class="col-8">
                    <div class="d-flex justify-content-between">
                      <p class="mb-0 d-inline-block fs-5">{{ cart.product.title }}</p>
                      <button type="button" class="btn card_btn" @click="deleteCart(cart)">X</button>
                    </div>
                    <select class="form-select" v-model="cart.qty" @change="updateCart(cart)">
                      <option :value="i" v-for="i in 50" :key="i + 1">
                        {{ i }}
                      </option>
                    </select>
                    <p class="text-end my-2 cart_total">單品總計${{ formatPrice(cart.total) }}</p>
                  </div>
                </div>
              </div>
              <p class="text-end fs-4">總計:{{ formatPrice(cart_data.total) }}元</p>
            </div>
            <div class="d-flex justify-content-around my-5">
              <button type="button" class="btn btn-warning text-white" @click="Stand()">
                繼續選購
              </button>
              <button type="button" class="btn btn-warning text-white" @click="Check()">
                填寫資料
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#Cart-img {
  width: 130px;
  max-height: 130px;
  margin: auto 0;
}
img {
  height: 60px;
}
tbody {
  border-color: black;
}
.cart_border{
  border-bottom: 1px solid black;
}
.card_btn{
  padding-top: 0;
  padding-bottom: 0;
}
@media(max-width:576px){
  #Cart-img{
    width:80px;
    max-height:80px;
  }
}
</style>
