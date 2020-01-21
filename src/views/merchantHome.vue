<template>
  <div class="product_box">
    <div class="split_left">
    <h2 class="myProduct">My Products</h2>
      <div v-for="(todo, order) in todos" v-bind:key="order">
          <Product />
          <Product />
          <Product />
      </div>
    </div>
    <div class="split_right">
      <MerchantData />
    </div>
  </div>
</template>

<script>
import Product from "../components/Product";
import MerchantData from '../components/MerchantData'
export default {
  name: "merchantHome",
  data: function() {
    return {
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" }
      ]
    };
  },
  components: {
    Product,
    MerchantData
  }
};
</script>


<style>
.myProduct {
  margin-left: 20px;
  color: white; 
}
.product_box {
  border-right: 5px solid black;
  max-width: 70vw;
  background: rgb(141, 141, 230);
}
.split_left {
  height: 100%;
  width: 70%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  margin-top: 55px;
  background: rgb(141, 141, 230);
}

.split_right {
  height: 100%;
  width: 30%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  margin-top: 55px;
  background: rgb(141, 141, 230);
}
</style>