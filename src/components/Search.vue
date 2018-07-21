<template lang="html">
  <form class="search">
    <input type="text" placeholder="Начните вводить имя">
  </form>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss">
  .search {
    width: 100%;
    margin-bottom: 10px;

    input {
      width: 100%;
      padding: 14px;
      border: 1px solid #ccc;
      border-radius: 10px;
      outline: none;
    }
  }
</style>
