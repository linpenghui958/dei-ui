<template>
  <div>
    <div>默认用法</div>
    <d-tabs :selected="selected1">
      <d-tabs-head>
        <d-tabs-item name="1">tab1</d-tabs-item>
        <d-tabs-item name="2">tab2</d-tabs-item>
        <d-tabs-item name="3">tab3</d-tabs-item>
      </d-tabs-head>
      <d-tabs-body>
        <d-tabs-pane name="1">pane1</d-tabs-pane>
        <d-tabs-pane name="2">pane2</d-tabs-pane>
        <d-tabs-pane name="3">pane3</d-tabs-pane>
      </d-tabs-body>
    </d-tabs>
    <pre>
      <code>{{content1}}</code>
    </pre>

    <div>disabled属性</div>
    <d-tabs :selected="selected1">
      <d-tabs-head>
        <d-tabs-item name="1">tab1</d-tabs-item>
        <d-tabs-item name="2" disabled>禁用</d-tabs-item>
        <d-tabs-item name="3">tab3</d-tabs-item>
      </d-tabs-head>
      <d-tabs-body>
        <d-tabs-pane name="1">pane1</d-tabs-pane>
        <d-tabs-pane name="2">pane2</d-tabs-pane>
        <d-tabs-pane name="3">pane3</d-tabs-pane>
      </d-tabs-body>
    </d-tabs>
    <pre>
      <code>{{content2}}</code>
    </pre>
  </div>
</template>
<script>
  import Tabs from '../../../src/tabs'
  import TabsBody from '../../../src/tabs-body'
  import TabsHead from '../../../src/tabs-head'
  import TabsItem from '../../../src/tabs-item'
  import TabsPane from '../../../src/tabs-pane'
  export default{
    components: {
      'd-tabs': Tabs,
      'd-tabs-body': TabsBody,
      'd-tabs-head': TabsHead,
      'd-tabs-item': TabsItem,
      'd-tabs-pane': TabsPane,
    },
    data() {
      return {
        selected1: '1',
        content1: `
          <d-tabs :selected="selected1">
            <d-tabs-head>
              <d-tabs-item name="1">tab1</d-tabs-item>
              <d-tabs-item name="2">tab2</d-tabs-item>
              <d-tabs-item name="3">tab3</d-tabs-item>
            </d-tabs-head>
            <d-tabs-body>
              <d-tabs-pane name="1">pane1</d-tabs-pane>
              <d-tabs-pane name="2">pane2</d-tabs-pane>
              <d-tabs-pane name="3">pane3</d-tabs-pane>
            </d-tabs-body>
          </d-tabs>
        `,
        content2: `
          <d-tabs :selected="selected1">
            <d-tabs-head>
              <d-tabs-item name="1">tab1</d-tabs-item>
              <d-tabs-item name="2" disabled>禁用</d-tabs-item>
              <d-tabs-item name="3">tab3</d-tabs-item>
            </d-tabs-head>
            <d-tabs-body>
              <d-tabs-pane name="1">pane1</d-tabs-pane>
              <d-tabs-pane name="2">pane2</d-tabs-pane>
              <d-tabs-pane name="3">pane3</d-tabs-pane>
            </d-tabs-body>
          </d-tabs>
        `
      }
    },
  }
</script>
