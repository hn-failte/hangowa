export default [
  {
    path: "/search",
    name: "search",
    component: () => import("@components/Search.vue"),
    meta: {
      showAppNav: true
    }
  },
  {
    path: "/searchlist",
    name: "searchlist",
    component: () => import("@components/SearchList.vue"),
    meta: {
      showAppNav: true
    }
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("@components/Detail.vue"),
    meta: {
      showAppNav: true
    }
  }
];
