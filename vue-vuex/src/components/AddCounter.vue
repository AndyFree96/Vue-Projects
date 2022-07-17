<template>
  <div class="add-container">
    <!-- <button @click="addCounter">Add</button> -->
    <el-button
      type="primary"
      icon="el-icon-circle-plus"
      circle
      @click="addCounter"
    ></el-button>
  </div>
</template>

<script>
import * as type from "@/types";

export default {
  methods: {
    addCounter() {
      this.$store.dispatch({
        type: type.Increment,
        amount: 20,
      });
    },
  },
};
</script>
