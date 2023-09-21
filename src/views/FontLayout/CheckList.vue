<script>
import { mapState, mapActions } from "pinia";
import cartStore from "../../stores/cart.js";
import cartNavbar from "../../components/cartNavbar.vue";
// 自定義樣式 所以載入scss
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
// 載入loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
export default {
  data() {
    return {
      location:"Check",
      isLoading:false,
    };
  },
  computed : {
    ...mapState(cartStore,["form", "cart_length", "orderId"]),
  },
  components : {
    cartNavbar,
    Loading,
  },
  methods : {
    ...mapActions(cartStore,["getCart", "createOrder"]),
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
    },
    //繼續選購
    Cart() {
      this.$router.push("/Cart");
    },
    pushCheckouts() {
      this.isLoading = true;
      this.createOrder();
      this.isLoading = false;
    },
    checkCartData(){ //確認購物車是否有無資料
      if(this.cart_length === 0){ //要嚴格 因為'' == 0 也會是true
      Swal.fire({
        icon: "error",
        title: "購物車沒有產品",
        text: "購物車內沒有產品，需要先將產品加入購物車哦!!",
      }).then((result)=>{
        if(result.isConfirmed || result.isDismissed){ //點擊OK或視窗外 就會跳到「購物車」頁
          this.$router.push("/Stand");
        }
      });
    }
    }
  },
  watch : {
    cart_length(val) { //監聽cart_length 避免refresh都觸發
      if(val === 0){
        this.checkCartData();
      }
    },
    orderId(val) { //監聽orderId 當完成createOrder()觸發
      if(val){
        this.$router.push(`/Checkouts/${this.orderId}`);
      }
    }
  },
  mounted() {
    this.getCart();
    this.checkCartData();
  }
};
</script>
<template>
  <Loading v-model:active="isLoading" :loader="'dots'"/>
  <div class="content">
    <div class="container">
      <cartNavbar  :cartLocation = "location"></cartNavbar>
      <!-- 表單 -->
      <div class="row justify-content-center">
        <h2 class="text-center">訂單資料</h2>
        <div class="col-10">
          <div class="d-flex justify-content-center">
            <VForm v-slot="{ errors }" class="col-md-6" @submit="pushCheckouts()">
              <div class="mb-3">
                <label for="name" class="form-label">請輸入姓名</label>
                <VField
                  id="name"
                  name="姓名"
                  type="text"
                  rules="required"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                  v-model="form.user.name"
                />
                <ErrorMessage name="姓名" class="invalid-feedback" />
              </div>
              <div class="mb-3">
                <label for="tel" class="form-label">請輸入電話</label>
                <VField
                  id="tel"
                  name="電話"
                  type="tel"
                  :rules="isPhone"
                  class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入電話"
                  v-model="form.user.tel"
                />
                <ErrorMessage name="電話" class="invalid-feedback" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">請輸入信箱</label>
                <VField
                  id="email"
                  name="信箱"
                  type="text"
                  rules="required|email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['信箱'] }"
                  placeholder="請輸入信箱"
                  v-model="form.user.email"
                />
                <ErrorMessage name="信箱" class="invalid-feedback" />
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">請輸入地址</label>
                <VField
                  id="address"
                  name="地址"
                  type="text"
                  rules="required"
                  class="form-control"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址"
                  v-model="form.user.address"
                />
                <ErrorMessage name="地址" class="invalid-feedback" />
              </div>
              <div class="mb-3">
                <label for="massage" class="form-label">歡迎留言~</label>
                <textarea
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
                style="resize: none;"
                ></textarea>
              </div>
              <div class="d-flex justify-content-around mt-5">
                <button type="button" class="btn btn-warning text-white mb-5" @click="Cart()">
                  回購物車
                </button>
                <button type="submit" class="btn btn-warning text-white mb-5">
                  送出訂單
                </button>
              </div>
            </VForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
