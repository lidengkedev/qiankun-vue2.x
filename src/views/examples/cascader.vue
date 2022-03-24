<template>
  <div class="app-container">
    <i-cascader ref="cascader" :data="options" @on-change="handleChange" style="width: 200px"></i-cascader>
    <br>
    <button @click="handleClean">清空选项</button>
  </div>
</template>

<script>
import ICascader from '@/components/cascader'
export default {
  components: {
    ICascader
  },
  data() {
    return {
      options: [
        { id: 1, label: '无上级', value: '' },
        { id: 2, label: '一级库位01', value: '1',
          children: [
            { id: 21, label: '二级库位01', value: '21' },
            { id: 22, label: '二级库位02', value: '22' },
            { id: 23, label: '二级库位03', value: '23' }
          ]
        },
        { id: 3, label: '一级库位02', value: '2' },
        { id: 4, label: '一级库位03', value: '3',
          children: [
            { id: 41, label: '二级库位41', value: '41' }
          ]
        }
      ]
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
    handleClean() {
      this.$refs.cascader.handleClean()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
