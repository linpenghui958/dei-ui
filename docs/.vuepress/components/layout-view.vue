<template>
  <div>
    <div>默认用法</div>
    <d-layout style="color: white; margin-bottom:50px;">
      <d-header style="height: 50px; background:lightskyblue;">header</d-header>
        <d-content style="height: 100px; background:deepskyblue;">content</d-content>
      <d-footer style="height: 50px; background:lightskyblue;">footer</d-footer>
    </d-layout>

    <div>含sider</div>
    <d-layout style="color: white; margin-bottom:50px;">
      <d-header style="height: 50px; background:lightskyblue;">
        header
      </d-header>
      <d-layout>
        <d-sider style="height: 100px; background:#ddd; width:200px; color: black;">
          sider
        </d-sider>
        <d-content style="height: 100px; background:deepskyblue;">
          content
        </d-content>
      </d-layout>
      <d-footer style="height: 50px; background:lightskyblue;">
        footer
      </d-footer>
    </d-layout>

    <d-layout style="color: white; margin-bottom:50px;">
      <d-sider style="height: auto; background:lightskyblue;">
        sider
      </d-sider>
      <d-layout>
        <d-header style="height: 100px; background:#ddd; color: black;">
          header
        </d-header>
        <d-content style="height: 100px; background:deepskyblue;">
          content
        </d-content>
        <d-footer style="height: 50px; background:lightskyblue;">
          footer
        </d-footer>
      </d-layout>
    </d-layout>


  </div>
</template>

<script>
  import DLayout from '../../../src/layout'
  import DFooter from '../../../src/footer'
  import DHeader from '../../../src/header'
  import DContent from '../../../src/content'
  import DSider from '../../../src/sider'
  export default{
    components: {
      DLayout,
      DFooter,
      DHeader,
      DContent,
      DSider
    }
  }
</script>
<style>
</style>
