<template>
  <v-card class="nav-card">
    <v-row>
      <v-col lg="1"></v-col>
      <v-col lg="1">
        <router-link to="/">
<<<<<<< HEAD
          <v-img
          max-height="40"
          max-width="80"
          src="../assets/lakdi-logo.png">
=======
          <v-img max-height="40" max-width="80" src="../assets/lakdi-logo.png">
>>>>>>> 3655715b3561e54956b65451696ec8574f5de97e
          </v-img>
        </router-link>
      </v-col>
      <v-col lg="6">
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
        <button class="merchant-orders" @click="logout">
          <h3>Logout <span class="mdi mdi-logout"></span></h3>
        </button>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "navbar",
  data: function() {
    return {
      search_input: "",
      isLoggedIn: this.$store.state.isLogged
    };
  },
  methods: {
    send() {
      // window.console.log("I am in send method")
      // window.console.log("My user logged?"+ this.$store.state.isLogged)
      this.$router.push({ path: "/login" });
    },
    search_product: function() {
      window.console.log("Product: " + this.search_input);
      this.search_input = "";
    },
    logout: function() {
      window.console.log("Logout clicked");
      let that = this;
      this.$store
        .dispatch("logoutUser")
        .then(function(res) {
          that.send();
          // this.$router.push({ path: "/" });
          window.console.log("res from logout dipatch " + res);
        })
        .catch(function(error) {
          window.console.log("Error in logout after dispatch: " + error);
        });
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
  font-size: 16pt;
  border: 1px solid rgb(85, 85, 255);
  padding: 2px 5px 2px 5px;
  border-radius: 10px;
  /* height: 25px; */
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
