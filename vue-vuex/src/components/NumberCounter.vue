<template>
  <div class="counter-container">
    <p class="info">Counter : {{ count }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    count: (state) => state.count,
  }),
};
</script>

<style scoped>
.info {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
