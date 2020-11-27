<template>
  <div>
    <div class="container">
      <div class="main">
        <h1>Recepies</h1>
        <Recipe />
      </div>
    </div>
  </div>
</template>

<script>
import Recipe from "@/components/Recipe";

export default {
  name: "Recepies",
  components: {
    Recipe
  }
};
</script>

<style lang="scss" scoped>
</style>