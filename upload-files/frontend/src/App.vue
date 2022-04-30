<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <single-file></single-file>
  </div>
</template>

<script>
import SingleFile from './components/SingleFile.vue'
export default {
  name: 'App',
  components: {
    SingleFile,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
