<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export  default {
    name: 'DeiTabsItem',
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
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>

<style lang="scss" scoped>
.tabs-item{
  flex-shrink: 0;
  padding: 0 1em;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.active{
    background-color: red;
  }
}
</style>
