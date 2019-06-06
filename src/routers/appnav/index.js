export default [
  {
    path: "/index",
    name: "index",
    component: () => import("@components/Index.vue"),
    meta: {
      showAppNav: true,
      title: "主页"
    }
  },
  {
    path: "/discover",
    name: "discover",
    component: () => import("@components/Discover.vue"),
    meta: {
      showAppNav: true,
      title: "发现"
    }
  },
  {
    path: "/my",
    name: "my",
    component: () => import("@components/My.vue"),
    meta: {
      showAppNav: true,
      title: "我的商城"
    }
  }
];
