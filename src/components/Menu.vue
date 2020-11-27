<template>
  <div>
    <div class="nav">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/orders">Orders</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/sklad">Sklad</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

.nav {
  margin-top: 10px;

  width: 20vh;
  background: rgba(128, 128, 128, 0.55);
  border-radius: 15px;

  ul {
    display: flex;
    align-items: center;

    flex-direction: column;
    list-style-type: none;

    li {
      cursor: pointer;
      padding: 15px 0;
      text-transform: uppercase;
      width: 100%;
      text-align: center;
      border-bottom: 1px solid rgba(128, 128, 128, 0.3);

      &:last-child {
        border-bottom: none;
      }
      a {
        text-decoration: none;
        color: #fff;
      }

      &:hover {
        color: rgb(255, 255, 255);
        background: rgba(128, 128, 128, 0.3);
      }
    }
  }
}
</style>