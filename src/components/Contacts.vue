<template>
<div class="contact-container">
  <div class="groups-buttons">
    <button type="button" class="group-button"
            :class="{active : activeGroup == ''}"
            @click="filterContactsByGroup('')">Все контакты</button>
    <button type="button" class="group-button"
            v-for="group in groups"
            :class="{active : activeGroup == group.name}"
            @click="filterContactsByGroup(group.name)">{{ group.name }}</button>
  </div>
  <form class="search">
    <input type="text" placeholder="Начните вводить имя" v-model="filterValue" :change="filteredContacts">
  </form>

  <div class="contacts-list-wrapper">
    <ul class="contacts-list">
      <div v-if="filteredContacts.length">
        <li class="contact" v-for="contact in filteredContacts">
          <div class="contact-wrapper"
               :class="contact.color">
            <div class="contact-image">
              <img v-if="contact.image" :src="contact.image" @click="showBigImage(contact.image)" style="cursor: pointer">
              <img v-else src="data:image/gif;base64,/9j/4QlQaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiLz4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQsJCw0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/90ABAAg/+4ADkFkb2JlAGTAAAAAAf/AABEIAPoA+gMAEQABEQECEQH/xACEAAEAAwEBAQEBAQAAAAAAAAAABQgJBwYEAgEDAQEAAAAAAAAAAAAAAAAAAAAAEAABAwMCAwUFBQIKCwAAAAAAAQIDBAUGBxEIEiETMUFRYRQiMnGBI0JS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" />
            </div>

            <div class="contact-info">
              <div class="contact-info-row" v-show="contact.name">
                <div class="contact-info-left">
                  Имя:
                </div>
                <div class="contact-info-item">
                  {{ contact.name }}
                </div>
              </div>

              <div class="contact-info-row" v-show="contact.phoneNumber">
                <div class="contact-info-left">
                  Личный:
                </div>
                <div class="contact-info-item">
                  <a :href="`tel:${contact.phoneNumber}`">{{ contact.phoneNumber }}</a>
                </div>
              </div>

              <div class="contact-info-row" v-show="contact.workNumber">
                <div class="contact-info-left">
                  Рабочий:
                </div>
                <div class="contact-info-item">
                  <a :href="`tel:${contact.workNumber}`">{{ contact.workNumber }}</a>
                </div>
              </div>

              <div class="contact-info-row" v-show="contact.email">
                <div class="contact-info-left">
                  Email:
                </div>
                <div class="contact-info-item">
                  <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
                </div>
              </div>
            </div>

            <div class="is-favorite-contact" v-show="contact.isFavorite">
              <i class="fas fa-star"></i>
            </div>

            <div class="favorite-button contact-button" @click="isFavoriteChanging(contact)">
              <i :class="[contact.isFavorite ? 'fas' : 'far', 'fa-star']"></i>
            </div>

            <div class="edit-button contact-button" @click="$emit('editContactShow', contact)"><i class="fas fa-pen"></i></div>

            <div class="delete-button contact-button" @click="deleteContact(contact)"><i class="fas fa-trash"></i></div>
          </div>
        </li>
      </div>
      <p v-else class="no-contacts">Контактов нет</p>
    </ul>

    <transition name="fade">
      <div class="mini-modal-overlay" v-show="isDeleteModalShow || isContactSavedShow || isDeleteModalConfirmShow || isShowBigImage">
        <transition name="fade">
        <div class="mini-modal delete-contact" v-show="isDeleteModalShow">
            <p>Удалить контакт "{{ deleteContactConfirmName }}"?</p>
            <button type="button" class="delete-modal-button confirm"
                    @click="deleteContactConfirmModal()">Удалить</button>
            <button type="button" class="delete-modal-button cancel"
                    @click="isDeleteModalShow = false">Отмена</button>
          </div>
        </transition>

        <transition name="fade">
          <div class="mini-modal contact-deleted" v-show="isDeleteModalConfirmShow">
            <i class="far fa-check-circle"></i>
            Контакт "{{ deleteContactConfirmName }}" удалён
          </div>
        </transition>

        <transition name="fade">
          <div class="mini-modal contact-saved" v-show="isContactSavedShow">
            <i class="far fa-check-circle"></i>
            Контакт сохранён
          </div>
        </transition>

        <transition name="fade">
          <div class="mini-modal big-photo" v-show="isShowBigImage">
            <img :src="showBigImageContent" alt="detail image">

            <div class="big-photo-close" @click="closeBigImage()"><i class="fas fa-times"></i></div>
          </div>
        </transition>
      </div>
    </transition>

    <div class="bottom-bar">
      <div class="contacts-count">
        <p v-if="filterValue">Найдено: {{ filteredContacts.length }}</p>
        <p v-else>Всего контактов: {{ contactsList.length }}</p>
      </div>
      <div class="add-contact-button"
           @click="$emit('addContactShow')">
           <i class="fas fa-plus"></i> Добавить контакт</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Contacts',
  data() {
    return {
      contactsList: [],
      filterValue: '',
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
      ],
      activeGroup: '',
      isDeleteModalShow: false,
      deleteContactConfirmIndex: '',
      deleteContactConfirmName: '',
      isDeleteModalConfirmShow: false,
      isContactSavedShow: false,
      isShowBigImage: false,
      showBigImageContent: ''
    }
  },
  mounted() {
    this.getContacts();
  },
  computed: {
    filteredContacts() {
      return this.contactsList.filter(contact => {
        if (this.filterValue && this.activeGroup === '') {
          return contact.name.toUpperCase().includes(this.filterValue.toUpperCase())
        } else if (this.activeGroup !== '') {
          if (this.filterValue) {
            return (contact.name.toUpperCase().includes(this.filterValue.toUpperCase()) && contact.contactGroup == this.activeGroup)
          } else {
            return contact.contactGroup == this.activeGroup
          }
        } else {
          return contact
        }
      })
    }
  },
  methods: {
    showBigImage(image) {
      this.isShowBigImage = true;
      this.showBigImageContent = image
    },

    closeBigImage() {
      this.isShowBigImage = false;
      setTimeout(() => {
        this.showBigImageContent = ''
      }, 300)
    },

    saveContactsList() {
      localStorage.setItem('contacts', JSON.stringify(this.sortContactsList(this.contactsList)));
      this.contactsList = this.sortContactsList(this.contactsList);
    },

    sortContactsList(array) {
      let favoriteConacts = [],
        usualContacts = [];
      let sortedArray = array.slice().sort(function(a, b) {
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1;
        }
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1;
        }
        return 0;
      });

      for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i].isFavorite) {
          favoriteConacts.push(sortedArray[i]);
        } else {
          usualContacts.push(sortedArray[i]);
        }
      };
      sortedArray = favoriteConacts.concat(usualContacts);

      return sortedArray
    },

    filterContactsByGroup(group) {
      this.activeGroup = group;
    },

    addContact(newContactInfo) {
      this.contactsList.push(newContactInfo);
      this.saveContactsList();
      this.contactSavedModal();
    },

    editContact(editableContactInfo, index) {
      this.$set(this.contactsList, index, editableContactInfo);
      this.saveContactsList();
      this.contactSavedModal();
    },

    getContacts() {
      let contactsLocal = JSON.parse(localStorage.getItem('contacts') || '[]');

      for (let i = 0; i < contactsLocal.length; i++) {
        this.contactsList.push(contactsLocal[i]);
      };
    },

    isFavoriteChanging(contact) {
      let i = this.contactsList.indexOf(contact);

      this.contactsList[i].isFavorite = !this.contactsList[i].isFavorite;
      this.saveContactsList();
    },

    deleteContact(contact) {
      this.deleteContactConfirmIndex = this.contactsList.indexOf(contact);
      this.deleteContactConfirmName = this.contactsList[this.deleteContactConfirmIndex].name;
      this.isDeleteModalShow = true;
    },

    deleteContactConfirmModal() {
      this.$delete(this.contactsList, this.deleteContactConfirmIndex);
      this.saveContactsList();
      this.isDeleteModalShow = false;
      this.isDeleteModalConfirmShow = true;
      setTimeout(() => {
        this.isDeleteModalConfirmShow = false;
      }, 1000)
    },

    contactSavedModal() {
      this.isContactSavedShow = true;
      setTimeout(() => {
        this.isContactSavedShow = false;
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.contact-container {
    width: 500px;
}

.groups-buttons {
  display: flex;
  margin-bottom: 20px;
  box-shadow: 0 0 20px rgba(#000, .25);

  .group-button {
    width: 25%;
    padding: 14px 3px;
    background-color: #fff;
    border: none;
    border-right: 1px solid #e0e0e0;
    cursor: pointer;
    font-size: 14px;
    transition: .3s;
    color: #206962;

    &:hover {
      background-color: #ddd;
    }

    &.active {
      background-color: #26a69a;
      color: #eafaf9;
    }

    &:last-child {
      border-right: none;
    }
  }
}

.search {
    width: 100%;
    margin-bottom: 20px;

    input {
        width: 100%;
        padding: 14px;
        border: none;
        outline: none;
        box-shadow: 0 0 20px rgba(#000, .25);
    }
}

.contacts-list-wrapper {
    width: 100%;
    box-shadow: 0 0 20px rgba(#000, .25);
}

.contacts-list {
    width: 100%;
    height: 420px;
    overflow-y: auto;
}

.contact-wrapper {
    position: relative;
    display: flex;
    padding: 10px;

    &.white {
      background-color: white;
    }

    &.red {
      background-color: rgba(#D32F2F, .5);
    }

    &.yellow {
      background-color: rgba(#FFEB3B, .5);
    }

    &.blue {
      background-color: rgba(#0288D1, .5);
    }

    &.gray {
      background-color: rgba(#9E9E9E, .5);
    }

    &:hover {
      .contact-button {
        opacity: 1;
      }
    }

    .contact-image {
        position: relative;
        flex-shrink: 0;
        width: 80px;
        height: 80px;
        margin-right: 10px;
        border-radius: 50%;
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

    .contact-info {
        display: flex;
        flex-direction: column;

        .contact-info-row {
            display: flex;
            margin-bottom: 1px;
        }

        .contact-info-left {
            width: 75px;
        }

        .contact-info-item {
          a {
            margin-left: 3px;
            text-decoration: none;
            color: #3F51B5;
          }
        }
    }

    .is-favorite-contact {
      position: absolute;
      top: 3px;
      left: 7px;

      i {
        color: #FF9800;
      }
    }

    .contact-button {
        position: absolute;
        top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        background-color: #B2DFDB;
        cursor: pointer;
        border-radius: 50%;
        font-size: 10px;
        box-shadow: 0 0 10px rgba(#000, .25);
        transition: 0.3s;
        opacity: 0;

        i {
          &::before {
            line-height: 20px;
          }
        }

        &.favorite-button {
            right: 60px;
        }

        &.edit-button {
            right: 35px;
        }

        &.delete-button {
            right: 10px;
        }

        &:hover {
          background-color: lighten(#B2DFDB, 5);
        }
    }
}

.no-contacts {
    text-align: center;
    margin-top: 10px;
}

.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;

  .add-contact-button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 7px 14px;
      background-color: #388E3C;
      cursor: pointer;
      border: none;
      border-radius: 2px;
      transition: 0.3s;
      text-transform: uppercase;
      color: #fff;

      i {
        margin-right: 10px;

        &::before {
          color: #fff;
        }
      }

      &:hover {
        background-color: lighten(#388E3C, 5);
      }
  }
}

.mini-modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(#fff, .5);
}

.mini-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(#000, 0.25);

    i {
      margin-right: 5px;

      &::before {
        font-size: 20px;
        color: #4CAF50;
      }
    }
}

.delete-contact {
  text-align: center;

  p {
    margin-bottom: 20px;
  }

  .delete-modal-button {
    padding: 7px 14px;
    border-radius: 2px;
    border: none;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    transition: .3s;

    &.confirm {
      margin-right: 10px;
      background-color: #F44336;

      &:hover {
        background-color: lighten(#F44336, 5)
      }
    }

    &.cancel {
      background-color: #9E9E9E;

      &:hover {
        background-color: lighten(#9E9E9E, 5)
      }
    }
  }
}

.contact-saved {
    display: flex;
    align-items: center;
    font-size: 16px;
}

.big-photo {
  max-width: 500px;
  padding: 0;

  img {
    max-width: 500px;
    max-height: 600px;
    margin-right: -1px;
    margin-bottom: -4px;
  }

  .big-photo-close {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #d74444;
    cursor: pointer;
    transition: .3s;

    i {
      margin-right: 0;

      &::before {
        color: #fff;
        font-size: 12px;
        line-height: 20px;
      }
    }

    &:hover {
      background-color: lighten(#d74444, 5);
    }
  }
}
</style>
