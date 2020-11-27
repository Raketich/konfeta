<template>
  <div>
    <div class="container">
      <div class="main">
        <h3>Konfeta</h3>
        <p>I'm just your best friend</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
.container {
  // border: 1px solid red;
  width: calc(100% - 30px);

  margin: 0 auto;
  margin-top: 10px;
  //   height: calc(100vh - 65px);
  height: 88vh;

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    // border: 1px solid red;
    // border-radius: 0 0 15px 15px;
    border-radius: 15px;
    // box-shadow: 0px 1px 15px gray;
    background: rgb(255, 223, 144);
  }
}
</style>