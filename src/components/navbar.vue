<template>
  <v-card class="nav-card">
    <v-row>
      <v-col lg="2">
        <router-link to="/merchantHome"> <h2>Title</h2> </router-link>
      </v-col>
      <v-col lg="6">
        <input
          v-model="search_input"
          class="search-input"
          type="text"
          placeholder="Search ex: iphone 6"
        />
        <button class="search-button" @click="search_product">
          <h3>Search</h3>
        </button>
      </v-col>
      <v-col lg="1"> </v-col>
      <v-col lg="3">
        <router-link to="/soldproducts">
          <button class="merchant-orders"><h3>Orders</h3></button>
        </router-link>
        <router-link to="/addProduct">
          <button class="add-product"><h3>Add Product</h3></button>
        </router-link>
        <button class="merchant-profile"><h3>Profile</h3></button>
      </v-col>
    </v-row>
  </v-card>
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
      this.search_input = ""
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
  color: white;
  border-radius: 5px;
}
.merchant-orders {
  background: rgb(209, 196, 14);
  padding: 5px;
  color: white;
  border-radius: 5px;
  margin-left: 2vw;
}
.merchant-profile {
  background: rgb(0, 255, 221);
  color: white;
  padding: 5px;
  border-radius: 5px;
  margin-left: 2vw;
}
.add-product {
  background: rgb(255, 145, 0);
  color: white;
  padding: 5px;
  border-radius: 5px;
  margin-left: 2vw;
}
</style>
