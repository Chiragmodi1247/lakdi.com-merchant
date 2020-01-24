<template>
  <div class="product-list">
    <v-card
      class="title-card"
      style="background: rgb(70, 70, 202); color: white"
    >
      <v-row class="title-bar">
        <v-col lg="4">
          <h3>Product Name</h3>
        </v-col>
        <v-col lg="4">
          <h3>Quantity</h3>
        </v-col>
        <v-col lg="4">
          <h3>Date</h3>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="title-card">
      <v-row
        class="title-bar"
        v-for="(order, index) in orders"
        v-bind:key="index"
      >
        <v-col lg="4">
          {{ order.productName }}
        </v-col>
        <v-col lg="4">
          {{ order.productQuantity }}
        </v-col>
        <v-col lg="4">
          {{ order.date }}
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SoldProducts",
  data: function() {
    return {
      orders: [
        {
          productQuantity: 2,
          productName: "Sofa 4 seater",
          date: "2020-01-21 10:05:46.487"
        },
        {
          productQuantity: 5,
          productName: "Sofa 4 seater",
          date: "2020-01-23 10:55:46.487"
        },
        {
          productQuantity: 11,
          productName: "Sofa 4 seater",
          date: "2020-01-23 12:05:46.487"
        },
        {
          productQuantity: 7,
          productName: "Sofa 4 seater",
          date: "2020-01-22 10:25:46.487"
        },
      ]
    };
  },
  created: function() {
    window.console.log("orders page created");
    fetch("https://api.github.com/users/Chiragmodi1247")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        window.console.log(myJson);
      });
  }
};
</script>

<style>
.product-list {
  margin-top: 60px;
}
.title-bar {
  text-align: center;
}
.title-card {
  max-width: 100%;
}
</style>
