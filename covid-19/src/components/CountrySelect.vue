<template>
  <div class="country-select-container">
    <select @change="handleChange" v-model="selected">
      <option value="0">Select Country</option>
      <option
        v-for="country of countries"
        :value="country.ID"
        :key="country.ID"
      >
        {{ country.Country }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CountrySelect",
  props: ["countries"],
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    handleChange() {
      const country = this.countries.find((item) => item.ID === this.selected);
      this.$emit("get-country", country);
    },
  },
};
</script>

<style scoped></style>
