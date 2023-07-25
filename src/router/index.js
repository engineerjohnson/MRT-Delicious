import { createRouter, createWebHistory } from "vue-router";

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
        path:"Check",
        name:"Check",
        component:()=>import("../views/FontLayout/CheckList.vue")
      },
      {
        path:"Checkouts",
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
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes,
});

export default router;
