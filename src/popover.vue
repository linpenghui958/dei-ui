<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default{
    name: 'DeiPopover',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      xxx() {
        this.visible = !this.visible
        console.log('切换visible')
        if (this.visible === true ) {
            this.$nextTick(() => {
              let eventHandler = () => {
                this.visible = false
                console.log('document hide popvoer')
                document.removeEventListener('click', eventHandler)
              }
              document.addEventListener('click', eventHandler)
          })
        } else {
          console.log('vm hide popover')
        }
      }
    }
  }
</script>

<style lang="scss">
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper{
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0,0,0,0.4);
    }
  }
</style>
