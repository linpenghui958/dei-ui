<template>
  <div id="app">
    <d-cascader :source.sync="source" popover-height="200px"
                :selected="selected"
                :load-data="xxx"
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
      }, 300)
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
      this.source = res
    })
  },
  methods: {
    xxx(item, updateSource) {
      let id = item.id
      ajax(id).then(res => {
        updateSource(res)
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
