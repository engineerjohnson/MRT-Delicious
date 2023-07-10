import { defineStore } from "pinia";
// pinia不能用this.http 而是要用axios 所以要import axios近來
import axios from "axios";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
export default defineStore("cartStore", {
    //對應data
    state: () => ({}),
    //對應compute
    getters: {},
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
    }
});