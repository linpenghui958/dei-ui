<template>
  <div id="app">
    <!-- {{items}}
    <div style="margin: 20px;">
      <g-table :columns="columns" :data-source="dataSource" @changeItem="x" checkable compact bordered striped :selectedItems.sync="items" :order-by.sync="orderBy" :height="400"></g-table>
    </div>
    <div style="margin: 20px;">
      <g-pager :totalPage="50" :current-page.sync="currentPage"></g-pager>
    </div> -->
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <d-sticky>
      <div style="border: 1px solid red;">sticky内容</div>
    </d-sticky>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
    <p>这是一行内容</p>
  </div>
</template>

<script>
import GPager from '@/pager/pager';
import GTable from '@/table/table';
import DUploader from '@/uploader/uploader';
import DSticky from '@/sticky'
export default {
  name: "app",
  components: {
    GPager,
    GTable,
    DUploader,
    DSticky
  }
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
