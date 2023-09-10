import { defineStore } from "pinia";
// pinia不能用this.http 而是要用axios 所以要import axios近來
import axios from "axios";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
import Toast from "../utils/Toast.js";
export default defineStore("cartStore", {
    //對應data
    state: () => ({
      cart_data : "",
      cart_length : "",
      isLoading : false,
      form:{
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      }
    }),
    //對應compute
    getters: { },
    //對應methods
    actions: {
      addToCart(id, qty = 1) {
        const data = {
          "product_id" : id,
          qty,
        };
          axios.post(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart`, { data })
          .then((res) => {
            Toast.fire({
              title : res.data.message,
              icon : "success",
            });
            this.getCart();
          })
          .catch((err)=>{
            Toast.fire({
              title : err.data.message,
              icon : "error",
            });
          });
      },
      getCart(){
        this.isLoading = true;
        axios.get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res)=>{
          this.cart_data = res.data.data;
          this.cart_length = this.cart_data.carts.length;
          this.isLoading = false;
        })
        .catch((err)=>{
          this.isLoading = false;
          Toast.fire({
            title : err.data.message,
            icon : "error",
          });
        });
      },
      updateCart(cart){
        const data = {
          "product_id" : cart.id,
          "qty" : cart.qty,
        };
        axios.put(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart/${cart.id}`, { data })
        .then((res)=>{
          Toast.fire({
            title : res.data.message,
            icon : "success",
          });
          this.getCart();
        })
        .catch((err)=>{
          Toast.fire({
            title : err.data.message,
            icon : "error",
          });
        });
      },
      deleteCart(cart){
        axios.delete(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart/${cart.id}`)
        .then(()=>{
          Toast.fire({
            title : `已將「${cart.product.title}」品項刪除`,
            icon : "success",
          });
          this.getCart();
        })
        .catch(()=>{
          Toast.fire({
            title : `無法將「${cart.product.title}」品項刪除`,
            icon : "error",
          });
        });
      },
      deleteCartAll(){
        if(this.cart_data.carts.length != 0){
          axios.delete(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/carts`)
          .then(()=>{
            Toast.fire({
              title : "已將全部品項刪除",
              icon : "success",
            });
            this.getCart();
          })
          .catch((err)=>{
            Toast.fire({
              title : err.response.data.message,
              icon : "error",
            });
          });
        }else{
          Toast.fire({
            title : "購物車內沒東西",
            icon : "error",
          });
        }
      },
      payment(formData) {
        this.isLoading = true;
        const data = formData;
        axios.post(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/order`, {data})
        .then((res)=>{
          this.isLoading = false;
          Toast.fire({
            title : res.data.message,
            icon : "success",
          });
          this.getCart();
        })
        .catch((err)=>{
          this.isLoading = false;
          Toast.fire({
            title : err.data.message,
            icon : "error",
          });
        });
      }
    }
});