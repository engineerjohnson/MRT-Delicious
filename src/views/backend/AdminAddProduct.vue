<script setup>
import axios from 'axios';

function addProduct(){
  axios.post(`${import.meta.env.VITE_APP_API}/v2/api/${import.meta.env.VITE_APP_PATH}/admin/product`,data)
  .then(res=>{
    console.log(res)
  })
  .catch(err=>{
    console.log(err)
  })
}

const data = {
  "data": {
    "title": "[賣]動物園造型衣服3",
    "category": "衣服2",
    "origin_price": 100,
    "price": 300,
    "unit": "個",
    "description": "Sit down please 名設計師設計",
    "content": "這是內容",
    "is_enabled": 1,
    "imageUrl": "主圖網址",
    "imagesUrl": [
      "圖片網址一",
      "圖片網址二",
      "圖片網址三",
      "圖片網址四",
      "圖片網址五"
    ]
  }
}
</script>

<template>
  <button @click="addProduct">新增產品</button>
</template>