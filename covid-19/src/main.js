import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("numberWithCommas", (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
