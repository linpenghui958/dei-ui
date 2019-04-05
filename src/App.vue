<template>
  <div id="app">
    <d-slides width="300" height="200" :selected="selected">
      <d-slides-item name="1">
        <div class="box">1</div>
      </d-slides-item>
      <d-slides-item name="2">
        <div class="box">2</div>
      </d-slides-item>
      <d-slides-item name="3">
        <div class="box">3</div>
      </d-slides-item>
    </d-slides>
  </div>
</template>

<script>
  // import dbjson from './db'
  // function ajax(parentId = 0) {
  //   return new Promise((resolve, reject) => {
  //     let result = dbjson.filter(item => {if (item.parent_id === parentId)return {name: item.name, parentId: item.parentId}})
  //     setTimeout(() => {
  //       resolve(result)
  //     }, 300)
  //   })
  // }
export default {
  name: "app",
  data() {
    return {
      selected: "1"
    };
  },
  mounted() {
    let n = 2
    setInterval(() => {
      if (n === 4) n = 1;
      this.selected = n.toString()
      n++
    }, 3000)
  }
};
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  html, body, #app{width: 100%;height: 100%;  }
  .box{
    width: 300px;
    height: 200px;
    background-color: gray;
  }
</style>
