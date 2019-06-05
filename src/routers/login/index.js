export default [
  {
    path: "/login",
    name: "login",
    component: () => import("@components/Login.vue"),
    meta: {
      showAppNav: true,
      title: "登录"
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@components/Register.vue"),
    meta: {
      showAppNav: true,
      title: "注册"
    }
  }
];
