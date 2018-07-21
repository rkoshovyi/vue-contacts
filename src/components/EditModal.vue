<template lang="html">
<div class="modal-body">
  <div class="modal-close"
       @click="$emit('modal-close')">+</div>

  <form>
    <div class="contact-image">
      <img src="../assets/no-avatar.jpg"/>
    </div>
    <div class="modal-edit-inputs">
      <div class="modal-input">
        <input type="text"
               v-model="nameInput">
      </div>
      <div class="modal-input">
        <input type="text"
               v-model="phoneInput">
      </div>
      <div class="modal-input">
        <input type="submit"
               @click="$emit('add-contact', [nameInput, phoneInput]), $emit('modal-close')"
               @click.prevent.self>
      </div>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'EditModal',
  data() {
    return {
      nameInput: '',
      phoneInput: ''
    }
  },
  methods: {
    logDatas() {
      console.log(this.nameInput);
      console.log(this.phoneInput)
    }
  }
}
</script>

<style lang="scss">
  .modal-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(#000, .5);

    .modal-edit-inputs {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .modal-input {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .modal-close {
      position: absolute;
      top: 15px;
      right: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      background-color: #fff;
      cursor: pointer;
      border: 1px solid #ccc;
      border-radius: 50%;
      font-size: 20px;
      font-weight: 700;
      transform: rotate(45deg);
    }
  }
</style>
