import { defineStore } from "pinia";
// pinia不能用this.http 而是要用axios 所以要import axios近來
import axios from "axios";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
export default defineStore("productsStore", {
  //對應data
  state : () => ({
    products: [],
    StandProducts :"",
    isLoading : false,
  }),
  //對應compute
  getters : {
    standProduct() {
      return this.products.filter(item => item.unit == this.StandProducts);
    },
  },
  //對應methods
  actions : {
    getProducts() {
      this.isLoading = true;
      axios.get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/products/all`)
      .then((res) => {
          this.products = res.data.products;
          this.isLoading = false;
      });
    },
    filterProducts(event) {
      this.StandProducts = event.target.innerHTML;
    }
  }
});