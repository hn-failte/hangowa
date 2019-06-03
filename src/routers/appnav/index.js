export default [
  {
    path: "/index",
    name: "index",
    component: () => import("@components/Index.vue"),
    meta: {
      showAppNav: true
    }
  },
  {
    path: "/discover",
    name: "discover",
    component: () => import("@components/Discover.vue"),
    meta: {
      showAppNav: true
    }
  },
  {
    path: "/my",
    name: "my",
    component: () => import("@components/My.vue"),
    meta: {
      showAppNav: true
    }
  }
];
