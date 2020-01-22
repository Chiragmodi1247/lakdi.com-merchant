<template>
  <v-card class="nav-card">
    <v-row>
      <v-col lg="1">
        <router-link to="/merchantHome">
            <h2>Title <span class="mdi mdi-home-outline"></span></h2>
        </router-link>
      </v-col>
      <v-col lg="7">
        <input
          v-model="search_input"
          class="search-input"
          type="text"
          placeholder="Search ex: Red sofa"
        />
        <button class="search-button" @click="search_product">
          <h3>Search <span class="mdi mdi-magnify"></span></h3>
        </button>
      </v-col>
      <v-col lg="4">
        <router-link to="/soldproducts">
          <button class="merchant-orders">
            <h3>Orders <span class="mdi mdi-cart-outline"></span></h3>
          </button>
        </router-link>
        <router-link to="/addProduct">
          <button class="add-product">
            <h3>Add Product <span class="mdi mdi-plus-box-outline"></span></h3>
          </button>
        </router-link>
        <router-link to="/profile">
          <button class="merchant-profile">
            <h3>Profile <span class="mdi mdi-account"></span></h3>
          </button>
        </router-link>
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
      this.search_input = "";
    }
  }
};
</script>

<style >
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
.home-btn {
  background: rgb(0, 153, 255);
  padding: 5px;
  color: white;
  border-radius: 5px;
}
.search-button {
  border: 1px solid black;
  /* background: rgb(0, 153, 255); */
  padding: 5px;
  /* color: white; */
  border-radius: 5px;
}
.merchant-orders {
  border: 1px solid black;
  /* background: rgb(209, 196, 14); */
  padding: 5px;
  /* color: white; */
  border-radius: 5px;
  margin-left: 2vw;
}
.merchant-profile {
  border: 1px solid black;
  /* background: rgb(103, 0, 187); */
  /* color: white; */
  padding: 5px;
  border-radius: 5px;
  margin-left: 2vw;
}
.add-product {
  border: 1px solid black;
  /* background: rgb(255, 145, 0); */
  /* color: white; */
  padding: 5px;
  border-radius: 5px;
  margin-left: 2vw;
}
</style>
