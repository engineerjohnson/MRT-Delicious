<script>
    import { mapActions } from "pinia";
    import cartStore from "../stores/cart.js";
    export default{
        props : ["product_id"],
        data(){
            return{

            };
        },
        methods:{
            ...mapActions(cartStore, ["addToCart"])
        },
        mounted(){

        }
    };
</script>

<template>
    <button type="button" class="btn btn-secondary p-1 p-lg-2" @click="addToCart(product_id)">
        <img style="width: 20px; height: 20px" src="../views/FontLayout/專題作品圖/car.png" alt="加入購物車"/>
        加入購物車
    </button>
</template>