<template>
  <div class="cascader-item">
    <div class="left">
      <div v-for="item in source" @click="selected = item">
        {{item.name}}
      </div>
    </div>
    <div class="right">
      <dei-cascader-item class="item"
           v-if="selectedItem"
           :source="selectedItem"
        >
      </dei-cascader-item>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DeiCascaderItem',
    data() {
      return {
        selected: null
      }
    },
    props: {
      source: [Object, Array]
    },
    computed: {
      selectedItem() {
        if (this.selected && this.selected.children) {
          return this.selected.children
        } else {
          return null
        }
      }
    }
  }
</script>
<style lang="scss">
  .cascader-item{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left{
      border: 1px solid red;
    }
    .right{
      margin-top: -1px;
    }
  }
</style>
