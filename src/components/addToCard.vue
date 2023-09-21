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
    <button type="button" class="btn btn-secondary p-1 p-lg-2" @click="addToCart(product_id)">
        <font-awesome-icon icon="cart-shopping" />
        加入購物車
    </button>
</template>