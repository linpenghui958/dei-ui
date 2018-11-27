<template>
  <div>
    <div>默认使用方式</div>
    <d-row>
      <d-col span="8">
        <div class="demo-col">col8</div>
      </d-col>
      <d-col span="8">
        <div class="demo-col">col8</div>
      </d-col>
      <d-col span="8">
        <div class="demo-col">col8</div>
      </d-col>
    </d-row>
    <d-row>
      <d-col span="4"><div class="demo-col">col-4</div></d-col>
      <d-col span="4"><div class="demo-col">col-4</div></d-col>
      <d-col span="4"><div class="demo-col">col-4</div></d-col>
      <d-col span="4"><div class="demo-col">col-4</div></d-col>
      <d-col span="4"><div class="demo-col">col-4</div></d-col>
      <d-col span="4"><div class="demo-col">col-4</div></d-col>
    </d-row>
    <d-row>
      <d-col span="2"><div class="demo-col">col-2</div></d-col>
      <d-col span="2"><div class="demo-col">col-2</div></d-col>
      <d-col span="2"><div class="demo-col">col-2</div></d-col>
      <d-col span="2"><div class="demo-col">col-2</div></d-col>
      <d-col span="2"><div class="demo-col">col-2</div></d-col>
      <d-col span="2"><div class="demo-col">col-2</div></d-col>
      <d-col span="2"><div class="demo-col">col-2</div></d-col>
      <d-col span="2"><div class="demo-col">col-2</div></d-col>
      <d-col span="2"><div class="demo-col">col-2</div></d-col>
      <d-col span="2"><div class="demo-col">col-2</div></d-col>
      <d-col span="2"><div class="demo-col">col-2</div></d-col>
      <d-col span="2"><div class="demo-col">col-2</div></d-col>
    </d-row>
    <pre>
      <code>{{content1}}</code>
    </pre>

    <div>gutter</div>
    <d-row gutter="20">
      <d-col span="8">
        <div class="demo-col">col8</div>
      </d-col>
      <d-col span="8">
        <div class="demo-col">col8</div>
      </d-col>
      <d-col span="8">
        <div class="demo-col">col8</div>
      </d-col>
    </d-row>
    <d-row gutter="20">
      <d-col span="4"><div class="demo-col">col-4</div></d-col>
      <d-col span="4"><div class="demo-col">col-4</div></d-col>
      <d-col span="4"><div class="demo-col">col-4</div></d-col>
      <d-col span="4"><div class="demo-col">col-4</div></d-col>
      <d-col span="4"><div class="demo-col">col-4</div></d-col>
      <d-col span="4"><div class="demo-col">col-4</div></d-col>
    </d-row>
    <pre>
      <code>{{content2}}</code>
    </pre>


    <div>空隙</div>
    <d-row>
      <d-col span="8">
        <div class="demo-col">col8</div>
      </d-col>
      <d-col span="8" offset="8">
        <div class="demo-col">col8</div>
      </d-col>
    </d-row>
    <d-row>
      <d-col span="4">
        <div class="demo-col">4</div>
      </d-col>
      <d-col span="4" offset="4">
        <div class="demo-col">4</div>
      </d-col>
      <d-col span="4"  offset="4">
        <div class="demo-col">4</div>
      </d-col>
      <d-col span="4">
        <div class="demo-col">4</div>
      </d-col>
    </d-row>
    <pre>
      <code>{{content3}}</code>
    </pre>

  </div>
</template>
<script>
import Row from '../../../src/row'
import Col from '../../../src/col'
export default {
  components: {
    'd-row': Row,
    'd-col': Col
  },
  data() {
    return {
      content1: `
        <d-row>
          <d-col span="8">
            <div class="demo-col">col8</div>
          </d-col>
          <d-col span="8">
            <div class="demo-col">col8</div>
          </d-col>
          <d-col span="8">
            <div class="demo-col">col8</div>
          </d-col>
        </d-row>
        <d-row>
          <d-col span="4"><div class="demo-col">col-4</div></d-col>
          <d-col span="4"><div class="demo-col">col-4</div></d-col>
          <d-col span="4"><div class="demo-col">col-4</div></d-col>
          <d-col span="4"><div class="demo-col">col-4</div></d-col>
          <d-col span="4"><div class="demo-col">col-4</div></d-col>
          <d-col span="4"><div class="demo-col">col-4</div></d-col>
        </d-row>
        <d-row>
          <d-col span="2"><div class="demo-col">col-2</div></d-col>
          <d-col span="2"><div class="demo-col">col-2</div></d-col>
          <d-col span="2"><div class="demo-col">col-2</div></d-col>
          <d-col span="2"><div class="demo-col">col-2</div></d-col>
          <d-col span="2"><div class="demo-col">col-2</div></d-col>
          <d-col span="2"><div class="demo-col">col-2</div></d-col>
          <d-col span="2"><div class="demo-col">col-2</div></d-col>
          <d-col span="2"><div class="demo-col">col-2</div></d-col>
          <d-col span="2"><div class="demo-col">col-2</div></d-col>
          <d-col span="2"><div class="demo-col">col-2</div></d-col>
          <d-col span="2"><div class="demo-col">col-2</div></d-col>
          <d-col span="2"><div class="demo-col">col-2</div></d-col>
        </d-row>
      `,
      content2: `
        <d-row gutter="20">
          <d-col span="8">
            <div class="demo-col">col8</div>
          </d-col>
          <d-col span="8">
            <div class="demo-col">col8</div>
          </d-col>
          <d-col span="8">
            <div class="demo-col">col8</div>
          </d-col>
        </d-row>
        <d-row gutter="20">
          <d-col span="4"><div class="demo-col">col-4</div></d-col>
          <d-col span="4"><div class="demo-col">col-4</div></d-col>
          <d-col span="4"><div class="demo-col">col-4</div></d-col>
          <d-col span="4"><div class="demo-col">col-4</div></d-col>
          <d-col span="4"><div class="demo-col">col-4</div></d-col>
          <d-col span="4"><div class="demo-col">col-4</div></d-col>
        </d-row>
      `,
      content3: `
        <d-row>
          <d-col span="8">
            <div class="demo-col">col8</div>
          </d-col>
          <d-col span="8" offset="8">
            <div class="demo-col">col8</div>
          </d-col>
        </d-row>
        <d-row>
          <d-col span="4">
            <div class="demo-col">4</div>
          </d-col>
          <d-col span="4" offset="4">
            <div class="demo-col">4</div>
          </d-col>
          <d-col span="4"  offset="4">
            <div class="demo-col">4</div>
          </d-col>
          <d-col span="4">
            <div class="demo-col">4</div>
          </d-col>
        </d-row>
      `
    }
  }
}
</script>
<style>
.demo-col{
  text-align: center;
  height: 60px;
  margin-top: 15px;
  line-height: 1;
  border: 1px solid gray;
}
*{
  box-sizing: border-box;
}
</style>

