<script>
    import { mapActions } from "pinia";
    import cartStore from "../stores/cart.js";
    export default{
        props : ["product_id"],
        data(){
            return{};
        },
        methods : {
            ...mapActions(cartStore, ["addToCart"])
        },
        mounted(){}
    };
</script>

<template>
    <button type="button" class="btn btn-secondary p-1 p-lg-2 d-flex align-items-center" @click.prevent="addToCart(product_id)">
        <img src="../views/FontLayout/專題作品圖/購物車.png" alt="購物車" width="18" class="me-1">
        加入購物車
    </button>
</template>