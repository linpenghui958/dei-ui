<template>
  <div class="d-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "DeiButtonGroup",
    mounted() {
      for (let ele of this.$el.children) {
        let tagName  = ele.tagName.toLowerCase()
        if (tagName !== 'button') {
          console.warn(`button group children should be button tag, seem you are using ${tagName} tag`)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $border-radius: 4px;
.d-button-group{
  display: inline-flex;
  vertical-align: middle;
  > :not(:first-child) {
    margin-left: -1px;
  }
  > .d-button{
    border-radius: 0;
  }
  > .d-button:first-child{
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
  }
  > .d-button:last-child{
    border-top-right-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }
  > .d-button:hover{
    position: relative;
    z-index: 1;
  }
}
</style>
