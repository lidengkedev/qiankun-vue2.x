<template>
  <div>
    <section class="floor-item" v-for="item in data" :key="item.id">
      <ul class="list-box">
        <li class="list-item" v-for="child in item.children" :key="child.id">
          <img :data-src="child.src" alt="" class="loading lazy-loading">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          { id: 1, 
            children: [
              { id: 11, src: require('../../assets/images/153828952.jpg')},
              { id: 12, src: require('../../assets/images/25cbcabf0e8083869e693db485552710.jpg')},
              { id: 13, src: require('../../assets/images/c4bd07c5f2e537a97202dc347d025c5c.jpg')}
            ]
          }, {
            id: 2,
            children: [
              { id: 21, src: require('../../assets/images/153828952.jpg')},
              { id: 22, src: require('../../assets/images/25cbcabf0e8083869e693db485552710.jpg')},
              { id: 23, src: require('../../assets/images/c4bd07c5f2e537a97202dc347d025c5c.jpg')}
            ]
          }, {
            id: 3,
            children: [
              { id: 31, src: require('../../assets/images/153828952.jpg')},
              { id: 32, src: require('../../assets/images/25cbcabf0e8083869e693db485552710.jpg')},
              { id: 33, src: require('../../assets/images/c4bd07c5f2e537a97202dc347d025c5c.jpg')}
            ]
          }, {
            id: 4,
            children: [
              { id: 41, src: require('../../assets/images/153828952.jpg')},
              { id: 42, src: require('../../assets/images/25cbcabf0e8083869e693db485552710.jpg')},
              { id: 43, src: require('../../assets/images/c4bd07c5f2e537a97202dc347d025c5c.jpg')}
            ]
          }, {
            id: 5,
            children: [
              { id: 51, src: require('../../assets/images/153828952.jpg')},
              { id: 52, src: require('../../assets/images/25cbcabf0e8083869e693db485552710.jpg')},
              { id: 53, src: require('../../assets/images/c4bd07c5f2e537a97202dc347d025c5c.jpg')}
            ]
          }, {
            id: 6,
            children: [
              { id: 61, src: require('../../assets/images/153828952.jpg')},
              { id: 62, src: require('../../assets/images/25cbcabf0e8083869e693db485552710.jpg')},
              { id: 63, src: require('../../assets/images/c4bd07c5f2e537a97202dc347d025c5c.jpg')}
            ]
          }, {
            id: 7,
            children: [
              { id: 71, src: require('../../assets/images/153828952.jpg')},
              { id: 72, src: require('../../assets/images/25cbcabf0e8083869e693db485552710.jpg')},
              { id: 73, src: require('../../assets/images/c4bd07c5f2e537a97202dc347d025c5c.jpg')}
            ]
          }, {
            id: 8,
            children: [
              { id: 81, src: require('../../assets/images/153828952.jpg')},
              { id: 82, src: require('../../assets/images/25cbcabf0e8083869e693db485552710.jpg')},
              { id: 83, src: require('../../assets/images/c4bd07c5f2e537a97202dc347d025c5c.jpg')}
            ]
          }
        ]
      }
    },
    mounted() {
      this.initLazyLoading()
    },
    methods: {
      setLayLoading (IMAGES_ARR, MIN_HEIGHT) {
        // 获取可视区域高度
        let CLIENT_HEIGHT = document.documentElement.clientHeight || document.body.clientHeight
        // 获取屏幕滚动高度
        let SRCOLL_TOP = document.documentElement.scrollTop || document.body.scrollTop
        // 最小高度不小于屏幕滚动高度停止程序
        if (SRCOLL_TOP > MIN_HEIGHT) {
          MIN_HEIGHT = SRCOLL_TOP
          for (let i = 0, len = IMAGES_ARR.length; i < len; i++) {
            // 获取当前图片最在位置距离顶部的距离
            let CURRENT_IMAGE_TOP = IMAGES_ARR[i].offsetTop
            // 当前图片的位置在可是区域范围内，替换真实图片路径
            if (CURRENT_IMAGE_TOP < (SRCOLL_TOP + CLIENT_HEIGHT) && !IMAGES_ARR[i].src) {
              IMAGES_ARR[i].src = IMAGES_ARR[i].dataset.src
              // 设置图片样式清楚默认图片
              IMAGES_ARR[i].className = 'lazy-loading'
            }
          }
        }
      },
      initLazyLoading () {
        // 设置最小高度
        let MIN_HEIGHT = -1
        let IMAGES_ARR = document.getElementsByClassName('lazy-loading')
        this.setLayLoading(IMAGES_ARR, MIN_HEIGHT)
        window.onscroll = () => {this.setLayLoading(IMAGES_ARR, MIN_HEIGHT)}
      }
    }
  }
</script>

<style lang="scss" scoped>
.container {
    min-height: 700px;
}
.vue-seo {
    width: 100px;
    margin: 10px;
    line-height: 32px;
    text-align: center;
    background-color: #FFF;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    cursor: pointer;
}
@keyframes loadingImg {
    from { transform: rotate(0); }
    to { transform: rotate(360deg) }
}
.floor-item .list-item {
    width: 33.33%;
    height: 200px;
    display: inline-block;
    vertical-align: top;
}
.floor-item .list-item .loading {
    position: relative;
    background-color: rgba(0,0,0,.3);
    overflow: hidden;
    vertical-align: bottom;
}
.floor-item .list-item .loading::after {
    position: absolute;
    top: 25%;
    left: 0;
    content: '';
    width: 100%;
    height: 50%;
    display: block;
    background: url('../../assets/images/spin.svg') no-repeat center center;
    animation: loadingImg .5s infinite;
}
.floor-item .list-item .lazy-loading {
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
}
</style>
