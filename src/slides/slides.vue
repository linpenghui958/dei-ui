<template>
  <div class="g-slides">
    <div class="g-slides-window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'd-slides',
  props: {
    selected: String
  },
  mounted() {
    console.log(this.$children[0].name)
    this.updateChildren()
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    updateChildren() {
      let firstName = this.$children[0].name
      let selected = this.selected || firstName
      this.$children.forEach(vm => {
        vm.selected = selected
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.g-slides{
  display: inline-block;
  border: 1px solid red;
  &-wrapper{
    position: relative; 
    display: flex;
  }
}
</style>
