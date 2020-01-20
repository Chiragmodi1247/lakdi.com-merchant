<template>
  <div class="card">
    <table>
      <tr>
        <td>
          <img class="img" src="../assets/red-chair.jpg" alt="Red-chair" />
        </td>
        <td>
          <h2>Cecelia Wing Chair in Red Colour by CasaCraft</h2>
          <tr>
            <td>
              <p>data 1</p>
            </td>
            <td>
              <p>data 1</p>
            </td>
            <td>
              <p>data 1</p>
            </td>
          </tr>
        </td>

        <td>
          <tr>
            <button class="change-quantity">Change Quantity</button>
          </tr>
          <tr>
            <button class="edit-product">Edit Product</button>
          </tr>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "product"
};
</script>

<style>
.card {
  margin: 20px;
  border: 1px solid black;
  max-width: 30vw;
}
.card:hover {
  box-shadow: 0px 5px 5px;
}

.img {
  margin: 10px;
  max-width: 50px;
}
.change-quantity {
  background: rgb(194, 174, 0);
  padding: 5px;
}
.edit-product {
  background: rgb(194, 174, 0);
  padding: 5px;
}
</style>
