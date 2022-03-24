<template>
    <div class="scroll-warpper">
      <div class="scroll-item" v-for="(item, index) in num_list" :key="index">
        <div :class="item | classesFilter">
          <span class="scroll-num">.</span>
          <span class="scroll-num">0</span>
          <span class="scroll-num">1</span>
          <span class="scroll-num">2</span>
          <span class="scroll-num">3</span>
          <span class="scroll-num">4</span>
          <span class="scroll-num">5</span>
          <span class="scroll-num">6</span>
          <span class="scroll-num">7</span>
          <span class="scroll-num">8</span>
          <span class="scroll-num">9</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '0.00'
    }
  },
  filters: {
    classesFilter(value) {
      let newvalue = value === '.' ? 'dot' : value
      return `scroll-num-warpper num-${newvalue}`
    }
  },
  computed: {
    num_list() {
      return this.value.toString().split('')
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-warpper {
  display: inline-block;
  vertical-align: middle;
  transition-duration: .3s;
  .scroll-item {
    overflow: hidden;
    height: 20px;
    float: left;
    margin: 0 2px;
    .scroll-num-warpper {
      transform: translateY(20px);
      transition-duration: 1s;
      &.num-dot {
        transform: translateY(0);
      }
      &.num-0 {
        transform: translateY(-20px);
      }
      &.num-1 {
        transform: translateY(-40px);
      }
      &.num-2 {
        transform: translateY(-60px);
      }
      &.num-3 {
        transform: translateY(-80px);
      }
      &.num-4 {
        transform: translateY(-100px);
      }
      &.num-5 {
        transform: translateY(-120px);
      }
      &.num-6 {
        transform: translateY(-140px);
      }
      &.num-7 {
        transform: translateY(-160px);
      }
      &.num-8 {
        transform: translateY(-180px);
      }
      &.num-9 {
        transform: translateY(-200px);
      }
      .scroll-num {
        height: 20px;
        padding: 0 2px;
        line-height: 20px;
        display: block;
        font-weight: 700;
        color: #fff;
        background-color: #52ccba;
      }
    }
  }
}
</style>
