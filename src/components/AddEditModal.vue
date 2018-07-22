<template lang="html">
<div class="modal-body">
  <div class="modal-close"
       @click="$emit('modalHide'), hideModals()"><i class="fas fa-times"></i></div>

  <form class="modal"
        v-if="isAddContactShow">
    <div class="contacts-image-wrapper">
      <div class="contact-image">
        <img v-if="newContact.image" :src="newContact.image" />
        <img v-else src="../assets/no-avatar.jpg" />
      </div>
      <div class="change-image">
        <div class="image-button" v-if="!newContact.image" >
          <input type="file" @change="uploadImage" id="addUploadImage">
          <label for="addUploadImage">Загрузить фото</label>
        </div>
        <div class="image-button" v-else >
          <button type="button" @click="deleteImage">Удалить фото</button>
        </div>
      </div>
    </div>

    <div class="modal-edit-inputs">
      <div class="modal-input">
        <input type="text" placeholder="Имя"
               v-model="newContact.name">
      </div>
      <div class="modal-input">
        <input type="text" placeholder="Номер телефона"
               v-model="newContact.phoneNumber">
      </div>
      <div class="modal-input">
        <input type="text" placeholder="Рабочий номер"
               v-model="newContact.workNumber">
      </div>
      <div class="modal-input">
        <input type="text" placeholder="Email"
               v-model="newContact.email">
      </div>
      <div class="save-contact-button">
        <input type="submit" value="Добавить контакт"
               @click="$emit('addContact', newContact), hideModals()"
               @click.prevent.self>
      </div>
    </div>
  </form>

  <form class="modal"
        v-else-if="isEditContactShow">
    <div class="contacts-image-wrapper">
      <div class="contact-image">
        <img v-if="editableContact.image" :src="editableContact.image" style="width: 100px" />
        <img v-else src="../assets/no-avatar.jpg" style="width: 100px" />
      </div>
      <div class="change-image">
        <div class="image-button" v-if="!editableContact.image" >
          <input type="file" @change="uploadImage" id="addUploadImage">
          <label for="addUploadImage">Загрузить фото</label>
        </div>
        <div class="image-button" v-else>
          <button @click="deleteImage" type="button">Удалить фото</button>
        </div>
      </div>
    </div>
    <div class="modal-edit-inputs">
      <div class="modal-input">
        <input type="text" placeholder="Имя"
               v-model="editableContact.name">
      </div>
      <div class="modal-input">
        <input type="text" placeholder="Номер телефона"
               v-model="editableContact.phoneNumber">
      </div>
      <div class="modal-input">
        <input type="text" placeholder="Рабочий телефон"
               v-model="editableContact.workNumber">
      </div>
      <div class="modal-input">
        <input type="text" placeholder="Email"
               v-model="editableContact.email">
      </div>
      <div class="save-contact-button">
        <input type="submit" value="Сохранить контакт"
               @click="$emit('editContact', [editableContact, indexOfEdit]), hideModals()"
               @click.prevent.self>
      </div>
    </div>
  </form>
</div>
</template>

<script>
import cloneDeep from "lodash.clonedeep"

export default {
  name: 'AddEditModal',
  data() {
    return {
      nameInput: '',
      phoneInput: '',
      isAddContactShow: false,
      isEditContactShow: false,
      indexOfEdit: '',
      newContact: {
        name: null,
        phoneNumber: null,
        workNumber: null,
        email: null,
        image: '',
        isFavorite: false
      },
      editableContact: {}
    }
  },
  methods: {
    clearInputs() {
      this.newContact = {
        name: null,
        phoneNumber: null,
        workNumber: null,
        email: null,
        image: '',
        isFavorite: false
      }
    },

    addContactShow() {
      this.isAddContactShow = true;
      this.isEditContactShow = false;
    },

    editContactShow(editableContactInfo, index) {
      this.isEditContactShow = true;
      this.isAddContactShow = false;

      this.editableContact = cloneDeep(editableContactInfo);
      this.indexOfEdit = index;
    },

    hideModals() {
      this.isAddContactShow = false;
      this.isEditContactShow = false;

      this.clearInputs();
    },

    uploadImage(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      };
      this.createImage(files[0]);
    },

    createImage(file) {
      let fileReader = new FileReader();
      let self = this;

      fileReader.onload = (e) => {
        if (this.isAddContactShow) {
          this.newContact.image = e.target.result
        } else {
          this.editableContact.image = e.target.result
        }
      };
      fileReader.readAsDataURL(file);
    },

    deleteImage() {
      if (this.isAddContactShow) {
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
    width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(#000, .25);

    .modal {
        display: flex;
    }

    .contacts-image-wrapper {
        flex-shrink: 0;
        width: 140px;
        margin-right: 20px;
        text-align: center;

        .contact-image {
            width: 100px;
            height: 100px;
            margin: 0 auto 10px;
            border-radius: 10px;
            text-align: center;
            overflow: hidden;

            img {
                width: 100%;
            }
        }
    }

    .image-button,
    .save-contact-button {
        input[type=file] {
            position: absolute;
            overflow: hidden;
            opacity: 0;
            z-index: -1;
            width: 0;
            height: 0;
        }

        button,
        input[type=submit],
        label {
            display: inline-block;
            padding: 5px 10px;
            border: 1px solid #ccc;
            cursor: pointer;
            border-radius: 5px;
            background-color: #fff;
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
        }
    }

    .modal-edit-inputs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        margin-top: 20px;
        text-align: right;
    }

    .modal-input {
        width: 100%;
        margin-bottom: 10px;

        &:last-child {
            margin-bottom: 0;
        }

        input {
            width: 100%;
            padding: 5px 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    }

    .modal-close {
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            color: red;
        }
    }
}
</style>
