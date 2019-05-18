<template>
  <div class="d-sub-nav" :class="{active}" v-click-outside="close">
    <span class="d-sub-nav-label" @click="onClick">
      <slot name="title" class=""></slot>
      <span class="d-sub-nav-icon" :class="{open}">
        <d-icon name="right"></d-icon>
      </span>
    </span>
    <template v-if="vertical">
      <transition @enter="enter" @leave="leave" @after-leave="afterLeave" @after-enter="afterEnter">
        <div class="d-sub-nav-popover" :class={vertical} v-show="open">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <transition>
        <div class="d-sub-nav-popover" v-show="open">
          <slot></slot>
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
import ClickOutside from '../click-outside'
import DIcon from '../base/icon'
export default {
  directives: {ClickOutside},
  name: 'DeiSubNav',
  inject: ['root', 'vertical'],
  components: {
    DIcon
  },
  props: {
    name: {
      type: String
    }
  },
  data() {
    return {
      open: false,
    }
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false;
    }
  },
  methods: {
    enter(el, done) {
      const { height } = el.getBoundingClientRect();
      el.style.height = 0
      el.getBoundingClientRect()
      el.style.height = height + 'px'
      el.addEventListener('transitionend', () => {
        done()
      })
    },
    afterEnter(el) {
      el.style.height = 'auto'
    },
    leave(el, done) {
      const { height } = el.getBoundingClientRect()
      el.style.height = height + 'px'
      el.getBoundingClientRect()
      el.style.height = 0
      el.addEventListener('transitionend', () => {
        done()
      })
    },
    afterLeave(el) {
      el.style.height = 'auto'
    },
    onClick() {
      this.open = !this.open
    },
    close() {
      this.open = false
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name)
      if(this.$parent.updateNamePath) {
        console.log(this.name)
        this.$parent.updateNamePath()
      } else {
        // this.root.namePath = []
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  @import "../styles/var";
  .d-sub-nav {
    position: relative;
    &:not(.vertical) {
      &.active {
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          border-bottom: 2px solid $blue;
          width: 100%;
        }
      }
    }
    &-label { padding: 10px 20px; display: block; }
    &-icon { display: none; }
    &-popover {
      transition: height 250ms;
      background: white;
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 4px;
      white-space: nowrap;
      box-shadow: 0 0 3px fade_out(black, 0.8);
      border-radius: $border-radius;
      font-size: $font-size;
      color: $light-color;
      min-width: 8em;
      &.vertical {
        position: static;
        border-radius: 0;
        border: none;
        box-shadow: none;
        overflow: hidden;
        transition: height 250ms;
      }
    }
  }
  .d-sub-nav .d-sub-nav {
    &.active {
      &::after {
        display: none;
      }
    }
    .d-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
    }
    .d-sub-nav-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .d-sub-nav-icon {
      transition: transform 250ms;
      display: inline-flex; margin-left: 1em;
      svg {fill: $light-color;}
      &.vertical {
        transform: rotate(90deg);
        &.open {
          transform: rotate(270deg);
        }
      }
      &.open {
        transform: rotate(180deg);
      }
    }
  }
</style>
