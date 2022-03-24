<template>
  <remote-js :src="this.src" @loaded="this.loaded"></remote-js>
</template>

<script>
import RemoteJs from './remote-js'
export default {
  components: { RemoteJs },
  props: {
    src: {
      type: String,
      required: true
    },
    loaded: Function
  }
}
</script>

<style lang="scss" scoped>

</style>
