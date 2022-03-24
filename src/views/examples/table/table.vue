<template>
  <div>
    <i-table :data="data">
      <i-table-column prop="id" label="ID"></i-table-column>
      <i-table-column prop="name" label="名称"></i-table-column>
      <i-table-column prop="age" label="年龄"></i-table-column>
    </i-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { id: 1, name : '1' }
      ]
    }
  },
  beforeCreate() {
    // this.$on('insert-column', this.insertColumn)
  },
  created() {},
  methods: {
    // insertColumn(config, index) {

    // }
  }
}
</script>

<style lang="scss" scoped>

</style>
