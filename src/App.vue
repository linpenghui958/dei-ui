<template>
  <div id="app">
    <d-nav :selected.sync="selected" :multiple="false">
      <d-nav-item name="home">首页</d-nav-item>
      <d-nav-item name="about">关于</d-nav-item>
      <d-nav-item name="mine">我的</d-nav-item>
    </d-nav>
  </div>
</template>

<script>
import DNav from '@/nav/nav'
import DNavItem from '@/nav/nav-item'
import DSubNav from '@/nav/sub-nav'
export default {
  name: "app",
  components: {
    DNav, DNavItem, DSubNav
  },
  data() {
    return {
      selected: ['home']
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
