<script>
import { mapState, mapActions } from "pinia";
import keepStore from "../../stores/keep.js";
import cartStore from "../../stores/cart.js";
export default {
  computed : {
    ...mapState(keepStore,["productList"]),
  },
  methods : {
    ...mapActions(keepStore,["toggleToKeep","getKeep"]),
    ...mapActions(cartStore,["addToCart"]),
    //繼續選購
    toStand() {
    this.$router.push("/Stand");
    },
  },
  mounted() {
    this.getKeep();
  }
};
</script>

<template>
  <div class="content">
  <div class="container">
    <div class="row justify-content-center pt-5">
      <div class="col-lg-10 py-5" v-if="productList.length != 0">
        <h1>收藏</h1>
        <div class="table-responsive-lg mt-5">
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col" class="text-center">品名</th>
                <th scope="col" class="text-center">分類</th>
                <th scope="col" class="text-center">價格</th>
                <th scope="col" class="text-center">購買</th>
                <th scope="col" class="text-center">取消</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="KeepList in productList" :key="KeepList.id">
                <td class="align-middle text-center">
                  <strong>{{ KeepList.title }}</strong>
                </td>
                <td class="align-middle text-center">{{ KeepList.unit }}</td>
                <td class="align-middle text-center">{{ KeepList.price }}</td>
                <td class="align-middle text-center">
                  <div>
                    <button type="button" class="btn" @click="addToCart(KeepList.id)">
                      <img src="../../views/FontLayout/專題作品圖/購物車黑.png" alt="購物車" width="18">
                    </button>
                  </div>
                </td>
                <td class="align-middle text-center">
                  <button type="button" class="btn" @click="toggleToKeep(KeepList)">X</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else class="col-lg-10 py-5">
        <h3 class="fw-bolder">收藏內目前沒有商品，快去前往收藏吧!!</h3>
      </div>
    </div>
    <div class="d-flex justify-content-around my-5">
      <button v-if="productList == ''" type="button" class="btn btn-warning text-white" @click="toStand()">
        繼續選購
      </button>
    </div>
  </div>
  </div>
</template>
