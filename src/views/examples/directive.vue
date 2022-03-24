<template>
  <div class="app-container">
    <input type="text">
    <input v-focus type="text">
    <div v-loading="loading" class="box-warpper"></div>
    <button @click="loading = !loading">加载中</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    },
    loading: {
      // 只调用一次，指令第一次绑定到元素时调用。
      // 在这里可以进行一次性的初始化设置。
      bind(el, binding, vnode) {
        console.log('bind', binding.value, {el, binding, vnode})
      },
      // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
      inserted(el, binding, vnode) {
        const documentFragment = document.createDocumentFragment()
        const element = document.createElement('div')
        // element.id = 'loading-warpper'
        element.className = 'loading-warpper'
        element.style.display = binding.value ? 'block' : 'none'
        element.innerHTML = `
          <div class="loading-inner">
            <div>加载中...</div>
          </div>
        `
        documentFragment.appendChild(element)
        el.appendChild(documentFragment)
        console.log('inserted', binding.value, {el, binding, vnode})
      },
      // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
      // 指令的值可能发生了改变，也可能没有。
      // 但是你可以通过比较更新前后的值来忽略不必要的模板更新
      update(el, binding, vnode) {
        const element = el.getElementsByClassName('loading-warpper')[0]
        element.style.display = binding.value ? 'block' : 'none'
        console.log('update', {el, binding, vnode})
      },
      // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
      componentUpdated(el, binding, vnode) {
        const element = el.getElementsByClassName('loading-warpper')[0]
        element.style.display = binding.value ? 'block' : 'none'
        console.log('componentUpdated', {el, binding, vnode})
      },
      // 只调用一次，指令与元素解绑时调用
      unbind(el, binding, vnode) {
        console.log('unbind', {el, binding, vnode})
      }
    }
  },
  created() {
    console.log(this.$post)
    console.log(this.request)
  }
}
</script>

<style lang="scss" scoped>
.box-warpper {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #f8f8f8;
}
</style>
<style lang="scss">
.loading-warpper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  .loading-inner {
    width: 100px;
    height: 100px;
    background-color: #FFF;
    margin-left: 25%;
    margin-top: 25%;
  }
}
</style>
