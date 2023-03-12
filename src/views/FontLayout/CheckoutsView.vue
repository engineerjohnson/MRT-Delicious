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
        <div class="mt-5">
            <div class="py-5">
                123
            </div>
        </div>
    </div>
    </div>
    <footerComponter id="footer"></footerComponter>
</template>