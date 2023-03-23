<script>
import banner from "../../components/bannerComponent.vue";
import footerComported from "../../components/footerComponter.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
//導入swiper的Modules效果 如Autoplay(自動撥放),Pagination(下方顯示剩幾頁),Navigation(箭頭)
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import { onMounted } from "vue";
// const {VITE_APP_API, VITE_APP_PATH } = import.meta.env;
import { mapState,mapActions } from "pinia";
import produceStore from "../../stores/product.js";
export default {
  data() {
    return {
      modules: [Navigation, Pagination, Autoplay],
      // swiper的RWD功能
      swiperOptions: {
        breakpoints: {
          280: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1310: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          577: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        },
      },
    };
  },
  components: {
    banner,
    Swiper,
    SwiperSlide,
    footerComported,
  },
  methods:{
    //從produceStore(product.js pinia)取出以下方法或參數
    ...mapActions(produceStore,["getProduct","changeStandType","changeWantEatType"]),

  },
  mounted(){
    this.getProduct();
  },
  computed:{
    //從produceStore(product.js pinia)取出以下方法或參數
    ...mapState(produceStore,["product","standType","wantEatType","standProduct","WantEatProduct"]),
  },
};
</script>

<template>
  <!-- 表頭 -->
  <header class="background">
    <div>
      <banner></banner>
    </div>
    <div class="caption d-flex justify-content-center align-items-center">
      <div>
        <h1 class="text-white display-5">
          <dt class="text-center pb-2">
            專屬吃貨的世界，讓您輕鬆搜尋、收藏與訂購美食。
          </dt>
        </h1>
        <h2 class="text-white">
          <dt class="text-center">
            讓您在任何情況下都可以輕鬆選擇想吃的一餐。
          </dt>
        </h2>
        <div class="d-flex justify-content-center">
          <button type="button" class="fs-4 px-5 py-2 btn btn-warning">
            <RouterLink
              to="Stand"
              class="nav-link nav-item text-white"
              data-toggle
            >
              訂購去
            </RouterLink>
          </button>
        </div>
      </div>
    </div>
  </header>
  <article
    id="question"
    class="d-flex align-items-center justify-content-center bg-warning"
  >
    <div class="container">
      <h3 class="text-center my-5 text-white">總是在懊惱下一餐要吃什麼嗎?</h3>
      <div class="row d-flex justify-content-center">
        <div
          id="question-box"
          class="col-lg w-75 text-center mx-lg-3 bg-light rounded mb-4"
        >
          <img class="my-4" src="./專題作品圖/sentiment.png" />
          <p>想了很久卻怕不好吃?</p>
        </div>
        <div
          id="question-box"
          class="col-lg w-75 text-center mx-lg-3 bg-light rounded mb-4"
        >
          <img class="my-4" src="./專題作品圖/paid.png" />
          <p>害怕美食昂貴?</p>
        </div>
        <div
          id="question-box"
          class="col-lg w-75 text-center mx-lg-3 bg-light rounded mb-4"
        >
          <img class="my-4" src="./專題作品圖/watch.png" />
          <p>總是在等待排隊等待美食?</p>
        </div>
      </div>
    </div>
  </article>
  <article class="container">
    <!-- 美食超人在此幫您解決下一餐的問題 -->
    <section id="solution" class="row justify-content-center">
      <h3 class="text-center">美食超人在此幫您解決下一餐的問題!!</h3>
      <div
        id="solution-box-sushi"
        class="col-md-5 mx-2 my-3 p-0 rounded d-flex align-items-center justify-content-center"
      >
        <p>推薦美食前三站</p>
      </div>
      <div
        id="solution-box-noodle"
        class="col-md-5 mx-2 my-3 p-0 rounded d-flex align-items-center justify-content-center"
      >
        <p>想的美食種類</p>
      </div>
      <div
        id="solution-box-Parmesan"
        class="col-md-5 mx-2 my-3 p-0 rounded d-flex align-items-center justify-content-center"
      >
        <p>獲取優惠券</p>
      </div>
      <div
        id="solution-box-cookie"
        class="col-md-5 mx-2 my-3 p-0 rounded d-flex align-items-center justify-content-center"
      >
        <p>收藏美食下次享用</p>
      </div>
    </section>
    <!-- 推薦美食前三站 -->
    <section id="top-3">
      <h3 class="text-center">推薦美食前三站</h3>
      <div class="d-flex justify-content-center">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active rounded-pill"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-daqing"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              @click="changeStandType('大慶站')"
            >
              大慶站
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link rounded-pill"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-wenxin-chongde"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              @click="changeStandType('文心崇德站')"
            >
              文心崇德
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link rounded-pill"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-fengle-park"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
              @click="changeStandType('豐樂公園站')"
            >
              豐樂公園
            </button>
          </li>
        </ul>
      </div>
      <div
        class="tab-content d-flex justify-content-center"
        id="pills-tabContent"
      >
      <!-- 大慶站美食 -->
        <div
          class="tab-pane fade show active"
          id="pills-daqing"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
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
              <swiper-slide v-for="standProduct in standProduct" :key="standProduct.id">
              <div id="swiper-car">
                <div id="swiper-car-img" >
                  <img :src=standProduct.imageUrl alt="" />
                </div>
                <dt class="my-2 fs-4">{{ standProduct.title }}</dt>
                <p>
                  商品描述:<span>{{ standProduct.description }}</span>
                </p>
                <p>營業時段:</p>
                <p>{{ standProduct.content }}</p>
                <button
                  type="button"
                  class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"
                >
                  <img
                    style="width: 20px; height: 20px"
                    src="./專題作品圖/love.png"
                    alt=""
                  />收藏
                </button>
                <button type="button" class="btn btn-secondary p-1 p-lg-2">
                  <img
                    style="width: 20px; height: 20px"
                    src="./專題作品圖/car.png"
                    alt=""
                  />加入購物車
                </button>
              </div>
            </swiper-slide>
              </Swiper>
        </div>
        <!-- 文心崇德站美食 -->
        <div
          class="tab-pane fade"
          id="pills-wenxin-chongde"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
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
          <swiper-slide v-for="standProduct in standProduct" :key="standProduct.id">
              <div id="swiper-car">
                <div id="swiper-car-img" >
                  <img :src=standProduct.imageUrl alt="" />
                </div>
                <dt class="my-2 fs-4">{{ standProduct.title }}</dt>
                <p>
                  商品描述:<span>{{ standProduct.description }}</span>
                </p>
                <p>營業時段:</p>
                <p>{{ standProduct.content }}</p>
                <button
                  type="button"
                  class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"
                >
                  <img
                    style="width: 20px; height: 20px"
                    src="./專題作品圖/love.png"
                    alt=""
                  />收藏
                </button>
                <button type="button" class="btn btn-secondary p-1 p-lg-2">
                  <img
                    style="width: 20px; height: 20px"
                    src="./專題作品圖/car.png"
                    alt=""
                  />加入購物車
                </button>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
        <!-- 豐樂公園站美食 -->
        <div
          class="tab-pane fade"
          id="pills-fengle-park"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
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
          <swiper-slide v-for="standProduct in standProduct" :key="standProduct.id">
              <div id="swiper-car">
                <div id="swiper-car-img" >
                  <img :src=standProduct.imageUrl alt="" />
                </div>
                <dt class="my-2 fs-4">{{ standProduct.title }}</dt>
                <p>
                  商品描述:<span>{{ standProduct.description }}</span>
                </p>
                <p>營業時段:</p>
                <p>{{ standProduct.content }}</p>
                <button
                  type="button"
                  class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"
                >
                  <img
                    style="width: 20px; height: 20px"
                    src="./專題作品圖/love.png"
                    alt=""
                  />收藏
                </button>
                <button type="button" class="btn btn-secondary p-1 p-lg-2">
                  <img
                    style="width: 20px; height: 20px"
                    src="./專題作品圖/car.png"
                    alt=""
                  />加入購物車
                </button>
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
            <button
              class="nav-link active rounded-pill"
              id="japanese-style-tab"
              data-bs-toggle="pill"
              data-bs-target="#japanese-style"
              type="button"
              role="tab"
              aria-controls="japanese-style"
              aria-selected="true"
              @click="changeWantEatType('日式')"
            >
              日式
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link rounded-pill"
              id="western-food-tab"
              data-bs-toggle="pill"
              data-bs-target="#western-food"
              type="button"
              role="tab"
              aria-controls="western-food"
              aria-selected="false"
              @click="changeWantEatType('西餐')"
            >
              西餐
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link rounded-pill"
              id="sweets-tab"
              data-bs-toggle="pill"
              data-bs-target="#sweets"
              type="button"
              role="tab"
              aria-controls="sweets"
              aria-selected="false"
              @click="changeWantEatType('甜食')"
            >
              甜食
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link rounded-pill"
              id="chinese-style-tab"
              data-bs-toggle="pill"
              data-bs-target="#chinese-style"
              type="button"
              role="tab"
              aria-controls="chinese-style"
              aria-selected="false"
              @click="changeWantEatType('中式')"
            >
              中式
            </button>
          </li>
        </ul>
      </div>
      <div
        class="tab-content d-flex justify-content-center"
        id="pills-tabContent"
      >
        <div
          class="tab-pane fade show active"
          id="japanese-style"
          role="tabpanel"
          aria-labelledby="japanese-style-tab"
        >
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
            <swiper-slide v-for="WantEatProduct in WantEatProduct" :key="WantEatProduct.id">
              <div id="swiper-car">
                <div id="swiper-car-img">
                  <img :src=WantEatProduct.imageUrl alt="" />
                </div>
                <dt class="my-2 fs-4">{{ WantEatProduct.title }}</dt>
                <p>商品描述:<span>{{ WantEatProduct.description }}</span></p>
                <p>營業時段:</p>
                <p>一到日 :{{ WantEatProduct.content }}</p>
                <button
                  type="button"
                  class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"
                >
                  <img
                    style="width: 20px; height: 20px"
                    src="./專題作品圖/love.png"
                    alt=""
                  />收藏
                </button>
                <button type="button" class="btn btn-secondary p-1 p-lg-2">
                  <img
                    style="width: 20px; height: 20px"
                    src="./專題作品圖/car.png"
                    alt=""
                  />加入購物車
                </button>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
        <div
          class="tab-pane fade"
          id="western-food"
          role="tabpanel"
          aria-labelledby="western-food-tab"
        >
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
            <swiper-slide v-for="WantEatProduct in WantEatProduct" :key="WantEatProduct.id">
              <div id="swiper-car">
                <div id="swiper-car-img">
                  <img :src=WantEatProduct.imageUrl alt="" />
                </div>
                <dt class="my-2 fs-4">{{ WantEatProduct.title }}</dt>
                <p>商品描述:<span>{{ WantEatProduct.description }}</span></p>
                <p>營業時段:</p>
                <p>一到日 :{{ WantEatProduct.content }}</p>
                <button
                  type="button"
                  class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"
                >
                  <img
                    style="width: 20px; height: 20px"
                    src="./專題作品圖/love.png"
                    alt=""
                  />收藏
                </button>
                <button type="button" class="btn btn-secondary p-1 p-lg-2">
                  <img
                    style="width: 20px; height: 20px"
                    src="./專題作品圖/car.png"
                    alt=""
                  />加入購物車
                </button>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
        <div
          class="tab-pane fade"
          id="sweets"
          role="tabpanel"
          aria-labelledby="sweets-tab"
        >
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
            <swiper-slide v-for="WantEatProduct in WantEatProduct" :key="WantEatProduct.id">
              <div id="swiper-car">
                <div id="swiper-car-img">
                  <img :src=WantEatProduct.imageUrl alt="" />
                </div>
                <dt class="my-2 fs-4">{{ WantEatProduct.title }}</dt>
                <p>商品描述:<span>{{ WantEatProduct.description }}</span></p>
                <p>營業時段:</p>
                <p>一到日 :{{ WantEatProduct.content }}</p>
                <button
                  type="button"
                  class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"
                >
                  <img
                    style="width: 20px; height: 20px"
                    src="./專題作品圖/love.png"
                    alt=""
                  />收藏
                </button>
                <button type="button" class="btn btn-secondary p-1 p-lg-2">
                  <img
                    style="width: 20px; height: 20px"
                    src="./專題作品圖/car.png"
                    alt=""
                  />加入購物車
                </button>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
        <div
          class="tab-pane fade"
          id="chinese-style"
          role="tabpanel"
          aria-labelledby="chinese-style-tab"
        >
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
            <swiper-slide v-for="WantEatProduct in WantEatProduct" :key="WantEatProduct.id">
              <div id="swiper-car">
                <div id="swiper-car-img">
                  <img :src=WantEatProduct.imageUrl alt="" />
                </div>
                <dt class="my-2 fs-4">{{ WantEatProduct.title }}</dt>
                <p>商品描述:<span>{{ WantEatProduct.description }}</span></p>
                <p>營業時段:</p>
                <p>一到日 :{{ WantEatProduct.content }}</p>
                <button
                  type="button"
                  class="btn btn-danger me-lg-3 me-1 p-1 p-lg-2"
                >
                  <img
                    style="width: 20px; height: 20px"
                    src="./專題作品圖/love.png"
                    alt=""
                  />收藏
                </button>
                <button type="button" class="btn btn-secondary p-1 p-lg-2">
                  <img
                    style="width: 20px; height: 20px"
                    src="./專題作品圖/car.png"
                    alt=""
                  />加入購物車
                </button>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
      </div>
    </section>
    <!-- 獲取優惠券 -->
    <h3 id="coupon-text" class="text-center mt-sm-5 mt-3">獲取優惠券</h3>
  </article>
  <section id="coupon" class="bg-warning">
    <div class="row d-flex justify-content-center gx-0">
      <div id="coupon-percent" class="col-sm-5 rounded me-sm-3 mb-3">
        <p class="mt-5 text-center">首次訂購打9折</p>
        <div class="coupon-button">
          <button type="button" class="btn btn-light px-4 py-2 me-md-5">
            領取
          </button>
        </div>
      </div>
      <div id="coupon-cash" class="col-sm-5 rounded mb-3">
        <p class="mt-5 text-center">訂購滿100元折10元</p>
        <div class="coupon-button">
          <button type="button" class="btn btn-light px-4 py-2 me-md-5">
            領取
          </button>
        </div>
      </div>
    </div>
  </section>
  <footerComported id="footer"></footerComported>
</template>
