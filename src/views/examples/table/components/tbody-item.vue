<template>
  <tr v-if="currentRow.children && currentRow.children.length > 0">
    <tbody-tr v-if="currentRow.Expand" :columns="columns" :data="children" @on-expand="headleExpand"></tbody-tr>
  </tr>
  <tr v-else>
    <tbody-tr v-if="currentRow.Expand" :columns="columns" :data="currentRow" @on-expand="headleExpand"></tbody-tr>
  </tr>
</template>

<script>
import TbodyTr from './tbody-tr'
export default {
  components: { TbodyTr },
  props: {
    columns: {
      type: Array,
      default: function () {
        return []
      }
    },
    row: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
      currentRow: this.row,
      children: this.row.children
    }
  },
  methods: {
    headleExpand(item) {
      this.$emit('on-expand', item)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
