<script>
import banner from "../../components/bannerComponent.vue";
import footerComponter from "../../components/footerComponter.vue";
export default{
    components:{
        banner,
        footerComponter
    }
};
</script>
<template>
    <banner class="bg-dark" id="banner"></banner>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-lg-10 py-5">
                <div class="breadcrumb">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                        <li class="breadcrumb-item fs-5">購物車資料</li>
                        <li class="breadcrumb-item fs-5 text-warning active fw-bold">訂單資訊</li>
                        <li class="breadcrumb-item fs-5" aria-current="page">結帳</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <footerComponter id="footer"></footerComponter>
</template>