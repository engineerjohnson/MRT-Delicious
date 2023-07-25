<script>
export default {
  components: {
  },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
    },
    createOrder() {
      this.$router.push("/Checkouts");
    },
  },
};
</script>
<template>
  <div class="content">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="pt-5">
            <div class="breadcrumb mt-5">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item fs-5">購物車資料</li>
                  <li class="breadcrumb-item fs-5 text-warning active fw-bold">
                    填寫訂單資料
                  </li>
                  <li class="breadcrumb-item fs-5" aria-current="page">結帳</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!-- 表單 -->
      <div class="row justify-content-center">
        <h2 class="text-center">填寫訂購資料</h2>
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
                />
                <ErrorMessage name="信箱" class="invalid-feedback" />
              </div>
              <div class="mb-3">
                <label for="massage" class="form-label">歡迎留言~</label>
                <VField
                  id="massage"
                  name="留言"
                  type="text"
                  class="form-control py-5"
                  :class="{ 'is-invalid': errors['留言'] }"
                />
                <ErrorMessage name="留言" class="invalid-feedback" />
              </div>
              <div class="d-flex justify-content-center mt-5">
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
