<template>
  <div class="data-title-container">
    <h3>{{ text }}</h3>
    <div>
      {{ formatDataDate }}
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "DataTitle",
  props: ["text", "dataDate"],
  computed: {
    formatDataDate() {
      return moment(this.dataDate).format("Do MMMM YYYY , h:mm:ss a");
    },
  },
};
</script>

<style scoped></style>
