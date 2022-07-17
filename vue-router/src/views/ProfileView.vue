<template>
  <div class="home">
    <h1>Profile Info</h1>
    <p>username : {{ this.$route.params.username }}</p>
    <p>id : {{ this.$route.params.id }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
};
</script>

<style scoped></style>
