<template>
  <div class="d-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
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
<style lang="scss">
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
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }
  > .d-button:last-child{
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }
  > .d-button:hover{
    position: relative;
    z-index: 1;
  }
}
</style>