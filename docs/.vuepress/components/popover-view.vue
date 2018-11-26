<template>
  <div>
    <div>点击触发popover</div>
    <d-popover>
      <template slot="content">默认弹出popover</template>
      <d-button>默认弹出</d-button>
    </d-popover><br/>
    <d-popover position="left">
      <template slot="content">左侧弹出popover</template>
      <d-button>左侧弹出</d-button>
    </d-popover><br/>
    <d-popover position="right">
      <template slot="content">右侧弹出popover</template>
      <d-button>右侧弹出</d-button>
    </d-popover><br/>
    <d-popover position="bottom">
      <template slot="content">下方弹出popover</template>
      <d-button>下方弹出</d-button>
    </d-popover>

    <div>鼠标触发popover</div>
    <d-popover trigger="mouse">
      <template slot="content">默认弹出popover</template>
      <d-button>默认弹出</d-button>
    </d-popover><br/>
    <d-popover position="left" trigger="mouse">
      <template slot="content">左侧弹出popover</template>
      <d-button>左侧弹出</d-button>
    </d-popover><br/>
    <d-popover position="right" trigger="mouse">
      <template slot="content">右侧弹出popover</template>
      <d-button>右侧弹出</d-button>
    </d-popover><br/>
    <d-popover position="bottom" trigger="mouse">
      <template slot="content">下方弹出popover</template>
      <d-button>下方弹出</d-button>
    </d-popover>

    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'
export default {
  components: {
    'd-popover': Popover,
    'd-button': Button
  },
  data() {
    return {
      content: `
        <d-popover>
          <template slot="content">默认弹出popover</template>
          <d-button>默认弹出</d-button>
        </d-popover><br/>
        <d-popover position="left">
          <template slot="content">左侧弹出popover</template>
          <d-button>左侧弹出</d-button>
        </d-popover><br/>
        <d-popover position="right">
          <template slot="content">右侧弹出popover</template>
          <d-button>右侧弹出</d-button>
        </d-popover><br/>
        <d-popover position="bottom">
          <template slot="content">下方弹出popover</template>
          <d-button>下方弹出</d-button>
        </d-popover>

        <d-popover trigger="mouse">
          <template slot="content">默认弹出popover</template>
          <d-button>默认弹出</d-button>
        </d-popover><br/>
        <d-popover position="left" trigger="mouse">
          <template slot="content">左侧弹出popover</template>
          <d-button>左侧弹出</d-button>
        </d-popover><br/>
        <d-popover position="right" trigger="mouse">
          <template slot="content">右侧弹出popover</template>
          <d-button>右侧弹出</d-button>
        </d-popover><br/>
        <d-popover position="bottom" trigger="mouse">
          <template slot="content">下方弹出popover</template>
          <d-button>下方弹出</d-button>
        </d-popover>
      `
    }
  }
}
</script>
<style>
.popover{
  margin-top: 15px;
}
</style>

