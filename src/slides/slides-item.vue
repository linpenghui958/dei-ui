<template>
  <transition name="slide">
    <div class="g-slides-item" v-if="visible" :class="{reverse}">
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
      selected: '',
      reverse: false
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

.slide-enter.reverse{
  transform: translateX(-100%);
}
.slide-leave-to.reverse{
  transform: translateX(100%);  
}
</style>
