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
              <h1 style="color: white">30</h1>
            </v-col>
          </v-row>
        </v-col>
        <v-col lg="2">
        </v-col>
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
          <Product :product_prop="product" :showImage="showImage"/>
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
      modalImageUrl: '',
      products: [
        // {
        //   productId: "1",
        //   productName: "Red Sofa by Apple",
        //   productQuantity: 20,
        //   merchantPrice: 1999,
        //   imageUrl:
        //     "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        // },
        // {
        //   productId: "2",
        //   productName: "Red Sofa by Apple",
        //   productQuantity: 10,
        //   merchantPrice: 10000,
        //   imageUrl:
        //     "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        // },
        // {
        //   productId: "3",
        //   productName: "Red Sofa by Apple",
        //   productQuantity: 90,
        //   merchantPrice: 600,
        //   imageUrl:
        //     "https://images.unsplash.com/photo-1559066224-5d377095e655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        // },
        // {
        //   productId: "4",
        //   productName: "Red Sofa by Apple",
        //   productQuantity: 20,
        //   merchantPrice: 1999,
        //   imageUrl:
        //     "https://images.unsplash.com/photo-1507904953637-96429a46671a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        // },
        // {
        //   productId: "5",
        //   productName: "Red Sofa by Apple",
        //   productQuantity: 20,
        //   merchantPrice: 1999,
        //   imageUrl:
        //     "https://images.unsplash.com/photo-1545034210-264a82b4688b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        // },
        // {
        //   productId: "6",
        //   productName: "Red Sofa by Apple",
        //   productQuantity: 20,
        //   merchantPrice: 1999,
        //   imageUrl:
        //     "https://images.unsplash.com/photo-1559066224-5d377095e655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        // },
        // {
        //   productId: "7",
        //   productName: "Red Sofa by Apple",
        //   productQuantity: 20,
        //   merchantPrice: 1999,
        //   imageUrl:
        //     "https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        // },
        // {
        //   productId: "8",
        //   productName: "Red Sofa by Apple",
        //   productQuantity: 20,
        //   merchantPrice: 1999,
        //   imageUrl:
        //     "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        // },
        // {
        //   productId: "9",
        //   productName: "Red Sofa by Apple",
        //   productQuantity: 20,
        //   merchantPrice: 1999,
        //   imageUrl:
        //     "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        // },

      ]
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
    showImage: function(url){
      window.console.log('showImage url', url);
      this.modalImageUrl = url;
    }
  },
  created: function() {
    window.console.log("Merchant Home created");
      // window.console.log(this.products.length);
    // fetch("http://10.177.69.50:8762/spring-cloud-eureka-client-product/productdetails/merchantProduct/mer1")
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(myJson => {
    //   this.products = myJson.data;
    //   window.console.log(myJson.data);
    //   });
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
