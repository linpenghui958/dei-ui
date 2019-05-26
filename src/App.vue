<template>
  <div id="app">
    <g-pager :currentPage="2" :totalPage="50"></g-pager>
  </div>
</template>

<script>
import GPager from '@/pager/pager'
export default {
  name: "app",
  components: {
    GPager
  },
  data() {
    return {
      selected: ''
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
