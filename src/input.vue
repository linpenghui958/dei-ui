<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
      @change="$emit('change', $event)"
       @blur="$emit('blur', $event)"
       @input="$emit('input', $event)"
       @focus="$emit('focus', $event)"
    >
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMsg">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './icon'
  export default {
    name: 'DeiInput',
    components: {
      Icon
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*:root{*/
    /*--button-height: 32px;*/
    /*--font-size: 14px;*/
    /*--butotn-bg: white;*/
    /*--button-active-bg: #eee;*/
    /*--border-radius: 4px;*/
    /*--color: #333;*/
    /*--border-color: #999;*/
    /*--border-hover-color: #666;*/

  /*}*/
  $height: 32px;
  $border-radius: 4px;
  $border-color: #999;
  $border-color-hover: #666;
  $font-size: 12px;
  $box-shadow-color: rgba(0,0,0,0.5);
  $red: #f1435d;
.wrapper{
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: .5em;
  }
  > input{
    font-size: inherit;
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    &:hover{
      border-color: $border-color-hover;
    }
    &:focus{
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled]{
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
    &[readonly]{
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }

  }

  &.error{
    > input {
      border-color: $red;
    }
  }
  .icon-error{
    fill: $red;
  }
  .errorMsg{
    color: $red;
  }
}
</style>