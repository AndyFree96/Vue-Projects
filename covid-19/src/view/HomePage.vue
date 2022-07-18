<template>
  <div class="home-container">
    <main v-if="isLoading">
      <img :src="loadingImage" />
    </main>
    <main v-else>
      <data-title :text="title" :dataDate="dataDate" />
      <country-select @get-country="handleGetCountry" :countries="countries" />
      <data-box :stats="stats" />
    </main>
  </div>
</template>

<script>
import CountrySelect from "@/components/CountrySelect.vue";
import DataTitle from "@/components/DataTitle.vue";
import DataBox from "@/components/DataBox.vue";

export default {
  name: "HomePage",
  components: {
    CountrySelect,
    DataTitle,
    DataBox,
  },
  data() {
    return {
      isLoading: true,
      dataDate: "",
      countries: [],
      stats: {},
      title: "Global",
      loadingImage: require("@/assets/loading.gif"),
    };
  },

  methods: {
    async fetchCovidData() {
      const response = await fetch("https://api.covid19api.com/summary");
      const data = await response.json();
      return data;
    },

    handleGetCountry(country) {
      this.title = country.Country;
      this.stats = country;
    },
  },

  mounted() {
    console.log("loadingImage : ", this.loadingImage);
  },

  async created() {
    const data = await this.fetchCovidData();
    console.log("covid data : ", data);
    this.dataDate = data.Date;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.isLoading = false;
  },
};
</script>

<style scoped></style>
