<template>
  <div id="app">
    <div class="contacts-wrapper" >
      <!-- <controls />-->

      <contacts
        ref="contacts"
        @addContactShow="showAddModal"
        @editContactShow="showEditModal" />

      <add-edit-modal
        ref="modal"
        v-show="showModal"
        @modalHide="modalHide"
        @addContact="addContact"
        @editContact="editContact" />
    </div>
  </div>
</template>

<script>
import Contacts from './components/Contacts'
import Controls from './components/Controls'
import AddEditModal from './components/AddEditModal'

export default {
  name: 'App',
  components: {
    Contacts,
    Controls,
    AddEditModal
  },
  data() {
    return {
      showModal: false
    }
  },
   methods: {
     showAddModal() {
        this.$refs.modal.addContactShow();
        this.showModal = true;
     },

     showEditModal(contactInfo) {
        this.$refs.modal.editContactShow(contactInfo, this.$refs.contacts.contactsList.indexOf(contactInfo));
        this.showModal = true;
     },

     addContact(newContactInfo) {
       this.$refs.contacts.addContact(newContactInfo);
       this.$refs.modal.clearInputs();
       this.modalHide();
     },

     editContact(editableContactInfo) {
       this.$refs.contacts.editContact(editableContactInfo[0], editableContactInfo[1]);
       this.modalHide();
     },

      modalHide() {
        this.showModal = false;
      }
   }
}
</script>

<style lang="scss">

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }

  ul {
    list-style: none;
  }

  .contacts-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    height: 100vh;
    margin: 0 auto;
  }
</style>
