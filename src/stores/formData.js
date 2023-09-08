import { defineStore } from "pinia";
// const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
// pinia不能用this.http 而是要用axios 所以要import axios近來
// import axios from "axios";

export default defineStore("formSrote", {
  //對應data
  state:()=>({
    form:{
      name: "",
      phoneNumber: "",
      Email: "",
      message: ""
    }
  }),
  // 對應computed
  getters:{

  },
  //對應methods
  actions:{

  }
});