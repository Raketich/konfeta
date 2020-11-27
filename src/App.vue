<template>
  <div id="app">
    <Header />
    <!-- <Orders /> -->
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/PageParts/Header";
// import Orders from "@/views/Orders";

export default {
  name: "App",
  components: {
    Header
    // Orders
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  box-sizing: content-box;
  // background: gray;
  // position: relative;
}
</style>
