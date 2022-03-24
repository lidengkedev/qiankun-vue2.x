<template>
  <div class="app-container">
    <div class="input-warpper">
      <input v-model="prev_num" type="text" class="input">
      <div class="icon">+</div>
      <input v-model="next_num" type="text" class="input">
      <button class="btn" @click="clac">计算</button>
    </div>
    <div>结果：<scroll-number :value="value"></scroll-number></div>
    
  </div>
</template>

<script>
import ScrollNumber from '@/components/scroll-number'
export default {
  components: {
    ScrollNumber
  },
  data() {
    return {
      value: '0.00'
    }
  },
  methods: {
    clac() {
      if (Number(this.prev_num) && Number(this.next_num)) {
        this.value = (Number(this.prev_num) + Number(this.next_num)).toFixed(2)
      } else {
        this.value = '0.00'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input-warpper {
  display: table;
  height: 32px;
  border-collapse: collapse;
  border-spacing: 0;
  box-sizing: border-box;
  .input {
    display: table-cell;
    padding: 0 10px;
    height: 32px;
    width: 240px;
    font-size: 14px;
    vertical-align: middle;
    border: 1px solid #eaeaea;
    background-color: #FFF;
    outline: none;
  }
  .icon {
    padding: 0;
    display: table-cell;
    width: 40px;
    text-align: center;
    vertical-align: middle;
  }
  .btn {
    padding: 0;
    display: table-cell;
    height: 34px;
    width: 80px;
    border: 1px solid #eaeaea;
    border-left-width: 0;
    font-size: 14px;
    color: #FFF;
    vertical-align: middle;
    background-color: #52ccba;
    cursor: pointer;
    outline: none;
    &:active {
      font-size: 12px;
    }
  }
}
</style>
