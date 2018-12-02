<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <d-cascader-item :source="source"></d-cascader-item>
    </div>

  </div>
</template>

<script>
  import CascaderItem from './cascader-item'
  export default {
    name: 'DeiCascader',
    components: {
      'd-cascader-item': CascaderItem
    },
    props: {
      source: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        popoverVisible: false
      }
    }
  }
</script>
<style lang="scss">
.trigger{
  width: 100px;
  height: 32px;
  border: 1px solid red;
}
.popover{
  border: 2px solid green;
  display: flex;
}
  .label{
    white-space: nowrap;
  }
</style>
