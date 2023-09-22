<script>
import { mapActions, mapState } from "pinia";//暫時不會用到mapState
import cartStore from "../stores/cart.js";
export default{
    computed : {
        ...mapState(cartStore,["cart_data","cart_length"])
    },
    methods : {
        ...mapActions(cartStore,["getCart","createOrder"]),
        closeCollapse(){
            const target_btn = document.querySelector(".navbar-toggler");
            const target = document.querySelector(".navbar-collapse");
            if(target.classList.contains("show")){
                target.classList.remove("show");
                target_btn.setAttribute("aria-expanded", "false");
                target_btn.classList.add("collapsed");
            }
        }
    },
    mounted(){
        this.getCart();
    }
};
</script>

<template>
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <RouterLink :to='{name:"Home"}' class="navbar-brand MRT ms-4 d-flex align-items-center"><img src="../views/FontLayout/專題作品圖/刀叉.png" alt="刀叉" width="18" class="ms-1"> 台中MRT美食</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="Stand" class="nav-link nav-item me-4 delicious" data-toggle @click="closeCollapse()">
                            各站美食
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/Cart" class="nav-link nav-item me-4 cart d-flex align-items-center" data-toggle @click="closeCollapse()">
                            購物車
                            <img src="../views/FontLayout/專題作品圖/購物車.png" alt="購物車" width="18" class="ms-1">
                            <span class="badge rounded-pill bg-danger cart-badge">
                                {{ cart_data.carts == '' ? 0 : cart_length }}
                            </span>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/Keep" class="nav-link nav-item me-4 keep d-flex align-items-center" data-toggle @click="closeCollapse()">
                            收藏
                            <img src="../views/FontLayout/專題作品圖/愛心.png" alt="愛心" width="16" class="ms-1">
                        </RouterLink>
                    </li>
                </ul>
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
    position: relative;
    transition: all 0.5s;
}

.navbar-nav .active::after{
    display: block;
    content: "";
    width: 100%;
    border-bottom: solid rgb(228, 145, 48) 2px;
    position: absolute;
    bottom: 3px;
    transform: translate(-50%,0);
    left: 50%;
}

@media(max-width:1200px){
    .delicious,.cart,.keep,.MRT{
        transition: 0s;
    }

    .delicious:hover,.cart:hover,.keep:hover,.MRT:hover{
        transform: scale(1);
    }

    .navbar-nav .active::after{
        content:none
    }
}
</style>