<template>
  <div>
    <button class="d-button">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#i-${icon}`"></use>
      </svg>
      <slot></slot>
    </button>
  </div>

</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
.d-button{
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--butotn-bg);
  &:hover{
    border-color: var(--border-hover-color);
  }
  &:active{
    background-color: var(--button-active-bg);
  }
  &:focus{
    outline: none;
  }

}

</style>
