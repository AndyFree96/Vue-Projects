<template>
  <div id="app">
    <h1>To-Do List</h1>
    <ul>
      <li v-for="item in TodoItems" :key="item.id">
        <todo-item :label="item.label" :done="item.done" :id="item.id"></todo-item>
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import uniqueId from "lodash.uniqueid";

export default {
  name: "App",
  components: {
    TodoItem,
  },
  data() {
    return {
      TodoItems: [
        { id: uniqueId("todo-"), label: "Reada book", done: false },
        { id: uniqueId("todo-"), label: "Watch TV", done: false },
        { id: uniqueId("todo-"), label: "Play computer games", done: true },
      ],
    };
  },
};
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
