// import router, { resetRouter } from '@/router'

const state = {
    sidebar: [
      { title: '懒加载', url: '/example/lazyload' },
      { title: '轮播', url: '/example/carousel' },
      { title: '日期', url: '/example/datepicker' },
      { title: '下拉选择', url: '/example/select' },
      { title: '及时通信', url: '/example/websocket' },
      { title: '单选', url: '/example/radio' },
      { title: '表格', url: '/example/table' },
      { title: '级联', url: '/example/cascader' },
      { title: '数字动画', url: '/example/scrollnumber' },
      { title: '加载中指令', url: '/example/directive' },
      { title: '图片验证码', url: '/example/captcha' }
    ],
    language: '',
    size: '',
    device: ''
  }
  
  const mutations = {}
  
  const actions = {}
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  