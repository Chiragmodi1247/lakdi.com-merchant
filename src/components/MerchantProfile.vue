<template>
  <div>
    <v-card>
      <v-row class="cover_img"> </v-row>
      <v-row class="details-box">
        <v-col lg="2">
          <v-avatar class="my-avatar" size="200px">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-col>
        <v-col lg="6" class="fields_box">
          <v-row>
            <v-col class="field_name">
              <h1>Name:</h1>
            </v-col>
            <v-col>
              <input
                type="text"
                v-model="mydata.merchantName"
                class="text_input"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="field_name">
              <h1>Contact number:</h1>
            </v-col>
            <v-col>
              <input
                type="tel"
                v-model="mydata.contact"
                id="tel_number"
                class="text_input"
                pattern="[0-9]{10}"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col class="field_name">
              <h1>Email:</h1>
            </v-col>
            <v-col>
              <input
                type="email"
                v-model="mydata.email"
                class="text_input"
                id="mer_email"
              />
            </v-col>
          </v-row>
          <br /><br /><br /><br />
          <v-row style="text-align: end">
            <v-col>
              <button class="edit_profile" @click="validateData">
                <h2>Save</h2>
              </button>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MerchantProfile",
  data: function() {
    return {
      mydata: {
        merchantName: "Chirag Modi",
        contact: "9320360696",
        email: "chirag.modi@coviam.com"
      }
    };
  },
  methods: {
    validateData: function() {
      let phoneno = /^\d{10}$/;
      let inputNumber = document.getElementById("tel_number");
      if (!inputNumber.value.match(phoneno)) {
        alert("Please add a valid number");
        return false;
      }
    }
  }
};
</script>

<style>
.fields_box {
  text-align: center;
}
.field_name {
  text-align: end;
}
.edit_profile {
  background: rgb(0, 153, 255);
  padding: 10px 40px 10px 40px;
  color: white;
  border-radius: 10px;
}
.text_input {
  font-size: 24pt;
  border: 1px solid blue;
  border-radius: 5px;
}
.cover_img {
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
