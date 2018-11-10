<template>
  <div class="popover"   @click="click" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-show="visible" >
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper" style="display: inline-block;">
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
  $border-color: #ddd;
  $border-radius: 4px;
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper{
    position: absolute;
    max-width: 20em;
    transform: translateY(-100%);
    border: 1px solid $border-color;
    border-radius: $border-radius;
    background-color: #fff;
    filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));
    margin-top: -10px;
    padding: .5em 1em;
    word-break: break-all;
    &::before, &::after{
      content: '';
      display: block;
      position: absolute;
      left: 10px;
      border: 10px solid transparent;
    }
    &::before{
      top: 100%;
      border-top-color: $border-color;
    }
    &::after{
      top: calc(100% - 1px);
      border-top-color: white;
    }
  }
</style>
