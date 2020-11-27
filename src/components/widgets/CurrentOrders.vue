<template>
  <div>
    <div class="container">
      <div class="card_container">
        <div class="card">
          <div class="card__total_current_orders">5</div>
          <div class="card__soon_current_orders">2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentOrders"
};
</script>

<style lang="scss" scoped>
.card_container {
  height: 10vh;
  width: 150px;
  margin: 10px;

  .card {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(
      45deg,
      rgba(228, 227, 227, 0.536),
      rgba(164, 164, 164, 0.53)
    );
    border-radius: 10px;
    box-shadow: 0 2px 5px pink;

    div {
      color: #fff;
      font-size: 2rem;
    }
  }
}
</style>