<script>
    import { mapState, mapActions } from "pinia";
    import cartStore from "../stores/cart.js";
    export default{
        props : ["product_id", "qty"],
        computed : {
            ...mapState(cartStore,["cartButton"])
        },
        methods : {
            ...mapActions(cartStore, ["addToCart"]),
        },
    };
</script>

<template>
    <button type="button" class="btn btn-secondary d-flex align-items-center" @click.prevent="addToCart(product_id, qty)" :disabled="product_id == cartButton">
        <span v-if="product_id == cartButton" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        加入購物車
    </button>
</template>