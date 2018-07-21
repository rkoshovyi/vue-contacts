<template>
<div class="contacts-list-wrapper">
  <ul class="contacts-list">
    <li class="contact"
        v-for="contact in contacts"
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
    </li>
  </ul>

  <div class="add-contact-button" @click="$emit('modal-show')">+</div>
</div>
</template>

<script>
export default {
  name: 'Contacts',
  data() {
    return {
      contacts: [
        {
          name: 'Иван',
          number: '123'
        },
        {
          name: 'Петро',
          number: '456'
        },
        {
          name: 'Дмитро',
          number: '789'
        },
        {
          name: 'ПАНТЕЛЕЙМОН!',
          number: '789'
        }
      ]
    }
  },
  methods: {
    test(contactInfo) {
      this.contacts.push({name: contactInfo[0], number: contactInfo[1]});
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
    max-height: 500px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    overflow: auto;
  }

  .contact {
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
