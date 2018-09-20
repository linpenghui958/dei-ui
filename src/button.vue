<template>
    <button class="d-button" :class="{[`icon-${position}`] : true}" @click="$emit('click')">
      <d-icon v-if="icon && !loading" :name="icon"></d-icon>
      <d-icon v-if="loading" class="loading" name="loading"></d-icon>
      <div class="content">
        <slot></slot>
      </div>
    </button>

</template>
<script>
import Icon from './icon'
export default {
  name: "DeiButton",
  components: {
    "d-icon": Icon
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'left',
      validator: (value) => {
        return !(value !== 'left' && value !== 'right');
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes spin {
  0% { transform: rotate(0deg)}
  100% { transform: rotate(360deg)}
}
.d-button{
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--butotn-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover{
    border-color: var(--border-hover-color);
  }
  &:active{
    background-color: var(--button-active-bg);
  }
  &:focus{
    outline: none;
  }
  > .content{
    order: 2;
  }
  > .icon{
    order: 1;
    margin-right: .1em;
  }
  &.icon-right {
    > .icon{
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }
    > .content{
      order: 1;
    }
  }

  .loading {
    animation: spin 2s infinite linear;
    transform-origin: center;
  }

}

</style>
