<template lang="html">
  <div class="groups-buttons">
    <button class="group-button" v-for="group in groups">
      {{ group.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Controls',
  data() {
    return {
      groups: [
        {
          name: 'Семья'
        },
        {
          name: 'Друзья'
        },
        {
          name: 'Сотрудники'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .groups-buttons {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
  }

  .group-button {
    width: 33.33%;
    background-color: #fff;
    border: none;
    padding: 15px;
    cursor: pointer;
  }
</style>
