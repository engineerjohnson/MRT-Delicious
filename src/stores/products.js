import { defineStore } from "pinia";
// pinia不能用this.http 而是要用axios 所以要import axios近來
import axios from "axios";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
export default defineStore("productsStore", {
    //對應data
    state: () => ({
        products: [],
        standProducts :"",
    }),
    //對應compute
    getters: {
        standProduct() {
            return this.products.filter(item => item.unit == this.standProducts);
        },
    },
    //對應methods
    actions: {
        getProducts() {
            axios.get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/products/all`)
                .then((res) => {
                    this.products = res.data.products;
                    console.log(this.products);
                });
        },
        filterProducts(event) {
            this.standProducts = event.target.innerHTML;
            console.log(this.standProducts);
        }
    }
});