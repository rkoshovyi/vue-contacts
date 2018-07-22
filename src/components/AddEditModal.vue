<template lang="html">
<div class="modal-body">
  <div class="modal-close"
       @click="$emit('modal-hide'), hideModals()">+</div>

  <form v-if="addContactShowBool">
    <div class="contact-image">
      <img v-if="newContact.image" :src="newContact.image" style="width: 100px" />
      <img v-else src="../assets/no-avatar.jpg" style="width: 100px" />
    </div>
    <div class="change-image">
      <input v-if="!newContact.image" type="file" @change="uploadImage">
      <button v-else @click="deleteImage" type="button">Удалить изображение</button>
    </div>
    <div class="modal-edit-inputs">
      <div class="modal-input">
        <input type="text"
               v-model="newContact.name">
      </div>
      <div class="modal-input">
        <input type="text"
               v-model="newContact.number">
      </div>
      <div class="modal-input">
        <input type="submit"
               @click="$emit('add-contact', newContact), hideModals()"
               @click.prevent.self>
      </div>
    </div>
  </form>

  <form v-else-if="editContactShowBool">
    <div class="contact-image">
      <img v-if="editableContact.image" :src="editableContact.image" style="width: 100px" />
      <img v-else src="../assets/no-avatar.jpg" style="width: 100px" />
    </div>
    <!-- <div class="change-image">
      <input v-if="!editableContact.image" type="file" @change="uploadImage">
      <button v-else @click="deleteImage" type="button">Удалить изображение</button>
    </div> -->
    <div class="modal-edit-inputs">
      <div class="modal-input">
        <input type="text"
               v-model="editableContact.name">
      </div>
      <div class="modal-input">
        <input type="text"
               v-model="editableContact.number">
      </div>
      <div class="modal-input">
        <input type="submit"
               @click="$emit('edit-contact', [editableContact, indexOfEdit]), hideModals()"
               @click.prevent.self>
      </div>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'AddEditModal',
  data() {
    return {
      nameInput: '',
      phoneInput: '',
      addContactShowBool: false,
      editContactShowBool: false,
      indexOfEdit: '',
      newContact: {
        name: null,
        number: null,
        image: ''
      },
      editableContact: {}
    }
  },
  methods: {
    clearInputs() {
      // this.editableContact.name = null;
      // this.editableContact.number = null;
      // this.editableContact.image = '';
      // this.newContact.name = null;
      // this.newContact.number = null;
      // this.newContact.image = '';
    },

    addContactShow() {
      this.addContactShowBool = true;
      this.editContactShowBool = false;
    },

    editContactShow(editableContactInfo, index) {
      this.editContactShowBool = true;
      this.addContactShowBool = false;

      for (let i in editableContactInfo) {
        this.editableContact[i] = editableContactInfo[i];
      }

      this.indexOfEdit = index;
    },

    hideModals() {
      this.addContactShowBool = false;
      this.editContactShowBool = false;

      this.clearInputs();
    },

    uploadImage(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      };
      this.createImage(files[0]);
    },

    createImage(file) {
      var fileReader = new FileReader();
      var self = this;

      fileReader.onload = (e) => {
        this.newContact.image = e.target.result
      };
      fileReader.readAsDataURL(file);
    },

    deleteImage() {
      if (this.addContactShowBool) {
        this.newContact.image = ''
      } else {
        this.editableContact.image = ''
      }
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
