<script>
import { mapState, mapActions } from "pinia";
import cartStore from "../stores/cart.js";
// 自定義樣式 所以載入scss
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
  export default{
    props : ["cartLocation"],
    computed:{
      ...mapState(cartStore,["cart_length", "form"]),
    },
    methods:{
      ...mapActions(cartStore,["createOrder"]),
      addClickStyle(cartLocation){ //y做css屬性設定
        const cart_target = document.querySelector(".Cart");
        const check_target = document.querySelector(".Check");
        const checkouts_target = document.querySelector(".Checkouts");
        switch (cartLocation){
          case "Cart" :
            cart_target.classList.add("text-warning", "fw-bold");
            break;
          case "Check" :
            check_target.classList.add("text-warning", "fw-bold");
            break;
          case "Checkouts" :
            checkouts_target.classList.add("text-warning", "fw-bold");
            break;
        }
      },
      pushCheckouts(){
        const _form_target = this.form.user;
        if(this.cart_length == 0){
          Swal.fire({
            icon: "error",
            title: "購物車沒有產品",
            text: "購物車內沒有產品，需要先將產品加入購物車哦!!",
          }).then((result)=>{
            if(result.isConfirmed || result.isDismissed){ //點擊OK或視窗外 就會跳到「購物車」頁
              this.$router.push("/Stand");
            }
          });
          return;
        } else if(_form_target.name == "" || _form_target.email == "" || _form_target.tel == "" || _form_target.address == ""){ //判斷訂單資料是否填寫完
          Swal.fire({
            icon: "error",
            title: "訂單資料未完成",
            text: "「訂單資料」需要填寫完成才能確認訂單資料哦!!",
          }).then((result)=>{
            if(result.isConfirmed || result.isDismissed){ //點擊OK或視窗外 就會跳到「訂單資料」頁
              this.$router.push("/Check");
            }
          });
          return;
        } else {
          this.createOrder();
        }
      },
    },
    watch:{
      orderId(val){ //監聽orderId 當完成createOrder()觸發
        if(val){
          this.$router.push(`/Checkouts/${this.orderId}`);
        }
      }
    },
    mounted(){
      this.addClickStyle(this.cartLocation);
    }
  };
</script>

<template>
  <div class="pt-5">
  <div class="row justify-content-center">
    <div class="col-lg-10">
      <div class="breadcrumb mt-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item fs-5 breadcrumbS-style">
              <RouterLink to="/Cart" class="nav-link nav-item Cart">購物車</RouterLink>
            </li>
            <li class="breadcrumb-item fs-5 breadcrumbS-style">
              <RouterLink to="/Check" class="nav-link nav-item Check">訂單資料</RouterLink>
            </li>
            <li class="breadcrumb-item fs-5 breadcrumbS-style">
              <button type="button" class="btn nav-link nav-item Checkouts" @click="pushCheckouts()">送出訂單資料</button>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div>
</template>

<style>
  .breadcrumbS-style{
    display: contents;
  }
  .Checkouts:active{
    border: none;
  }
</style>