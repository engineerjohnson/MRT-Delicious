<script >
import banner from "../../components/bannerComponent.vue";
import footerComponter from "../../components/footerComponter.vue";
export default{
  components:{
    banner,
    footerComponter,
  }
};
</script>

<template>
  <banner class="bg-dark" id="banner"></banner>
  <div class="content">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10 py-5">
        <div class="breadcrumb">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item text-warning active fs-5 fw-bold">購物車資料</li>
              <li class="breadcrumb-item fs-5">填寫訂單資料</li>
              <li class="breadcrumb-item fs-5" aria-current="page">結帳</li>
            </ol>
          </nav>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h1 class="m-0">購物車</h1>
            <div>
              <button class="btn"><p class="fs-1 m-0">X</p></button>
            </div>
        </div>
        <table class="table align-middle">
                    <thead>
                        <tr>
                            <th>圖片</th>
                            <th>商品名稱</th>
                            <th>價格</th>
                            <th>數量</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div id="Cart-img">
                                <img src="./專題作品圖/鍋貼.png" alt="">
                                </div>
                            </td>
                            <td>
                                小六鍋貼
                            </td>
                            <td>
                                  90元
                            </td>
                            <td>
                              <select class="form-select">
                                <option :value="i" v-for=' i in 10' :key='i+1'> {{ i }}</option>
                              </select>
                            </td>
                            <td>
                              <button type="button" class="btn">X</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-around mt-5">
                  <button type="button" class="btn btn-warning">
                    <RouterLink to="Stand" class="nav-link text-white">
                      <span style="font-size: 20px;">←</span>繼續選購
                    </RouterLink>
                  </button>
                  <button type="button" class="btn btn-warning">
                    <RouterLink to="Check" class="nav-link text-white">
                      填寫資料<span style="font-size: 20px;">→</span>
                    </RouterLink>
                  </button>
                </div>
      </div>
    </div>
  </div>
  </div>
  <footerComponter id="footer"></footerComponter>
</template>

<style>
#Cart-img{
  width: 130px;
  max-height: 130px;
}
img{
  max-width: 100%;
}
</style>