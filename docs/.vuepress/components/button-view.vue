<template>
  <div>
    <d-button>按钮</d-button>
    <d-button icon="setting">按钮</d-button>
    <d-button loading>按钮</d-button>
    <d-button icon="setting" position="right">按钮</d-button>
    <pre>
      <code>{{content}}</code>
    </pre>


  </div>
</template>
<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'
  export default {
    components: {
      'd-button': Button,
      'd-button-group': ButtonGroup
    },
    data() {
      return {
        content: `
          <d-button>按钮</d-button>
          <d-button icon="setting">按钮</d-button>
          <d-button loading>按钮</d-button>
          <d-button icon="setting" position="right">按钮</d-button>
          `
      }
    }
  }
</script>
