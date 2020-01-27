<template>
  <div>
    <v-card loading="true">
      <v-row>
        <v-col>
          <v-img
            :src="product_prop.imageUrl"
            :lazy-src="product_prop.imageUrl"
            max-width="350"
            max-height="150"
          >
          </v-img>
          <div style="text-align: center; font-weight: bold;">
            {{ product_prop.productName }}
          </div>
        </v-col>
      </v-row>

      <!-- <v-row class="my_graph">
        <v-col lg="6">
          <ProductGraph />
        </v-col>
      </v-row> -->

      <v-row style="text-align: center;">
        <v-row>
          <v-col lg="6">
            Qauntity:
            <input
              type="number"
              class="quantity-input"
              v-model="updatedProduct.productQuantity"
            />
          </v-col>
          <v-col lg="6">
            Price:
            <input
              type="number"
              class="price-input"
              v-model="updatedProduct.productPrice"
            />
          </v-col>
        </v-row>
      </v-row>
    </v-card>
    <div class="up_btn_box">
      <button @click="updateProduct" class="update_button">
        <h3>Update Product</h3>
      </button>
    </div>
    <div class="dis_btn_box">
      <button @click="discontinueProduct" class="discontinue_button">
        <h3>Discontinue This Product</h3>
      </button>
    </div>
  </div>
</template>

<script>
// import ProductGraph from "../components/Graph";
export default {
  name: "product",
  components: {
    // ProductGraph
  },
  data: function() {
    return {
      updatedProduct: {
        productQuantity: this.product_prop.productQuantity,
        productPrice: this.product_prop.productPrice,
        merchantId: this.$store.state.merchantId,
        productId: this.product_prop.productId
      },
      DisconituedProductDetails: {
        merchantId: this.$store.state.merchantId,
        productId: this.product_prop.productId
      }
    };
  },
  props: {
    product_prop: Object,
    showImage: Function
  },
  methods: {
    popup: function() {
      alert("You clicked me: " + this.product_prop.productId);
    },
    showProductimage: function(url) {
      window.console.log("showProductimage url", url);
      this.showImage(url);
    },
    updateProduct: function() {
      // alert(
      //   "Your product " + this.product_prop.productName + " has been updated."
      // );
      window.console.log(this.updatedProduct);
      if(this.updatedProduct.productQuantity < 1 || this.updatedProduct.productPrice < 1){
        alert("Please add number greater than zero!!")
        return;
      }
        fetch("/backend/merchant/productdetails/update", {
        headers: {
          "token": localStorage.getItem("myToken"),
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(this.updatedProduct)
      })
        .then(function(res) {
          window.console.log(res);
        })
        .catch(function(res) {
          window.console.log(res);
        });
    },
    discontinueProduct: function() {
      window.console.log("ProductId to remove: "+ this.DisconituedProductDetails.productId)
      fetch("/backend/merchant/productdetails/remove", {
        headers: {
          "token": localStorage.getItem("myToken"),
          "Content-Type": "application/json"
        },
        method: "DELETE",
        body: JSON.stringify(this.DisconituedProductDetails)
      })
        .then(function(res) {
          window.console.log(res);
        })
        .catch(function(res) {
          window.console.log("Error in discontinue: "+res);
        });
    }
  }
};
</script>

<style>
.my_graph {
    border: 1px solid black;
    color: black;
}
.change-quantity {
  border: 1px solid black;
  /* background: rgb(0, 153, 255); */
  padding: 5px;
  /* color: white; */
  border-radius: 5px;

  /* background: rgb(253, 228, 6);
  border-radius: 10px;
  box-shadow: 0px 0px 10px;
  padding: 5px; */
  /* margin: 5px 0px 5px 25px; */
}
.dis_btn_box {
  text-align: center;
  background: rgb(255, 94, 45);
}
.up_btn_box {
  text-align: center;
  background: rgb(45, 101, 255);
}
.discontinue_button {
  /* border: 1px solid black; */
  /* background: rgb(0, 153, 255); */
  padding: 5px;
  /* color: white; */
  border-radius: 5px;
  /* text-align: center; */
  /* background: rgb(255, 94, 45); */
  color: white;
}
.quantity-input {
  max-width: 40px;
  margin: 5px;
  border: 1px solid blue;
  border-radius: 5px;
}
.price-input {
  max-width: 70px;
  margin: 5px;
  border: 1px solid blue;
  border-radius: 5px;
}
.edit-product {
  background: rgb(194, 174, 0);
  padding: 5px;
}
.update_button {
  padding: 5px;
  border-radius: 5px;
  color: white;
}
</style>
