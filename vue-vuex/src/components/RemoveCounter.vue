<template>
  <div class="remove-container">
    <!-- <button @click="removeCounter">Remove</button> -->
    <el-button
      type="danger"
      icon="el-icon-remove"
      circle
      @click="removeCounter"
    ></el-button>
  </div>
</template>

<script>
import * as type from "@/types";

export default {
  methods: {
    removeCounter() {
      this.$store.dispatch({
        type: type.Decrement,
        amount: 20,
      });
    },
  },
};
</script>
