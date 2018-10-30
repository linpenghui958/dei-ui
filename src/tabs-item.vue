<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export  default {
    name: 'DeiTabs',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String, Number],
        required: true
      }
    },
    data() {
      return {
        active: false
      }
    },
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    },
    computed: {
      classes() {
        return {
          active: this.active
        }
      }
    },
    methods: {
      xxx() {
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
.tabs-item{
  flex-shrink: 0;
  padding: 0 1em;
  &.active{
    background-color: red;
  }
}
</style>
