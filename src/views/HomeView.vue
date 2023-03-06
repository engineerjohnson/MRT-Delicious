<script  >
import { RouterLink} from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
//導入swiper的Modules效果 如Autoplay(自動撥放),Pagination(下方顯示剩幾頁),Navigation(箭頭)
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
export default{
  data() {
        return {
          modules: [Navigation, Pagination, Autoplay],
          swiperOptions: {
                breakpoints: {       
            280: {       
                slidesPerView: 1,
                spaceBetween: 10
            },
            1310: {       
              slidesPerView: 3,       
                spaceBetween: 20  
            },  
            577:{
              slidesPerView: 2,       
                spaceBetween: 50 
            }
            }   
          }
        };
    },
  components:{
    RouterLink,
    Swiper,
    SwiperSlide,
  }
}
</script>

<template>
  <!-- 表頭 -->
<header class="background">
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
  </header>
  <article  id="question" class="d-flex align-items-center justify-content-center bg-warning">
    <div class="container">
    <h3 class="text-center my-5 text-white ">總是在懊惱下一餐要吃什麼嗎?</h3>
      <div class="row d-flex justify-content-center">
        <div id='question-box' class="col-lg w-75 text-center mx-lg-3  bg-light rounded mb-4">
          <img class="my-4" src="../assets/專題作品圖/sentiment.png">
          <p>想了很久卻怕不好吃?</p>
        </div>
        <div id='question-box' class="col-lg w-75 text-center mx-lg-3  bg-light rounded mb-4">
          <img class="my-4" src="../assets/專題作品圖/paid.png">
          <p>害怕美食昂貴?</p>
        </div>
        <div id='question-box' class="col-lg w-75 text-center mx-lg-3 bg-light rounded mb-4">
          <img class="my-4" src="../assets/專題作品圖/watch.png">
          <p>總是在等待排隊等待美食?</p>
        </div>
      </div>
    </div>
  </article>
  
  <article class="container">
    <!-- 美食超人在此幫您解決下一餐的問題 -->
  <section id="solution" >
    <h3 class="text-center">美食超人在此幫您解決下一餐的問題!!</h3>
    <div class="row d-flex justify-content-center">
          <div id='solution-box-sushi' class="col-md-5 mx-2 my-3 p-0 rounded d-flex justify-content-center align-items-center" >
              <p >推薦美食前三站</p>
          </div>
        <div id='solution-box-noodle' class="col-md-5 mx-2 my-3 p-0 rounded d-flex justify-content-center align-items-center">
              <p>想的美食種類</p>
        </div>
        <div id='solution-box-Parmesan' class="col-md-5 mx-2 my-3 p-0 rounded d-flex justify-content-center align-items-center">
            <p>獲取優惠券</p>
        </div>
        <div id='solution-box-cookie' class="col-md-5 mx-2 my-3 p-0  rounded d-flex justify-content-center align-items-center" >
            <p>收藏美食下次享用</p>
        </div>
    </div>
  </section >
  <!-- 推薦美食前三站 -->
  <section id="top-3">
  <h3 class="text-center">推薦美食前三站</h3>
  <div class="d-flex justify-content-center">
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active rounded-pill " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-daqing" type="button" role="tab" aria-controls="pills-home" aria-selected="true">大慶站</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link rounded-pill" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-wenxin-chongde" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">文心崇德</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link rounded-pill" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-fengle-park" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">豐樂公園</button>
      </li>
    </ul>
  </div>
    <div class="tab-content d-flex justify-content-center" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-daqing" role="tabpanel" aria-labelledby="pills-home-tab">
        <Swiper 
        :breakpoints="swiperOptions.breakpoints"
        :modules="modules"
        :centeredSlides="false"
        navigation
    :autoplay="{
      delay: 9000,
      disableOnInteraction: false,
    }"
        >
          <swiper-slide>
            <div id="swiper-car" >
              <div id="swiper-car-img">
              <img src="../assets/專題作品圖/芭樂.png" alt="" >
              </div>
                <dt class="my-2 fs-4">芭樂撞檸檬</dt>
                <p>商品描述:採用芭樂加檸檬的新吃法，提鮮了芭樂的鮮甜跟檸檬的香氣。</p>
                <p>營業時段:</p>
                <p>三 、五、六、日 : 1700~0000</p>
                <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/love.png" alt="">收藏</button>
                <button type="button" class="btn btn-secondary p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/car.png" alt="">加入購物車</button>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div id="swiper-car" >
              <div id="swiper-car-img">
              <img src="../assets/專題作品圖/牛排.png" alt="" >
              </div>
              <dt class="my-2 fs-4">來一客牛排-厚切牛排</dt>
              <p>商品描述:平價牛排，搭配特殊醬料，感覺像是牛排整個帶動起來~~</p>
              <p>營業時段:</p>
              <p>一到日 : 11:00~13:30，17:00~21:00</p>
              <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/love.png" alt="">收藏</button>
              <button type="button" class="btn btn-secondary p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/car.png" alt="">加入購物車</button>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div id="swiper-car" >
              <div id="swiper-car-img">
              <img   src="../assets/專題作品圖/牛排.png" alt="" >
              </div>
              <dt class="my-2 fs-4">來一客牛排-厚切牛排</dt>
              <p>商品描述:平價牛排，搭配特殊醬料，感覺像是牛排整個帶動起來~~</p>
              <p>營業時段:</p>
              <p>一到日 : 11:00~13:30，17:00~21:00</p>
              <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/love.png" alt="">收藏</button>
              <button type="button" class="btn btn-secondary p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/car.png" alt="">加入購物車</button>
            </div>
          </swiper-slide>
        </Swiper>
      </div>
      <div class="tab-pane fade" id="pills-wenxin-chongde" role="tabpanel" aria-labelledby="pills-profile-tab">
        <Swiper 
        :breakpoints="swiperOptions.breakpoints"
        :modules="modules"
        :centeredSlides="false"
        navigation
    :autoplay="{
      delay: 9000,
      disableOnInteraction: false,
    }"
        >
          <swiper-slide>
            <div id="swiper-car" >
              <div id="swiper-car-img">
              <img src="../assets/專題作品圖/芭樂.png" alt="" >
              </div>
                <dt class="my-2 fs-4">芭樂撞檸檬</dt>
                <p>商品描述:採用芭樂加檸檬的新吃法，提鮮了芭樂的鮮甜跟檸檬的香氣。</p>
                <p>營業時段:</p>
                <p>三 、五、六、日 : 1700~0000</p>
                <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/love.png" alt="">收藏</button>
                <button type="button" class="btn btn-secondary p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/car.png" alt="">加入購物車</button>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div id="swiper-car">
              <div id="swiper-car-img">
              <img src="../assets/專題作品圖/牛排.png" alt="" >
              </div>
              <dt class="my-2 fs-4">來一客牛排-厚切牛排</dt>
              <p>商品描述:平價牛排，搭配特殊醬料，感覺像是牛排整個帶動起來~~</p>
              <p>營業時段:</p>
              <p>一到日 : 11:00~13:30，17:00~21:00</p>
              <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/love.png" alt="">收藏</button>
              <button type="button" class="btn btn-secondary p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/car.png" alt="">加入購物車</button>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div id="swiper-car" >
              <div id="swiper-car-img">
              <img src="../assets/專題作品圖/牛排.png" alt="" >
              </div>
              <dt class="my-2 fs-4">來一客牛排-厚切牛排</dt>
              <p>商品描述:平價牛排，搭配特殊醬料，感覺像是牛排整個帶動起來~~</p>
              <p>營業時段:</p>
              <p>一到日 : 11:00~13:30，17:00~21:00</p>
              <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/love.png" alt="">收藏</button>
              <button type="button" class="btn btn-secondary p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/car.png" alt="">加入購物車</button>
            </div>
          </swiper-slide>
        </Swiper>
      </div>
      <div class="tab-pane fade" id="pills-fengle-park" role="tabpanel" aria-labelledby="pills-contact-tab">
        <Swiper 
        :breakpoints="swiperOptions.breakpoints"
        :modules="modules"
        :centeredSlides="false"
        navigation
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
        >
          <swiper-slide>
            <div id="swiper-car" >
              <div id="swiper-car-img">
              <img src="../assets/專題作品圖/芭樂.png" alt="" >
              </div>
                <dt class="my-2 fs-4">芭樂撞檸檬</dt>
                <p>商品描述:採用芭樂加檸檬的新吃法，提鮮了芭樂的鮮甜跟檸檬的香氣。</p>
                <p>營業時段:</p>
                <p>三 、五、六、日 : 1700~0000</p>
                <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/love.png" alt="">收藏</button>
                <button type="button" class="btn btn-secondary p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/car.png" alt="">加入購物車</button>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div id="swiper-car">
              <div id="swiper-car-img">
              <img src="../assets/專題作品圖/牛排.png" alt="" >
              </div>
              <dt class="my-2 fs-4">來一客牛排-厚切牛排</dt>
              <p>商品描述:平價牛排，搭配特殊醬料，感覺像是牛排整個帶動起來~~</p>
              <p>營業時段:</p>
              <p>一到日 : 11:00~13:30，17:00~21:00</p>
              <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/love.png" alt="">收藏</button>
              <button type="button" class="btn btn-secondary p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/car.png" alt="">加入購物車</button>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div id="swiper-car" >
              <div id="swiper-car-img">
              <img src="../assets/專題作品圖/牛排.png" alt="" >
              </div>
              <dt class="my-2 fs-4">來一客牛排-厚切牛排</dt>
              <p>商品描述:平價牛排，搭配特殊醬料，感覺像是牛排整個帶動起來~~</p>
              <p>營業時段:</p>
              <p>一到日 : 11:00~13:30，17:00~21:00</p>
              <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/love.png" alt="">收藏</button>
              <button type="button" class="btn btn-secondary p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/car.png" alt="">加入購物車</button>
            </div>
          </swiper-slide>
        </Swiper>
      </div>
    </div>
  </section>
  <!-- 想吃什麼 -->
  <section id="want-eat">
    <h3 class="text-center">想吃什麼</h3>
    <div class="d-flex justify-content-center">
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active rounded-pill" id="japanese-style-tab" data-bs-toggle="pill" data-bs-target="#japanese-style" type="button" role="tab" aria-controls="japanese-style" aria-selected="true">日式</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link rounded-pill" id="western-food-tab" data-bs-toggle="pill" data-bs-target="#western-food" type="button" role="tab" aria-controls="western-food" aria-selected="false">西餐</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link rounded-pill" id="sweets-tab" data-bs-toggle="pill" data-bs-target="#sweets" type="button" role="tab" aria-controls="sweets" aria-selected="false">甜食</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link rounded-pill" id="breakfast-tab" data-bs-toggle="pill" data-bs-target="#breakfast" type="button" role="tab" aria-controls="breakfast" aria-selected="false">早餐</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link rounded-pill" id="chinese-style-tab" data-bs-toggle="pill" data-bs-target="#chinese-style" type="button" role="tab" aria-controls="chinese-style" aria-selected="false">中式</button>
      </li>
    </ul>
    </div>
    <div class="tab-content d-flex justify-content-center" id="pills-tabContent">
      <div class="tab-pane fade show active" id="japanese-style" role="tabpanel" aria-labelledby="japanese-style-tab">
        <Swiper 
        :breakpoints="swiperOptions.breakpoints"
        :modules="modules"
        :centeredSlides="false"
        navigation
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
        >
          <swiper-slide>
            <div id="swiper-car">
              <div id="swiper-car-img">
              <img src="../assets/專題作品圖/烤鴨.png" alt="" >
              </div>
                <dt class="my-2 fs-4">鴨片館-北平烤鴨</dt>
                <p>商品描述:採用一鴨三吃，有片皮鴨、鹽酥鴨架、醬爆鴨架。</p>
                <p>營業時段:</p>
                <p> 一到日 : 11:00~15:00, 17:00~21:30</p>
                <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/love.png" alt="">收藏</button>
                <button type="button" class="btn btn-secondary p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/car.png" alt="">加入購物車</button>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div id="swiper-car">
              <div id="swiper-car-img">
              <img src="../assets/專題作品圖/雞腿排.png" alt="" >
              </div>
              <dt class="my-2 fs-4">微風鐵板燒-雞腿排餐</dt>
              <p>商品描述:焦香雞腿加上奶油味的鮮甜高麗菜，簡直是最完美的套餐。</p>
              <p>營業時段:</p>
              <p>一到日 : 11:00~13:30，17:00~21:00</p>
              <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/love.png" alt="">收藏</button>
              <button type="button" class="btn btn-secondary p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/car.png" alt="">加入購物車</button>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div id="swiper-car">
              <div id="swiper-car-img">
              <img src="../assets/專題作品圖/雞腿排.png" alt="" >
              </div>
              <dt class="my-2 fs-4">微風鐵板燒-雞腿排餐</dt>
              <p>商品描述:焦香雞腿加上奶油味的鮮甜高麗菜，簡直是最完美的套餐。</p>
              <p>營業時段:</p>
              <p>一到日 : 11:00~13:30，17:00~21:00</p>
              <button type="button" class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/love.png" alt="">收藏</button>
              <button type="button" class="btn btn-secondary p-1 p-lg-2"><img style="width: 20px; height: 20px;" src="../assets/專題作品圖/car.png" alt="">加入購物車</button>
            </div>
          </swiper-slide>
        </Swiper>
      </div>
      <div class="tab-pane fade" id="western-food" role="tabpanel" aria-labelledby="western-food-tab">西餐</div>
      <div class="tab-pane fade" id="sweets" role="tabpanel" aria-labelledby="sweets-tab">甜食</div>
      <div class="tab-pane fade" id="breakfast" role="tabpanel" aria-labelledby="breakfast-tab">早餐</div>
      <div class="tab-pane fade" id="chinese-style" role="tabpanel" aria-labelledby="chinese-style-tab">中式</div>
    </div>
  </section>
  <!-- 獲取優惠券 -->
  <section id="coupon">
    <h3 class="text-center">獲取優惠券</h3>
    <div class="d-flex justify-content-center row">
      <div id="coupon-percent" class="col-5 rounded p-0 mx-3 my-3">
        <p class="mt-5 text-center">首次訂購打9折</p>
        <button type="button" class="btn btn-light px-sm-5 py-sm-3 mt-sm-4">領取</button>
      </div>
      <div id="coupon-cash" class="col-5 rounded p-0 mx-3 my-3">
        <p class="mt-5 text-center">訂購滿100元折10元</p>
        <button type="button" class="btn btn-light px-sm-5 py-sm-3 mt-sm-4">領取</button>
      </div>
    </div>
  </section>
</article>
  <!-- 表尾 -->
    <footer >
      <div id="footer-background" class="bg-warning">
      </div>
      <div class='text-center py-3 bg-dark text-white' >
      <p class="my-0">johnson@2023 All World 純屬練習使用，無商業目的</p>
      </div>
    </footer>
  </template>

<style>
:root{
  --swiper-navigation-size:25px;
}
.swiper {
  max-width: 1296px;
}
#swiper-car{
  max-width: 412px;
}
#swiper-car-img{
  max-width: 412px;
  height: 290px;
  border-radius: 10px;  /* 在這使用border-radius，才不會因為transform: scale(1.1)而變得沒有圓角 */
  overflow: hidden; /* 維持大小 */
}
#swiper-car-img img{
  width: 100%;
  height:100%;
  object-fit: cover;
  transition: transform 0.7s;
}
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
#question-box{
  font-size: 24px;
  min-height: 205px;
}
h3{
  font-size: 40px;
}
#question{
    min-height: 493px;
  }
#solution, #top-3, #want-eat, #coupon{
  margin-top: 120px;
}
#solution-box-sushi{
  height: 200px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/專題作品圖/壽司.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition-duration:0.7s; 
  color: aliceblue;
  font-size: 32px;
}
#solution-box-noodle{
  height: 200px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/專題作品圖/鮮蝦麵.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition-duration:0.7s; 
  color: aliceblue;
  font-size: 32px;
}
#solution-box-Parmesan{
  height: 200px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/專題作品圖/帕瑪森.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition-duration:0.7s; 
  color: aliceblue;
  font-size: 32px;
}
#solution-box-cookie{
  height: 200px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/專題作品圖/蔬果餅乾.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition-duration:0.7s; 
  color: aliceblue;
  font-size: 32px;
}
.nav-link{
  color: #919191;
  font-size: 24px;
}
#coupon{
  position: relative;
  z-index: 3;
}
footer{
  width: 100%;
  transform: translateY(-50%);
  position: absolute;
  z-index: 2;
}
#footer-background{
  height: 322px;
}
#coupon-percent{
  width: 47%;
  height: 290px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/專題作品圖/折扣.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition-duration:0.7s; 
  color: aliceblue;
  font-size: 40px;
}
#coupon-cash{
  width: 47%;
  height: 290px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/專題作品圖/折讓.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition-duration:0.7s; 
  color: aliceblue;
  font-size: 40px;
}
.btn-light{
  margin-left: 70%;
}
#solution-box-sushi:hover,#solution-box-noodle:hover,#solution-box-Parmesan:hover,#solution-box-cookie:hover{
  background-size: 120%;
}
#coupon-percent:hover,#coupon-cash:hover{
  background-size: 120%;
}
#swiper-car-img:hover img{
  transform: scale(1.1);
}
@media(max-width:1310px){
  .swiper {
  max-width: 550px;
}
#swiper-car{
  max-width: 275px;
}
#swiper-car-img{
  max-width: 412px;
  height: 180px;
  border-radius: 10px;
}
#swiper-car-img img{
  max-width: 250px;
  height: 180px;
}
#coupon-percent,#coupon-cash{
  width: 45%;
  height: 45%;
  font-size: 36px;
}
.btn-light{
  width: 148px;
  height: 62px;
  padding: 20px 56px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
}
#solution-box-sushi:hover,#solution-box-noodle:hover,#solution-box-Parmesan:hover,#solution-box-cookie:hover{
  background-size: 170%;
}
#coupon-percent:hover,#coupon-cash:hover{
  background-size: 170%;
}
}
@media(max-width:768px){
  #coupon-percent,#coupon-cash{
  width: 40%;
  height: 40%;
  font-size: 36px;
  font-size: 24px;
}
#solution-box-sushi:hover,#solution-box-noodle:hover,#solution-box-Parmesan:hover,#solution-box-cookie:hover{
  background-size: 110%;
}
#coupon-percent:hover,#coupon-cash:hover{
  background-size: 250%;
}
}
@media(max-width: 576px){
  #solution-box-sushi, #solution-box-noodle, #solution-box-Parmesan, #solution-box-cookie{
  width: 95%;
  }
  .swiper {
  max-width: 220px;
}
#swiper-car{
  max-width: 225px;
}
  #swiper-car img{
  max-width: 220px;
  height: 180px;
}
#coupon-percent,#coupon-cash{
  width: 95%;
  font-size: 30px;
}
.btn-light{
  width: 148px;
  height: 62px;
  padding: 20px 56px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
}
footer{
  transform: translateY(-80%);
}
#footer-background{
  height: 550px;
}
#solution-box-sushi:hover,#solution-box-noodle:hover,#solution-box-Parmesan:hover,#solution-box-cookie:hover{
  background-size: 120%;
}
#coupon-percent:hover,#coupon-cash:hover{
  background-size: 120%;
}
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
  #question-box{
    min-height: 165px;
}
#solution, #top-3, #want-eat,#coupon{
  margin-top: 60px;
}
#solution-box-sushi, #solution-box-noodle, #solution-box-Parmesan, #solution-box-cookie{
  min-height: 154px;
}
#solution-box p, #solution-box-noodle p, #solution-box-Parmesan p, #solution-box-cookie p{
color: aliceblue;
font-size: 28px;
}
.nav-link{
  font-size: 20px;
}
#coupon-percent,#coupon-cash{
  width: 95%;
  height: 242px;
  font-size: 28px;
}
.btn-light{
  width: 148px;
  height: 62px;
  padding: 20px 56px;
  margin: auto;
  display: flex;
  justify-content: center;
}
#coupon-percent{
  margin-bottom: 11px;
}
footer{
  transform: translateY(-80%);
}
#footer-background{
  height: 463px;
}
#solution-box-sushi:hover,#solution-box-noodle:hover,#solution-box-Parmesan:hover,#solution-box-cookie:hover{
  background-size: 140%;
}
#coupon-percent:hover,#coupon-cash:hover{
  background-size: 170%;
}
}
</style>