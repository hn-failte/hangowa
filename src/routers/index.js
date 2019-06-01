import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "index"
    },
    {
      path: '/index',
      name: "index",
      component: ()=>import("../components/Index.vue")
    },
    {
      path: '/discover',
      name: "discover",
      component: ()=>import("../components/Discover.vue")
    },
    {
      path: '/my',
      name: "my",
      component: ()=>import("../components/My.vue")
    },
    {
        path: '/login',
        name: 'login',
        component: ()=>import('../components/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: ()=>import('../components/Register.vue')
    },
    {
      path: "**",
      redirect: "index"
    }
  ]
})
