<template>
  <div>

    <d-button @click="clickBtn">默认toast</d-button>

  </div>
</template>

<script>
  import Vue from 'vue'
  import Button from '../../../src/button'
  import plugin from '../../../src/plugin'

  Vue.use(plugin)

  export default {
    components: {
      'd-button': Button
    },
    methods: {
      clickBtn() {
        this.$toast('默认toast')
      }
    }
  }
</script>
