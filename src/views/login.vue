<template>
  <v-app id="inspire">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12" shaped>
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Login"
                  name="login"
                  v-model="user.name"
                  prepend-icon="person"
                  type="text"
                />

                <v-text-field
                  id="password"
                  label="Password"
                  v-model="user.password"
                  prepend-icon="lock"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-container fluid>
              <v-row align="center" justify="center">
                <router-link to="/merchantHome"
                  ><v-btn color="primary" @click="manualLogin">
                    Login
                  </v-btn></router-link
                >
              </v-row>
              <v-row align="center" justify="center">
                <p>
                  ---------------------------------------- or
                  ----------------------------------------
                </p>
              </v-row>
              <v-row align="center" justify="space-around">
                <!-- <v-btn color="accent" @click="googleAuth">Gmail</v-btn>
                <v-btn color="accent" @click="facebookAuth">Facebook</v-btn> -->
              </v-row>
              <v-row align="center" justify="center">
                <p>Don't have an account? <a href="">Create Account</a></p>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// import { facebookProvider, googleProvider, auth } from "../firebaseConfig";

export default {
  name: "home",
  components: {},
  data: function() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    manualLogin: function() {
      this.$store.dispatch("loginUser", this.user);
      // this.$router.push('/about')
    }
    // googleAuth: function() {
    //   auth
    //     .signInWithPopup(googleProvider)
    //     .then(function(result) {
    //       let token = result.credential.accessToken;
    //       let user = result.user;
    //       window.console.log("User: " + user);
    //       window.console.log("Token: " + token);
    //     })
    //     .catch(function(error) {
    //       window.console.log(error);
    //     });
    //   // alert("Hello "+ this.name)
    // },
    // facebookAuth: function() {
    //   auth
    //     .signInWithPopup(facebookProvider)
    //     .then(function(result) {
    //       let token = result.credential.accessToken;
    //       let user = result.user;
    //       window.console.log("User: " + user);
    //       window.console.log("Token: " + token);
    //     })
    //     .catch(function(error) {
    //       window.console.log(error);
    //     });
    //   // alert("Hello "+ this.name)
    // },

    // currentUser: function() {
    //   let user = auth.currentUser;
    //   window.console.log(user.email);
    // },
    // deleteUser: function() {
    //   let user = auth.currentUser;

    //   user.delete();
    // }
  },
  props: {
    source: String
  }
};
</script>
