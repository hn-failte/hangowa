export default [
  {
    path: "/search",
    name: "search",
    component: () => import("@components/Search.vue"),
    meta: {
      showAppNav: true,
      title: "商品搜索"
    }
  },
  {
    path: "/searchlist",
    name: "searchlist",
    component: () => import("@components/SearchList.vue"),
    meta: {
      showAppNav: true,
      title: "商品列表"
    }
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("@components/Detail.vue"),
    meta: {
      showAppNav: false,
      title: "商品详情"
    }
  }
];
