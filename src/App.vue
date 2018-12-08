<template>
  <div id="app">
    <d-cascader :source="source" popover-height="200px"
                @update:selected="xxx"
                :selected="selected"
                :selected.sync="selected"></d-cascader>
  </div>
</template>

<script>
  import dbjson from './db'
  function ajax(parentId = 0) {
    return new Promise((resolve, reject) => {
      let result = dbjson.filter(item => {if (item.parent_id === parentId)return {name: item.name, parentId: item.parentId}})
      setTimeout(() => {
        resolve(result)
      }, 2000)
    })
  }
export default {
  name: "app",
  data() {
    return {
      selected: [],
      source: []
    };
  },
  created() {
    ajax().then(res => {
      console.log(res)
      this.source = res
    })
  },
  methods: {
    xxx() {
      ajax(1).then(res => {
        let target = this.source.filter(item => item.id === 1)[0]
        this.$set(target, 'children', res)
      })
    }
  }
};
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  img {max-width: 100%;}
  html {
    --font-size: 14px;
  }
  body {
    font-size: var(--font-size);
  }
</style>
