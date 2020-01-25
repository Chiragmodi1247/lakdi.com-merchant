<template>
  <div>
    <div v-if="forLogin">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12" shaped>
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="validOld">
                  <v-text-field
                    label="Email"
                    name="login"
                    v-model="user.email"
                    :rules="emailRules"
                    prepend-icon="person"
                    type="email"
                    required
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    v-model="user.password1"
                    prepend-icon="lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-container fluid>
                <v-row align="center" justify="center">
                  <v-btn color="primary" @click="manualLogin">
                    Login
                  </v-btn>
                </v-row>

                <v-row align="center" justify="center">
                  <v-col lg="6">
                    <v-btn color="red" @click="googleLog">
                     Login Using Google
                    </v-btn>
                  </v-col>
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
                  <p>
                    Don't have an account?
                    <a @click="changeToRegistration">Create Account</a>
                  </p>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div v-if="!forLogin">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12" shaped>
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Registration form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="validNew">
                  <v-text-field
                    label="Email"
                    name="login"
                    :rules="emailRules"
                    v-model="user.email"
                    prepend-icon="person"
                    type="email"
                    required
                  />

                  <v-text-field
                    id="password1"
                    label="Password"
                    v-model="user.password1"
                    prepend-icon="lock"
                    type="password"
                    :rules="[minPassword]"
                    validate-on-blur
                  />

                  <v-text-field
                    id="password2"
                    label="Confirm Password"
                    v-model="password2"
                    prepend-icon="lock"
                    type="password"
                    :rules="[comparePassword]"
                    validate-on-blur
                  />
                </v-form>
              </v-card-text>
              <v-container fluid>
                <v-row align="center" justify="center">
                  <router-link to="/"
                    ><v-btn color="primary" @click="registerNewUser">
                      Register
                    </v-btn></router-link
                  >
                </v-row>
                <v-row align="center" justify="space-around">
                  <!-- <v-btn color="accent" @click="googleAuth">Gmail</v-btn>
                <v-btn color="accent" @click="facebookAuth">Facebook</v-btn> -->
                </v-row>
                <v-row align="center" justify="center">
                  <p>
                    Already have an account?
                    <a @click="changeToRegistration">Log in</a>
                  </p>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
// import { facebookProvider, googleProvider, auth } from "../firebaseConfig";
// import {auth} from '../firebaseConfig'
// import router from "../router/index";
export default {
  name: "home",
  components: {},
  data: function() {
    return {
      validNew: false,
      validOld: false,
      user: {
        email: "",
        password1: ""
      },
      password2: "",
      forLogin: true,
      minPasswordInput: "true",
      emailRules: [
        v =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
        v => !!v || "Field can not be empty"
      ]
    };
  },
  computed: {
    comparePassword() {
      return this.password2 !== this.user.password1
        ? "Passwords do not match"
        : true;
    },
    minPassword() {
      return this.user.password1.length < 6
        ? "Password must be 8 char long"
        : true;
    }
  },
  methods: {
    send() {
      // window.console.log("I am in send method")
      // window.console.log("My user logged?"+ this.$store.state.isLogged)
      this.$router.push({ path: "/" });
    },
    manualLogin: function() {
      if (this.validOld) {
        this.$store
          .dispatch("loginUser", this.user)
          .then(function(res) {
            // router.push({ path: "/" });
            window.console.log("res from actions dispatch return " + res);
          })
          .catch(function(error) {
            window.console.log(
              "Error in manually login after dispatch: " + error
            );
          });
      }
    },
    changeToRegistration: function() {
      this.forLogin = !this.forLogin;
    },
    registerNewUser: function() {
      if (this.validNew) {
        this.$store.dispatch("createNewUser", this.user);
        // auth.createUserWithEmailAndPassword(this.user.email, this.user.password1)
        // window.console.log("Email:"+this.user.email+" Password: "+ this.user.password1)
      }

      // this.$store.dispatch("createNewUser", this.user);

      // window.console.log("New user registered");
    },
    googleLog: function() {
      let that = this;
      this.$store
        .dispatch("googleauth")
        .then(function(res) {
          that.send();
          // this.$router.push({ path: "/" });
          window.console.log("res from googlelog dispatch return " + res);
        })
        .catch(function(error) {
          window.console.log("Error in google login after dispatch: " + error);
        });
    },
    facebookLog: function() {
      this.$store
        .dispatch("fbAuth")
        .then(function(res) {
          // router.push({ path: "/merchantHome" });
          window.console.log("res from fblog dispatch return " + res);
        })
        .catch(function(error) {
          window.console.log("Error in fb login after dispatch: " + error);
        });
    }
  },
  props: {
    source: String
  }
};
</script>
