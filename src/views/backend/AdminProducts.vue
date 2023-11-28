<script setup>
import axios from "axios";
import { onMounted } from "vue";
import { UseCheckLogin } from "../../composable/UseCheckLogin.js";

const { checkLogin } = UseCheckLogin();
  function getProduct(){
    axios.get(`${import.meta.env.VITE_APP_API}/v2/api/${import.meta.env.VITE_APP_PATH}/admin/products`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  onMounted(()=>{
    checkLogin();
    getProduct();
  });
</script>

<template>
  <div>1111</div>
</template>