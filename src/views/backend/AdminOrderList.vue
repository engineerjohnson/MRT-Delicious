<script setup>
import { onMounted, ref } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import axios from "axios";
import { UseCheckLogin } from "../../composable/UseCheckLogin.js";
import Toast from "../../utils/Toast.js";
import PaginationView from "../../components/backend/PaginationView.vue";
import LoadingPageView from "../../components/backend/LoadingPageView.vue";

const isLoading = ref(false);
const pageLoading = ref(false);
const { checkLogin } = UseCheckLogin();
const pageData = ref("");

/**

 * 儲存最後一次送出的頁碼 在delete時 設置 才不會跳回第一頁
 */
const nowPage = ref(null);

function getOrder(page = 1) {
  checkLogin();
  nowPage.value = page;
  if (
    pageData.value &&
    (page == 0 || page > pageData.value.pagination.total_pages)
  ) {
    return;
  }
  pageLoading.value = true;
  axios
    .get(
      `${import.meta.env.VITE_APP_API}/v2/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/orders?page=${page}`
    )
    .then((res) => {
      if (res.data.success) {
        pageData.value = res.data;
      } else {
        Toast.fire({
          title: "無法取得產品資料，請重新整理畫面",
          icon: "error",
        });
      }
    })
    .catch((err) => {
      Toast.fire({
        title: `${err.message}`,
        icon: "error",
      });
    })
    .finally(() => {
      pageLoading.value = false;
    });
}

onMounted(() => {
  getOrder();
});
</script>

<template>
  <Loading v-model:active="isLoading" :loader="'dots'" />
  <div class="modal-outside-style">
    <LoadingPageView v-if="pageLoading" />
    <template v-else>
      <div class="table-responsive-xl">
        <h5 class="mt-4">訂單列表</h5>
        <table class="table caption-top">
          <thead>
            <tr>
              <th style="width: 10%">狀態</th>
              <th style="width: 20%">名稱</th>
              <th style="width: 20%">手機</th>
              <th style="width: 35%">商品資訊</th>
              <th style="width: 10%"></th>
            </tr>
          </thead>
          <tbody class="table-group-divider" v-if="pageData.orders">
            <template v-for="data in pageData.orders" :key="data.id">
              <tr>
                <td class="vertical-align">
                  <span v-if="data.is_paid" class="badge bg-success"
                    >已結帳</span
                  >
                  <span v-else class="badge bg-danger">未結帳</span>
                </td>
                <td class="vertical-align">{{ data.user?.name || "" }}</td>
                <td class="vertical-align">
                  <a :href="`tel:${data.user?.tel || ''}`">{{
                    data.user?.tel || ""
                  }}</a>
                </td>
                <td class="vertical-align">
                  <template v-for="(item, index) in data.products" :key="index">
                    {{ item.product.title }} ({{ item.total }})<br />
                  </template>
                </td>
                <td class="vertical-align">
                  <button
                    class="p-0 me-2 btn-icon"
                    type="button"
                    v-tooltip="'編輯'"
                    @click.stop="openEditModal(data.id)"
                  >
                    <svg
                      class="svg-opacity"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                      />
                    </svg>
                  </button>
                  <button
                    class="btn-icon p-0"
                    type="button"
                    v-tooltip="'刪除'"
                    @click.stop="openDeleteModal(data.id)"
                  >
                    <svg
                      class="svg-opacity"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="14"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <PaginationView :on-submit="getOrder" :pagination="pageData.pagination" />
    </template>
  </div>
</template>

<style scoped>
.vertical-align {
  vertical-align: middle;
}
</style>
