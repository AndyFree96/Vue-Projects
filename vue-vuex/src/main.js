import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(ElementUI);

const store = new Vuex.Store({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state, payload) {
      return (state.count = state.count + payload.amount);
    },
    decrement(state, payload) {
      return (state.count = state.count - payload.amount);
    },
  },
  actions: {
    increment(context, payload) {
      context.commit("increment", payload);
    },
    decrement(context, payload) {
      context.commit("decrement", payload);
    },
  },
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
