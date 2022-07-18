<template>
  <div class="data-box-container">
    <div class="confirm">
      <h4>Confirm</h4>
      New: <span>{{ stats.NewConfirmed }}</span> Total:
      <span>{{ stats.TotalConfirmed }}</span>
    </div>
    <div class="death">
      <h4>Death</h4>
      New: <span>{{ stats.NewDeaths }}</span> Total:
      <span>{{ stats.TotalDeaths }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stats"],
};
</script>

<style scoped></style>
