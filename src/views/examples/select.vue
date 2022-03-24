<template>
  <div class="app-container">
    <i-select v-model="selectValue" @on-search="selectSearch">
      <i-option v-for="item in selectList" :key="item.id" :value="item.value">{{ item.label }}</i-option>
    </i-select>
  </div>
</template>

<script>
import { ISelect, IOption } from '@/components/select'
export default {
  components: { ISelect, IOption },
  data() {
    return {
      selectValue: '',
      selectList: [
        { id: 1, value: 1, label: 'option1' },
        { id: 2, value: 2, label: 'option2' },
        { id: 3, value: 3, label: 'option3' }
      ]
    }
  },
  methods: {
    selectSearch(value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
