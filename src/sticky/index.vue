<template>
  <div class="dei-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="dei-sticky" :class="classes" :style="{left, width, top}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { unlink } from 'fs';
export default {
  props: {
    distance: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      sticky: false,
      left: undefined,
      width: undefined,
      height: undefined,
      top: undefined
    }
  },
  mounted() {
    this.windowScrollHandler = this._windowScrollHandler.bind(this)
    window.addEventListener('scroll', this.windowScrollHandler)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.windowScrollHandler)
  },
  methods: {
    top() {
      const { top } = this.$refs.wrapper.getBoundingClientRect();
      return top + window.scrollY;
    },
    _windowScrollHandler() {
      let top = this.top()
      if (window.scrollY > top - this.distance) {
        const {width, left, height} = this.$refs.wrapper.getBoundingClientRect();
        this.width = width + 'px'
        this.left = left + 'px'
        this.height = height + 'px'
        this.top = this.distance + 'px'
        this.sticky = true
      } else {
        this.width = undefined
        this.left = undefined
        this.height = undefined
        this.top = undefined
        this.sticky = false
      }
    }
  },
  computed: {
    classes() {
      return {
        sticky: this.sticky
      }
    }
  }
}
</script>

<style lang="scss">
.dei-sticky {
  &.sticky {
    position: fixed;
    top: 0;
  }
}
</style>
