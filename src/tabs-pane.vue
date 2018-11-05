<template>
  <div class="tabs-pane" :class="classes" v-if="active" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
  export  default {
    name: 'DeiPane',
    inject: ['eventBus'],
    props: {
      name: {
        type: [String, Number],
        required: true
      }
    },
    created() {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name, vm) => {
          this.active = name === this.name
        })
      }
    },
    data() {
      return {
        active: false
      }
    },
    computed: {
      classes() {
        return {
          acitve: this.active
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.tabs-pane{
  padding: 1em;
  &.active{
  }
}

</style>
