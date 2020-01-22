<template>
  <div class="my_container">
    <div class="new_product_mar">

    </div>
    <h2>Add New Product</h2>

    <v-card>
      <v-row>
        <v-col lg="6" class="my_new_prod_name">
          <h3>Product Name:</h3>
        </v-col>
        <v-col lg="6" class="my_new_prod_input">
          <input
            v-model="product.productName"
            type="text"
            placeholder="product name"
            class="input-box"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="6" class="my_new_prod_name">
          <h3>Catagory:</h3>
        </v-col>
        <v-col>
          <select class="drop-down">
            <option>Sofa</option>
            <option>Chair</option>
            <option>Bed</option>
            <option>Table</option>
            <option>Wardrobe</option>
          </select>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="6" class="my_new_prod_name">
          <h3>Brand Name:</h3>
        </v-col>
        <v-col>
          <input
            v-model="product.productAttributes.brandName"
            class="input-box"
            type="text"
            placeholder="brand name"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="6" class="my_new_prod_name">
          <h3>Color:</h3>
        </v-col>
        <v-col>
          <input
            v-model="product.productAttributes.color"
            class="input-box"
            type="text"
            placeholder="color"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="6" class="my_new_prod_name">
          <h3>Material:</h3>
        </v-col>
        <v-col>
          <input
            class="input-box"
            v-model="product.productAttributes.material"
            type="text"
            placeholder="material"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="6" class="my_new_prod_name">
          <h3>Image:</h3>
        </v-col>
        <v-col>
          <input
            class="input-box"
            type="text"
            v-model="product.imageUrl"
            placeholder="Image URL"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="6" class="my_new_prod_name">
          <h3>Product Description:</h3>
        </v-col>
        <v-col>
          <input
            class="input-box"
            v-model="product.productDescription"
            type="text"
            placeholder="Ex: 3 seater sofa"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="6" class="my_new_prod_name">
          <h3>Price:</h3>
        </v-col>
        <v-col>
          <input
            class="input-box"
            v-model="product.productPrice"
            type="number"
            placeholder="price"
          />
        </v-col>
      </v-row>
    </v-card>

    <!-- <table id="price_input">
      <tr>
        <td>
          <h3>Additional Attibutes:</h3>
        </td>
      </tr>
      <tr>
        <td>Key : <input type="text" class="input-box" id="keyinputbox" /></td>
        <td>
          Value : <input type="text" id="valueinputbox" class="input-box" />
        </td>
        <td>
          <button v-on:click="addInput" class="submit-btn">Add</button>
        </td>
      </tr>
    </table> -->

    <div class="submit-cancel-btn">
      <button class="submit-btn" @click="addProduct">
        Add Product
      </button>

<router-link to='/merchantHome'>
      <button class="cancel_btn">
        Cancel
      </button>
</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewProduct",
  data: function() {
    return {
      product: {
        productId: "123",
        categoryId: "1",
        productName: "",
        imageUrl: "",
        productAttributes: { brandName: "", color: "", material: "" },
        productDescription: "",
        productPrice: "",
        productDetailsDto: {
          merchantId: "mer1",
          productQuantity: "1"
        }
      }
    };
  },
  methods: {
    check_img: function() {
      let image = document.getElementById("output");
      image.src = this.image_url;
    },
    addInput: function() {
      let keyinput = document.getElementById("keyinputbox");
      let valueinput = document.getElementById("valueinputbox");
      if (keyinput.value !== "" && valueinput.value !== "") {
        this.product.productAttributes.push({
          key: keyinput.value,
          value: valueinput.value
        });
        keyinput.value = "";
        valueinput.value = "";
      }
    },
    addProduct: function() {
      //   window.console.log(this.product);

      fetch("http://10.177.68.26:8080/product/addProduct", {
      // fetch("product/addProduct", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(this.product)
      })
        .then(function(res) {
          window.console.log(res);
        })
        .catch(function(res) {
          window.console.log(res);
        });
    }
  }
};
</script>

<style>
.new_product_mar {
  height: 30vh;
  background: rgb(62, 62, 121);
}
.my_new_prod_name {
  text-align: end;
}
.my_new_prod_input {
  text-align: start;
}
.my_container {
  /* margin-left: 20px; */
  max-width: 100%;
}
.new-product {
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  /* margin-right: 50px; */
  /* padding: 30px 100px 0px 100px; */
}
.input-box {
  margin-left: 10px;
  /* width: 40vw; */
  border: 1px solid blue;
  border-radius: 5px;
}
.drop-down {
  border: 1px solid black;
}
.submit-cancel-btn {
  text-align: center;
}
.submit-btn {
  padding: 5px;
  margin: 10px 20px 10px 20px;
  background: rgb(70, 70, 202);
  border-radius: 4px;
  color: white;
}
.cancel_btn {
  padding: 5px;
  color: white;
  border-radius: 4px;
  margin: 10px 20px 10px 20px;
  background: rgb(255, 94, 45);
}
</style>
