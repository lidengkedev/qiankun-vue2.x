<template>
  <div>
    <div class="select">
      <input
        v-model="selectText"
        @focus="options.isShowList = true"
        @blur="selectBlur"
        class="select-search"
        type="text">
      <input class="select-search" type="hidden" name="" id="" v-model="selectValue">
      <ul class="select-list" @click="selectOption($event)" v-show="options.isShowList" ref="selectList">
        <slot :slot-scope="options"><li value="" class="no-data">暂无数据</li></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'select',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      selectValue: '',
      selectText: '',
      options: {
        isShowList: '',
        lists: []
      }
    }
  },
  computed: {
    propsValue () {
      this.filterList(this.$props.value)
      return this.selectValue
    }
  },
  methods: {
    selectBlur () {
      document.onclick = event => this.options.isShowList = event.target.className == 'select-search'
    },
    selectOption (event) {
      if (event.target.value || event.target.value == 0) {
        this.selectValue = event.target.value
        this.selectText = event.target.innerText
      }
      this.options.isShowList = false
    },
    selectChange (value) {
      this.$emit('on-change', value)
    },
    filterList (value) {
      let selectList = this.$refs.selectList
      if (selectList) {
        let children = selectList.children,
            len = selectList.childElementCount
        for (let i = 0; i < len; i++) {
          if (children[i].value == value) {
            this.selectText = children[i].innerText
            this.selectValue = children[i].value
            return false
          }
        }
      }
    }
  },
  watch: {
    selectText (val) {
      this.$emit('on-search', val)
    },
    selectValue (val) {
      this.filterList(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
}
.select-search {
  line-height: 32px;
  padding: 0 7px;
  width: 100%;
  border: 1px solid #eaeaea;
  transition-duration: .3s;
}
.select-search:focus,
.select-search:hover {
  border: 1px solid #52ccba;
}
.select-list {
  width: 100%;
  max-height: 200px;
  overflow: auto;
  border-left: 1px solid #eaeaea;
  border-right: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
}
.no-data {
  line-height: 32px;
  text-align: center;
}
</style>
