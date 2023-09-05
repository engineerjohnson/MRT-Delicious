<script>
export default {
  components: {
  },
  methods: {
    Cart() {
      this.$router.push("/Cart");
    },
  }
};
</script>
<template>
  <div class="content">
    <div class="container">
      <div class="pt-5">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="breadcrumb mt-5">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item fs-5">購物車資料</li>
                  <li class="breadcrumb-item fs-5">填寫訂單資料</li>
                  <li class="breadcrumb-item fs-5 text-warning active fw-bold">
                    結帳
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9 mt-4 bg-lightOrange">
          <p class="text-center py-md-2 py-1 fs-3 mb-0 fw-bold">訂購資料確認</p>
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
          <p class="text-center py-md-2 py-1 fs-3 mb-0 fw-bold">
            訂購人資料確認
          </p>

          <ul class="row text-center align-items-center justify-content-center">
            <li class="fs-5 col-4">姓名:</li>
            <li class="col-4 ms-5 ms-lg-0">123</li>
          </ul>
          <ul class="row text-center justify-content-center">
            <li class="fs-5 col-4">電話:</li>
            <li class="col-4 ms-5 ms-lg-0">123</li>
          </ul>
          <ul class="row text-center justify-content-center">
            <li class="fs-5 col-4">信箱:</li>
            <li class="col-4 ms-5 ms-lg-0">123</li>
          </ul>
          <ul class="row text-center justify-content-center">
            <li class="fs-5 col-4">留言:</li>
            <li class="col-4 ms-5 ms-lg-0">123</li>
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
