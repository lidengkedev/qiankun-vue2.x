<template>
  <thead>
    <thead-tr :data="thead"></thead-tr>
  </thead>
</template>

<script>
import TheadTr from './thead-tr'
export default {
  components: { TheadTr },
  props: {
    data: {
      type: [Array],
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      thead: this.data
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
