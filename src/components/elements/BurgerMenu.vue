<template>
  <div class="header__burger-menu">
    <div class="top-line"></div>
    <div class="middle-line"></div>
    <div class="low-line"></div>
  </div>
</template>

<script>
export default {
  name: "BurgerMenu"
};
</script>

<style lang="scss" scoped>
.header__burger-menu {
  // border: 1px solid red;
  height: 15px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  div {
    width: 100%;
    height: 2px;
    background: gray;
  }
}
</style>