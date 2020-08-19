<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style>
.btn {
  appearance: none;
  border: none;
  outline: none;
  padding: 4px 12px;
  font-size: 12px;
  border-radius: 4px;
  margin-left: 10px;
  background-color: royalblue;
  border: 1px solid #333;
}
</style>