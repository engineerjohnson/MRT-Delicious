<script>
  export default{
    props : ["cartLocation"],
    methods:{
      addClickStyle(cartLocation){ //也可以改成@click="addClickStyle" 但不能用@click="addClickStyle()"
        const cart_target = document.querySelector(".Cart");
        const check_target = document.querySelector(".Check");
        const checkouts_target = document.querySelector(".Checkouts");
        if (cartLocation == "Cart"){
          cart_target.classList.add("text-warning", "fw-bold");
        } else if(cartLocation == "Check"){
          check_target.classList.add("text-warning", "fw-bold");
        } else if(cartLocation == "Checkouts"){
          checkouts_target.classList.add("text-warning", "fw-bold");
        }
      },
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
              <RouterLink to="Cart" class="nav-link nav-item Cart">購物車</RouterLink>
            </li>
            <li class="breadcrumb-item fs-5 breadcrumbS-style">
              <RouterLink to="Check" class="nav-link nav-item Check">訂單資料</RouterLink>
            </li>
            <li class="breadcrumb-item fs-5 breadcrumbS-style">
              <RouterLink to="Checkouts" class="nav-link nav-item Checkouts">確認訂單資料</RouterLink>
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
</style>