<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export  default {
    name: 'DeiTabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted () {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'DeiTabsHead') {
          vm.$children.forEach((child) => {
            if (child.$options.name === 'DeiTabsItem' && child.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, child)
            }
          })
        }
      })

    }
  }
</script>

<style lang="scss">

</style>
