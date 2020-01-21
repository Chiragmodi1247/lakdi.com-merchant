<template>
  <div class="product-list">
    <v-card class="title-card" style="background: rgb(1, 132, 255);">
      <v-row class="title-bar">
        <v-col lg="3">
          OrderId
        </v-col>
        <v-col lg="3">
          Product Name
        </v-col>
        <v-col lg="3">
          Quantity
        </v-col>
        <v-col lg="2">
          Date
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
        }
      ]
    };
  }
};
</script>

<style>
.product-list {
  margin: 60px 0px 0px 20px;
}
.title-bar {
  text-align: center;
}
.title-card {
  max-width: 95vw;
}
</style>
