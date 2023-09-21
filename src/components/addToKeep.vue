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
        <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2" @click.prevent="toggleToKeep(product)">
            <font-awesome-icon icon="heart" />
            收藏
        </button>
    </div>
    <div v-else>
        <button type="button" class="btn btn-outline-danger me-lg-3 me-1 p-1 p-lg-2" @click.prevent="toggleToKeep(product)">
            <font-awesome-icon icon="heart" />
        </button>
    </div>
</template>