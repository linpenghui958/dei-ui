<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DeiTableColumn',
  props: {
    text: {
      type: String,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    width: {
      type: Number
    }
  }
}
</script>

<style lang="scss">

</style>
