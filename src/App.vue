<template>
  <div id="app">
    <d-nav :selected.sync="selected" :multiple="false" style="width: 200px" vertical>
      <d-nav-item name="home">首页</d-nav-item>
      <d-sub-nav name="about">
        <template slot="title" >关于</template> 
        <d-nav-item name="company">企业</d-nav-item>
        <d-nav-item name="culture">文化</d-nav-item>
        <d-sub-nav name="contact">
          <template slot="title">联系方式</template>
          <d-nav-item name="qq">QQ</d-nav-item>
          <d-nav-item name="wechat">微信</d-nav-item>
          <d-sub-nav name="email">
            <template slot="title" >邮箱</template>
            <d-nav-item name="email1">邮箱1</d-nav-item>
            <d-nav-item name="email2">邮箱2</d-nav-item>
            <d-nav-item name="email3">邮箱3</d-nav-item>
          </d-sub-nav>
        </d-sub-nav>
      </d-sub-nav>
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
      selected: ['hire']
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
