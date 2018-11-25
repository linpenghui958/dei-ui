<template>
  <div>
    <d-button>按钮</d-button>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  export default {
    components: {
      'd-button': Button
    },
    data() {
      return {
        content: ``
      }
    }
  }
</script>
