<script >
import { RouterLink, RouterView } from 'vue-router'
export default{
  components:{
    RouterLink,RouterView
  }
}
</script>



<template>
  <div class="background">
  <div class="container">
    <!-- navbar -->
    <nav class="navbar navbar-dark navbar-expand-lg ">
  <div class="container-fluid">
    <RouterLink to="/"><img src="../src/assets/專題作品圖/logo.png" alt="MRT-Delicious"></RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <form class="d-flex">
    <div class="collapse navbar-collapse navbar " id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="Cart" class="nav-link text-white"><img src="../src/assets/專題作品圖/car.png" alt="cashopping cartt">購物車</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="Keep" class="nav-link text-white"><img src="../src/assets/專題作品圖/love.png" alt="Keep">收藏</RouterLink>
        </li>
      </ul>
    </div>
  </form>
  </div>
</nav>
  </div>
  </div>
    <RouterView />
    <footer class='text-center py-3 bg-dark text-white' >
      <p>johnson@2023 All World 純屬練習使用，無商業目的</p>
    </footer>
  </template>


<style>
.background{
  height: 820px;
  background-image: url(../src/assets/專題作品圖/ethan-chan.png);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
