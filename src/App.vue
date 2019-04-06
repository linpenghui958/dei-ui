<template>
  <div id="app">
    <d-slides class="slider" :selected.sync="selected">
      <d-slides-item name="111">
        <div class="box">1</div>
      </d-slides-item>
      <d-slides-item name="222">
        <div class="box">2</div>
      </d-slides-item>
      <d-slides-item name="333">
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
      selected: "111"
    };
  },
};
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  html, body, #app{width: 100%;height: 100%;  }
  .slider{
    display: block;
    margin: 30px;
  }
  .box{
    width: 100%;
    height: 200px;
    background-color: gray;
  }
</style>
