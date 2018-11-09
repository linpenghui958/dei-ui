<template>
  <div class="popover"   @click="click" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-show="visible" >
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
    methods: {
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapper)
        let { width, height, top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      },
      clickDocument (e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) { return }
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
        ) { return }
          this.close()
      },
      close() {
        console.log('close')
        this.visible = false
        document.removeEventListener('click', this.clickDocument)
      },
      open() {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.clickDocument)
        })
      },
      click (event) {
        console.log('click button')
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true ) {
            this.close()
          } else {
            this.open()
          }
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
