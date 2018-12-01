<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in source">
        <d-cascader :source-item="item"></d-cascader>
      </div>
    </div>
  </div>
</template>

<script>
  import CascaderItem from './cascader-item'
  export default {
    name: 'DeiCascader',
    components: {
      'd-cascader': CascaderItem
    },
    props: {
      source: {
        type: Array,
        required: true
      }
    }
  }
</script>
