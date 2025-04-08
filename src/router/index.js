import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../layout/default.vue'

import exampleRoutes from './modules/example'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home', component: Layout,
    children: [
      { path: '/home', component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'), meta: { title: 'Home' } },
      { path: '/404', component: () => import(/* webpackChunkName: "error" */ '../views/error/404.vue'), meta: { title: '404' } },
      { path: '/401', component: () => import(/* webpackChunkName: "error" */ '../views/error/401.vue'), meta: { title: '401' } },
    ]
  },
  { path: '/project/pap', component: () => import('../views/project/pap/menu.vue'),
    children: [
      { path: '/project/pap/home', component: () => import('../views/project/pap/home.vue'), meta: { title: 'PAP' } }
    ]  
  },
  { path: '/example', component: Layout, children: exampleRoutes, meta: { title: 'Example' } },
  { path: '*', redirect: '/404' },
  { path: '/login', component: () => import('../views/login.vue'), meta: { title: 'Login' } }
]

let base = process.env.VUE_APP_ROUTER_BASE
// 子应用作为独立系统，独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  base = '/'
}

const createRouter = () => new VueRouter({
  mode: 'history', // require service support
  base,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
