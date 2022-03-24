<template>
  <div>
    <li class="select-option" :value="value" @click.self="selectOption(value)">
        <slot></slot>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'option',
    props: {
      value: [String, Number]
    },
    methods: {
      selectOption(value) {
        this.$emit('on-click', value)
      }
    }
  }
</script>

<style lang="scss" scoped>
.select-option {
  line-height: 32px;
  padding: 5px 15px;
  cursor: pointer;
  transition-duration: .3s;
}
.select-option:hover {
  background-color: #f8f8f8;
}
.select-option-child {
  display: inline-block;
  width: 100%;
}
</style>
