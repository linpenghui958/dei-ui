<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'DeiLayout',
    data() {
      return {
        layoutClass: {
          hasSider: false
        }
      }
    },
    mounted() {
      console.log(this.$children)
      this.$children.forEach(vm => {
        if (vm.$options.name === 'DeiSider') {
          this.layoutClass.hasSider = true
        }
      })
    }
  }
</script>
<style lang="scss" scoped>
  .layout{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &.hasSider{
      flex-direction: row;
    }
  }
</style>
