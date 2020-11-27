<template>
  <div>
    <div class="container">
      <div class="card_container">
        <div class="card">
          <div class="low_quantity">Cherry</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentsSklad"
};
</script>

<style lang="scss" scoped>
.card_container {
  height: 10vh;
  width: 150px;
  margin: 10px;

  .card {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(
      45deg,
      rgba(128, 128, 128, 0.536),
      rgba(255, 171, 171, 0.53)
    );
    border-radius: 10px;
    box-shadow: 0 2px 5px pink;

    div {
      color: #fff;
      font-size: 2rem;
    }

    &::after {
      content: " ";
      height: 15px;
      width: 15px;
      background: rgba(255, 0, 0, 0.7);
      border-radius: 50%;
      position: absolute;
      top: -5px;
      right: -5px;
      box-shadow: 0 1px 3px gray;
      // display: none;
    }
  }
}
</style>