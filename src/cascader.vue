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
      loadData: Function,
      popoverHeight: String
    },
    data() {
      return {
        popoverVisible: false
      }
    },
    methods: {
      handleEmit(newSelectedArr) {
        this.$emit('update:selected', newSelectedArr)
        let clickItem = newSelectedArr[newSelectedArr.length - 1] // 获取当前点击项，选中数组最后一项
        let simpleFind = (children, id) => {
          return children.filter(item => item.id === id)[0] || undefined
        }
        let complexFind = (children, id) => {
          let noChildrenArr = []
          let haxChildrenArr = []
          let found = null
          children.forEach(item => {
            if (item.children) {
              haxChildrenArr.push(item)
            } else {
              noChildrenArr.push(item)
            }
          })
          found = simpleFind(noChildrenArr, id)
          if (found) {
            return found
          }
          else {
            found = simpleFind(haxChildrenArr, id)
            if (found) return found
            let length = haxChildrenArr.length
            for (let i = 0; i < length; i++) {
              found = complexFind(haxChildrenArr[i].children, id)
              if (found) return found
            }
            return undefined
          }
        }
        /**
         * 更新回调
         * @param result 需要添加到children的数组
         */
        let updateSource = result => {
          // let uploadTarget = this.source.filter(item => item.id === clickItem.id)[0]
          let copySource = JSON.parse(JSON.stringify(this.source))
          let uploadTarget = complexFind(copySource, clickItem.id)
          uploadTarget.children = result
          console.log(uploadTarget)
          this.$emit('update:source', copySource)

        }
        // 执行用户传进的回调，并将更新函数传出
        this.loadData(clickItem, updateSource)
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
