<template>
  <div>
    <div class="data">
      <v-row>
        <v-col lg="4">
          <v-row>
            <v-col>
              <h2>Total Product Sold</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h1 style="color: white">{{mySoldProduct}}</h1>
            </v-col>
          </v-row>
        </v-col>
        <v-col lg="2"> </v-col>
        <v-col lg="5">
          <Graph />
        </v-col>
      </v-row>
    </div>

    <div v-if="!isPresent" class="no_product_box">
      <h1>You don't have any added products</h1>
    </div>

    <div v-if="isPresent" class="products-box">
      <v-row>
        <v-col
          lg="3"
          v-for="(product, index) in products"
          v-bind:key="index"
          class="dummy-for-z"
        >
          <Product :product_prop="product" :showImage="showImage" />
        </v-col>
      </v-row>
    </div>
    <!-- <div class="modal-container-image" v-if="modalImageUrl">
     <p>My first modal</p>
     <v-img
          :src="modalImageUrl"
          :lazy-src="modalImageUrl"
          max-width="350"
          max-height="100"
          id="my_product_img1"
        ></v-img>
    </div> -->
  </div>
</template>

<script>
import Product from "../components/Product";
// import MerchantData from "../components/MerchantData";
import Graph from "../components/Graph";
export default {
  name: "merchantHome",
  data: function() {
    return {
      isPresent: true,
      modalImageUrl: "",
      products: [],
      mySoldProduct: null
    };
  },
  components: {
    Product,
    // MerchantData
    Graph
  },
  methods: {
    popup: function(index) {
      alert("U clicked on " + index);
    },
    showImage: function(url) {
      window.console.log("showImage url", url);
      this.modalImageUrl = url;
    },
    getSoldDetails: function() {
let that = this;
    fetch("/backend/merchant/get", {
      headers: {
        token: localStorage.getItem("myToken")
      },
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        if (myJson.success === false) alert("Error fetching profile");
        that.mySoldProduct = myJson.data.totalProductsSold;
      })
      .catch(function(err) {
        that.$router.push({ path: "/login" });
        alert("Error in login!");
        window.console.log("Error in merchant: " + err);
      }); 


    }
  },
  created: function() {
    let that = this;
    window.console.log("Merchant Home created");

    fetch("/backend/merchant/productdetails/merchantProduct", {
      headers: {
        "token": localStorage.getItem("myToken")
      },
      method: "GET"
    })
      .then(response => {
        window.console.log("Return from created merchanthome: "+ response);
        return response.json();
      })
      .then(myJson => {
        this.products = myJson.data;
        window.console.log("Return from created merchanthome"+ myJson.data);
      })
      .catch(function(error) {
        that.$router.push({ path: "/login" });
        alert("Error in login!");
        window.console.log("You can't log in because: " + error);
      });

setTimeout(that.getSoldDetails , 1000);

}
};
</script>

<style scoped>
.data {
  text-align: center;
  /* background: rgb(0, 0, 168); */
  background-image: linear-gradient(rgb(105, 29, 228), rgb(151, 151, 151));
  /* background: rgb(105, 29, 228); */
  height: 30vh;
  width: 100%;
}
.no_product_box {
  text-align: center;
  /* background-image: linear-gradient(rgb(151, 151, 151), white); */
}
.products-box {
  /* background: rgb(0, 0, 168); */
  padding: 50px;
  background-image: linear-gradient(rgb(151, 151, 151), white);
}
</style>
