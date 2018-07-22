<template>
<div class="contacts-list-wrapper">
  <ul class="contacts-list">
    <div v-if="contactsList.length" >
      <li class="contact"
          v-for="contact in contactsList"
          ref="contacts" >
        <div class="contact-image">
          <img v-if="contact.image" :src="contact.image">
          <img v-else src="../assets/no-avatar.jpg"/>
        </div>

        <div class="contact-info">
          <div class="contact-name">
            {{ contact.name }}
          </div>

          <div class="contact-number">
            {{ contact.number }}
          </div>
        </div>

        <div class="delete-button contact-button"
             @click="deleteContact(contact)"><i class="fas fa-times"></i></div>

        <div class="edit-button contact-button"
             @click="$emit('editContactShow', contact)"><i class="fas fa-pen"></i></div>
      </li>
    </div>
    <p v-else style="text-align: center">Контактов нет</p>
  </ul>

  <div class="add-contact-button" @click="$emit('addContactShow')"><i class="fas fa-plus"></i></div>
</div>
</template>

<script>
export default {
  name: 'Contacts',
  data() {
    return {
      contact: {
        name: null,
        number: null,
        image: ''
      },
      contactsList: []
    }
  },
  mounted() {
    this.getContacts();
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
      this.contactsList[index].number = editableContactInfo.number;
      this.contactsList[index].image = editableContactInfo.image;
      this.saveContactsList();
    },

    getContacts() {
      let contactsLocal = JSON.parse(localStorage.getItem('contacts') || '[]');

      for (let i = 0; i < contactsLocal.length; i++) {
        this.contactsList.push(contactsLocal[i]);
      }
    },

    deleteContact(contact) {
      this.contactsList.splice(this.contactsList.indexOf(contact), 1);
      this.saveContactsList();
    }
  }
}
</script>

<style lang="scss">

  .contacts-list-wrapper {
    position: relative;
    width: 100%;
  }

  .contacts-list {
    width: 100%;
    height: 420px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(#000, .25);
    overflow: auto;
  }

  .contact {
    position: relative;
    display: flex;
    margin-bottom: 10px;
    cursor: pointer;

    &:last-child {
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
      }
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .contact-name {
        margin-bottom: 10px;
      }
    }

    .contact-button {
      position: absolute;
      top: 5px;
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
      transition: .3s;

      &:hover {
        transform: scale(1.1);
      }
    }

    .delete-button {
      right: 5px;
    }

    .edit-button {
      right: 30px;
    }
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
    transition: .3s;

    &:hover {
      transform: scale(1.05);
    }
  }
</style>
