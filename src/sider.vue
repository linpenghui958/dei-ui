<template>
  <transition name="slider">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="_close">close</button>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'DeiSider',
    data() {
      return {
        visible: true
      }
    },
    methods: {
      _close() {
        this.visible = false
      }
    }
  }
</script>
<style lang="scss">
.sider{
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slider-enter-active, .slider-leave-active{
  transition: all .5s;
}
.slider-enter, .slider-leave-to{
  margin-left: -200px;
}
</style>