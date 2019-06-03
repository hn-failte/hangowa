export default [
  {
    path: "/login",
    name: "login",
    component: () => import("@components/Login.vue"),
    meta: {
      showAppNav: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@components/Register.vue"),
    meta: {
      showAppNav: true
    }
  }
];
