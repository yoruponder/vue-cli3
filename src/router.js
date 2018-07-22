import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => ({
        component: import( /* webpackChunkName: "home" */ '_PAGE_/Home.vue'),
      })
    },
    {
      path: '/about',
      name: 'about',
      component: () => ({
        component: import( /* webpackChunkName: "About" */ '_PAGE_/About.vue'),
      })
    }
  ]
})
