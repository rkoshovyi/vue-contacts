<template>
  <div class="contact-container">
    <form class="search">
      <input type="text" placeholder="Начните вводить имя"
             v-model="filterValue"
             :change="filteredContacts">
    </form>

    <div class="contacts-list-wrapper">
      <ul class="contacts-list">
        <div v-if="contactsList.length">
          <li class="contact"
              v-for="contact in contactsList"
              v-if="!isFilteredContactsShowing">
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
                  Номер телефона:
                </div>
                <div class="contact-info-item">
                  {{ contact.phoneNumber }}
                </div>
              </div>

              <div class="contact-info-row" v-show="contact.workNumber">
                <div class="contact-info-left">
                  Рабочий номер:
                </div>
                <div class="contact-info-item">
                  {{ contact.workNumber }}
                </div>
              </div>


              <div class="contact-info-row" v-show="contact.email">
                <div class="contact-info-left">
                  Email:
                </div>
                <div class="contact-info-item">
                  {{ contact.email }}
                </div>
              </div>
            </div>

            <div class="favorite-button contact-button" @click="isFavoriteChanging(contact)">
              <i :class="[contact.isFavorite ? 'fas' : 'far', 'fa-star']"></i>
            </div>

            <div class="edit-button contact-button" @click="$emit('editContactShow', contact)"><i class="fas fa-pen"></i></div>

            <div class="delete-button contact-button" @click="deleteContact(contact)"><i class="fas fa-times"></i></div>
          </li>
          
          <li class="contact"
              v-for="contact in filteredContactsList"
              v-if="isFilteredContactsShowing">
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
                  Номер телефона:
                </div>
                <div class="contact-info-item">
                  {{ contact.phoneNumber }}
                </div>
              </div>

              <div class="contact-info-row" v-show="contact.workNumber">
                <div class="contact-info-left">
                  Рабочий номер:
                </div>
                <div class="contact-info-item">
                  {{ contact.workNumber }}
                </div>
              </div>


              <div class="contact-info-row" v-show="contact.email">
                <div class="contact-info-left">
                  Email:
                </div>
                <div class="contact-info-item">
                  {{ contact.email }}
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

      <div class="add-contact-button" @click="$emit('addContactShow')"><i class="fas fa-plus"></i></div>
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
        isContactShowing: true
      },
      contactsList: [],
      filteredContactsList: [],
      filterValue: '',
      isFilteredContactsShowing: false
    }
  },
  mounted() {
    this.getContacts();
  },
  computed: {
    filteredContacts() {
      let filterInput = this.filterValue.toUpperCase(),
          coincidedContacts = [],
          filteredContacts = [];

      if (filterInput) {
        this.contactsList.filter(function(element) {
          coincidedContacts.push(element.name.toUpperCase().indexOf(filterInput) > -1)
        });

        for (let i = 0; i < coincidedContacts.length; i++) {
          if (coincidedContacts[i]) {
            filteredContacts.push(this.contactsList[i]);
          }
        }

        this.isFilteredContactsShowing = true;
        this.filteredContactsList = filteredContacts;
      } else {
        this.isFilteredContactsShowing = false;
      }
    }
  },
  methods: {
    saveContactsList() {
      localStorage.setItem('contacts', JSON.stringify(this.contactsList));
    },

    addContact(newContactInfo) {
      this.contactsList.push(newContactInfo);
      this.saveContactsList();
    },

    editContact(editableContactInfo, index) {
      this.contactsList[index].name = editableContactInfo.name;
      this.contactsList[index].phoneNumber = editableContactInfo.phoneNumber;
      this.contactsList[index].workNumber = editableContactInfo.workNumber;
      this.contactsList[index].email = editableContactInfo.email;
      this.contactsList[index].image = editableContactInfo.image;
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
      this.contactsList.splice(this.contactsList.indexOf(contact), 1);
      this.saveContactsList();
    }
  }
}
</script>

<style lang="scss">
.contact-container {
  width: 100%;
}

.search {
  width: 100%;
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 14px;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;
    box-shadow: 0 0 20px rgba(#000, .25);
  }
}

.contacts-list-wrapper {
    position: relative;
    width: 100%;
}

.contacts-list {
    width: 100%;
    height: 420px;
    padding: 0 10px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(#000, .25);
    overflow: auto;
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
          margin-bottom: 5px;
        }

        .contact-info-left {
          width: 140px;
        }

        .contact-info-item {
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

.add-contact-button {
    position: absolute;
    right: 30px;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
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
</style>
