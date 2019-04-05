<template>
  <transition name="slide">
    <div class="g-slides-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
      selected: ''
    }
  },
  computed: {
    visible() {
      return this.name === this.selected
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-leave-active{
  position: absolute;
  top: 0;
  left: 0;
}
.slide-enter-active, .slide-leave-active{
  transition: all 1s ease;
}
.slide-enter{
  transform: translateX(100%);
}
.slide-leave-to{
  transform: translateX(-100%);
}
</style>
