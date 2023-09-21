import { defineStore } from "pinia";
import Toast from "../utils/Toast.js";
export default defineStore("KeepStore", {
    //對應data
    state : () => ({
      productID:[],
      productList:[],
    }),
    //對應compute
    getters : {
    },
    //對應methods
    actions : {
      toggleToKeep(product){
        const target_index = this.productList.findIndex((item)=>item.id === product.id);
        if(target_index == -1){//沒有加入最愛
            this.productList.push(product);
            Toast.fire({
            title : `已將「${product.title}」加入收藏`,
            icon : "success"
            });
        } else {
            this.productList.splice(target_index,1);
            Toast.fire({
            title : "已取消收藏",
            icon : "success"
            });
        }
        localStorage.setItem("productList", JSON.stringify(this.productList));
      },
      getKeep(){
        this.productList = JSON.parse(localStorage.getItem("productList")) || [];
      }
    }
});