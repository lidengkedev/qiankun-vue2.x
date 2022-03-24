<docs>
  表格的入口文件与 table-column 组件配合使用
  主要功能描述如下：
  1. 基本的表格渲染
  实现过程如下：
  1. 首先建立一个包裹层，将表格放置在包裹层中
</docs>
<template>
  <div class="i-table" :class="[]">
    <div ref="hiddenColumn" class="hidden-columns">
      <slot></slot>
    </div>
    <!-- 表头 -->
    <div ref="headerWarpper" class="i-table__header-warpper">
      <table-header ref="tableHeader" :store="store"></table-header>
    </div>
    <!-- 表体 -->
    <div ref="bodyWarpper" class="i-table__body-warpper">
      <table-body ref="tableBody" :store="store"></table-body>
    </div>
    <!-- 判空，暂无数据需要显示的内容 -->
    <div ref="emptyBlock" class="i-table__empty-block" :style="emptyBlockStyle">
      <span class="i-table__empty-text">
        <slot name="empty">{{ emptyText }}</slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'table',
  props: {
    data: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      store: {},
    }
  },
  computed: {
    emptyBlockStyle() {
      return {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
