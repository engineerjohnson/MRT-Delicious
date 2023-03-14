<script>
import banner from "../../components/bannerComponent.vue";
import footerComponter from "../../components/footerComponter.vue";
export default {
  components: {
    banner,
    footerComponter,
  },
};
</script>

<template>
  <banner id="banner" class="bg-dark"></banner>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-2 col-md-3 my-5">
        <div class="list-group" id="list-tab" role="tablist">
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
            href="#daqing"
            role="tab"
            aria-controls="list-profile"
            >大慶站</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-fengle-park"
            data-bs-toggle="list"
            href="#fengle-park"
            role="tab"
            aria-controls="list-messages"
            >豐樂公園</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-suan-palace"
            data-bs-toggle="list"
            href="#suan-palace"
            role="tab"
            aria-controls="list-settings"
            >水安宮</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-wenhua-high-school"
            data-bs-toggle="list"
            href="#wenhua-high-school"
            role="tab"
            aria-controls="list-profile"
            >文華高中</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-wenxin-chongde"
            data-bs-toggle="list"
            href="#wenxin-chongde"
            role="tab"
            aria-controls="list-messages"
            >文心崇德</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-beitun-terminal"
            data-bs-toggle="list"
            href="#beitun-terminal"
            role="tab"
            aria-controls="list-settings"
            >北屯總站</a
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
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-4">
                <div>
                  <div class="image-hover">
                    <img src="./專題作品圖/鍋貼.png" alt="" />
                  </div>
                  <div class="product_box">
                    <span class="badge rounded-pill bg-warning fs-6 my-2">顯示單位</span>
                    <p class="fs-5">小六鍋貼 
                    <span class="fs-6" style="float: right;">90元</span>
                    </p>
                    <p>商品描述</p>
                    <p>營業時段</p>
                    <div class="d-flex justify-content-between">
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
                      <button
                        type="button"
                        class="btn btn-secondary p-1 p-lg-2"
                      >
                        <img
                          style="width: 20px; height: 20px"
                          src="./專題作品圖/car.png"
                          alt=""
                        />加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-4">
                <div>
                  <div class="image-hover">
                    <img src="./專題作品圖/鍋貼.png" alt="" />
                  </div>
                  <div class="product_box">
                    <span class="badge rounded-pill bg-warning fs-6 my-2"
                      >顯示單位</span
                    >
                    <p class="fs-5">小六鍋貼 
                    <span class="fs-6" style="float: right;">90元</span>
                    </p>
                    <p>商品描述</p>
                    <p>營業時段</p>
                    <div class="d-flex justify-content-between">
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
                      <button
                        type="button"
                        class="btn btn-secondary p-1 p-lg-2"
                      >
                        <img
                          style="width: 20px; height: 20px"
                          src="./專題作品圖/car.png"
                          alt=""
                        />加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-4">
                <div>
                  <div class="image-hover">
                    <img src="./專題作品圖/鍋貼.png" alt="" />
                  </div>
                  <div class="product_box">
                    <span class="badge rounded-pill bg-warning fs-6 my-2"
                      >顯示單位</span
                    >
                    <p class="fs-5">小六鍋貼 
                    <span class="fs-6" style="float: right;">90元</span>
                    </p>
                    <p>商品描述</p>
                    <p>營業時段</p>
                    <div class="d-flex justify-content-between">
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
                      <button
                        type="button"
                        class="btn btn-secondary p-1 p-lg-2"
                      >
                        <img
                          style="width: 20px; height: 20px"
                          src="./專題作品圖/car.png"
                          alt=""
                        />加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-4">
                <div>
                  <div class="image-hover">
                    <img src="./專題作品圖/鍋貼.png" alt="" />
                  </div>
                  <div class="product_box">
                    <span class="badge rounded-pill bg-warning fs-6 my-2"
                      >顯示單位</span
                    >
                    <p class="fs-5">小六鍋貼 
                    <span class="fs-6" style="float: right;">90元</span>
                    </p>
                    <p>商品描述</p>
                    <p>營業時段</p>
                    <div class="d-flex justify-content-between">
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
                      <button
                        type="button"
                        class="btn btn-secondary p-1 p-lg-2"
                      >
                        <img
                          style="width: 20px; height: 20px"
                          src="./專題作品圖/car.png"
                          alt=""
                        />加入購物車
                      </button>
                    </div>
                  </div>
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
            大慶站
          </div>
          <div
            class="tab-pane fade"
            id="fengle-park"
            role="tabpanel"
            aria-labelledby="list-messages-list"
          >
            豐樂公園
          </div>
          <div
            class="tab-pane fade"
            id="suan-palace"
            role="tabpanel"
            aria-labelledby="list-settings-list"
          >
            水安宮
          </div>
          <div
            class="tab-pane fade"
            id="wenhua-high-school"
            role="tabpanel"
            aria-labelledby="list-profile-list"
          >
            文華高中
          </div>
          <div
            class="tab-pane fade"
            id="wenxin-chongde"
            role="tabpanel"
            aria-labelledby="list-messages-list"
          >
            文心崇德
          </div>
          <div
            class="tab-pane fade"
            id="beitun-terminal"
            role="tabpanel"
            aria-labelledby="list-settings-list"
          >
            北屯總站
          </div>
        </div>
      </div>
    </div>
  </div>
  <footerComponter id="footer"></footerComponter>
</template>

<style>
#banner {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 5;
}
.image-hover {
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px;
}
img {
  max-width: 100%;
  max-height: 100%;
  transition: 0.7s;
}
img:hover {
  transform: scale(120%);
}
.product_box{
  width: 85%;
  margin: auto;
}
</style>
