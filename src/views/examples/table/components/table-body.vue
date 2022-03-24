<template>
  <tbody>
    <template v-for="(item, index) in tbody">
      <template v-if="item.children && item.children.length > 0">
        <tbody-tr :columns="thead" :key="index" :data="item" :current-index="index" @on-expand="headleExpand"></tbody-tr>
        <template v-for="child in item.children">
          <tbody-tr v-if="item.Expand" :columns="thead" :key="child.id" :data="child" @on-expand="headleExpand"></tbody-tr>
        </template>
      </template>
      <tbody-tr v-else :columns="thead" :key="index" :data="item" @on-expand="headleExpand"></tbody-tr>
      <!-- <tbody-tr :columns="thead" :key="index" :data="item" @on-expand="headleExpand"></tbody-tr> -->
    </template>
    <!-- <template v-for="(item, index) in tbody">
      <tbody-item :key="index" :columns="thead" :row="item"></tbody-item>
    </template> -->
    <tbody-item v-if="false"></tbody-item>
  </tbody>
</template>

<script>
import TbodyTr from './tbody-tr'
import TbodyItem from './tbody-item'
export default {
  components: { TbodyTr, TbodyItem },
  props: {
    columns: {
      type: Array,
      default: function () {
        return []
      }
    },
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      thead: this.columns,
      tbody: this.data
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
