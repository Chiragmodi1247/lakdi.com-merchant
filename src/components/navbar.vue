<template>
  <v-card class="nav-card">
    <v-row>
      <v-col lg="2">
        <h2>Title</h2>
      </v-col>
      <v-col lg="6">
        <input
          v-model="search_input"
          class="search-input"
          type="text"
          placeholder="Search ex: iphone 6"
        />
        <button class="search-button" @click="search_product">Search</button>
      </v-col>
      <v-col lg="1">
      </v-col>
      <v-col lg="3">
        <button class="merchant-orders">Orders</button>
        <button class="add-product" @click="add_product">Add Product</button>
        <button class="merchant-profile">Profile</button>
      </v-col>
    </v-row>
  </v-card>

  <!-- <div class="nav-bar">
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
            <button class="add-product" @click="add_product">Add Product</button>
        </td>
        <td>
            <button class="merchant-profile">Profile</button>
        </td>
      </tr>
    </table>
  </div> -->
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
    },
    add_product: function() {
      this.$router.push("/addProduct");
    }
  }
};
</script>

<style>
.nav-card {
  text-align: center;
}
.title {
  margin: 10px;
}

.search-input {
  border: 1px solid rgb(85, 85, 255);
  padding: 2px 5px 2px 5px;
  border-radius: 10px;
  height: 25px;
  width: 40vw;
  margin-right: 20px;
}

.search-button {
  background: rgb(0, 153, 255);
  padding: 5px;
  border-radius: 5px;
}
.merchant-orders {
  background: rgb(209, 196, 14);
  padding: 5px;
  border-radius: 5px;
  margin-left: 2vw;
}
.merchant-profile {
  background: rgb(0, 255, 221);
  padding: 5px;
  border-radius: 5px;
  margin-left: 2vw;
}
.add-product {
  background: rgb(255, 145, 0);
  padding: 5px;
  border-radius: 5px;
  margin-left: 2vw;
}
</style>
