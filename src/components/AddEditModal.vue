<template lang="html">
<transition name="fade">
  <div class="add-edit-modal-overlay">
    <div class="modal-body">
      <div class="modal-close"
           @click="$emit('modalHide'), hideModals()"><i class="fas fa-times"></i></div>

      <form class="modal-form"
            v-if="isAddContactShow">
        <p class="modal-title">Добавить контакт</p>
        <div class="modal-content">
          <div class="contacts-image-wrapper">
            <div class="contact-image">
              <img v-if="newContact.image" :src="newContact.image" />
              <img v-else src="data:image/gif;base64,/9j/4QlQaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiLz4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQsJCw0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/90ABAAg/+4ADkFkb2JlAGTAAAAAAf/AABEIAPoA+gMAEQABEQECEQH/xACEAAEAAgMBAQEBAAAAAAAAAAAABAkGBwgFAgEDAQEAAAAAAAAAAAAAAAAAAAAAEAABAwMCAwUFBQIKCwAAAAAAAQIDBAUGBxEIEiETMUFRYRQiMnGBI0JS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" />
            </div>
            <div class="change-image">
              <div class="image-button" v-if="!newContact.image" >
                <input type="file" @change="uploadImage" id="addUploadImage">
                <label for="addUploadImage">Загрузить фото</label>
              </div>
              <div class="image-button" v-else >
                <input type="file" @change="uploadImage" id="changeUploadImage">
                <label for="changeUploadImage">Изменить фото</label>
                <button type="button" @click="deleteImage">Удалить фото</button>
              </div>
            </div>
          </div>

          <div class="modal-inputs">
            <div class="modal-input">
              <input type="text" placeholder="Имя" name="name"
                     v-model="newContact.name">
            </div>
            <div class="modal-input">
              <input type="number" placeholder="Личный номер" name="phone"
                     v-model="newContact.phoneNumber">
            </div>
            <div class="modal-input">
              <input type="number" placeholder="Рабочий номер" name="workPhone"
                     v-model="newContact.workNumber">
            </div>
            <div class="modal-input">
              <input type="text" placeholder="Email" name="email"
                     v-model="newContact.email">
            </div>
            <div class="modal-input">
              <select class="modal-select"
                      v-model="newContact.contactGroup">
                <option v-for="group in groups"
                        :value="group.name">{{ group.name }}</option>
              </select>
            </div>
            <div class="modal-inputs-bottom">
              <ul class="modal-contact-colors">
                <li class="modal-contact-color"
                    v-for="color in colors"
                    :class="[color.colorName, {active : newContact.color == color.colorName}]"
                    @click="newContact.color = color.colorName"></li>
              </ul>
              <div class="save-contact-button">
                <input type="submit" value="Сохранить"
                       @click="$emit('addContact', newContact), hideModals()"
                       @click.prevent.self
                       :disabled="required">
              </div>
          </div>
          </div>
        </div>
      </form>

      <form class="modal-form"
            v-else-if="isEditContactShow">
        <p class="modal-title">Изменить контакт</p>
        <div class="modal-content">
          <div class="contacts-image-wrapper">
            <div class="contact-image">
              <img v-if="editableContact.image" :src="editableContact.image">
              <img v-else src="data:image/gif;base64,/9j/4QlQaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiLz4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQsJCw0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/90ABAAg/+4ADkFkb2JlAGTAAAAAAf/AABEIAPoA+gMAEQABEQECEQH/xACEAAEAAgMBAQEBAAAAAAAAAAAABAkGBwgFAgEDAQEAAAAAAAAAAAAAAAAAAAAAEAABAwMCAwUFBQIKCwAAAAAAAQIDBAUGBxEIEiETMUFRYRQiMnGBI0JS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" />
            </div>
            <div class="change-image">
              <div class="image-button" v-if="!editableContact.image" >
                <input type="file" @change="uploadImage" id="addUploadImage">
                <label for="addUploadImage">Загрузить фото</label>
              </div>
              <div class="image-button" v-else >
                <input type="file" @change="uploadImage" id="changeUploadImage">
                <label for="changeUploadImage">Изменить фото</label>
                <button type="button" @click="deleteImage">Удалить фото</button>
              </div>
            </div>
          </div>
          <div class="modal-inputs">
            <div class="modal-input">
              <input type="text" placeholder="Имя" name="name"
                     v-model="editableContact.name">
            </div>
            <div class="modal-input">
              <input type="number" placeholder="Личный номер" name="phone"
                     v-model="editableContact.phoneNumber">
            </div>
            <div class="modal-input">
              <input type="number" placeholder="Рабочий номер" name="workPhone"
                     v-model="editableContact.workNumber">
            </div>
            <div class="modal-input">
              <input type="text" placeholder="Email" name="email"
                     v-model="editableContact.email">
            </div>
            <div class="modal-input">
              <select class="modal-select"
                      v-model="editableContact.contactGroup">
                <option v-for="group in groups"
                        :value="group.name">{{ group.name }}</option>
              </select>
            </div>
            <div class="modal-inputs-bottom">
              <ul class="modal-contact-colors">
                <li class="modal-contact-color"
                    v-for="color in colors"
                    :class="[color.colorName, {active : editableContact.color == color.colorName}]"
                    @click="editableContact.color = color.colorName"></li>
              </ul>
              <div class="save-contact-button">
                <input type="submit" value="Сохранить"
                       @click="$emit('editContact', [editableContact, indexOfEdit]), hideModals()"
                       @click.prevent.self
                       :disabled="required">
              </div>
          </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</transition>
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
        isFavorite: false,
        contactGroup: 'Без группы',
        color: 'white'
      },
      editableContact: {},
      disabled: true,
      groups: [
        {
          name: 'Без группы'
        },
        {
          name: 'Семья'
        },
        {
          name: 'Друзья'
        },
        {
          name: 'Сотрудники'
        }
      ],
      colors: [
        {
          colorName: 'white'
        },
        {
          colorName: 'red'
        },
        {
          colorName: 'yellow'
        },
        {
          colorName: 'blue'
        },
        {
          colorName: 'gray'
        }
      ]
    }
  },
  computed: {
    required() {
      if (this.isAddContactShow) {
        if (this.newContact.name && (this.newContact.phoneNumber || this.newContact.workNumber || this.newContact.email)) {
          return false
        } else {
          return true
        }
      } else {
        if (this.editableContact.name && (this.editableContact.phoneNumber || this.editableContact.workNumber || this.editableContact.email)) {
          return false
        } else {
          return true
        }
      }
    }
  },
  methods: {
    clearInputs() {
      setTimeout(() => {
        this.newContact = {
          name: null,
          phoneNumber: null,
          workNumber: null,
          email: null,
          image: '',
          isFavorite: false,
          contactGroup: 'Без группы',
          color: 'white'
        }
      }, 300)
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
      setTimeout(() => {
        this.isAddContactShow = false;
        this.isEditContactShow = false;
        this.clearInputs();
      }, 300)
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
.add-edit-modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(#fff, .5);
}

.modal-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    max-width: 100%;
    border: 1px solid #ccc;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(#000, .25);

    .modal-title {
      width: 100%;
      text-align: center;
      font-size: 18px;
      padding: 20px;
      background-color: #e0f2f1;

      @media (max-width: 500px) {
        padding: 10px;
      }
    }

    .modal-content {
      display: flex;
      padding: 20px;

      @media (max-width: 500px) {
        flex-direction: column;
        padding: 10px;
      }
    }

    .contacts-image-wrapper {
        flex-shrink: 0;
        width: 150px;
        margin-right: 15px;
        text-align: center;

        @media (max-width: 500px) {
          margin: 0 auto;
        }

        .contact-image {
            position: relative;
            width: 119px;
            height: 119px;
            margin: 0 auto 10px;
            border-radius: 50%;
            text-align: center;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(#000, .25);

            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              max-width: 100%;
              max-height: 100%;
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
            padding: 7px 14px;
            cursor: pointer;
            border-radius: 2px;
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            color: #fff;
            text-transform: uppercase;
            transition: .3s;

            @media (max-width: 500px) {
              padding: 5px 10px;
            }
        }
    }

    .image-button {

      @media (max-width: 500px) {
        margin-bottom: 20px;
      }

      label,
      button {
        width: 100%;
      }

      label {
        margin-bottom: 10px;
        background-color: #388E3C;

        &:hover {
          background-color: lighten(#388E3C, 5);
        }
      }

      button {
        background-color: #D32F2F;
        border: none;

        &:hover {
          background-color: lighten(#D32F2F, 5);
        }
      }
    }

    .save-contact-button {
      input[type=submit] {
        background-color: #388E3C;
        border: none;

        &:hover {
          background-color: lighten(#388E3C, 5);
        }

        &:disabled {
          background-color: lighten(#388E3C, 20);
          color: #e6e6e6;
          cursor: default;
        }
      }
    }

    .modal-inputs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        text-align: right;
    }

    .modal-input {
        width: 100%;
        margin-bottom: 10px;

        &:last-child {
            margin-bottom: 0;
        }

        input,
        select {
            width: 100%;
            padding: 8px 10px;
            border: 1px solid #ccc;
            border-radius: 2px;
            margin: 0;

            &::-webkit-inner-spin-button {
              -webkit-appearance: none;
            }

            @media (max-width: 500px) {
              padding: 6px;
            }
        }

        input {
          &::placeholder {
            color: #ccc;
          }
        }

        select {
          padding: 7px;
          cursor: pointer;

          @media (max-width: 500px) {
            padding: 5px 3px;
          }
        }
    }

    .modal-inputs-bottom {
      display: flex;
      justify-content: space-between;

      @media (max-width: 500px) {
        flex-direction: column;
      }
    }

    .modal-contact-colors {
      display: flex;
      align-items: center;

      @media (max-width: 500px) {
        justify-content: flex-end;
        margin-bottom: 10px;
      }
    }

    .modal-contact-color {
      width: 25px;
      height: 25px;
      margin-right: 10px;
      border-radius: 50%;
      transition: .3s;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(#000, .3);

      &:last-child {
        margin-right: 0;
      }

      &.white {
        background-color: white;
      }

      &.red {
        background-color: #D32F2F;
      }

      &.yellow {
        background-color: #FFEB3B;
      }

      &.blue {
        background-color: #0288D1;
      }

      &.gray {
        background-color: #9E9E9E;
      }

      &.active {
        box-shadow: 0 0 10px rgba(#000, 1);
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
        border-radius: 50%;
        background-color: #D32F2F;
        cursor: pointer;
        transition: 0.3s;
        font-size: 12px;

        i {
          &::before {
            color: #fff;
          }
        }

        &:hover {
          background-color: rgba(#D32F2F, 5);
        }
    }
}
</style>
