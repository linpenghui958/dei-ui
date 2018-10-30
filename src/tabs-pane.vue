<template>
  <div class="tabs-pane" :class="classes" v-if="active">
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
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
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
  background-color: red;
  &.active{
    background-color: blue;
  }
}

</style>
