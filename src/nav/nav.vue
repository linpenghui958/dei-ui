<template>
  <div class="d-nav" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DeiNav',
  provide() {
    return {
      root: this
    }
  },
  data() {
    return {
      items: [],
      namePath: []
    }
  },
  props: {
    selected: {
      type: Array,
      required: true
    },
    mutiple: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.updateChildren()
    this.listenToChildren()
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    addItems(vm) {
      this.items.push(vm)
    },
    updateChildren() {
      this.items.forEach(vm => {
        if (this.selected.includes(vm.name)) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      })
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on('add:selected', (name) => {
          if(this.mutiple) {
            const copy = JSON.parse(JSON.stringify(this.selected))
            copy.push(name)
            this.$emit('update:selected', copy)
          } else {
            this.$emit('update:selected', [name])
          }
        })
        
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_var";
  .d-nav {
    display: flex;
    border-bottom: 1px solid $grey;
    color: $color;
    cursor: default;
    user-select: none;
    &.vertical {
      flex-direction: column;
      border: 1px solid $grey;
    }
  }
</style>
