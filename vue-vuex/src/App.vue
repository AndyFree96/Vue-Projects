<template>
  <div id="app">
    <el-card class="box-card">
      <number-counter />
      <div class="operation-container">
        <add-counter class="op-counter" />
        <remove-counter class="op-counter" />
      </div>
    </el-card>
  </div>
</template>

<script>
import NumberCounter from "@/components/NumberCounter.vue";
import AddCounter from "@/components/AddCounter.vue";
import RemoveCounter from "@/components/RemoveCounter.vue";

export default {
  name: "App",
  mounted() {
    console.log(`store : `, this.$store);
  },
  components: {
    NumberCounter,
    AddCounter,
    RemoveCounter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.op-counter {
  display: inline-block;
  margin: 0 0.2rem;
}

.box-card {
  width: 480px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
