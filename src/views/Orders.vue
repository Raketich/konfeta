<template>
  <div>
    <div class="container">
      <div class="main">
        <h1>Orders</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Orders"
};
</script>

<style lang="scss" scoped>
.container {
  // border: 1px solid red;
  width: calc(100% - 50px);
  margin: 0 auto;
  height: calc(100vh - 85px);

  .main {
    height: 100%;
    // border: 1px solid red;
    border-radius: 0 0 15px 15px;
    // box-shadow: 0px 1px 15px gray;
    background: mintcream;
  }
}
</style>