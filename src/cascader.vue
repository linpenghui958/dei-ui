<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot>{{result||'&nbsp;'}}</slot>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible" :style="{height: popoverHeight}">
      <d-cascader-item :source="source"
                       :height="popoverHeight"
                       :selected="selected"
                      @update:selected="handleEmit">
      </d-cascader-item>
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
      selected: {
        type: Array,
        default: () => []
      },
      popoverHeight: String
    },
    data() {
      return {
        popoverVisible: false
      }
    },
    methods: {
      handleEmit(selectedArr) {
        this.$emit('update:selected', selectedArr)
      }
    },
    computed: {
      result() {
        return this.selected.map(item => item.name).join('/')
      }
    }
  }
</script>
<style lang="scss">
  @import "var";
.cascader{
  position: relative;
  .trigger{
    min-width: 100px;
    height: $input-height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1em;
    position: relative;
  }
  .popover-wrapper{
    display: flex;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 6px;
    background-color: #fff;
    @extend .box-shadow;
  }
}
  .label{
    white-space: nowrap;
  }
</style>
