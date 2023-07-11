<script>
    export default{
        props : ["product_id"],
        data(){
            return{
                productID:[],
                product:[],
            };
        },
        methods:{
            addToKeep(ID){
                this.productID.push(ID);
                console.log(this.productID);
            }
        },
        mounted(){

        }
    };
</script>

<template>
    <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2" @click="addToKeep(product_id)">
        <font-awesome-icon icon="heart" />
        收藏
    </button>
</template>