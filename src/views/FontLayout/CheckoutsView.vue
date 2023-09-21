<script>
import { mapState, mapActions } from "pinia";
import cartStore from "../../stores/cart.js";
import cartNavbar from "../../components/cartNavbar.vue";
import axios from "axios";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
import Toast from "../../utils/Toast.js";
// 載入loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
export default {
  data() {
    return {
      location:"Checkouts",
      orderData:{},
      isLoading:false
    };
  },
  computed : {
    ...mapState(cartStore,["form"])
  },
  components : {
    cartNavbar,
    Loading,
  },
  methods : {
    ...mapActions(cartStore,["getCart"]),
    Cart() {
      this.$router.push("/Cart");
    },
    getOrder() {
      this.isLoading = true;
      axios.get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/order/${this.$route.params.orderId}`)
      .then((res)=>{
        this.getCart();
        this.orderData = res.data.order;
        this.isLoading = false;
      })
      .catch((err)=>{
        this.isLoading = false;
        Toast.fire({
          title : err.message,
          icon : "error",
        });
      });
    },
    formatPrice(price) {
      if(price == null){
        return "";
      }
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  mounted() {
    this.getOrder();
  }
};
</script>
<template>
  <Loading v-model:active="isLoading" :loader="'dots'"/>
  <div class="content">
    <div class="container">
      <cartNavbar :cartLocation="location"></cartNavbar>
      <div class="row justify-content-center">
        <div class="col-lg-9 mt-4 bg-lightOrange">
          <h2 class="text-center py-md-2 py-1 mb-0 fw-bold">確認訂單資料</h2>
          <div class="d-flex justify-content-center">
            <table class="table align-middle table-hover">
              <thead>
                <tr class="bg-warning">
                  <th>圖片</th>
                  <th>商品名稱</th>
                  <th>價格</th>
                  <th class="text-center">數量</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in orderData?.products" :key="item.id">
                  <td>
                    <div id="Cart-img">
                      <img :src="item.product.imageUrl" alt="" />
                    </div>
                  </td>
                  <td>{{ item.product.title }}</td>
                  <td>{{ item.product.price }}</td>
                  <td class="text-center">{{ item.qty }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-end fs-4">總計:{{ formatPrice(orderData?.total) }}</p>
        </div>
      </div>
    </div>
    <div class="container mb-4">
      <div class="row justify-content-center">
        <div class="col-lg-9 py-5 bg-lightOrange">
          <div class="text-center py-md-2 py-1 mb-0 fw-bold"></div>
          <ul class="row text-center align-items-center justify-content-center">
            <li class="fs-5 col-4">姓名:</li>
            <li class="col-4 ms-5 ms-lg-0">{{ orderData.user?.name }}</li>
          </ul>
          <ul class="row text-center justify-content-center">
            <li class="fs-5 col-4">電話:</li>
            <li class="col-4 ms-5 ms-lg-0">{{ orderData.user?.tel }}</li>
          </ul>
          <ul class="row text-center justify-content-center">
            <li class="fs-5 col-4">信箱:</li>
            <li class="col-4 ms-5 ms-lg-0">{{ orderData.user?.email }}</li>
          </ul>
          <ul class="row text-center justify-content-center">
            <li class="fs-5 col-4">地址:</li>
            <li class="col-4 ms-5 ms-lg-0">{{ orderData.user?.address }}</li>
          </ul>
          <ul class="row text-center justify-content-center">
            <li class="fs-5 col-4">留言:</li>
            <li class="col-4 ms-5 ms-lg-0" style="overflow-wrap: break-word;">{{ orderData?.message }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-around mt-5">
      <button type="button" class="btn btn-warning text-white mb-5" @click="Cart()">
        回購物車
      </button>
      <button type="button" class="btn btn-warning text-white mb-5">
        結帳
      </button>
    </div>
  </div>
</template>
<style>
#Cart-img {
  width: 130px;
  max-height: 130px;
}
img {
  max-width: 100%;
}
tfoot,
tbody {
  border-color: black;
}
ol,ul {
  list-style: none;
  padding-inline-start:0px;
}
</style>
