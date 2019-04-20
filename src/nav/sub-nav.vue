<template>
  <div class="d-sub-nav">
    <span class="d-sub-nav-label" @click="onClick">
      <slot name="title" class=""></slot>
    </span>
    <div class="d-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeiSubNav',
  data() {
    return {
      open: false
    }
  },
  methods: {
    onClick() {
      this.open = !this.open
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
