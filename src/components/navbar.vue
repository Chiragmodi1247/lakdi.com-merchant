<template>
  <div class="nav-bar">
    <table>
      <tr>
        <td>
          <h2 class="title">Title</h2>
        </td>
        <td>
          <input
            v-model="search_input"
            class="search-input"
            type="text"
            placeholder="Search ex: iphone 6"
          />
        </td>
        <td>
          <button class="search-button" @click="search_product">Search</button>
        </td>
        <td>
            <button class="merchant-orders">Orders</button>
        </td>
        <td>
            <button class="merchant-profile">Profile</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data: function() {
    return {
      search_input: ""
    };
  },
  methods: {
    search_product: function() {
      window.console.log("Product: " + this.search_input);
    }
  }
};
</script>

<style>
.nav-bar {
  height: 7vh;
  border: 1px solid black;
  position: fixed;
  width: 100vW;
  /* background: rgb(81, 81, 243); */
}
.title {
  margin: 10px;
}

.search-input {
  border: 1px solid black;
  width: 50vw;
}

.search-button {
  background: blue;
}
.merchant-orders {
  background: blue;

}
.merchant-profile {
  background: blue;
color: white;
}
</style>
