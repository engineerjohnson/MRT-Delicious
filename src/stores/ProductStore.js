import { defineStore } from "pinia";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
// pinia不能用this.http 而是要用axios 所以要import axios近來
import axios from "axios";
export default defineStore("produceStore", {
  //對應 data
  state: () => ({
    product: [],
    standType: "",
    wantEatType: "",
    isLoading: false,
  }),
  //對應 computed
  getters: {
    //篩選「美食前三站商品」
    standProduct() {
      return this.product.filter((item) => item.unit == this.standType.trim());
    },
    //篩選「想吃什麼」
    WantEatProduct() {
      return this.product.filter((item) => item.category == this.wantEatType.trim());
    },
  },
  //對應 methods
  actions: {
    getProducts() {
      this.isLoading = true;
      axios
        .get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.product = res.data.products;
          this.isLoading = false;
        });
    },
    //變更「standType」篩選內容
    changeStandType(item) {
      this.standType = item;
    },
    //變更「wantEatType」篩選內容
    changeWantEatType(item) {
      this.wantEatType = item;
    },
  },
});
