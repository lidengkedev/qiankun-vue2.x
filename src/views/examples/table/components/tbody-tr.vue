<template>
  <tr>
    <td class="table-td" v-for="(key, index) in thead" :key="index">
      <div v-if="key.type === 'active'">
        <table-active :row="key" :index="currentIndex" :column="item" :render="activeRender" />
      </div>
      <div v-else-if="key.type === 'index'">{{ item[key.type] + 1 }}</div>
      <div v-else>
        <span v-if="key.icon && item.children && currentIndex" @click="headleExpand(item)" class="table-icon">
          <i :class="['iconfont', item.Expand ? key.icon[0] : key.icon[1]]"></i>
        </span>
        {{ item[key.key] }}
      </div>
    </td>
  </tr>
</template>

<script>
import TableActive from './optionRender'
  export default {
    components: { TableActive },
    props: {
      columns: {
        type: Array,
        default: function () {
          return []
        }
      },
      data: {
        type: Object,
        default: function () {
          return {}
        }
      },
      currentIndex: [String, Number]
    },
    data() {
      return {
        thead: this.columns,
        item: this.data
      }
    },
    computed: {
      activeRender() {
        let render = function () {
          return ''
        }
        for (let i = 0, len = this.columns.length; i < len; i++) {
          const column = this.columns[i]
          if (column.type === 'active') {
            if (column.render) render = column.render
          }
        }
        return render
      }
    },
    mounted() {
      // console.log(this.thead)
    },
    methods: {
      headleExpand(item) {
        this.$emit('on-expand', item)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import url('//at.alicdn.com/t/font_1233464_w0le9mjai18.css');
.table-td {
  position: relative;
  padding: 5px 10px;
  text-align: center;
  .table-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-25%);
    text-align: left;
    .iconfont {
      cursor: pointer;
    }
  }
}
</style>
