<template>
  <div id="app">
    <div class="contacts-wrapper" >
      <controls />

      <search />

      <contacts
        ref="contacts"
        @modal-show="modalShow = true" />

      <edit-modal
        v-show="modalShow"
        @modal-close="modalShow = false"
        @add-contact="addContact" />
    </div>
  </div>
</template>

<script>
import Contacts from './components/Contacts'
import Search from './components/Search'
import Controls from './components/Controls'
import EditModal from './components/EditModal'

export default {
  name: 'App',
  components: {
    Contacts,
    Search,
    Controls,
    EditModal
  },
  data() {
    return {
      modalShow: false
    }
  },
   methods: {
     addContact(contactInfo) {
       this.$refs.contacts.test(contactInfo);
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
