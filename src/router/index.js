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
        component:()=>import("../views/FontLayout/HomeView.vue"),
        children:[]
        },
        {
          path:"Cart",
          component:()=>import("../views/FontLayout/CartView.vue")
        },
        {
          path:"Keep",
          component:()=>import("../views/FontLayout/KeepView.vue")
        },
        {
          path:"Stand",
          component:()=>import("../views/FontLayout/standProducts.vue")
        },
        {
          path:"Check",
          component:()=>import("../views/FontLayout/CheckList.vue")
        }
      ]
    },
  ]
});

export default router;
