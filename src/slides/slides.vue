<template>
  <div class="g-slides" @mouseenter="onMouseEnter"
                        @mouseleave="onMouseLeave"
                        @touchstart="onTouchStart"
                        @touchend="onTouchEnd">
    <div class="g-slides-window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span v-for="(index, key) in childLength" 
            :key="key" 
            :class="{active: selectedIndex === index -1}"
            @click="select(index - 1)">
        {{index}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'd-slides',
  props: {
    selected: String,
    auto: {
      type: Boolean,
      default: true
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      childLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined,
      touchStart: undefined
    }
  },
  mounted() {
    this.updateChildren()
    this.auto && this.autoPlay()
    this.childLength = this.$children.length
  },
  updated() {
    this.updateChildren()
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.getSelected()) || 0
    },
    names() {
      return this.$children.map(vm => vm.name)
    }
  },
  methods: {
    onTouchStart(e) {
      this.touchStart = e.touches[0]
      this.pause()
    },  
    onTouchEnd(e) {
      const {clientX: x1, clientY: y1} = this.touchStart
      const {clientX: x2, clientY: y2} = e.changedTouches[0]
      const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
      const dealtY = Math.abs(y2 - y1)
      const rotate = distance / dealtY
      if (rotate > 2) {
        if (x2 > x1) {
          console.log('向左')
          this.select(this.selectedIndex - 1)
        } else {
          console.log('向右')
          this.select(this.selectedIndex + 1)
        }
      }
      this.$nextTick(() => {
        this.autoPlay()
      })
    },
    onMouseEnter() {
      this.pause()
    },
    onMouseLeave() {
      this.autoPlay()
    },
    pause() {
      window.clearTimeout(this.timerId)
      this.timerId = undefined
    },
    select(index) {
      this.lastSelectedIndex = this.selectedIndex
      this.$emit('update:selected', this.names[index])
    },
    autoPlay() {
      if (this.timerId) return;
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        if (newIndex === -1) index = this.names.length - 1;
        if (newIndex === this.names.length) newIndex = 0;
        this.select(newIndex) 
        this.timerId = setTimeout(run, 3000)
      }
      this.timerId = setTimeout(run, 3000)
    },
    getSelected() {
      let firstName = this.$children[0].name
      return this.selected || firstName
    },
    updateChildren() {
      let selected = this.getSelected()
      this.$children.forEach(vm => {
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        if (this.timerId) {
          if (this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0) {
            reverse = false
          }
          if (this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
            reverse = true
          }
        }
        vm.reverse = reverse
        this.$nextTick(() => {
          vm.selected = selected
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
 .g-slides {
    &-window {overflow: hidden;}
    &-wrapper {
      position: relative;
    }
    &-dots {
      padding: 8px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      > span {
        width: 20px;
        height: 20px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: #ddd;
        border-radius: 50%;
        margin: 0 8px;
        font-size: 12px;
        &:hover {
          cursor: pointer;
        }
        &.active {
          background: black;
          color: white;
          &:hover {
            cursor: default;
          }
        }
      }
    }
  }
</style>
