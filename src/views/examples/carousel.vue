<template>
  <i-carousel
    :loopsList="setting.loopsList"
    :loopsIndex="setting.loopsIndex"
    :autoplaySpeed="setting.autoplaySpeed"
    :autoPlay="setting.autoPlay"
    :radiusDot="setting.radiusDot"
    class="loops-height"
  ></i-carousel>
</template>

<script>
import ICarousel from '@/components/carousel.vue'
export default {
  components: { ICarousel },
  data() {
    return {
      setting: {
        loopsList: [
          { id: 1, url: '', img: require('../../assets/images/153828952.jpg') },
          { id: 2, url: '', img: require('../../assets/images/25cbcabf0e8083869e693db485552710.jpg') },
          { id: 3, url: '', img: require('../../assets/images/c4bd07c5f2e537a97202dc347d025c5c.jpg') }
        ],
        loopsIndex: 0,
        autoplaySpeed: 3000,
        autoPlay: true,
        radiusDot: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.loops-height {
  width: 100%;
}
</style>
