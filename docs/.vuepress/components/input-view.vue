<template>
  <div>
    <d-input value="这是一个输入框"></d-input><br/>
    <d-input value="disabled输入框" :disabled="true"></d-input><br/>
    <d-input value="readonly输入框" :readonly="true"></d-input><br/>
    <d-input value="error的输入框" error="请输入正确信息"></d-input><br/>

    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
  import Input from '../../../src/input'
  export default {
    components: {
      'd-input': Input
    },
    data() {
      return {
        content: `
          <div>
            <d-input value="这是一个输入框"></d-input><br/>
            <d-input value="disabled输入框" disabled="true"></d-input><br/>
            <d-input value="readonly输入框" readonly="true"></d-input><br/>
            <d-input value="error的输入框" error="请输入正确信息"></d-input><br/>
          </div>
        `
      }
    }
  }
</script>
<style scoped>
  .wrapper{
    margin-top: 10px;
  }
</style>
