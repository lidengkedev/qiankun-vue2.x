<template>
  <tr>
    <th v-for="(item, index) in thead" :key="index" class="table-th">{{ item.title }}</th>
  </tr>
</template>

<script>
  export default {
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
.table-th {
  padding: 5px 10px;
}
</style>
