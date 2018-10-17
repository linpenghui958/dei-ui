<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'DeiLayout',
    mounted() {
      console.log(this.$children)
      this.$children.forEach(vm => {
        console.log(vm.$options.name)
      })
    }
  }
</script>
<style lang="scss" scoped>
  .layout{
    border: 1px solid red;
    display: flex;
    flex-direction: column;
  }
</style>