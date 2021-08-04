<template>
  <div id="app">
    <h1>To-Do List</h1>
    <ul>
      <li><todo-item label="My ToDo item" :done="false"></todo-item></li>
    </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'App',
  components: {
    TodoItem
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
