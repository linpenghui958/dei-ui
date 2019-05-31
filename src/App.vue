<template>
  <div id="app">
    <div style="margin: 20px;">
      <g-table :columns="columns" :data-source="dataSource"></g-table>
    </div>
    <div style="margin: 20px;">
      <g-pager :totalPage="50" :current-page.sync="currentPage"></g-pager>
    </div>
  </div>
</template>

<script>
import GPager from '@/pager/pager'
import GTable from '@/table/table'
export default {
  name: "app",
  components: {
    GPager,
    GTable
  },
  data() {
    return {
      currentPage: 1,
      columns: [
        { text: '姓名', field: 'name'},
        { text: '分数', field: 'score'},
      ],
      dataSource: [
        { id: 1, name: 'linph', score: 100},
        { id: 2, name: 'lee', score: 60},
      ]
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
