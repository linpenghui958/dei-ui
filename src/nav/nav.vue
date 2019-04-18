<template>
  <div class="d-nav" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DeiNav',
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
  computed: {
    items() {
      return this.$children.filter(vm => vm.$options.name === 'DeiNavItem')
    }
  },
  methods: {
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
        if (this.selected.includes(vm.name)) {
          vm.selected = true
        } else {
          vm.selected = false
        }
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
