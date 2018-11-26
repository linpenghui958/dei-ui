<template>
  <div>
    <d-button @click="$toast('默认toast')">默认toast</d-button>
    <d-button @click="$toast('中间弹出toast', {position: 'middle'})">中间弹出toast</d-button>
    <d-button @click="$toast('下方弹出toast', {position: 'bottom'})">下方弹出toast</d-button>
    <pre>
      <code>{{content}}</code>
    </pre>
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
    data() {
      return {
        content: `
          <d-button @click="$toast('默认toast')">默认toast</d-button>
          <d-button @click="$toast('中间弹出toast', {position: 'middle'})">中间弹出toast</d-button>
          <d-button @click="$toast('下方弹出toast', {position: 'bottom'})">下方弹出toast</d-button>
        `
      }
    }
  }
</script>
