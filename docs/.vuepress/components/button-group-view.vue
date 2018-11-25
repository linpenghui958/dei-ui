<template>
  <div>
    <d-button-group>
      <d-button icon="left">前进</d-button>
      <d-button icon="right" position="right">后退</d-button>
    </d-button-group>
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
          <d-button-group>
            <d-button icon="left">前进</d-button>
            <d-button icon="right" position="right">后退</d-button>
          </d-button-group>
          `
      }
    }
  }
</script>

