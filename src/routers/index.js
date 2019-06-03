import Vue from "vue";
import Router from "vue-router";
import appnav from './appnav'
import search from './search'
import login from './login'
import shopcar from './shopcar'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "index" //默认重定向的主页
    },
    ...appnav,
    ...search,
    ...login,
    ...shopcar,
    {
      path: "**",
      redirect: "index" //错误路径重定向到主页
    }
  ]
});
