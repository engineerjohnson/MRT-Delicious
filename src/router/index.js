import { createRouter, createWebHashHistory } from "vue-router";

const routes =[
  {
    path: "/",
    component:()=>import("../FrontLayout.vue"),
    children:[
      {
      path :"",
      name:"Home",
      component:()=>import( "../views/frontend/HomeView.vue"),
      },
      {
        path:"Cart",
        name:"Cart",
        component:()=>import("../views/frontend/CartView.vue")
      },
      {
        path:"Keep",
        name:"Keep",
        component:()=>import("../views/frontend/KeepView.vue")
      },
      {
        path:"Stand",
        name:"Stand",
        component:()=>import("../views/frontend/StandProducts.vue")
      },
      {
        path:"Product/:productId",
        name:"Product",
        component:()=>import("../views/frontend/ProductView.vue")
      },
      {
        path:"Check",
        name:"Check",
        component:()=>import("../views/frontend/CheckList.vue")
      },
      {
        path:"Checkouts/:orderId",
        name:"Checkouts",
        component:()=>import("../views/frontend/CheckoutsView.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../LoginView.vue")
  },
  {
    path: "/backend",
    component:()=>import("../BackendView.vue"),
    children:[
      {
        path :"productList",
        name:"product/list",
        component:()=>import( "../views/backend/AdminProductsList.vue"),
      },
      {
        path :"addProduct",
        name:"add/product",
        component:()=>import( "../views/backend/AdminAddProduct.vue"),
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/frontend/NotFound.vue")
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
