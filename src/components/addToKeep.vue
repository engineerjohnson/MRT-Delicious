<script>

import { mapActions } from "pinia";
import keepStore from "../stores/keep.js";
    export default{
        props : ["product"],
        data(){
            return{
            };
        },
        methods:{
            ...mapActions(keepStore,["toggleToKeep"])
        },
        mounted(){
        }
    };
</script>

<template>
    <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2" @click="toggleToKeep(product)">
        <font-awesome-icon icon="heart" />
        收藏
    </button>
</template>