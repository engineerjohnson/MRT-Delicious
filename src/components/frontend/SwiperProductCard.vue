<script>
import addToCard from "../frontend/AddToCard.vue";
import addToKeep from "../frontend/AddToKeep.vue";
import { Swiper, SwiperSlide } from "swiper/vue"; //導入swiper的Modules效果 如Autoplay(自動撥放),Pagination(下方顯示剩幾頁)
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
export default {
  props: ["products"],
  data() {
    return {
      modules: [Pagination, Autoplay],
      // swiper的RWD功能
      swiperOptions: {
        breakpoints: {
          1310: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          577: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          280: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    addToCard,
    addToKeep,
  },
};
</script>

<template>
  <Swiper
    :autoplay="{ delay: 5000, disableOnInteraction: false }"
    :breakpoints="swiperOptions.breakpoints"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="products in products" :key="products.id" class="mb-5">
      <div id="swiper-car" class="card-group">
        <RouterLink
          class="text-decoration-none text-dark product-link w-100"
          :to="`/Product/${products.id}`"
        >
          <div class="card h-100">
            <div id="swiper-car-img">
              <img
                class="card-img-top"
                :src="products.imageUrl"
                :alt="products.title"
              />
            </div>
            <div class="card-body">
              <span class="badge rounded-pill bg-warning fs-6 my-2">{{
                products.unit
              }}</span>
              <h6 class="card-title fw-bold">{{ products.title }}</h6>
              <p class="fs-6" style="float: right">{{ products.price }}元</p>
            </div>
            <div class="card-footer">
              <div
                class="d-flex justify-content-between align-items-center"
                id="button"
              >
                <addToKeep :product="products"></addToKeep>
                <addToCard :product_id="products.id"></addToCard>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </swiper-slide>
  </Swiper>
</template>

<style>
.card,
.card-footer {
  background: none;
  border: none;
}
.card {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 3px 3px 3px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.card-title {
  font-size: 1.2rem;
}
.swiper-slide {
  height: 410px;
}
</style>
