<template>
  <div>
    <div class="header">
      <navbar />
    </div>
    <div class="content-section">
      <router-view />
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    Navbar
  },

  data: () => ({
    //
  })
};
</script>

<style>
.header {
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0px;
}
.content-section {
  margin: 50px 0px 0px 0px;
}
</style>
