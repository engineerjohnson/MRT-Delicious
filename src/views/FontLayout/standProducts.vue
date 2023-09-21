<script>
import addToCard from "../../components/addToCard.vue";
import addToKeep from "../../components/addToKeep.vue";
import productsStore from "../../stores/products.js";
import keepStore from "../../stores/keep.js";
import { mapState,mapActions } from "pinia";
// 載入loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
export default {
  computed : {
    ...mapState(productsStore,["products","standProduct","isLoading"])
  },
  components : {
    addToCard,
    addToKeep,
    Loading
  },
  methods : {
    ...mapActions(productsStore,["getProducts","filterProducts"]),
    ...mapActions(keepStore,["getKeep"])
  },
  mounted() {
    this.getProducts();
    this.getKeep();
  }
};
</script>

<template>
  <Loading v-model:active="isLoading" :loader="'dots'"/>
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
              <div class="row card-group" >
                <div class="col-lg-4 col-md-6 mb-4 pb-5 h-100" v-for="products in products" :key="products.id">
                  <div class=" card">
                    <RouterLink class="text-decoration-none text-dark" :to="`Product/${products.id}`">
                      <div class="image-hover">
                        <img class="card-img-top" :src=products.imageUrl :alt=products.title>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">
                          <span class="badge rounded-pill bg-warning fs-6 my-2">
                            {{ products.unit }}
                          </span>
                          <p class="fs-5">
                            {{ products.title }}
                            <span class="fs-6" style="float: right">{{ products.price }}元</span>
                          </p>
                        </h5>
                        <p class="card-text">{{ products.description }}</p>
                        <p class="card-text">{{ products.content }}</p>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex justify-content-between" id="button">
                          <addToKeep :product = products></addToKeep>
                          <addToCard :product_id = products.id></addToCard>
                        </div>
                      </div>

                      <!-- <div class="image-hover">
                        <img :src=products.imageUrl :alt=products.title>
                      </div>
                      <div class="product_box">
                        <span class="badge rounded-pill bg-warning fs-6 my-2"
                          >{{ products.unit }}</span
                        >
                        <p class="fs-5">
                          {{ products.title }}
                          <span class="fs-6" style="float: right">{{ products.price }}元</span>
                        </p>
                        <p>{{ products.description }}</p>
                        <p>{{ products.content }}</p>
                        <div class="d-flex justify-content-between card-footer" id="button">
                          <addToKeep :product = products></addToKeep>
                          <addToCard :product_id = products.id></addToCard>
                        </div>
                      </div> -->
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="daqing"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
            <div class="row card-group" >
                <div class="col-lg-4 col-md-6 mb-4 card pb-5" v-for="products in standProduct" :key="products.id">
                  <div>
                    <div class="image-hover">
                      <img :src=products.imageUrl :alt=products.title >
                    </div>
                    <div class="product_box">
                      <span class="badge rounded-pill bg-warning fs-6 my-2"
                        >{{ products.unit }}</span
                      >
                      <p class="fs-5">
                        {{ products.title }}
                        <span class="fs-6" style="float: right">{{ products.price }}元</span>
                      </p>
                      <p>{{ products.description }}</p>
                      <p>{{ products.content }}</p>
                      <div class="d-flex justify-content-between" id="button">
                        <addToKeep :product = products></addToKeep>
                        <addToCard :product_id = products.id></addToCard>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="fengle-park"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
            <div class="row card-group" >
                <div class="col-lg-4 col-md-6 mb-4 card pb-5" v-for="products in standProduct" :key="products.id">
                  <div>
                    <div class="image-hover">
                      <img :src=products.imageUrl :alt=products.title >
                    </div>
                    <div class="product_box">
                      <span class="badge rounded-pill bg-warning fs-6 my-2"
                        >{{ products.unit }}</span
                      >
                      <p class="fs-5">
                        {{ products.title }}
                        <span class="fs-6" style="float: right">{{ products.price }}元</span>
                      </p>
                      <p>{{ products.description }}</p>
                      <p>{{ products.content }}</p>
                      <div class="d-flex justify-content-between" id="button">
                        <addToKeep :product = products></addToKeep>
                        <addToCard :product_id = products.id></addToCard>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="suan-palace"
              role="tabpanel"
              aria-labelledby="list-settings-list"
            >
            <div class="row card-group" >
                <div class="col-lg-4 col-md-6 mb-4 card pb-5" v-for="products in standProduct" :key="products.id">
                  <div>
                    <div class="image-hover">
                      <img :src=products.imageUrl :alt=products.title >
                    </div>
                    <div class="product_box">
                      <span class="badge rounded-pill bg-warning fs-6 my-2"
                        >{{ products.unit }}</span
                      >
                      <p class="fs-5">
                        {{ products.title }}
                        <span class="fs-6" style="float: right">{{ products.price }}元</span>
                      </p>
                      <p>{{ products.description }}</p>
                      <p>{{ products.content }}</p>
                      <div class="d-flex justify-content-between" id="button">
                        <addToKeep :product = products></addToKeep>
                        <addToCard :product_id = products.id></addToCard>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="wenhua-high-school"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
            <div class="row card-group" >
                <div class="col-lg-4 col-md-6 mb-4 card pb-5" v-for="products in standProduct" :key="products.id">
                  <div>
                    <div class="image-hover">
                      <img :src=products.imageUrl :alt=products.title >
                    </div>
                    <div class="product_box">
                      <span class="badge rounded-pill bg-warning fs-6 my-2"
                        >{{ products.unit }}</span
                      >
                      <p class="fs-5">
                        {{ products.title }}
                        <span class="fs-6" style="float: right">{{ products.price }}元</span>
                      </p>
                      <p>{{ products.description }}</p>
                      <p>{{ products.content }}</p>
                      <div class="d-flex justify-content-between" id="button">
                        <addToKeep :product = products></addToKeep>
                        <addToCard :product_id = products.id></addToCard>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="wenxin-chongde"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
            <div class="row card-group" >
                <div class="col-lg-4 col-md-6 mb-4 card pb-5" v-for="products in standProduct" :key="products.id">
                  <div>
                    <div class="image-hover">
                      <img :src=products.imageUrl :alt=products.title >
                    </div>
                    <div class="product_box">
                      <span class="badge rounded-pill bg-warning fs-6 my-2"
                        >{{ products.unit }}</span
                      >
                      <p class="fs-5">
                        {{ products.title }}
                        <span class="fs-6" style="float: right">{{ products.price }}元</span>
                      </p>
                      <p>{{ products.description }}</p>
                      <p>{{ products.content }}</p>
                      <div class="d-flex justify-content-between" id="button">
                        <addToKeep :product = products></addToKeep>
                        <addToCard :product_id = products.id></addToCard>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="beitun-terminal"
              role="tabpanel"
              aria-labelledby="list-settings-list"
            >
            <div class="row card-group" >
                <div class="col-lg-4 col-md-6 mb-4 card pb-5" v-for="products in standProduct" :key="products.id">
                  <div>
                    <div class="image-hover">
                      <img :src=products.imageUrl :alt=products.title >
                    </div>
                    <div class="product_box">
                      <span class="badge rounded-pill bg-warning fs-6 my-2"
                        >{{ products.unit }}</span
                      >
                      <p class="fs-5">
                        {{ products.title }}
                        <span class="fs-6" style="float: right">{{ products.price }}元</span>
                      </p>
                      <p>{{ products.description }}</p>
                      <p>{{ products.content }}</p>
                      <div class="d-flex justify-content-between" id="button">
                        <addToKeep :product = products></addToKeep>
                        <addToCard :product_id = products.id></addToCard>
                      </div>
                    </div>
                  </div>
                </div>
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
img:hover {
  transform: scale(120%);
}
.product_box {
  width: 90%;
  margin: auto;
}
.card-group > .card{
  flex: none;
  position: relative;
  border: 0px;
}
.card-footer{
  background:none;
  border-top:none;
}
</style>
