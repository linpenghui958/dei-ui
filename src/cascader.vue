<template>
  <div class="cascader">
    <!--<div class="trigger">-->
      <!--<slot></slot>-->
    <!--</div>-->
    <!--<div class="popover">-->
      <!--<div v-for="item in source">-->
        <!--<d-cascader-item :source-item="item"></d-cascader-item>-->
      <!--</div>-->
    <!--</div>-->
    <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
    <div class="popover" v-if="popoverVisible">
      <div class="level1" >
        <div class="label" v-for="item1 in source"
             @click="selected1 = item1">
          {{item1.name}}
        </div>
      </div>
      <div class="level2">
        <div class="label" v-for="item2 in level1Selected"
             @click="selected2 = item2">
          {{item2.name}}
        </div>
      </div>
      <div class="level3">
        <div class="label" v-for="item3 in level2Selected">
          {{item3.name}}
        </div>
      </div>
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
        popoverVisible: false,
        selected1: {},
        selected2: {},
        selected3: {}
      }
    },
    computed: {
      level1Selected() {
        if (this.selected1.children) {
          return this.selected1.children
        } else {
          return []
        }
      },
      level2Selected() {
        if (this.selected2.children) {
          return this.selected2.children
        } else {
          return []
        }
      },
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
