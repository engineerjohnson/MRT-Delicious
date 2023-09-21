import { createRouter, createWebHashHistory } from "vue-router";

const routes =[
  {
    path: "/",
    component:()=>import("../FrontLayout.vue"),
    children:[
      {
      path :"",
      name:"Home",
      component:()=>import("../views/FontLayout/HomeView.vue"),
      },
      {
        path:"Cart",
        name:"Cart",
        component:()=>import("../views/FontLayout/CartView.vue")
      },
      {
        path:"Keep",
        name:"Keep",
        component:()=>import("../views/FontLayout/KeepView.vue")
      },
      {
        path:"Stand",
        name:"Stand",
        component:()=>import("../views/FontLayout/standProducts.vue")
      },
      {
        path:"Product/:productId",
        name:"Product",
        component:()=>import("../views/FontLayout/productView.vue")
      },
      {
        path:"Check",
        name:"Check",
        component:()=>import("../views/FontLayout/CheckList.vue")
      },
      {
        path:"Checkouts/:orderId",
        name:"Checkouts",
        component:()=>import("../views/FontLayout/CheckoutsView.vue")
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/FontLayout/NotFound.vue")
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
