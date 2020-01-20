<template>
  <div>
    <h2>My Products</h2>
    <table>
      <tr v-for="(todo, order) in todos" v-bind:key="order">
        <td v-for="(todo, order) in todos" v-bind:key="order">
          <Product />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Product from "../components/Product";
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
    Product
  }
};
</script>
