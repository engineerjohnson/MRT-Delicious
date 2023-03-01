<script >
import { RouterLink} from 'vue-router'
export default{
  components:{
    RouterLink,
  }
}
</script>

<template>
<div class="background">
  <div>
    <!-- navbar -->
    <nav class="navbar navbar-dark navbar-expand-lg navbar-light px-5">
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
  </div>
  <div class="caption d-flex justify-content-center align-items-center">
    <div>
  <h1 class="text-white display-5 d-flex justify-content-center"><dt>專屬吃貨的世界。</dt></h1>
    <h2 class="text-white  d-flex justify-content-center"><dt>讓您輕鬆搜尋、收藏與訂購美食。</dt></h2>
    <div class="mt-5">
      <div class=" d-flex justify-content-center">
    <input type="text" placeholder=" 請輸入站名" class="rounded-pill  py-2 ">
      </div>
    </div>
  </div>
  </div>
  </div>
  <nav  id="question" class="d-flex align-items-center justify-content-center bg-warning">
    <div class="container">
    <h3 class="text-center my-5 text-white ">總是在懊惱下一餐要吃什麼嗎?</h3>
      <div class="row d-flex justify-content-center">
        <div class="col-lg w-75 text-center mx-lg-3 question-box bg-light rounded mb-4">
          <img class="my-4" src="../assets/專題作品圖/sentiment.png">
          <p>想了很久卻怕不好吃?</p>
        </div>
        <div class="col-lg w-75 text-center mx-lg-3 question-box bg-light rounded mb-4">
          <img class="my-4" src="../assets/專題作品圖/paid.png">
          <p>害怕美食昂貴?</p>
        </div>
        <div class="col-lg w-75 text-center mx-lg-3 question-box bg-light rounded mb-4">
          <img class="my-4" src="../assets/專題作品圖/watch.png">
          <p>總是在等待排隊等待美食?</p>
        </div>
      </div>
    </div>
  </nav>
    <footer class='text-center py-3 bg-dark text-white' >
      <p class="my-0">johnson@2023 All World 純屬練習使用，無商業目的</p>
    </footer>
  </template>

<style>
.background{
  min-height: 820px;
  background-image: url("@/assets/專題作品圖/ethan-chan.png");
  background-size: cover;
  background-position: center;
}
.caption{
  min-height: 520px;
}
input{
  padding-right:100px ;
}
.question-box{
  font-size: 24px;
  min-height: 205px;
}
h3{
  font-size: 40px;
}
#question{
    min-height: 493px;
  }
@media(max-width: 376px){
  .background{
    min-height:666px;
  }
  #question{
    min-height: 732px;
  }
  h3{
    font-size: 32px;
  }
  .question-box{
    min-height: 165px;
}
}
</style>