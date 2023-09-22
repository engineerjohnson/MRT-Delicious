<script>

import { mapActions, mapState } from "pinia";

import keepStore from "../stores/keep.js";
    export default{
        props : ["product"],
        data(){
            return{
            };
        },
        computed : {
            ...mapState(keepStore,["productList"]),
        },
        methods : {
            ...mapActions(keepStore,["toggleToKeep", "getKeep"]),
            isKeep(id){
                return this.productList.find(item => item.id == id);
            }
        },
    };
</script>

<template>
    <div v-if="!isKeep(product.id)">
        <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2 d-flex align-items-center" @click.prevent="toggleToKeep(product)">
            <img src="../views/FontLayout/專題作品圖/愛心.png" alt="愛心" width="16" class="me-1">
            收藏
        </button>
    </div>
    <div v-else>
        <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2 d-flex align-items-center" @click.prevent="toggleToKeep(product)">
            <img src="../views/FontLayout/專題作品圖/愛心.png" alt="愛心" width="16" class="me-1">
            已收藏
        </button>
    </div>
</template>