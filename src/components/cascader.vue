<template>
  <div class="cascader-warpper"
    v-clickoutside="() => toggleDropDownVisible(false)"
    @click.stop="() => toggleDropDownVisible(readonly ? undefined : true)">
    <div class="input-warpper">
      <input v-model="currentSelectValue" type="text" readonly class="cascader-input">
      <input v-model="currentValue" type="hidden" class="cascader-input">
      <svg-icon icon-class="down" :class="['icons', dropDownVisible ? 'icon-arrow-up' : 'icon-arrow-down']"></svg-icon>
      <svg-icon icon-class="close" :class="['icon-close', currentSelectValue ? 'icon-show' : 'icon-hidden']" @click="handleClean"></svg-icon>
    </div>
    <transition name="cascader">
      <div v-show="dropDownVisible" class="select-warapper">
        <div class="section-warpper left">
          <ul class="list-warpper">
            <li class="list-item"
              v-for="(item, index) in options"
              :key="index"
              :class="classes(item.value)"
              @click="handleClick(item, index)">
              {{ item.label }}
              <svg-icon v-show="item.children" icon-class="down" class="icon-arrow-right"></svg-icon>
            </li>
          </ul>
        </div>
        <div class="section-warpper right">
          <ul class="list-warpper">
            <li class="list-item"
              v-for="(item, index) in children"
              :key="index"
              :class="classes(item.value)"
              @click="handleChildrenClick(item, index)">{{ item.label }}</li>
            <li class="list-item data-empty" v-show="children.length < 1">暂无数据</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Clickoutside from '@/directives/clickoutside'
import { isDef } from '@/utils/shared'
export default {
  directives: {
    Clickoutside
  },
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
      currentValue: [],
      currentLabel: [],
      currentSelectValue: '',
      children: [],
      dropDownVisible: false
    }
  },
  computed: {
    options() {
      return this.data.map(item => item)
    },
    readonly() {
      return true
    },
    classes() {
      return (value) => {
        const active = this.currentValue.indexOf(value) > -1
        return ['list-item', active ? 'list-item-active' : '']
      }
    }
  },
  methods: {
    // 一级联动
    handleClick(item) {
      this.currentValue = [item.value]
      this.currentLabel = [item.label]
      if (item.children) {
        this.children = item.children
        this.toggleDropDownVisible(false)
      } else {
        this.children = []
      }
      this.currentSelectValue = this.currentLabel.join('/')
      this.$emit('on-change', this.currentValue)
    },
    // 二级联动
    handleChildrenClick(item) {
      this.currentValue = this.currentValue.slice(0, 1)
      this.currentLabel = this.currentLabel.slice(0, 1)
      this.currentValue.push(item.value)
      this.currentLabel.push(item.label)
      this.currentSelectValue = this.currentLabel.join('/')
      this.$emit('on-change', this.currentValue)
    },
    // 展开收起
    toggleDropDownVisible(visible) {
      const { dropDownVisible } = this
      visible = isDef(visible) ? visible : !dropDownVisible
      if (visible !== dropDownVisible) {
        this.dropDownVisible = visible
      }
    },
    // 清空选项
    handleClean() {
      this.currentValue = []
      this.currentLabel = []
      this.currentSelectValue = ''
      // this.toggleDropDownVisible(true)
    }
  }
}
</script>

<style lang="scss" scoped>
.cascader-warpper {
  position: relative;
  width: 100%;
  .input-warpper {
    position: relative;
    .cascader-input {
      border: 1px solid #eaeaea;
      border-radius: 4px;
      padding-left: 15px;
      padding-right: 25px;
      height: 32px;
      white-space: nowrap;
      line-height: 32px;
      background-color: #FFF;
      font-size: 14px;
    }
    .icons {
      position: absolute;
      top: 12px;
      right: 0;
      font-size: 14px;
      transition-duration: 0.3s;
      color: #C0C4CC;
      &.icon-arrow-down {
        transform: rotate(0);
      }
      &.icon-arrow-up {
        transform: rotate(180deg);
      }
    }
    .icon-close {
      position: absolute;
      top: 10px;
      right: 20px;
      display: none;
      cursor: pointer;
      font-size: 14px;
    }
    &:hover {
      .icon-show {
        display: block;
      }
    }
  }
  .select-warapper {
    position: absolute;
    top: 32px;
    left: 0;
    margin-top: 10px;
    width: 360px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    display: flex;
    background-color: #FFF;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
    transform-origin: top;
    .section-warpper {
      width: 100%;
      &.left {
        border-right: 1px solid #eaeaea;
      }
      .list-warpper {
        width: 180px;
        height: 204px;
        overflow: auto;
        .list-item {
          position: relative;
          padding: 0 20px;
          height: 34px;
          line-height: 34px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
          font-size: 14px;
          cursor: pointer;
          transition-duration: 0.3s;
          &:hover {
            background-color: #f8f8f8;
          }
          &.select-active {
            color: #1890ff;
            background-color: #f8f8f8;
          }
          .icon-arrow-right {
            position: absolute;
            top: 8px;
            right: 10px;
            font-size: 16px;
            color: #C0C4CC;
            transform: rotate(-90deg);
          }
          &.data-empty {
            font-size: 14px;
            text-align: center;
            color: #777;
          }
          &.list-item-active {
            color: #1890ff;
          }
        }
      }
    }
  }
}
// 动画
.cascader-enter {
  transform: scaleY(0);
}
.cascader-enter-active {
  transform: scaleY(0);
  transition: all 0.3s ease-in;
}
.cascader-enter-to {
  transform: scaleY(1);
  transition: all 0.3s ease-in;
}
.cascader-leave {
  transform: scaleY(0);
}
.cascader-leave-to {
  transform: scaleY(0);
}
.cascader-leave-active {
  transform: scaleY(0);
  transition: all 0.3s ease-in;
}
</style>
