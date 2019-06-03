import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "index"
    },
    {
      path: "/index",
      name: "index",
      component: () => import("../components/Index.vue")
    },
    {
      path: "/discover",
      name: "discover",
      component: () => import("../components/Discover.vue")
    },
    {
      path: "/my",
      name: "my",
      component: () => import("../components/My.vue")
    },
    {
      path: '/shopCar',
      name: "shopCar",
      component: ()=>import("../components/shopCar.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../components/Register.vue")
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../components/Search.vue")
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("../components/Detail.vue")
    },
    {
      path: "**",
      // redirect: "index" //重定向到主页
      component: () => import("../components/Detail.vue") //Detail测试
    }
  ]
});
