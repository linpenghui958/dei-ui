<template>
  <div class="cascader-item" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item in source" @click="leftSelected = item">
        {{item.name}}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="selectedItem">
      <dei-cascader-item class="item"
           :height="height"
           :source="selectedItem"
        >
      </dei-cascader-item>
    </div>
  </div>
</template>

<script>
  import Icon from './icon'
  export default {
    name: 'DeiCascaderItem',
    components: {
      Icon
    },
    data() {
      return {
        leftSelected: null
      }
    },
    props: {
      source: [Object, Array],
      height: String
    },
    computed: {
      selectedItem() {
        if (this.leftSelected && this.leftSelected.children) {
          return this.leftSelected.children
        } else {
          return null
        }
      }
    }
  }
</script>
<style lang="scss">
  @import "var";
  .cascader-item{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100px;
    .left{
      height: 100%;
      padding: .3em 0;
      @extend .box-shadow;
    }
    .right{
      height: 100%;
      border-left: 1px solid $border-color;
    }
    .label{
      padding: .3em 1em;
      display: flex;
      align-items: center;
      .icon{
        margin-left: 1em;
        transform: scale(.7);
      }
    }
  }
</style>
