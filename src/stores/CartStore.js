import { defineStore } from "pinia";
// pinia不能用this.http 而是要用axios 所以要import axios近來
import axios from "axios";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
import Toast from "../utils/Toast.js";
export default defineStore("cartStore", {
  //對應data
  state: () => ({
    cart_data: "",
    cart_length: "",
    orderId: "",
    isLoading: false,
    cartButton: "",
    form: {
      user: {
        name: "",
        email: "",
        tel: "",
        address: "",
      },
      message: "",
    },
  }),
  //對應compute
  getters: {},
  //對應methods
  actions: {
    addToCart(id, qty) {
      this.cartButton = id;
      const data = {
        product_id: id,
        qty: qty == null ? 1 : qty,
      };
      axios
        .post(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          Toast.fire({
            title: `${res.data.message}`,
            icon: "success",
          });
          this.getCart();
          this.cartButton = "";
        })
        .catch((err) => {
          Toast.fire({
            title: `${err.response.data.message}`,
            icon: "error",
          });
        });
    },
    getCart() {
      this.isLoading = true;
      axios
        .get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.cart_data = res.data.data;
          this.cart_length = this.cart_data.carts.length;
        })
        .catch((err) => {
          Toast.fire({
            title: `${err.response.data.message}`,
            icon: "error",
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    updateCart(cart, qty) {
      this.isLoading = true;
      const data = {
        product_id: cart.product_id,
        qty: qty == null ? cart.qty : qty,
      };
      axios
        .put(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart/${cart.id}`, {
          data,
        })
        .then((res) => {
          Toast.fire({
            title: res.data.message,
            icon: "success",
          });
          this.getCart();
        })
        .catch((err) => {
          Toast.fire({
            title: `${err.response.data.message}`,
            icon: "error",
          });
          this.isLoading = false;
        });
    },
    deleteCart(cart) {
      axios
        .delete(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart/${cart.id}`)
        .then(() => {
          Toast.fire({
            title: `已將「${cart.product.title}」品項刪除`,
            icon: "success",
          });
          this.getCart();
        })
        .catch(() => {
          Toast.fire({
            title: `無法將「${cart.product.title}」品項刪除`,
            icon: "error",
          });
        });
    },
    deleteCartAll() {
      if (this.cart_data.carts.length != 0) {
        axios
          .delete(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/carts`)
          .then(() => {
            Toast.fire({
              title: "已將全部品項刪除",
              icon: "success",
            });
            this.getCart();
          })
          .catch((err) => {
            Toast.fire({
              title: err.response.data.message,
              icon: "error",
            });
          });
      } else {
        Toast.fire({
          title: "購物車內沒東西",
          icon: "error",
        });
      }
    },
    createOrder() {
      this.isLoading = true;
      const data = this.form;
      axios
        .post(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/order`, { data })
        .then((res) => {
          this.getCart();
          Toast.fire({
            title: res.data.message,
            icon: "success",
          });
          this.orderId = res.data.orderId;
          this.form.user.name = "";
          this.form.user.email = "";
          this.form.user.tel = "";
          this.form.user.address = "";
          this.form.message = "";
        })
        .catch((err) => {
          Toast.fire({
            title: `${err.response.data.message}`,
            icon: "error",
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
});
