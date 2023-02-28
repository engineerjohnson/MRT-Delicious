<script>
import { RouterLink } from 'vue-router'
export default{
  components:{
    RouterLink,
  }
}
</script>

<template>
    <!-- navbar -->
    <nav class="navbar navbar-dark navbar-expand-lg navbar-light bg-dark px-5">
    <RouterLink to="Home" class="navbar-brand"><img src="../assets/專題作品圖/logo.png" alt="MRT-Delicious"></RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
        <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
        <div class="navbar-nav ps-2">
            <RouterLink to="Cart" class="nav-link nav-item text-white me-4" data-toggle><img src="../assets/專題作品圖/car.png" alt="cashopping cartt">購物車</RouterLink>
            <RouterLink to="Keep" class="nav-link nav-item text-white me-4" data-toggle><img src="../assets/專題作品圖/love.png" alt="Keep">收藏</RouterLink>
        </div>
        </div>
    </nav>
<p>123456</p>
    <footer class='text-center py-3 bg-dark text-white' >
        <p class="my-0">johnson@2023 All World 純屬練習使用，無商業目的</p>
    </footer>
</template>