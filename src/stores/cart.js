import { defineStore } from "pinia";
// pinia不能用this.http 而是要用axios 所以要import axios近來
import axios from "axios";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
export default defineStore("cartStore", {
    //對應data
    state: () => ({
      cart_data : "",
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
                    console.log(res);
                })
                .catch((err)=>{
                  console.log(err);
                });
        },
        getCart(){
          axios.get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart`)
            .then((res)=>{
              this.cart_data = res.data.data;
              console.log(this.cart_data);
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
              console.log(res);
              this.getCart();
            })
            .catch((err)=>{
              console.log(err);
            });
        }
    }
});