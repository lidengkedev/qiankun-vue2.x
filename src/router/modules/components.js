/** ******************************************
 **************** 组件 ************************
 *********************************************/

 import Layout from '@/layout/default.vue'

 export default {
   path: '/components',
   redirect: '/components',
   component: Layout,
   children: [
     {
       path: '',
       name: 'Components',
       component: () => import(/* webpackChunkName: "components" */ '@/components/index.vue'),
       meta: {
         title: '组件'
       }
     }
   ]
 }
 