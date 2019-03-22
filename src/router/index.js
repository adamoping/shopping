import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexPage from '@/pages/indexPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    }
  ]
})
