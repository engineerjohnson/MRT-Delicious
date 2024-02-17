<script>
import productCard from "../../components/frontend/ProductCard.vue";
import productsStore from "../../stores/ProductsStore.js";
import keepStore from "../../stores/KeepStore.js";
import { mapState, mapActions } from "pinia";
// 載入loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
export default {
  computed: {
    ...mapState(productsStore, ["products", "standProduct", "isLoading"]),
  },
  components: {
    productCard,
    Loading,
  },
  methods: {
    ...mapActions(productsStore, ["getProducts", "filterProducts"]),
    ...mapActions(keepStore, ["getKeep"]),
  },
  mounted() {
    this.getProducts();
    this.getKeep();
  },
};
</script>

<template>
  <Loading v-model:active="isLoading" :loader="'dots'" />
  <div class="content">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-2 col-md-3 my-5">
          <div
            class="list-group sticky-top"
            id="list-tab"
            role="tablist"
            style="top: 90px"
          >
            <a
              class="list-group-item list-group-item-action active"
              id="list-home-list"
              data-bs-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="list-home"
              >所有商品</a
            >
            <a
              class="list-group-item list-group-item-action"
              id="list-daqing"
              data-bs-toggle="list"
              data-ref="大慶站"
              href="#daqing"
              role="tab"
              aria-controls="list-profile"
              @click="filterProducts($event)"
              >大慶站</a
            >
            <a
              class="list-group-item list-group-item-action"
              id="list-fengle-park"
              data-bs-toggle="list"
              data-ref="豐樂公園"
              href="#fengle-park"
              role="tab"
              aria-controls="list-messages"
              @click="filterProducts($event)"
              >豐樂公園站</a
            >
            <a
              class="list-group-item list-group-item-action"
              id="list-suan-palace"
              data-bs-toggle="list"
              data-ref="水安宮"
              href="#suan-palace"
              role="tab"
              aria-controls="list-settings"
              @click="filterProducts($event)"
              >水安宮站</a
            >
            <a
              class="list-group-item list-group-item-action"
              id="list-wenhua-high-school"
              data-bs-toggle="list"
              data-ref="文華高中"
              href="#wenhua-high-school"
              role="tab"
              aria-controls="list-profile"
              @click="filterProducts($event)"
              >文華高中站</a
            >
            <a
              class="list-group-item list-group-item-action"
              id="list-wenxin-chongde"
              data-bs-toggle="list"
              data-ref="文心崇德"
              href="#wenxin-chongde"
              role="tab"
              aria-controls="list-messages"
              @click="filterProducts($event)"
              >文心崇德站</a
            >
            <a
              class="list-group-item list-group-item-action"
              id="list-beitun-terminal"
              data-bs-toggle="list"
              data-ref="松竹站"
              href="#beitun-terminal"
              role="tab"
              aria-controls="list-settings"
              @click="filterProducts($event)"
              >松竹站</a
            >
          </div>
        </div>
        <div class="col my-5">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              <div class="row card-group">
                <productCard :products="products"></productCard>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="daqing"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
              <div class="row card-group">
                <productCard :products="standProduct"></productCard>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="fengle-park"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
              <div class="row card-group">
                <productCard :products="standProduct"></productCard>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="suan-palace"
              role="tabpanel"
              aria-labelledby="list-settings-list"
            >
              <div class="row card-group">
                <productCard :products="standProduct"></productCard>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="wenhua-high-school"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
              <div class="row card-group">
                <productCard :products="standProduct"></productCard>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="wenxin-chongde"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
              <div class="row card-group">
                <productCard :products="standProduct"></productCard>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="beitun-terminal"
              role="tabpanel"
              aria-labelledby="list-settings-list"
            >
              <div class="row card-group">
                <productCard :products="standProduct"></productCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.image-hover {
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px;
}
img {
  max-width: 100%;
  max-height: 100%;
  transition: 0.3s;
}
.product-link:hover .card-img-top {
  transform: scale(1.2);
}
.product_box {
  width: 90%;
  margin: auto;
}
.card-group > .card {
  flex: none;
  position: relative;
  border: 0px;
}
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
</style>
