<template>
  <div id="app">
    <div class="contacts-wrapper" >
      <controls />

      <search />

      <contacts
        ref="contacts"
        @add-contact-show="showAddModal"
        @edit-contact-show="showEditModal" />

      <modal
        ref="modal"
        v-show="showModal"
        @modal-hide="modalHide"
        @add-contact="addContact"
        @edit-contact="editContact" />
    </div>
  </div>
</template>

<script>
import Contacts from './components/Contacts'
import Search from './components/Search'
import Controls from './components/Controls'
import Modal from './components/Modal'

export default {
  name: 'App',
  components: {
    Contacts,
    Search,
    Controls,
    Modal
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
       var contactInfoObject =  {
         name: contactInfo[0].name,
         number: contactInfo[0].number
       }

        this.$refs.modal.editContactShow(contactInfoObject, contactInfo[1]);
        this.showModal = true;
     },

     addContact(contactInfo) {
       var contactInfoObject = {
         name: contactInfo[0],
         number: contactInfo[1]
       }
       this.$refs.contacts.addContact(contactInfoObject);
     },

     editContact(newContactInfo) {

       var index = newContactInfo[2];
       var newContactInfoObject = {
         name: newContactInfo[0],
         number: newContactInfo[1]
       }

       this.$refs.contacts.editContact(newContactInfoObject, index);
     },

      modalHide() {
        this.showModal = false;
        this.$refs.modal.hideModals();
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
