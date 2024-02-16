<script setup>
import { ref } from "vue";
import axios from "axios";
import FormGroup from "@/components/backend/form/FormGroup.vue";
import Toast from "../../utils/Toast.js";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const isLoading = ref(false);

function addProduct(data,actions){
  isLoading.value = true;
  const apiData = {"data":{...data, "price":Number(data.price), "origin_price":Number(data.origin_price)}};
  axios.post(`${import.meta.env.VITE_APP_API}/v2/api/${import.meta.env.VITE_APP_PATH}/admin/product`,apiData)
  .then(res=>{
    isLoading.value = false;
    Toast.fire({
      title : `${res.data.message}`,
      icon : "success",
    });
    actions.setValues(formValues);
  })
  .catch(err=>{
    isLoading.value = false;
    Toast.fire({
      title : `${err.response.data.message ? `${err.response.data.message}` : "新增商品失敗"}`,
      icon : "error",
    });
  });
}

const formValues = {
  category:"日式",
  unit:"大慶站"
};

const formSchema = [
  {
    label:"標題",
    name:"title",
    placeholder:"請輸入產品名稱",
    rules:"required",
    as:"input",
    type: "text"
  },
  {
    label:"餐飲類型",
    name:"category",
    as:"select",
    value:"日式",
    options:[
      {
        label:"日式",
        value:"日式"
      },
      {
        label:"西餐",
        value:"西餐"
      },
      {
        label:"中式",
        value:"中式"
      },
      {
        label:"甜食",
        value:"甜食"
      },
    ]
  },

  {
    label:"站別",
    name:"unit",
    as:"select",
    value:"大慶站",
    options:[
      {
        label:"大慶站",
        value:"大慶站"
      },
      {
        label:"豐樂公園站",
        value:"豐樂公園站"
      },
      {
        label:"文華高中",
        value:"文華高中"
      },
      {
        label:"水安宮站",
        value:"水安宮站"
      },
      {
        label:"文心崇德站",
        value:"文心崇德站"
      },
      {
        label:"松竹站",
        value:"松竹站"
      },
    ]
  },
  {
    label:"銷售價",
    name:"price",
    rules:"required|integer",
    as:"input",
    type: "number"
  },
  {
    label:"原價",
    name:"origin_price",
    rules:"required|integer",
    as:"input",
    type: "number"
  },
  {
    label:"商品描述",
    name:"description",
    as:"input",
    type: "text"
  },
  {
    label:"商品內容",
    name:"content",
    as:"input",
    type: "text"
  },
  {
    label:"商品圖片",
    name:"imageUrl",
    as:"input",
    type: "text"
  },
  {
    label:"是否啟用",
    name:"is_enabled",
    as:"checkbox",
    type: "checkbox"
  }
];
</script>

<template>
  <Loading v-model:active="isLoading" :loader="'dots'"/>
  <VForm @submit="addProduct" class="mt-5">
    <FormGroup :form-schema="formSchema"/>
    <div class="text-end mt-5">
      <button type="submit" class="btn btn-danger me-1">
        <span v-if="isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
        新增商品
      </button>
      <button type="button" class="btn btn-secondary">取消</button>
    </div>
  </VForm>
</template>