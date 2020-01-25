<template>
  <div>
    <div class="header">
      <Navbar />
    </div>
    <div class="content-section">
      <v-app id="inspire">
        <router-view />
      </v-app>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import Navbar from "./components/navbar";

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
  z-index: 100;
}
.content-section {
  margin: 55px 0px 0px 0px;
}
</style>
