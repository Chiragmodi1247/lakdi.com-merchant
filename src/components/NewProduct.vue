<template>
  <div class="my_container">
    <div class="new_product_mar">
      <h2 style="color: white">Add Existing Product</h2>
      <v-row>
        <v-col lg="6" class="my_new_prod_name">
          <h3>Select Category:</h3>
        </v-col>
        <v-col lg="6">
          <select
            required
            @change="loadCategoryProducts"
            class="drop-down"
            v-model="selectedCategoryId"
          >
            <option
              v-for="(category, category_index) in categories"
              v-bind:key="category_index"
              :value="category.categoryId"
            >
              {{ category.categoryName }}
            </option>
          </select>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="6" class="my_new_prod_name">
          <h3>Select Product:</h3>
        </v-col>
        <v-col lg="6">
          <select
            required
            class="drop-down"
            v-model="existingProduct.productId"
          >
            <option
              v-for="(product1, product1_index) in categoryProducts"
              v-bind:key="product1_index"
              :value="product1.productId"
            >
              {{ product1.productName }}
            </option>
          </select>
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="6" class="my_new_prod_name">
          <h3>Quantity:</h3>
        </v-col>
        <v-col>
          <input
            required
            class="input-box"
            v-model="existingProduct.productQuantity"
            type="number"
            placeholder="Quantity"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="6" class="my_new_prod_name">
          <h3>Price:</h3>
        </v-col>
        <v-col lg="6">
          <input
            required
            class="input-box"
            v-model="existingProduct.productPrice"
            type="number"
            placeholder="price"
          />
        </v-col>
      </v-row>

      <div class="submit-cancel-btn">
        <button class="submit-btn" @click="addExistingProduct">
          Add Product
        </button>

        <router-link to="/">
          <button class="cancel_btn">
            Cancel
          </button>
        </router-link>
      </div>
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
          <h3>Product Id:</h3>
        </v-col>
        <v-col lg="6" class="my_new_prod_input">
          <input
            v-model="product.productId"
            type="text"
            placeholder="Product Id"
            class="input-box"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="6" class="my_new_prod_name">
          <h3>Catagory:</h3>
        </v-col>
        <v-col>
          <select class="drop-down" v-model="product.categoryId">
            <option
              v-for="(category, category_index) in categories"
              v-bind:key="category_index"
              :value="category.categoryId"
            >
              {{ category.categoryName }}
            </option>
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

      <router-link to="/">
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
      categories: [],
      selectedCategory: null,
      selectedCategoryId: "1",
      selectedProduct: null,
      selectedProductId: 0,
      categoryProducts: [],
      product1: null,
      existingProduct: {
        productId: null,
        productPrice: null,
        merchantId: "mer1",
        productQuantity: null
      },
      product: {
        productId: null,
        categoryId: "1",
        productName: null,
        imageUrl: null,
        productAttributes: { brandName: null, color: null, material: null },
        productDescription: null,
        productPrice: null,
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
      if (
        this.product.productName === null ||
        this.product.productId === null ||
        this.product.categoryId === null ||
        this.product.productAttributes.brandName === null ||
        this.product.productAttributes.color === null ||
        this.product.productAttributes.material === null ||
        this.product.imageUrl === null ||
        this.product.productDescription === null ||
        this.product.productPrice === null
      ) {
        alert("Please enter all fields");
        window.console.log("called from validation");
        return;
      }

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
          // if(res.status === 200)
        })
        .catch(function(res) {
          window.console.log(res);
        });
    },
    addExistingProduct: function() {
      if (
        this.existingProduct.productId === null ||
        this.existingProduct.productQuantity === null ||
        this.existingProduct.productPrice === null
      ) {
        alert("Please enter all fields");
        window.console.log("called from validation");
        return;
      }
      fetch("/addexisting/json", {
        // fetch("product/addProduct", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(this.existingProduct)
      })
        .then(function(res) {
          window.console.log(res);
          // if(res.status === 200)
        })
        .catch(function(res) {
          window.console.log(res);
        });
    },
    loadCategoryProducts: function() {
      fetch(
        "http://10.177.68.26:8080/product/getCategoryProducts/" +
          this.selectedCategoryId
      )
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          window.console.log("Selected Category: " + this.selectedCategoryId);
          this.categoryProducts = myJson.data;
          // this.category1 = myJson.data[0].categoryName;
          // window.console.log("Products: "+myJson.data);
        });
    }
  },
  created: function() {
    fetch("http://10.177.68.26:8080/product/getCategories")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.categories = myJson.data;
        this.selectedCategory = myJson.data[0].categoryName;
        this.selectedCategoryId = myJson.data[0].categoryId;
        // window.console.log("Categories: "+myJson.data);
      });

    fetch("http://10.177.68.26:8080/product/getCategoryProducts/1")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        window.console.log("Selected Category: " + this.selectedCategoryId);
        this.categoryProducts = myJson.data;
        // this.category1 = myJson.data[0].categoryName;
        // window.console.log("Products: "+myJson.data);
      });
  }
};
</script>

<style>
.new_product_mar {
  color: white;
  height: 300px;
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
