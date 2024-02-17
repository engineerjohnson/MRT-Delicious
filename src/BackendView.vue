<script setup>
import { onMounted, ref, watch } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { UseCheckLogin } from "./composable/UseCheckLogin.js";
import Loading from "vue-loading-overlay";

const { checkLogin } = UseCheckLogin();
const x = ref(window.innerWidth);
const sidebar_PC = ref(Boolean);

/**
 * 判斷sidebar 給予背景色
 */
const sidebar = ref("");

const sidebarProduct = ref(null);
const sidebarOrder = ref(null);
const sidebarHeight = ref(null);

function sidebarSwitch(value) {
  if (sidebar.value == value) {
    sidebar.value = "";
  } else {
    sidebar.value = value;
  }
}

watch(sidebar, (newValue) => {
  if (newValue === "product") {
    sidebarHeight.value = sidebarProduct.value.scrollHeight;
  } else if (newValue === "order") {
    sidebarHeight.value = sidebarOrder.value.scrollHeight;
  } else {
    sidebarHeight.value = 0;
  }
});

function setSidebarSize(size) {
  if (size > 992) {
    sidebar_PC.value = true;
  } else {
    sidebar_PC.value = false;
  }
}

onMounted(() => {
  const xSize = () => {
    x.value = window.innerWidth;
  };
  window.addEventListener("resize", xSize);
  setSidebarSize(x.value);
});

watch(x, (newValue) => {
  setSidebarSize(newValue);
});

onMounted(() => {
  checkLogin();
});
</script>

<template>
  <div class="d-flex mx-0" style="height: 100vh">
    <div
      v-if="sidebar_PC"
      class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style="width: 300px"
    >
      <RouterLink
        to="/backend"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <img class="me-2" src="../src/assets/image/刀叉.png" alt="logo" />
        <span class="fs-4">MRT管理後台</span>
      </RouterLink>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <button
            class="btn text-white btn-icon-text nav-link"
            :class="{ active: sidebar == 'product' }"
            type="button"
            @click="sidebarSwitch('product')"
          >
            <svg
              class="me-2"
              :class="{ active: sidebar == 'product' }"
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="10"
              viewBox="0 0 320 512"
            >
              <path
                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              />
            </svg>
            產品
          </button>
          <div
            ref="sidebarProduct"
            class="sidebarToggle ms-1"
            :style="{
              'max-height':
                sidebar === 'product' ? `${sidebarHeight}px` : '0px',
            }"
          >
            <ul class="my-1">
              <li class="mb-1">
                <RouterLink
                  to="/backend/productList"
                  class="d-inline-block text-decoration-none text-white link-border"
                >
                  產品列表
                </RouterLink>
              </li>
              <li class="mb-1">
                <RouterLink
                  to="/backend/addProduct"
                  class="d-inline-block text-decoration-none text-white link-border"
                >
                  新增產品
                </RouterLink>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <button
            class="btn text-white btn-icon-text nav-link"
            :class="{ active: sidebar == 'order' }"
            type="button"
            @click="sidebarSwitch('order')"
          >
            <svg
              class="me-2"
              :class="{ active: sidebar == 'order' }"
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="10"
              viewBox="0 0 320 512"
            >
              <path
                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              />
            </svg>
            訂單
          </button>
          <div
            ref="sidebarOrder"
            class="sidebarToggle ms-1"
            :style="{
              'max-height': sidebar === 'order' ? `${sidebarHeight}px` : '0px',
            }"
          >
            <ul class="my-1">
              <li class="mb-1">
                <RouterLink
                  to="/backend/orderList"
                  class="d-inline-block text-decoration-none text-white link-border"
                >
                  訂單列表
                </RouterLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        <RouterLink
          to="/backend"
          class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        >
          <img
            src="../src/assets/image/diet.png"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>台中捷運美食</strong>
        </RouterLink>
        <ul
          class="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li><button type="button" class="btn dropdown-item">登出</button></li>
        </ul>
      </div>
    </div>
    <div
      v-else
      class="d-flex flex-column flex-shrink-0 bg-dark"
      style="width: 70px"
    >
      <a
        href="/"
        class="d-inline-block p-3 link-dark text-decoration-none text-center"
      >
        <img src="../src/assets/image/刀叉.png" alt="logo" />
      </a>
      <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li class="nav-item">
          <RouterLink
            to="/backend/productList"
            class="nav-link py-3 border-bottom text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path
                d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.3-5.3-9.3-10.6-10.1c-51.5-8.2-92.8-47.1-104.5-97.4c-1.8-7.6-8-13.4-15.7-14.6c-54.6-8.7-97.7-52-106.2-106.8zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM144 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
              />
            </svg>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            to="/backend/order"
            class="nav-link py-3 border-bottom text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path
                d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"
              />
            </svg>
          </RouterLink>
        </li>
      </ul>
      <div class="dropdown border-top">
        <a
          href="#"
          class="d-flex align-items-center justify-content-center p-3 text-white text-decoration-none dropdown-toggle"
        >
          <img
            src="../src/assets/image/diet.png"
            alt=""
            width="24"
            height="24"
            class="rounded-circle"
          />
        </a>
        <ul
          class="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser3"
        >
          <li><button type="button" class="btn dropdown-item">登出</button></li>
        </ul>
      </div>
    </div>
    <div class="side-right">
      <div class="px-2">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped>
svg {
  fill: white;
}
.side-right {
  flex-grow: 1;
  overflow: hidden;
}
.btn-icon-text {
  display: flex;
  align-items: center;
  width: 100%;
}
.btn-icon-text svg,
.sidebarToggle {
  transition: all 0.3s ease-in;
}
.btn-icon-text svg.active {
  transform: rotate(90deg);
}
.sidebarToggle {
  overflow: hidden;
}
ul {
  list-style: none;
}
.link-border {
  position: relative;
}
.link-border.active::after {
  display: block;
  content: "";
  width: 100%;
  border-bottom: solid rgb(255, 255, 255) 1px;
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
  left: 50%;
}

.link-border::after {
  display: block;
  position: absolute;
  content: "";
  width: 0;
  height: 3px;
  transition: all 0.5s ease;
}
</style>
