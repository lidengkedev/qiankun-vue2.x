<template>
  <div>
    <label for="" :class="wrapClass">
      <span :class="radioClasses">
        <span :class="innerClasses"></span>
        <input
          :class="inputClasses"
          :checked="currentValue"
          :disabled="disabled"
          :name="groupName"
          @change="onChange"
          @focus="onFocus"
          @blur="onBlur"
          type="radio">
      </span><span class="radio-text"><slot>{{ label }}</slot></span>
    </label>
  </div>
</template>

<script>
const prefixCls = 'radio'
export default {
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    label: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentValue: this.value,
      groupName: this.name,
      group: false,
      focusWrapper: false,
      focusInner: false
    }
  },
  computed: {
    wrapClass() {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-group`]: this.group,
          [`${prefixCls}-wrapper-checked`]: this.currentValue,
          [`${prefixCls}-wrapper-disabled`]: this.disabled,
          [`${prefixCls}-focus`]: this.focusWrapper
        }
      ]
    },
    radioClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-checked`]: this.currentValue,
          [`${prefixCls}-disabled`]: this.disabled
        }
      ]
    },
    innerClasses () {
      return [
        `${prefixCls}-inner`,
        {
          [`${prefixCls}-focus`]: this.focusInner
        }
      ]
    },
    inputClasses () {
      return [`${prefixCls}-input`]
    }
  },
  methods: {
    onChange (event) {
      if (this.disabled) return
      const checked = event.target.checked
      this.currentValue = checked
      const value = checked
      this.$emit('input', value)
      this.$emit('on-change', value)
    },
    onFocus () {},
    onBlur () {}
  }
}
</script>

<style lang="scss" scoped>
.radio-wrapper {
    margin-right: 10px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
}
.radio-wrapper-checked {
    border-color: #52ccba;
}
.radio-inner {
    position: relative;
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1px solid #eaeaea;
    border-radius: 50%;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: #fff;
    cursor: pointer;
}
.radio {
    position: relative;
    margin-right: 8px;
    line-height: 1;
    display: inline-block;
    cursor: pointer;
    vertical-align: middle;
}
.radio-checked {
  .radio-inner {
    border-color: #52ccba;
  }
  .radio-inner::after {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      left: 2px;
      background-color: #52ccba;
  }
}
.radio-input {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
}
.radio-text {
    vertical-align: middle;
}
</style>
