<template>
  <v-card class="card">
    <v-row>
      <v-col lg="2">
        <img class="img" :src="product_prop.image_url" alt="Red-chair" />
      </v-col>
      <v-col lg="6">
        <v-row>
          <h3>{{ product_prop.product_name }}</h3>
        </v-row>
        <v-row>
          <v-col lg="6"> Qauntity: {{ product_prop.merchant_quantity }} </v-col>
          <v-col lg="6"> Price: {{ product_prop.merchant_price }} </v-col>
        </v-row>
      </v-col>
      <v-col class="my-buttons" lg="4">
        <v-row>
          <v-col lg="4">
            <input
              type="number"
              class="quantity-input"
              v-model="product.updatedQuantity"
            />
          </v-col>
          <v-col lg="8">
            <button @click="popup" class="change-quantity">
              <h3>Change Quantity</h3>
            </button>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="5">
            <input
              type="number"
              class="price-input"
              v-model="product.updatedPrice"
            />
          </v-col>
          <v-col lg="7">
            <button @click="popup" class="change-quantity">
              <h3>Change Price</h3>
            </button>
          </v-col>
        </v-row>
        <v-row>
          <button class="discontinue-btn">
            <h3>Discontinue Product</h3>
          </button>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "product",
  data: function() {
    return {
      product: {
        updatedQuantity: this.product_prop.merchant_quantity,
        updatedPrice: this.product_prop.merchant_price
      }
    };
  },
  props: {
    product_prop: Object
  },
  methods: {
    popup: function() {
      alert("You clicked me: " + this.product_prop.product_id);
    }
  }
};
</script>

<style>
.card {
  margin: 20px 20px 0px 20px;
  border: 1px solid black;
  max-width: 70vw;
}
.card:hover {
  box-shadow: 0px 5px 5px;
}

.img {
  margin: 10px;
  max-width: 100px;
}
.change-quantity {
  background: rgb(253, 228, 6);
  border-radius: 10px;
  box-shadow: 0px 0px 10px;
  padding: 5px;
  /* margin: 5px 0px 5px 25px; */
}
.quantity-input {
  max-width: 60px;
  margin: 5px;
  border: 1px solid blue;
  border-radius: 5px;
}
.price-input {
  max-width: 100px;
  margin: 5px;
  border: 1px solid blue;
  border-radius: 5px;
}
.edit-product {
  background: rgb(194, 174, 0);
  padding: 5px;
}
.discontinue-btn {
  background: rgb(221, 81, 57);
  border-radius: 10px;
  box-shadow: 0px 0px 10px;
  padding: 5px;
}
</style>
