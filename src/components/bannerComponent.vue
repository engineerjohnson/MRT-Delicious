<script>
import { mapActions, mapState } from "pinia";//暫時不會用到mapState
import cartStore from "../stores/cart.js";
export default{
    data(){
        return{
            isNavbarCollapsed: true
        };
    },
    computed : {
        ...mapState(cartStore,["cart_data","cart_length"])
    },
    methods : {
        ...mapActions(cartStore,["getCart","createOrder"]),
    },
    mounted(){
        this.getCart();
    }
};
</script>

<template>
        <!-- navbar -->
        <nav class="navbar navbar-dark navbar-expand-lg navbar-light ">
    <RouterLink :to='{name:"Home"}' class="navbar-brand MRT ms-4"><font-awesome-icon icon="utensils" /> 台中MRT美食</RouterLink>
    <button class="navbar-toggler me-2" @click="isNavbarCollapsed = !isNavbarCollapsed" type="button" aria-label="Toggle navigation" >
        <span class="navbar-toggler-icon"></span>
    </button>
        <div :class="['collapse', 'navbar-collapse', 'justify-content-end', {'show': !isNavbarCollapsed}]" id="navbarNav">
        <div class="navbar-nav ps-2">
            <RouterLink to="Stand" class="nav-link nav-item me-4 delicious" data-toggle @click="isNavbarCollapsed = !isNavbarCollapsed">
                各站美食
            </RouterLink>
            <RouterLink to="/Cart" class="nav-link nav-item me-4 cart" data-toggle @click="isNavbarCollapsed = !isNavbarCollapsed">
                購物車
                <font-awesome-icon icon="cart-shopping" />
                <span class="badge rounded-pill bg-danger cart-badge">
                    {{ cart_data.carts == '' ? 0 : cart_length }}
                </span>
            </RouterLink>
            <RouterLink to="/Keep" class="nav-link nav-item me-4 keep" data-toggle @click="isNavbarCollapsed = !isNavbarCollapsed">
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

.delicious,.cart,.keep,.MRT{
    transition: .3s;
}

.delicious:hover,.cart:hover,.keep:hover,.MRT:hover{
    transform: scale(1.2);
}

.navbar-nav .active{
    border-bottom: solid rgb(228, 145, 48) 4px;
}

@media(max-width:1200px){
    .delicious,.cart,.keep,.MRT{
    transition: 0s;
}

.delicious:hover,.cart:hover,.keep:hover,.MRT:hover{
    transform: scale(1);
}

.navbar-nav .active{
    border-bottom: none;
}
}
</style>