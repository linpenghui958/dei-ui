<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
  export  default {
    name: 'DeiTabsBody',
    inject: ['eventBus']
  }
</script>

<style lang="scss">

</style>
