<script>
import Toast from "../utils/Toast.js";
    export default{
        props : ["product_id", "product_name"],
        data(){
            return{
                productID:[],
                product:[],
            };
        },
        methods:{
            addToKeep(ID, name){
                this.productID.push(ID);
                Toast.fire({
                    title : `已將「${name}」加入我的最愛`,
                    icon : "success"
                });
                console.log(this.productID);
            }
        },
        mounted(){

        }
    };
</script>

<template>
    <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2" @click="addToKeep(product_id, product_name)">
        <font-awesome-icon icon="heart" />
        收藏
    </button>
</template>