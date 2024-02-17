<script>
import { mapActions, mapState } from "pinia"; //暫時不會用到mapState
import cartStore from "../../stores/CartStore.js";

export default {
  data() {
    return {
      navBg: false,
      active: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapState(cartStore, ["cart_data", "cart_length"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCart", "createOrder"]),
    closeCollapse() {
      const target_btn = document.querySelector(".navbar-toggler");
      const target = document.querySelector(".navbar-collapse");
      if (target.classList.contains("show")) {
        target.classList.remove("show");
        target_btn.setAttribute("aria-expanded", "false");
        target_btn.classList.add("collapsed");
      }
    },
    handleScroll() {
      this.navBg = window.scrollY > 0 ? true : false;
    },
  },
  mounted() {
    this.getCart();
    if (this.$route.name == "Home") {
      this.handleScroll();
    } else {
      this.navBg = true;
    }
  },
  watch: {
    $route(to) {
      if (to.name == "Home") {
        this.navBg = false;
        window.addEventListener("scroll", this.handleScroll);
      } else {
        window.removeEventListener("scroll", this.handleScroll);
        this.navBg = true;
      }
    },
  },
};
</script>

<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg" :class="{ 'bg-dark': navBg }">
    <div class="container-fluid">
      <RouterLink
        :to="{ name: 'Home' }"
        class="navbar-brand MRT ms-4 d-flex align-items-center text-white"
        ><img
          src="../../assets/image/刀叉.png"
          alt="刀叉"
          width="18"
          class="me-1"
        />
        台中MRT美食</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-dark navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink
              to="/Stand"
              class="nav-link nav-item me-4 delicious text-white"
              data-toggle
              @click="closeCollapse()"
            >
              各站美食
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/Cart"
              class="nav-link nav-item me-4 cart d-flex align-items-center text-white"
              data-toggle
              @click="closeCollapse()"
            >
              購物車
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart-fill ms-1"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
              </svg>
              <span class="badge rounded-pill bg-danger cart-badge">
                {{ cart_data.carts == "" ? 0 : cart_length }}
              </span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/Keep"
              class="nav-link nav-item me-4 keep d-flex align-items-center text-white"
              data-toggle
              @click="closeCollapse()"
            >
              收藏
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart-fill ms-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.cart {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -3px;
  right: -10px;
}

.delicious,
.cart,
.keep,
.MRT {
  transition: 0.3s;
}

.delicious:hover,
.cart:hover,
.keep:hover,
.MRT:hover {
  transform: scale(1.2);
}

.navbar-nav .nav-link.active {
  position: relative;
}

.navbar-nav .nav-link.active::after {
  display: block;
  content: "";
  width: 100%;
  border-bottom: solid rgb(228, 145, 48) 2px;
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
  left: 50%;
}

.navbar-nav .nav-link::after {
  display: block;
  position: absolute;
  content: "";
  width: 0;
  height: 3px;
  transition: all 0.5s ease;
}

.navbar {
  transition: background 0.3s ease;
}

@media (max-width: 1200px) {
  .delicious,
  .cart,
  .keep,
  .MRT {
    transition: 0s;
  }

  .delicious:hover,
  .cart:hover,
  .keep:hover,
  .MRT:hover {
    transform: scale(1);
  }

  .navbar-nav .active::after {
    content: none;
  }
}
</style>
