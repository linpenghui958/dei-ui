<template>
  <div class="cascader-item" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item in source" @click="clickHandle(item)">
        {{item.name}}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="selectedItem">
      <dei-cascader-item class="item"
           :height="height"
           :level="level + 1"
                         :selected="selected"
                         @update:selected="onUpdateSelected"
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
    props: {
      source: [Object, Array],
      selected: {
        type: Array
      },
      level: {
        type: Number,
        default: 0
      },
      height: String
    },
    computed: {
      selectedItem() {
        let currentSelected = this.selected[this.level]
        if (currentSelected && currentSelected.children) {
          return currentSelected.children
        } else {
          return null
        }
      }
    },
    methods: {
      clickHandle(item) {
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level + 1) // 删除更新index之后的数据
        this.$emit('update:selected', copy)
      },
      onUpdateSelected(arr) {
        this.$emit('update:selected', arr)
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
