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
      <div v-if="contactsList.length">
        <li class="contact" v-for="contact in filteredContacts">
          <div class="contact-image">
            <img v-if="contact.image" :src="contact.image">
            <img v-else src="../assets/no-avatar.jpg" />
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
                <a :href="`tel:{{ contact.phoneNumber }}`">{{ contact.phoneNumber }}</a>
              </div>
            </div>

            <div class="contact-info-row" v-show="contact.workNumber">
              <div class="contact-info-left">
                Рабочий:
              </div>
              <div class="contact-info-item">
                <a :href="`tel:{{ contact.workNumber }}`">{{ contact.workNumber }}</a>
              </div>
            </div>

            <div class="contact-info-row" v-show="contact.email">
              <div class="contact-info-left">
                Email:
              </div>
              <div class="contact-info-item">
                <a :href="`mailto:{{ contact.email }}`">{{ contact.email }}</a>
              </div>
            </div>
          </div>

          <div class="favorite-button contact-button" @click="isFavoriteChanging(contact)">
            <i :class="[contact.isFavorite ? 'fas' : 'far', 'fa-star']"></i>
          </div>

          <div class="edit-button contact-button" @click="$emit('editContactShow', contact)"><i class="fas fa-pen"></i></div>

          <div class="delete-button contact-button" @click="deleteContact(contact)"><i class="fas fa-times"></i></div>
        </li>
      </div>
      <p v-else class="no-contacts">Контактов нет</p>
    </ul>

    <div class="bottom-bar">
      <div class="contacts-count">
        <p v-if="filterValue">Найдено: {{ filteredContacts.length }}</p>
        <p v-else>Всего контактов: {{ contactsList.length }}</p>
      </div>
      <div class="add-contact-button" @click="$emit('addContactShow')"><i class="fas fa-plus"></i></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Contacts',
  data() {
    return {
      contact: {
        name: null,
        phoneNumber: null,
        workNumber: null,
        email: null,
        image: '',
        isFavorite: false,
        contactGroup: ''
      },
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
      activeGroup: ''
    }
  },
  mounted() {
    this.getContacts();
  },
  computed: {

    filteredContacts() {
      return this.contactsList.filter(contact => {
        if (this.filterValue) {
          return contact.name.toUpperCase().includes(this.filterValue.toUpperCase())
        } else if (this.activeGroup !== '') {
          return contact.contactGroup == this.activeGroup
        } else {
          return contact
        }
      })
    }
  },
  methods: {
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
    },

    editContact(editableContactInfo, index) {
      this.$set(this.contactsList, index, editableContactInfo);
      this.saveContactsList();
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
      this.$delete(this.contactsList, this.contactsList.indexOf(contact));
      this.saveContactsList();
    }
  }
}
</script>

<style lang="scss">
.contact-container {
    width: 100%;
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
    border-right: 1px solid #ccc;
    cursor: pointer;

    &.active {
      background-color: #ececec;
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
    position: relative;
    width: 100%;
    box-shadow: 0 0 20px rgba(#000, .25);
}

.contacts-list {
    width: 100%;
    height: 420px;
    padding: 0 10px;
    overflow-y: auto;
}

.contact {
    position: relative;
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;

    &:last-child {
        border: none;
        margin-bottom: 0;
    }

    .contact-image {
        flex-shrink: 0;
        width: 80px;
        height: 80px;
        margin-right: 20px;
        border-radius: 10px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
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
          }
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
        background-color: #fff;
        cursor: pointer;
        border: 1px solid #ccc;
        border-radius: 50%;
        font-size: 10px;
        transition: 0.3s;

        &.favorite-button {
            right: 55px;
        }

        &.edit-button {
            right: 30px;
        }

        &.delete-button {
            right: 5px;
        }

        &:hover {
            transform: scale(1.1);
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
  height: 50px;
  padding: 10px;
  border-top: 1px solid #ccc;

  .add-contact-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background-color: #fff;
      cursor: pointer;
      border: 1px solid #ccc;
      border-radius: 50%;
      font-weight: 700;
      box-shadow: 0 0 10px rgba(#000, .25);
      transition: 0.3s;

      &:hover {
          transform: scale(1.05);
      }
  }
}
</style>
