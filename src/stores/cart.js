import { defineStore } from "pinia";
// pinia不能用this.http 而是要用axios 所以要import axios近來
import axios from "axios";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
export default defineStore("cartStore", {
    //對應data
    state: () => ({
      cart_data : "",
      cart_length : "",
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
              alert(res.data.message);
              this.getCart();
            })
            .catch((err)=>{
              alert(err.data.message);
            });
        },
        getCart(){
          axios.get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart`)
          .then((res)=>{
            this.cart_data = res.data.data;
            this.cart_length = this.cart_data.carts.length;
          })
          .catch((err)=>{
            console.log(err);
          });
        },
        updateCart(cart){
          const data = {
            "product_id" : cart.id,
            "qty" : cart.qty
          };
          axios.put(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart/${cart.id}`, { data })
          .then((res)=>{
            alert(res.data.message);
            this.getCart();
          })
          .catch((err)=>{
            alert(err);
          });
        },
        deleteCart(cart){
          axios.delete(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart/${cart.id}`)
          .then(()=>{
            alert(`已將「${cart.product.title}」品項刪除`);
            this.getCart();
          })
          .catch((err)=>{
            alert(err);
          });
        },
        deleteCartAll(){
          if(this.cart_data.carts.length != 0){
            axios.delete(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/carts`)
            .then(()=>{
              alert("已刪除全部品項");
              this.getCart();
            })
            .catch((err)=>{
              alert(err.response.data.message);
            });
          }else{
            alert("購物車內沒東西");
          }
        }
    }
});