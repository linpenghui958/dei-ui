<template>
  <div class="d-content">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'DeiContent'
  }
</script>
<style lang="scss">
  .d-content{
    flex-grow: 1;
  }
</style>
