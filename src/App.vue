<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ContactsBody/>
  </div>
</template>

<script>
import ContactsBody from './components/ContactsBody'

export default {
  name: 'App',
  components: {
    ContactsBody
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
