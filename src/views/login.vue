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
                  <v-btn :disabled="!validOld" color="primary" @click="manualLogin">
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
                    ><v-btn :disabled="!validNew" color="primary" @click="registerNewUser">
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

      <!-- <v-snackbar
        v-model="snackbar"
        :bottom="y === 'bottom'"
        :color="color"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :right="x === 'right'"
        :timeout="timeout"
        :top="y === 'top'"
        :vertical="mode === 'vertical'"
      >
        {{ text }}
        <v-btn dark text @click="snackbar = false">
          Close
        </v-btn>
      </v-snackbar> -->
    </div>
  </div>
</template>

<script>
import { googleProvider, auth } from "../firebaseConfig";
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
      emptyDTO: {
        merchantId: "",
        name: "",
        email: ""
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
      ],
      color: "",
      mode: "",
      snackbar: this.$store.state.snakbar,
      text: "Hello, I'm a snackbar",
      timeout: 6000,
      x: null,
      y: "top"
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
    sendOldToken() {
      let that = this;
      auth.currentUser.getIdTokenResult(true).then(function(token) {
        window.console.log("Received token in get token: " + token.token);
        fetch("/backend/merchant/verify", {
          headers: {
            "token": token.token
          },
          method: "GET"
        })
          .then(response => {
            window.console.log("Verified merchant: "+ response.success)
            // // eslint-disable-next-line no-debugger
            // debugger
            return response.json();
          })
          .then(myJson => {
            // if (myJson.success === false) alert("Error fetching profile");
            // // eslint-disable-next-line no-debugger
            // debugger
            if(myJson.success){
              window.console.log("Success message: " + myJson.success);
              localStorage.setItem("myToken", token.token);
              that.send();
            }
            else{
              alert("You're not a merchant")
            }
          })
          .catch(function(error) {
            that.$router.push({ path: "/login" });
            alert("Error in login!");
            window.console.log("You can't log in because: " + error);
          });
      });
    },
    sendNewToken() {
      let that = this;
      auth.currentUser.getIdTokenResult(true).then(function(token) {
        window.console.log("Received token in get token: " + token.token);
        fetch("/backend/merchant/add", {
          headers: {
            "token": token.token,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(that.emptyDTO)
        })
          .then(response => {
            return response.json();
          })
          .then(myJson => {
            if (myJson.success === false) alert("Error fetching profile");
            window.console.log("Success message: " + myJson.success);
            localStorage.setItem("myToken", token.token);
            that.send();
          })
          .catch(function(error) {
            that.$router.push({ path: "/login" });
            alert("Error in login!");
            window.console.log("You can't log in because: " + error);
          });
      });
    },
    send() {
      window.console.log("In send method");
      this.$router.push({ path: "/" });
    },
    manualLogin: function() {
      let that = this;
      if (this.validOld) {
        window.console.log(
          "Email: " + this.user.email + " pass: " + this.user.password1
        );
        auth
          .signInWithEmailAndPassword(this.user.email, this.user.password1)
          .then(function(res) {
            window.console.log("res from firebase on existing user: " + res);
            that.sendOldToken();
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            window.console.log("Error code: " + errorCode);
            window.console.log("Error msg: " + errorMessage);
          });
      }
    },
    changeToRegistration: function() {
      this.forLogin = !this.forLogin;
    },
    registerNewUser: function() {
      let that = this;
      if (this.validNew) {
        window.console.log(
          "Email: " + this.user.email + " pass: " + this.user.password1
        );
        auth
          .createUserWithEmailAndPassword(this.user.email, this.user.password1)
          .then(function(res) {
            window.console.log("res from firebase on New user: " + res);
            that.sendNewToken();
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            window.console.log("Error code: " + errorCode);
            window.console.log("Error msg: " + errorMessage);
          });
      }
    },
    googleLog: function() {
      let that = this;
      auth
        .signInWithPopup(googleProvider)
        .then(function() {
          that.sendNewToken();
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          window.console.log(
            "Error in google provider: " +
              errorCode +
              errorMessage +
              email +
              credential
          );
        });
    }
  },
  props: {
    source: String
  }
};
</script>
