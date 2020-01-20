<template>
  <div>
    <h2>Add New Product</h2>
    <div class="new-product">
      <table id="price_input">
        <tr>
          <td>
            Product Name:
          </td>
          <td>
            <input
              v-model="product.productname"
              type="text"
              placeholder="product name"
              class="input-box"
            />
          </td>
        </tr>
        <tr>
          <td>
            Catagory:
          </td>
          <td>
            <select v-model="product.selected" class="drop-down">
              <option>Sofa</option>
              <option>Chair</option>
              <option>Bed</option>
              <option>Table</option>
              <option>Wardrobe</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            Brand Name:
          </td>
          <td>
            <input
              v-model="product.brandname"
              class="input-box"
              type="text"
              placeholder="brand name"
            />
          </td>
        </tr>

        <tr>
          <td>
            Color:
          </td>

          <td>
            <input
              v-model="product.color"
              class="input-box"
              type="text"
              placeholder="color"
            />
          </td>
        </tr>

        <tr>
          <td>
            Material:
          </td>
          <td>
            <input
              class="input-box"
              v-model="product.material"
              type="text"
              placeholder="material"
            />
          </td>
        </tr>

        <tr>
          <td>
            Image:
          </td>
          <td>
            <input
              class="input-box"
              type="text"
              v-model="product.imageurl"
              placeholder="Image URL"
            />
          </td>
        </tr>

        <tr>
          <td>
            Price:
          </td>
          <td>
            <input
              class="input-box"
              v-model="product.price"
              type="number"
              placeholder="price"
            />
          </td>
        </tr>
        <tr>
          <td>
            <h3>Additional Attibutes:</h3>
          </td>
        </tr>

        <tr>
          <td>
            Key : <input type="text" class="input-box" id="keyinputbox" />
          </td>
          <td>
            Value : <input type="text" id="valueinputbox" class="input-box" />
          </td>
          <td>
            <button v-on:click="addInput" class="submit-btn">Add</button>
          </td>
        </tr>

        <ul>
          <li v-for="(attr, index) in product.newAttr" v-bind:key="index">
            {{ attr.key }}: {{ attr.value }}
          </li>
        </ul>
      </table>

      <div class="submit-cancel-btn">
        <button class="submit-btn" @click="onSubmit">
          Save
        </button>

        <button class="cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewProduct",
  data: function() {
    return {
      product: {
        selected: "Sofa",
        productname: "",
        brandname: "",
        color: "",
        material: "",
        price: "",
        imageurl: "",
        newAttr: []
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
        this.product.newAttr.push({
          key: keyinput.value,
          value: valueinput.value
        });
        keyinput.value = "";
        valueinput.value = "";
      }
    },
    onSubmit: function() {
      //   window.console.log(this.product);

      fetch("/echo/json/", {
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
.new-product {
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 50px;
  padding: 30px 100px 0px 100px;
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
.cancel-btn {
  padding: 5px;
  color: white;
  border-radius: 4px;
  margin: 10px 20px 10px 20px;
  background: rgb(236, 214, 10);
}
</style>
