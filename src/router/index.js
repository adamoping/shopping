import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexPage from '@/pages/indexPage'
import detail from '@/pages/detail'
import detailAna from '@/pages/detail/analysis'
import detailCount from '@/pages/detail/count'
import detailFor from '@/pages/detail/forecast'
import detailPub from '@/pages/detail/publish'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
    	path:'/detail',
    	name:'detail',
    	component:detail,
    	redirect: '/detail/analysis',
    	children:[
    		{
    			path:'analysis',
    			name:'analysis',
    			component:detailAna
    		},
    		{
    			path:'count',
    			component:detailCount
    		},
    		{
    			path:'forecast',
    			component:detailFor
    		},
    		{
    			path:'publish',
    			component:detailPub
    		},
    	 ]
    }
  ]
})
