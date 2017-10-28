// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import goods from './components/goods.vue'
import stores from './components/stores.vue'
import comments from './components/comments.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false
/* eslint-disable no-new */
var router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',  // 设置router-link
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: goods
    }, {
      path: '/stores',
      component: stores
    }, {
      path: '/comments',
      component: comments
    }
  ]
})
new Vue({
  router,
  el: '#app',
  components: {App}
})
