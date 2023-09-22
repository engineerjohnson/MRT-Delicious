import { createRouter, createWebHashHistory } from "vue-router";

const routes =[
  {
    path: "/",
    component:()=>import("../FrontLayout.vue"),
    children:[
      {
      path :"",
      name:"Home",
      component:()=>import(/* webpackChunkName: "Home" */ "../views/FontLayout/HomeView.vue"),
      },
      {
        path:"Cart",
        name:"Cart",
        component:()=>import(/* webpackChunkName: "Cart" */"../views/FontLayout/CartView.vue")
      },
      {
        path:"Keep",
        name:"Keep",
        component:()=>import(/* webpackChunkName: "Keep" */"../views/FontLayout/KeepView.vue")
      },
      {
        path:"Stand",
        name:"Stand",
        component:()=>import(/* webpackChunkName: "Stand" */"../views/FontLayout/standProducts.vue")
      },
      {
        path:"Product/:productId",
        name:"Product",
        component:()=>import(/* webpackChunkName: "Product" */"../views/FontLayout/productView.vue")
      },
      {
        path:"Check",
        name:"Check",
        component:()=>import(/* webpackChunkName: "Check" */"../views/FontLayout/CheckList.vue")
      },
      {
        path:"Checkouts/:orderId",
        name:"Checkouts",
        component:()=>import(/* webpackChunkName: "Checkouts" */"../views/FontLayout/CheckoutsView.vue")
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
