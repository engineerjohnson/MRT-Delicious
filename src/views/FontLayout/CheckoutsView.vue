<script>
import { mapState, mapActions } from "pinia";
import cartStore from "../../stores/cart.js";
import cartNavbar from "../../components/cartNavbar.vue";
// 自定義樣式 所以載入scss
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
// 載入loading
import Loading from "vue-loading-overlay";
export default {
  data(){
    return{
      location:"Checkouts",
    };
  },
  computed:{
    ...mapState(cartStore,["form", "isLoading"])
  },
  components: {
    cartNavbar,
    Loading
  },
  methods: {
    ...mapActions(cartStore,["payment"]),
    Cart() {
      this.$router.push("/Cart");
    },
  },
  mounted(){
    if(this.form.user.name == "" || this.form.user.phoneNumber == "" || this.form.user.Email == ""){
      Swal.fire({
        icon: "error",
        title: "訂單資料未完成",
        text: "「訂單資料」需要填寫完成才能確認訂單資料哦!!",
      }).then((result)=>{
        if(result.isConfirmed || result.isDismissed){ //點擊OK或視窗外 就會跳到「訂單資料」頁
          this.$router.push("/Check");
        }
      });
    }
  }
};
</script>
<template>
  <Loading v-model:active="isLoading" :loader="'dots'"/>
  <div class="content">
    <div class="container">
      <cartNavbar :cartLocation = "location"></cartNavbar>
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
                <tr>
                  <td>
                    <div id="Cart-img">
                      <img src="./專題作品圖/鍋貼.png" alt="" />
                    </div>
                  </td>
                  <td>小六鍋貼</td>
                  <td>90元</td>
                  <td class="text-center">1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-end fs-4">總計:90</p>
        </div>
      </div>
    </div>
    <div class="container mb-4">
      <div class="row justify-content-center">
        <div class="col-lg-9 py-5 bg-lightOrange">
          <div class="text-center py-md-2 py-1 mb-0 fw-bold"></div>
          <ul class="row text-center align-items-center justify-content-center">
            <li class="fs-5 col-4">姓名:</li>
            <li class="col-4 ms-5 ms-lg-0">{{ form.user.name }}</li>
          </ul>
          <ul class="row text-center justify-content-center">
            <li class="fs-5 col-4">電話:</li>
            <li class="col-4 ms-5 ms-lg-0">{{ form.user.tel }}</li>
          </ul>
          <ul class="row text-center justify-content-center">
            <li class="fs-5 col-4">信箱:</li>
            <li class="col-4 ms-5 ms-lg-0">{{ form.user.email }}</li>
          </ul>
          <ul class="row text-center justify-content-center">
            <li class="fs-5 col-4">地址:</li>
            <li class="col-4 ms-5 ms-lg-0">{{ form.user.address }}</li>
          </ul>
          <ul class="row text-center justify-content-center">
            <li class="fs-5 col-4">留言:</li>
            <li class="col-4 ms-5 ms-lg-0" style="overflow-wrap: break-word;">{{ form.message }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-around mt-5">
      <button type="button" class="btn btn-warning text-white mb-5" @click="Cart()">
        回購物車
      </button>
      <button type="button" class="btn btn-warning text-white mb-5" @click="payment(form)">
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
