<template>
  <div>
    <Searchbar />
    <h2>Recipe</h2>
    <div class="card-container">
      <div class="card">
        <div class="img">Here'll be an img</div>
        <section class="description">
          <h3>{{title}}</h3>
          <div class="description__text">
            <p>{{description}}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from "@/components/Searchbar";
export default {
  name: "Recipe",
  components: {
    Searchbar
  },
  data() {
    return {
      title: "Banana Strawberry",
      description: "One of the most popular cake."
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid red;
  width: 50%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-around;
  border-radius: 15px;
  box-shadow: 0 2px 10px pink;
  .img {
    height: 50%;
  }
  .description h3 {
    text-transform: uppercase;
    margin-bottom: 10px;
  }
}
</style>