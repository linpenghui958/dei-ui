<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
  export  default {
    name: 'DeiTabsHead',
    inject: ['eventBus']
  }
</script>

<style lang="scss">

</style>
