<template>
  <div>
    <div class="container">
      <CurrentOrders />
      <CurrentSklad />
    </div>
  </div>
</template>

<script>
import CurrentOrders from "@/components/widgets/CurrentOrders";
import CurrentSklad from "@/components/widgets/CurrentSklad";

export default {
  name: "Dashboard",
  components: {
    CurrentOrders,
    CurrentSklad
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>