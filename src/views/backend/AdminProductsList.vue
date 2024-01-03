<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { UseCheckLogin } from "../../composable/UseCheckLogin.js";
import Toast from "../../utils/Toast.js";
import ModalView from "../../components/backend/ModalView.vue";
import LoadingView from "../../components/backend/LoadingView.vue";
import { useModalStore } from "../../stores/backend/ModalStore.js";
import { useRouter } from "vue-router";

const router = useRouter();
const modal = useModalStore();
const { checkLogin } = UseCheckLogin();
const pageData = ref("");
const pageLoading = ref(false);

/**
 * 儲存最後一次送出的頁碼 在deleteProduct時 設置 才不會跳回第一頁
 */
const nowPage = ref(null)

function getProduct(page = 1){
  checkLogin();
  nowPage.value = page
  if(pageData.value && (page == 0 || page > pageData.value.pagination.total_pages)){
    return;
  }
  pageLoading.value = true;
  axios.get(`${import.meta.env.VITE_APP_API}/v2/api/${import.meta.env.VITE_APP_PATH}/admin/products?page=${page}`)
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
  })
  .finally(()=>{
    pageLoading.value = false;
  });
}

function deleteProduct(){
  checkLogin();
  axios.delete(`${import.meta.env.VITE_APP_API}/v2/api/${import.meta.env.VITE_APP_PATH}/admin/product/${modalId.value}`)
  .then(ref=>{
    Toast.fire({
      title : `${ref.data.message}`,
      icon : "success",
    });
    getProduct(nowPage.value);
  })
  .catch(err=>{
    Toast.fire({
      title : `${err.message}`,
      icon : "error",
    });
  })
  .finally(()=>{
    modal.modalClose();
  });
}

/**
 * 開啟modal會給id值 存在這
 */
const modalId = ref(null);

/**
 * 儲存id的值 並賦予到deleteProduct上面
 */
function openDeleteModal(id){
  modalId.value = id;
  modal.modalShow();
}

onMounted(()=>{
  getProduct();
});
</script>

<template>
  <div class="modal-outside-style">
    <LoadingView v-if="pageLoading"></LoadingView>
    <template v-else>
      <div class="table-responsive-xl">
        <h5 class="mt-4">產品列表</h5>
        <table class="table caption-top">
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
                  <button class="p-0 me-2 btn-icon" type="button" v-tooltip="'編輯'">
                    <svg class="svg-opacity" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                  </button>
                  <button class="btn-icon p-0" type="button" v-tooltip="'刪除'" @click.stop="openDeleteModal(data.id)">
                    <svg class="svg-opacity" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
                  </button>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <nav aria-label="Page navigation example"  v-if="pageData.pagination">
        <ul class="pagination justify-content-center mt-4">
          <li class="page-item">
            <button type="button" class="page-link" href="#" @click="getProduct(1)">
              <svg class="text-info" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" style="fill: #0d6efd;"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
            </button>
          </li>
          <li class="page-item">
            <button type="button" class="page-link" href="#" @click="getProduct(pageData.pagination.current_page - 1)">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512" style="fill: #0d6efd;"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </button>
          </li>
          <template v-for="item in pageData.pagination.total_pages" :key="item">
            <template v-if="item > pageData.pagination.current_page - 3 && item < pageData.pagination.current_page + 3">
              <li class="page-item">
                <button class="page-link" :class="{ 'disabled': item == pageData.pagination.current_page }" @click="getProduct(item)" href="#" :disabled="item == pageData.pagination.current_page" >{{ item }}</button>
              </li>
            </template>
          </template>
          <li class="page-item">
            <button type="button" class="page-link" href="#" @click="getProduct(pageData.pagination.current_page + 1)">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512" style="fill: #0d6efd;"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
            </button>
          </li>
          <li class="page-item">
            <button type="button" class="page-link" href="#" @click="getProduct(pageData.pagination.total_pages)">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" style="fill: #0d6efd;"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
            </button>
          </li>
        </ul>
      </nav>
    </template>
  </div>

  <ModalView :submit="deleteProduct">
    <template #modal-head>
      <h5 class="m-0">刪除商品</h5>
    </template>
    <template #modal-body>
      <p class="m-0">是否要刪除商品?!</p>
    </template>
  </ModalView>
</template>

<style>
.svg-opacity{
  opacity: 0.5;
}
td{
  white-space: nowrap;
}
.modal-outside-style{
  height: 100vh;
}
</style>