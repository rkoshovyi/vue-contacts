<template>
<div class="contacts-list-wrapper">
  <ul class="contacts-list">
    <li class="contact"
        v-for="contact in contactsList"
        ref="contacts" >
      <div class="contact-image">
        <img src="../assets/no-avatar.jpg"/>
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
           @click="deleteContact(contact)">+</div>

      <div class="edit-button contact-button"
           @click="$emit('edit-contact-show', [contact, contactsList.indexOf(contact)])">edit</div>
    </li>
  </ul>

  <div class="add-contact-button" @click="$emit('add-contact-show')">+</div>
</div>
</template>

<script>
export default {
  name: 'Contacts',
  data() {
    return {
      contact: {
        name: '',
        number: ''
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

    addContact(contactInfoObject) {
      this.contactsList.push(contactInfoObject);
      this.saveContactsList();
    },

    editContact(newContactInfoObject, index) {
      this.contactsList[index].name = newContactInfoObject.name;
      this.contactsList[index].number = newContactInfoObject.number;
    },

    getContacts() {
      var contactsLocal = JSON.parse(localStorage.getItem('contacts') || '[]');

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
    border: 1px solid #ccc;
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
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      cursor: pointer;
      border: 1px solid #ccc;
    }

    .delete-button {
      top: 5px;
      right: 5px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      font-size: 20px;
      font-weight: 700;
      transform: rotate(45deg);
    }

    .edit-button {
      right: 5px;
      bottom: 5px;
      padding: 0 5px;
      border-radius: 5px;
    }
  }

  .add-contact-button {
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #fff;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 50%;
    font-size: 30px;
    font-weight: 700;
  }
</style>
