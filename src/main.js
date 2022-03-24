import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/scss/index.scss'

Vue.use(ElementUI);

Vue.config.productionTip = false

let instance = null

function render (props = {}) {
  const { container } = props
  instance = new Vue({
    router,
    store,
    props,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

// 子应用作为独立系统，独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
// 启动
export async function bootstrap() {
  console.log('bootstrap:========> vue2.x 子应用 已启动')
}
// 挂载
export async function mount(props) {
  console.log('mount:========> vue2.x 子应用 已挂载')
  console.log('Vue2.x 子应用 mount 接收参数：', props)
  render(props)
}
// 卸载
export async function unmount() {
  instance.$destroy()
  console.log('unmount:========> vue2.x 子应用 已卸载')
}


