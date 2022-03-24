<template>
  <div class="container" id="container" @mouseover="setStopAutoPlay" @mouseout="setAutoPlay" v-show="loopsList.length > 0">
    <button class="arrow left" @click="arrowLeft">&lt;</button>
    <ul class="loops-box" id="loops-box" style="left: 0;">
      <li class="loops-item" :class="{'active': loopsCurrentIndex == index}" v-for="(item, index) in loopsList" :key="item.id">
        <a :href="item.url ? item.url : 'javascript:void(0);'" class="loops-item-link"><img :src="item.img" alt="" class="img"></a>
      </li>
    </ul>
    <button class="arrow right" @click="arrowRight">&gt;</button>
    <ul class="needle" v-if="radiusDot">
      <li class="needle-item" :class="{'active': loopsCurrentIndex == index}" v-for="(item, index) in loopsList" :key="item.id" @click="setNeedle(index)"></li>
    </ul>
  </div>
</template>

<script>
  var Timer = null
  export default {
    name: 'Carousel',
    props: {
      loopsList: {
        type: Array,
        default: function () {
          return []
        }
      },
      loopsIndex: {
        type: Number,
        default: 0
      },
      autoplaySpeed: {
        type: Number,
        default: 3000
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      radiusDot: {
        type: Boolean,
        default: true,
      }
    },
    data () {
      return {
        loopsCurrentIndex: this.$props.loopsIndex
      }
    },
    methods: {
      getElementTags () {
        var loops_box = undefined,
            loops_item = undefined,
            tagsElem = undefined

        loops_box = document.getElementById('loops-box')
        loops_item = loops_box.getElementsByClassName('loops-item')

        if (loops_item.length > 0) {
          tagsElem = {
            loops_box: loops_box,
            loops_item: loops_item,
            loops_box_offsetWidth: loops_box.offsetWidth,
            loops_item_offsetWidth: loops_item[0].offsetWidth,
            length: loops_item.length,
            currentIndex: this.loopsCurrentIndex
          }
        }
        return tagsElem
      },
      setAutoPlay () {
        var elemTags = this.getElementTags()
        if (this.autoPlay && elemTags) {
          Timer = setInterval(() => {
            this.loopsCurrentIndex++
            if (this.loopsCurrentIndex >= elemTags.length) {
              this.loopsCurrentIndex = 0
            }
            elemTags.loops_box.style.left = -(elemTags.loops_item_offsetWidth * this.loopsCurrentIndex) + 'px'
          }, this.autoplaySpeed || 5000)
        } else {
          clearInterval(Timer)
        }
      },
      arrowLeft () {
        var elemTags = this.getElementTags()
        if (elemTags.currentIndex >= (elemTags.length - 1)) {
          this.loopsCurrentIndex = 0
        } else {
          this.loopsCurrentIndex++
        }
        elemTags.loops_box.style.left = -(this.loopsCurrentIndex * elemTags.loops_item_offsetWidth) + 'px'
      },
      arrowRight () {
        var elemTags = this.getElementTags()
        elemTags.currentIndex = this.loopsCurrentIndex - 1
        this.loopsCurrentIndex--
        if (elemTags.currentIndex < 0) {
          elemTags.currentIndex = elemTags.length - 1
          this.loopsCurrentIndex = elemTags.length - 1
        }
        elemTags.loops_box.style.left = -(elemTags.currentIndex * elemTags.loops_item_offsetWidth) + 'px'
      },
      setNeedle (index) {
        var elemTags = this.getElementTags()
        this.loopsCurrentIndex = index
        elemTags.loops_box.style.left = -(elemTags.loops_box_offsetWidth * index) + 'px'
      },
      setStopAutoPlay () {
        clearInterval(Timer)
      }
    },
    mounted () {
      if (this.loopsList.length > 0) {
        this.setAutoPlay()
      }
    }
  }
</script>

<style scoped>
.container {
  position: relative;
  min-height: 380px;
  overflow: hidden;
}
.loops-box {
  position: absolute;
  top: 0;
  white-space: nowrap;
  transition-duration: 1s;
  /* transition-timing-function: ease; */
  /* transition-timing-function: linear; */
  /* transition-timing-function: ease-in; */
  /* transition-timing-function: ease-out; */
  transition-timing-function: ease-in-out;
  /* transition-timing-function: cubic-bezier(0.25,0.1,0.25,1); */
}
.loops-item {
  display: inline-block;
}
.loops-box,
.loops-item,
.loops-item .img {
  width: 100%;
  height: 100%;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.container .arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-27px);
  width: 45px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 24px;
  border-width: 0;
  outline: none;
  color: #404040;
  background-color: transparent;
  cursor: pointer;
  transition-duration: .5s;
  z-index: 999;
}
.container .arrow:hover {
  color: #FFF;
  background-color: rgba(0,0,0,0.7);
}
.container .arrow.left {
  left: 12%;
}
.container .arrow.right {
  right: 12%;
}
.container .needle {
  position: absolute;
  bottom: 10px;
  right: 50%;
  transform: translateX(50%);
}
.container .needle .needle-item {
  display: inline-block;
  width: 10px;
  height: 10px;
  padding: 2px;
  margin: 0 5px;
  text-align: center;
  line-height: 10px;
  font-size: 12px;
  border-radius: 50%;
  background-color: rgba(255,255,255,.8);
  cursor: pointer;
  transition-duration: .5s;
}
.container .needle .needle-item:hover,
.container .needle .needle-item.active {
  color: #FFF;
  background-color: #52ccba;
}
</style>
