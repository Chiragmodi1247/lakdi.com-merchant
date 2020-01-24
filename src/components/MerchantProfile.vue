<template>
  <div class="profile-box">
    <v-card style="border-radius: 15px;">
      <v-row class="cover-img">
        <v-col lg="10"> </v-col>
        <v-col lg="2">
            <div style="height: 20vh"></div>
          <button class="edit-profile"><h2>Edit Profile <span class="mdi mdi-account-edit"></span></h2></button>
        </v-col>
      </v-row>
      <v-row class="details-box">
        <v-col lg="4" class="details-info">
          <v-avatar class="my-avatar" size="200px">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-col>
        <v-col lg="6">
          <v-row>
            <h1>Chirag Modi</h1>
          </v-row>
          <v-row>
            <h2>Other basic details</h2>
          </v-row>
          <v-row>
            <h2>Address</h2>
          </v-row>
          <v-row>
            <h2>Payment details</h2>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MerchantProfile"
};
</script>

<style >
.edit-profile {
  background: rgb(0, 153, 255);
  padding: 10px;
  color: white;
  border-radius: 10px;
}

.cover-img {
  height: 30vh;
  background: rgb(62, 62, 121);
}
.details-box {
  height: 70vh;
  /* background: rgb(197, 197, 197); */
}
.my-avatar {
  top: -150px;
  margin-left: 50px;
}
</style>
