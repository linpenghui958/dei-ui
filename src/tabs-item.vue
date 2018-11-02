<template>
  <div class="tabs-item" @click="xxx" :class="classes" :data-name="name">
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
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    methods: {
      xxx() {
        if (this.disabled) return
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $blue: blue;
  $disabled-text-color: grey;
.tabs-item{
  flex-shrink: 0;
  padding: 0 1em;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.active{
    color: $blue;
    font-weight: blod;
  }
  &.disabled{
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>
