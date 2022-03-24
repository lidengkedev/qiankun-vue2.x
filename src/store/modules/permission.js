// import router, { resetRouter } from '@/router'

const state = {
    routes: [
      { id: 1, title: '首页', url: '/dashboard' },
      { id: 2, title: '实例', url: '/example' },
      { id: 3, title: '组件', url: '/components' }
    ]
  }
  
  const mutations = {}
  
  const actions = {
    generateRoutes({ state }) {
      return state.routes
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  