<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-show="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper">
      <slot></slot>
    </div>
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
    mounted() {
      console.log(this.$refs.triggerWrapper);
    },
    methods: {
      xxx() {
        this.visible = !this.visible
        if (this.visible === true ) {
            this.$nextTick(() => {
              document.body.appendChild(this.$refs.contentWrapper)
              let { width, height, top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
              console.log(width, height, top, left)
              this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
              this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'

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
  }
  .content-wrapper{
    position: absolute;
    transform: translateY(-100%);
    box-shadow: 0 0 3px rgba(0,0,0,0.4);
  }
</style>
