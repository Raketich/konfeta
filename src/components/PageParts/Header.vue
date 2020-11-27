<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="header-logo">
          <router-link to="/">Logo</router-link>
        </div>
        <div class="burger" @click="showMenuState = !showMenuState">
          <BurgerMenu />
        </div>

        <!-- <div class="header__burger-menu" @click="showMenu = !showMenu">
          <div class="top-line"></div>
          <div class="middle-line"></div>
          <div class="low-line"></div>
        </div>-->
      </div>

      <Menu class="menu" :class="{active: !showMenuState}" />
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import BurgerMenu from "@/components/elements/BurgerMenu";

export default {
  name: "Header",
  components: {
    Menu,
    BurgerMenu
  },
  data() {
    return {
      showMenuState: false
    };
  }
};
</script>

<style lang="scss" scoped>
a {
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: 1.5rem;
}

.container {
  //   position: relative;
  //   border: 1px solid red;
  width: calc(100% - 30px);
  margin: 0 auto;
  margin-top: 10px;
  //   top: 10px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    // border-radius: 15px 15px 0 0;
    border-radius: 15px;
    background: pink;
    opacity: 0.5;
    // box-shadow: 0 0px 1px gray;

    // .header-logo a {
    //   text-decoration: none;
    //   text-transform: uppercase;
    //   font: #fff;
    // }

    // .header__burger-menu {
    //   // border: 1px solid red;
    //   height: 15px;
    //   width: 20px;
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: space-between;
    //   cursor: pointer;
    //   div {
    //     width: 100%;
    //     height: 2px;
    //     background: gray;
    //   }
    // }
  }
}

.menu {
  position: absolute;
  right: 10%;
  transition: transform 400ms ease, opacity 200ms ease;
}

.active {
  transform: translateY(0px);
  opacity: 0;
}
</style>