<template>
  <div class="cascader-item">
    {{sourceItem.name}}
    <dei-cascader-item class="item"
         v-if="sourceItem.children"
         v-for="item in sourceItem.children"
                       :source-item="item"
      >
    </dei-cascader-item>
  </div>
</template>

<script>
  export default {
    name: 'DeiCascaderItem',
    props: {
      sourceItem: [Object, Array]
    }
  }
</script>
<style lang="scss">
  .cascader-item{
    border: 1px solid red;
    margin-left: 20px;
  }
</style>
