<script>
  import addToCard from "../components/addToCard.vue";
  import addToKeep from "../components/addToKeep.vue";
  export default {
    props:["products"],
    components: {
      addToCard,
      addToKeep,
    }
  };
</script>

<template>
  <div class="col-xl-4 col-md-6 mb-4 pb-5" v-for="products in products" :key="products.id">
    <RouterLink class="text-decoration-none text-dark product-link" :to="`Product/${products.id}`">
      <div class="card h-100">
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
      </div>
    </RouterLink>
  </div>
</template>