import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component:()=>import ("../FrontLayout.vue"),
      children:[
        {
        path :'Home',
        component:()=>import("../views/HomeView.vue")
        },
        {
          path:'Cart',
          component:()=>import("../views/CartView.vue")
        },
        {
          path:'Keep',
          component:()=>import("../views/KeepView.vue")
        }
      ]
    },
  ]
})

export default router
