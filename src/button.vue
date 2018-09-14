<template>
  <button class="d-button">按钮</button>
</template>
<script>
export default class button {
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
