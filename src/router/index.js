import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect:"Home",
      children:[
        {
        path :"Home",
        component:()=>import("../views/HomeView.vue"),
        children:[]
        },
        {
          path:"Cart",
          component:()=>import("../views/CartView.vue")
        },
        {
          path:"Keep",
          component:()=>import("../views/KeepView.vue")
        },
        {
          path:"Stand",
          component:()=>import("../views/standProducts.vue")
        }
      ]
    },
  ]
});

export default router;
