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
    selected: String,
    auto: {
      type: Boolean,
      default: true
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.updateChildren()
    this.autoPlay()
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    autoPlay() {
      const names = this.$children.map(vm => vm.name)
      let index = names.indexOf(this.getSelected())
      if (this.reverse) {
        let run = () => {
          if (index === 0) index = names.length;
          this.$emit('update:selected', names[index - 1])
          console.log(index - 1)
          index--
          setTimeout(run, 1000)
        }
        setTimeout(run, 1000)        
      } else {
        let run = () => {
          if (index === names.length) index = 0;
          this.$emit('update:selected', names[index + 1])
          index++
          setTimeout(run, 2000)
        }
        setTimeout(run, 2000)      
      }
    },
    getSelected() {
      let firstName = this.$children[0].name
      return this.selected || firstName
    },
    updateChildren() {
      let selected = this.getSelected()
      this.$children.forEach(vm => {
        vm.selected = selected
        vm.reverse = this.reverse
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
