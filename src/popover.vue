<template>
  <div class="popover"   @click="click" ref="popover">
    <div ref="contentWrapper"
         class="content-wrapper"
         :class="{[`position-${position}`]: true}"
         v-show="visible" >
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
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      }
    },
    methods: {
      positionContent() {
        const { contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        let { width, height, top, left } = triggerWrapper.getBoundingClientRect()
        if ( this.position === 'top' ) {
          contentWrapper.style.left = left + window.scrollX + 'px'
          contentWrapper.style.top = top + window.scrollY + 'px'
        } else if ( this.position === 'bottom' ) {
          contentWrapper.style.left = left + window.scrollX + 'px'
          contentWrapper.style.top = top + height + window.scrollY + 'px'
        } else if ( this.position === 'left' ) {
          const {height: height2} = contentWrapper.getBoundingClientRect()
          console.log(height2 - height)
          contentWrapper.style.left = left + window.scrollX + 'px'
          contentWrapper.style.top = top + window.scrollY - (height2 - height)/2 + 'px'
        } else if ( this.position === 'right' ) {
          const {height: height2} = contentWrapper.getBoundingClientRect()
          console.log(height2 - height)
          contentWrapper.style.left = left + width +  window.scrollX + 'px'
          contentWrapper.style.top = top + window.scrollY - (height2 - height)/2 + 'px'
        }
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
    min-height:60px;
    max-width: 20em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    background-color: #fff;
    filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));
    padding: .5em 1em;
    word-break: break-all;
    &::before, &::after{
      content: '';
      display: block;
      position: absolute;
      border: 10px solid transparent;
    }
    &.position-top{
      transform: translateY(-100%);
      margin-top: -10px;
      &::before{
        top: 100%;
        border-top-color: $border-color;
      }
      &::after{
        top: calc(100% - 1px);
        border-top-color: white;
      }
    }
    &.position-bottom{
      margin-top: 10px;
      &::before{
        bottom: 100%;
        border-bottom-color: $border-color;
      }
      &::after{
        bottom: calc(100% - 1px);
        border-bottom-color: white;
      }
    }
    &.position-left{
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after{
        top: 50%;
        transform: translateY(-50%);
      }
      &::before{
        left: 100%;
        border-left-color: $border-color;
      }
      &::after{
        left: calc(100% - 1px);
        border-left-color: white;
      }
    }
    &.position-right{
      margin-left: 10px;
      &::before, &::after{
        top: 50%;
        transform: translateY(-50%);
      }
      &::before{
        border-right-color: $border-color;
        right: 100%;
      }
      &::after{
        right: calc( 100% - 1px);
        border-right-color: white;
      }
    }

  }
</style>
