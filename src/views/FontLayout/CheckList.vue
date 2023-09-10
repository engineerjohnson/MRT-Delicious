<script>
import { mapState } from "pinia";
import cartStore from "../../stores/cart.js";
import cartNavbar from "../../components/cartNavbar.vue";
export default {
  data(){
    return{
      location:"Check"
    };
  },
  computed:{
    ...mapState(cartStore,["form"]),
  },
  components: {
    cartNavbar
  },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
    },
    createOrder() {
      this.$router.push("/Checkouts");
    },
    //繼續選購
    Cart() {
      this.$router.push("/Cart");
    },
  },
  mounted(){

  }
};
</script>
<template>
  <div class="content">
    <div class="container">
      <cartNavbar  :cartLocation = "location"></cartNavbar>
      <!-- 表單 -->
      <div class="row justify-content-center">
        <h2 class="text-center">訂單資料</h2>
        <div class="col-10">
          <div class="d-flex justify-content-center">
            <VForm v-slot="{ errors }" class="col-md-6" @submit="createOrder">
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
                name="留言"
                id="massage"
                cols="30"
                rows="5"
                class="form-control"
                style="resize: none;"
                v-model="form.message"
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
