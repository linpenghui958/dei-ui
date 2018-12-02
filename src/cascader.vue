<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible" :style="{height: popoverHeight}">
      <d-cascader-item :source="source" :height="popoverHeight"></d-cascader-item>
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
      },
      popoverHeight: String
    },
    data() {
      return {
        popoverVisible: false
      }
    }
  }
</script>
<style lang="scss">
  @import "var";
.cascader{
  position: relative;
  .trigger{
    width: 100px;
    height: 32px;
    border: 1px solid red;
    position: relative;
  }
  .popover-wrapper{
    display: flex;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    @extend .box-shadow;
  }
}
  .label{
    white-space: nowrap;
  }
</style>
