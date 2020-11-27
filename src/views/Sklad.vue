<template>
  <div>
    <div class="container">
      <div class="main">
        <h3>Sklad</h3>
        <form action class="add-product" @submit.prevent="addNewProduct()">
          <input type="text" placeholder="Type your product" v-model="newProduct" />
        </form>
        <div class="products-list">
          <h3>List of products</h3>
          <ul>
            <li v-for="(product, index) in listOfProducts" :key="index">{{product}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sklad",
  data() {
    return {
      listOfProducts: ["muka"],
      newProduct: ""
    };
  },
  methods: {
    addNewProduct() {
      this.listOfProducts.push(this.newProduct);
      this.newProduct = "";
    }
  }
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
    background: rgb(139, 228, 255);
  }
}
</style>