<template>
  <div class="product-list">
    <v-card
      class="title-card"
      style="background: rgb(70, 70, 202); color: white"
    >
      <v-row class="title-bar">
        <v-col lg="3">
          <h3>OrderId</h3>
        </v-col>
        <v-col lg="3">
          <h3>Product Name</h3>
        </v-col>
        <v-col lg="3">
          <h3>Quantity</h3>
        </v-col>
        <v-col lg="2">
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
        <v-col lg="3">
          {{ order.order_id }}
        </v-col>
        <v-col lg="3">
          {{ order.product_name }}
        </v-col>
        <v-col lg="3">
          {{ order.quantity }}
        </v-col>
        <v-col lg="2">
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
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        },
        {
          order_id: "vdg6278bvwejc6",
          quantity: 20,
          product_name: "Sofa 4 seater",
          date: "20 Feb 2019"
        }
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
