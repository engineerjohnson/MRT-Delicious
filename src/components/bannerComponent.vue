<script>
import { mapActions, mapState } from "pinia";//暫時不會用到mapState
import cartStore from "../stores/cart.js";
export default{
    data(){
        return{
        };
    },
    computed:{
        ...mapState(cartStore,["cart_data"])
    },
    methods:{
        ...mapActions(cartStore,["getCart"]),
    },
    mounted(){
        this.getCart();
    }
};
</script>

<template>
        <!-- navbar -->
        <nav class="navbar navbar-dark navbar-expand-lg navbar-light ">
    <RouterLink :to='{name:"Home"}' class="navbar-brand"><img src="../views/FontLayout/專題作品圖/logo.png" alt="MRT-Delicious"></RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
        <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div class="navbar-nav ps-2">
            <RouterLink to="Stand" class="nav-link nav-item text-white me-4" data-toggle>
                各站美食
            </RouterLink>
            <RouterLink to="/Cart" class="nav-link nav-item text-white me-4 cart" data-toggle>
                購物車
                <font-awesome-icon icon="cart-shopping" />
                <span  v-if="this.cart_data.carts" class="badge rounded-pill bg-danger cart-badge">{{ this.cart_data.carts.length }}</span>
            </RouterLink>
            <RouterLink to="/Keep" class="nav-link nav-item text-white me-4" data-toggle>
                收藏
                <font-awesome-icon icon="heart" />
            </RouterLink>
        </div>
        </div>
    </nav>
</template>

<style>
.cart{
    position: relative;
}

.cart-badge{
    position: absolute;
    top: -3px;
    right: -10px;
}
</style>