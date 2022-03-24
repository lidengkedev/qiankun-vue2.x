<template>
  <div>
    <i-radio v-model="value">单选</i-radio>
  </div>
</template>

<script>
import IRadio from '@/components/radio.vue'
export default {
  components: { IRadio },
  data() {
    return {
      value: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
