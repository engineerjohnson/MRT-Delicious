<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { UseCheckLogin } from "../../composable/UseCheckLogin.js";
import Toast from "../../utils/Toast.js";

const { checkLogin } = UseCheckLogin();
const pageData = ref("");

function getProduct(){
  axios.get(`${import.meta.env.VITE_APP_API}/v2/api/${import.meta.env.VITE_APP_PATH}/admin/products`)
  .then((res) => {
    if(res.data.success) {
      pageData.value = res.data;
    } else {
      Toast.fire({
        title : "無法取得產品資料，請重新整理畫面",
        icon : "error",
      });
    }
  })
  .catch((err) => {
    Toast.fire({
        title : `${err.message}`,
        icon : "error",
      });
  });
}

onMounted(()=>{
  checkLogin();
  getProduct();
});
</script>

<template>
  <div class="table-responsive-xl">
    <table class="table caption-top">
      <caption>
        <h4>產品列表</h4>
      </caption>
      <thead>
        <tr>
          <th style="width: 20%;">分類</th>
          <th style="width: 30%;">名稱</th>
          <th style="width: 25%;">售價</th>
          <th style="width: 15%;">狀態</th>
          <th style="width: 10%;"></th>
        </tr>
      </thead>
      <tbody class="table-group-divider" v-if="pageData.products">
        <template v-for="data in pageData.products" :key="data.id">
          <tr>
            <td><span class="badge bg-primary">{{ data.unit }}</span></td>
            <td>{{ data.title }}</td>
            <td>{{ data.price }}</td>
            <td>
              <span v-if="data.is_enabled " class="badge bg-success">已上架</span>
              <span v-else class="badge bg-danger">未上架</span></td>
            <td>
              <button class="btn p-0" type="button" v-tooltip="'編輯'">
                <svg class="me-2" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
              </button>
              <button class="btn p-0" type="button" v-tooltip="'刪除'">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
svg{
  opacity: 0.5;
}
td{
  white-space: nowrap;
}
</style>