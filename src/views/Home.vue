<template>
  <div>
    <div class="container">
      <div class="main">
        <h3>Home Screen</h3>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss" scoped>
.container {
  // border: 1px solid red;
  width: calc(100% - 30px);
  margin: 0 auto;
  height: calc(100vh - 65px);

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    // border: 1px solid red;
    border-radius: 0 0 15px 15px;
    // box-shadow: 0px 1px 15px gray;
    background: rgb(255, 208, 241);
  }
}
</style>
