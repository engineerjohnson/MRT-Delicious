<script>
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
    <banner class="bg-black" id="banner"></banner>
    <div class="content">
    <div class="container">
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
    <footerComponter id="footer"></footerComponter>
</template>