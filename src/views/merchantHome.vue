<template>
  <div class="product_box">
    <div class="split_left">
      <h2 class="myProduct">My Products</h2>
      <div v-for="(product, index) in products" v-bind:key="index">
        <Product :product_prop="product" />
      </div>
      <br /><br /><br /><br />
    </div>
    <div class="split_right">
      <!-- <div class="myGraph">
        <Graph />
      </div> -->
      <MerchantData />
    </div>
  </div>
</template>

<script>
import Product from "../components/Product";
import MerchantData from "../components/MerchantData";
// import Graph from '../components/Graph'
export default {
  name: "merchantHome",
  data: function() {
    return {
      products: [
        {
          product_id: "1",
          product_name: "Cecelia Wing Chair in Red Colour by CasaCraft",
          merchant_quantity: 20,
          merchant_price: 1999,
          image_url:
            "https://ii1.pepperfry.com/media/catalog/product/c/e/800x880/cecelia-wing-chair-in-red-colour-by-casacraft-cecelia-wing-chair-in-red-colour-by-casacraft-zhafeq.jpg"
        },
        {
          product_id: "2",
          product_name: "Cecelia by CasaCraft",
          merchant_quantity: 24,
          merchant_price: 1599,
          image_url:
            "https://ii1.pepperfry.com/media/catalog/product/c/e/800x880/cecelia-wing-chair-in-red-colour-by-casacraft-cecelia-wing-chair-in-red-colour-by-casacraft-zhafeq.jpg"
        },
        {
          product_id: "trh6s748ud",
          product_name: "Cecelia Wing Chair in Red Colour by CasaCraft",
          merchant_quantity: 20,
          merchant_price: 1999,
          image_url:
            "https://ii1.pepperfry.com/media/catalog/product/c/e/800x880/cecelia-wing-chair-in-red-colour-by-casacraft-cecelia-wing-chair-in-red-colour-by-casacraft-zhafeq.jpg"
        },
        {
          product_id: "trh6s748ud",
          product_name: "Cecelia Wing Chair in Red Colour by CasaCraft",
          merchant_quantity: 20,
          merchant_price: 1999,
          image_url:
            "https://ii1.pepperfry.com/media/catalog/product/c/e/800x880/cecelia-wing-chair-in-red-colour-by-casacraft-cecelia-wing-chair-in-red-colour-by-casacraft-zhafeq.jpg"
        },
        {
          product_id: "trh6s748ud",
          product_name: "Cecelia Wing Chair in Red Colour by CasaCraft",
          merchant_quantity: 20,
          merchant_price: 1999,
          image_url:
            "https://ii1.pepperfry.com/media/catalog/product/c/e/800x880/cecelia-wing-chair-in-red-colour-by-casacraft-cecelia-wing-chair-in-red-colour-by-casacraft-zhafeq.jpg"
        },
        {
          product_id: "trh6s748ud",
          product_name: "Cecelia Wing Chair in Red Colour by CasaCraft",
          merchant_quantity: 20,
          merchant_price: 1999,
          image_url:
            "https://ii1.pepperfry.com/media/catalog/product/c/e/800x880/cecelia-wing-chair-in-red-colour-by-casacraft-cecelia-wing-chair-in-red-colour-by-casacraft-zhafeq.jpg"
        },
        {
          product_id: "trh6s748ud",
          product_name: "Cecelia Wing Chair in Red Colour by CasaCraft",
          merchant_quantity: 20,
          merchant_price: 1999,
          image_url:
            "https://ii1.pepperfry.com/media/catalog/product/c/e/800x880/cecelia-wing-chair-in-red-colour-by-casacraft-cecelia-wing-chair-in-red-colour-by-casacraft-zhafeq.jpg"
        },
        {
          product_id: "trh6s748ud",
          product_name: "Cecelia Wing Chair in Red Colour by CasaCraft",
          merchant_quantity: 20,
          merchant_price: 1999,
          image_url:
            "https://ii1.pepperfry.com/media/catalog/product/c/e/800x880/cecelia-wing-chair-in-red-colour-by-casacraft-cecelia-wing-chair-in-red-colour-by-casacraft-zhafeq.jpg"
        }
      ]
    };
  },
  components: {
    Product,
    MerchantData
    // Graph
  },
  methods: {
    popup: function(index) {
      alert("U clicked on " + index);
    }
  },
  created: function() {
    window.console.log("Merchant Home created");
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
.myProduct {
  margin-left: 20px;
  color: white;
}
.split_left {
  height: 100%;
  width: 60%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  margin-top: 55px;
  background: rgb(141, 141, 230);
}

.split_right {
  height: 100%;
  width: 40%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  margin-top: 55px;
  /* background: rgb(190, 151, 23); */
}
.myGraph {
  border: 1px solid black;
  margin: 20px;
}
</style>
