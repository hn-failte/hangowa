export default [
  {
    path: "/shopCar",
    name: "shopCar",
    component: () => import("@components/shopCar.vue"),
    meta: {
      showAppNav: false,
      title: "购物车"
    }
  }
];
